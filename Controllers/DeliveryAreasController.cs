using Aggregate_Direct_ShiaHill.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using Aggregate_Direct_ShiaHill.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Aggregate_Direct_ShiaHill.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   
    public class DeliveryAreasController : ControllerBase
    {
        //instantiate the Repository in the controller by DI
        private ShiaHillDbContext _context;
        public DeliveryAreasController(ShiaHillDbContext context)
        {
            this._context = context;
        }
        // GET: api/<DeliveryAreasController>
        [HttpGet]
        public IEnumerable<DeliveryAreas> Get()
        {
            return this._context.DeliveryAreas.ToList();
        }

        // GET api/<DeliveryAreasController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DeliveryAreasController>
        [HttpPost]
        public void Post([FromBody] DeliveryAreas model)
        {
            this._context.DeliveryAreas.Add(model);
            this._context.SaveChanges();
        }

        // PUT api/<DeliveryAreasController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DeliveryAreasController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
