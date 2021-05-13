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
    public class AirTelNumbersController : ControllerBase
    {

        private readonly ShiaHillDbContext _context;
        public AirTelNumbersController(ShiaHillDbContext context)
        {
            this._context = context;
        }
        // GET: api/<AirTelNumbersController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var result = this._context.AirTelNumbers.ToList();
            List<string> data = new List<string>();
            foreach (var d in result)
            {
                data.Add(d.MoMoNumber);
            }
            return data;
        }

        // GET api/<AirTelNumbersController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AirTelNumbersController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AirTelNumbersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AirTelNumbersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
