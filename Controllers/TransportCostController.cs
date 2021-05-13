using Microsoft.AspNetCore.Mvc;
using System;
using Aggregate_Direct_ShiaHill.Entities;
using Aggregate_Direct_ShiaHill.Repository;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Aggregate_Direct_ShiaHill.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransportCostController : ControllerBase
    {
        private readonly ShiaHillDbContext _cxt;
        public TransportCostController(ShiaHillDbContext context)
        {
            this._cxt = context;

        }
        // GET: api/<TransportCostController>
        [HttpGet]
        public IEnumerable<TransportCost> Get()
        {
            return this._cxt.TransportCost.ToList();
        }

        // GET api/<TransportCostController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TransportCostController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TransportCostController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TransportCostController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
