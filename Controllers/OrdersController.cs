using Aggregate_Direct_ShiaHill.Entities;
using Aggregate_Direct_ShiaHill.Repository;
using Aggregate_Direct_ShiaHill.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Aggregate_Direct_ShiaHill.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly IMapper _mapper;
        private readonly ShiaHillDbContext _cxt;


        public OrdersController(
            ShiaHillDbContext context, 
            ILogger<OrdersController> logger,
            IMapper mapper
            
            )
        {
            this._logger = logger;
            this._mapper = mapper;
            this._cxt = context;
        }
        // GET: api/<OrdersController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "order1", "value2" };
        }

        // GET api/<OrdersController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<OrdersController>
        [HttpPost]
        public IActionResult Post([FromBody] OrdersViewModel order)
        {
             //string c = DateTime.Now.ToFileTime().ToString();
            var o = new Orders();
            o.CustomerID = order.OrderID;
            o.CustomerName = order.CustomerName;
            o.MoMoProvider = order.MoMoProvider;
            o.MoMoNumber = order.MoMoNumber;
            o.OrderDate = DateTime.Now.ToShortDateString();
            o.OrderType = order.OrderType;
            o.CollectionDate = order.CollectionDate;
            o.SubTotal = order.SubTotal;

            //this._cxt.Orders.Add(new Orders
            //{
            //    CustomerID = DateTime.Now.ToFileTime().ToString(),
            //    CustomerName = order.CustomerName,
            //    MoMoProvider = order.MoMoProvider,
            //    MoMoNumber = order.MoMoNumber,
            //    OrderDate = DateTime.Now.ToShortDateString(),
            //    OrderType = order.OrderType,
            //    CollectionDate = order.CollectionDate,
            //    SubTotal = order.SubTotal

            //}) ; 
            this._cxt.Orders.Add(o);

            if (this._cxt.SaveChanges() > 0)
            {
                var vm = new CustomerOrderViewModel();
                vm.CustomerID = o.CustomerID;
                vm.OrderDate = o.OrderDate;
                vm.CustomerName = o.CustomerName;
                vm.CollectionDate = o.CollectionDate;
                vm.OrderType = o.OrderType;
                vm.SubTotal = o.SubTotal;



                return Created($"/api/Orders/{order.OrderID}", vm);
            }






            return BadRequest(this.StatusCode(500, "Your Order Could not be saved"));





            //try
            //{
            //    var newOrder = this._mapper.Map<OrdersViewModel, Orders>(order);
            //    this._cxt.Orders.Add(newOrder);
            //   if( this._cxt.SaveChanges() > 0)
            //    {
            //        return Created($"/api/Orders", this._mapper.Map<Orders, OrdersViewModel>(newOrder));
            //    }
            //    else
            //    {
            //        return BadRequest(ModelState);
            //    }

            //}
            //catch
            //{
            //    return BadRequest("Bad request");
            //}

        }

        // PUT api/<OrdersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<OrdersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
