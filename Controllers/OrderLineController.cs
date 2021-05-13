using Aggregate_Direct_ShiaHill.Entities;
using Aggregate_Direct_ShiaHill.Repository;
using Aggregate_Direct_ShiaHill.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Aggregate_Direct_ShiaHill.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderLineController : ControllerBase
    {
        private readonly ShiaHillDbContext _cxt;
        private readonly ILogger<OrderLineController> _logger;
        private readonly IMapper _mapper;
        private readonly LinkGenerator _linkGenerator;

        public OrderLineController(
            ShiaHillDbContext context,
            ILogger<OrderLineController> logger,
            IMapper mapper,
            LinkGenerator linkGenerator
            )
        {
            this._cxt = context;
            this._logger = logger;
            this._mapper = mapper;
            this._linkGenerator = linkGenerator;
        }
        [HttpGet]
        public IActionResult Get(string orderId)
        {
            var result = _cxt.Orders.Include(o => o.OrderLines)
                .Where(o => o.CustomerID.Equals(orderId));
            return Ok(result);

        }
        [HttpPost("{id}")]
        public IActionResult Post(string id, [FromBody] object viewModel)
        {
            try
            {
                if (viewModel == null)
                {
                    return BadRequest("You have not selected any items");
                }
                var options = new JsonSerializerOptions() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

                var jsondata = JsonSerializer.Deserialize<Dictionary<string, string>>(viewModel.ToString());
                //var id = viewModel.OrderID;
                var order = _cxt.Orders.Where(o => o.CustomerID.Equals(id)).FirstOrDefault();
                List<OrderLine> itemList = new List<OrderLine>();

                foreach (KeyValuePair<string, string> kvp in (Dictionary<string, string>)jsondata)
                {
                    OrderLine ol = new OrderLine
                    {
                        OrdersID = order.ID,
                        Quantity = int.Parse(kvp.Value),
                        ProductID = new Guid(kvp.Key)

                    };
                    itemList.Add(ol);
                }
                this._cxt.OrderLines.AddRange(itemList);
                if (this._cxt.SaveChanges() > 0)
                {
                    List<CustomerOrderLineViewModel>
                        customerOrderLines  = new List<CustomerOrderLineViewModel>();
                   
                    var returnOrder = this._cxt.OrderLines.Include(l => l.Product)
                        .Where(o => o.OrdersID == order.ID).ToList();
                    foreach(var p in returnOrder)
                    {
                        customerOrderLines.Add(new CustomerOrderLineViewModel
                        {
                          ProductName = p.Product.ProductName,
                          Quantity = p.Quantity,
                          Weight = p.Quantity * p.Product.WeightPerUnit,
                          ProductPrice = (double) p.Product.Price * p.Quantity
                        });
                    }

                    return this.Created($"/api/OrderLines/{order.CustomerID}", customerOrderLines);
                }
                else
                {
                    return StatusCode(StatusCodes.Status500InternalServerError);
                }

            }
            catch
            {
                return BadRequest();
            }



        }
    }  
    }
    

