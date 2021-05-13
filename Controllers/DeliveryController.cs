using Aggregate_Direct_ShiaHill.Entities;
using Aggregate_Direct_ShiaHill.Repository;
using Aggregate_Direct_ShiaHill.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
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
    public class DeliveryController : ControllerBase
    {
        private ShiaHillDbContext _cxt;
        private ILogger<DeliveryController> _logger;
        private IMapper _mapper;
        private LinkGenerator _linkGenerator;

        public DeliveryController(
         ShiaHillDbContext context,
         ILogger<DeliveryController> logger,
         IMapper mapper,
         LinkGenerator linkGenerator
         )
        {
            this._cxt = context;
            this._logger = logger;
            this._mapper = mapper;
            this._linkGenerator = linkGenerator;
        }
        // GET: api/<DeliveryController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<DeliveryController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST a90pi/<DeliveryController>
        [HttpPost("{orderID}")]
        public IActionResult Post(string orderID, [FromBody] DeliveryViewModel order)
        {
            try
            {
                
                if (ModelState.IsValid)
                {
                    var entityOrderID = this._cxt.Orders
                    .Where(o => o.CustomerID.Equals(orderID))
                    .FirstOrDefault().ID;

                    var entityDeliveryArea = this._cxt.DeliveryAreas
                        .Where(d => d.Region.Contains(order.Region)
                        && d.District.Contains(order.District))
                        .FirstOrDefault();

                    var entityTranspostCost = new TransportCost();

                    if(order.Weight < 500)
                    {
                         entityTranspostCost = this._cxt.TransportCost.Where(o => o.Payload == 500).FirstOrDefault();

                    }else if (order.Weight > 500 && order.Weight < 1000)
                    {
                        entityTranspostCost = this._cxt.TransportCost.Where(o => o.Payload == 1000).FirstOrDefault();
                    }
                    else
                    {
                        entityTranspostCost = this._cxt.TransportCost.Where(o => o.Payload == 2000).FirstOrDefault();
                    }

                    this._cxt.Deliveries.Add(new Delivery
                    {
                        OrderID = entityOrderID,
                        TransportCostID = entityTranspostCost.ID,
                        DeliveryAreaID = entityDeliveryArea.ID,
                        Weight = order.Weight,
                        DeliveryCost = order.cost,
                        



                    }) ;
                   if(this._cxt.SaveChanges() > 0)
                    {

                        var d = new CustomerDeliveryView();
                        d.Region = order.Region;
                        d.District = order.District;
                        d.DeliveryCost = order.cost;
                            
                        d.Weight = order.Weight;
                        return Created($"api/Delivery/{orderID}", d);
                    }
                    else
                    {
                        return BadRequest("You Order Could not be saved");
                    }


                    
                }
                else
                {
                    return BadRequest("You Order Could not be saved");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // PUT api/<DeliveryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DeliveryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
