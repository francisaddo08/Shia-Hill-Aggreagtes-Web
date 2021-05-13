using Aggregate_Direct_ShiaHill.Entities;
using Aggregate_Direct_ShiaHill.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Aggregate_Direct_ShiaHill.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CollectionDaysAvaliableController : ControllerBase
    {
        private readonly ShiaHillDbContext _context;
        public CollectionDaysAvaliableController(ShiaHillDbContext context)
        {
            this._context = context;
        }
        // GET: api/<CollectionDaysAvaliableController>
        [HttpGet]
        public IEnumerable<CollectionDaysAvaliable> Get()
        {
            return this._context.CollectionDaysAvaliable.ToList();
        }

        // GET api/<CollectionDaysAvaliableController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CollectionDaysAvaliableController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CollectionDaysAvaliableController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CollectionDaysAvaliableController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
