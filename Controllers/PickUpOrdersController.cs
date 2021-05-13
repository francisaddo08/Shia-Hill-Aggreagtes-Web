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
    public class PickUpOrdersController : ControllerBase
    {
        private readonly ShiaHillDbContext _cxt;
        private readonly ILogger _logger;
        private readonly IMapper _mapper;
      

        public PickUpOrdersController(
            ShiaHillDbContext context, 
            ILogger<PickUpOrdersController> logger,
            IMapper mapper
            )
        {
            this._cxt = context;
            this._logger = logger;
            this._mapper = mapper;

        }
        // GET: api/<PickUpOrdersController>
        [HttpGet]
        public  IActionResult Get()
        {
            string ts = "Pick Up Orders";
            var result = this._cxt.Orders.Where(t => t.OrderType.Contains(ts));
            return Ok(result);
        }

        // GET api/<PickUpOrdersController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PickUpOrdersController>
        [HttpPost]
        public  IActionResult Post([FromBody] OrdersViewModel order)
        {
            this._cxt.Orders.Add(new Orders
            {
                CustomerID = order.OrderID,
                CustomerName = order.CustomerName,
                MoMoProvider = order.MoMoProvider,
                MoMoNumber = order.MoMoNumber,
                OrderDate = order.OrderDate,
                OrderType = order.OrderType,
                CollectionDate = order.CollectionDate,
                SubTotal = order.SubTotal

            });
               this._cxt.SaveChanges();
            var vm = new OrdersViewModel();
            

            return Created($"/api/Orders/{order.OrderID}", order);

            //try
            //{
            //    if (ModelState.IsValid)
            //    {
            //        var newOrder =  this._mapper.Map<OrdersViewModel, Orders>(order);
            //        this._cxt.Orders.Add(newOrder);
            //        if (this._cxt.SaveChanges() > 0) 
            //        {
            //            return Ok(newOrder); //Created($"/api/orders/{newOrder.CustomerID}", _mapper.Map<Orders, OrdersViewModel>(newOrder));
            //        }
            //        return BadRequest(ModelState);
            //    }
            //    else
            //    {
            //        return this.BadRequest(ModelState);
            //    }

            //}
            //catch (Exception ex)
            //{
            //    return this.Ok();
            //}
           

        }

        // PUT api/<PickUpOrdersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PickUpOrdersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
