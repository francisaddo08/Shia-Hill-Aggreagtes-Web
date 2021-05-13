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
    public class DeliveryDaysAvaliableController : ControllerBase
    {
        //instantiate the Repository in the controller by DI
        private ShiaHillDbContext _context;
        public DeliveryDaysAvaliableController(ShiaHillDbContext context)
        {
            this._context = context;
        }

        // GET: api/<DeliveryDaysAvaliableController>
        [HttpGet]
        public IEnumerable<DeliveryDaysAvaliable> Get()
        {
            return _context.DeliveryDaysAvaliable.ToList();
        }

        // GET api/<DeliveryDaysAvaliableController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DeliveryDaysAvaliableController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<DeliveryDaysAvaliableController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DeliveryDaysAvaliableController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
