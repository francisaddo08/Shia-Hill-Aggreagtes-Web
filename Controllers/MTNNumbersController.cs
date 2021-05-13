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
    public class MTNNumbersController : ControllerBase
    {
        private readonly ShiaHillDbContext _context;
        public MTNNumbersController(ShiaHillDbContext context)
        {
            this._context = context;
        }
        // GET: api/<MTNNumbersController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var res = this._context.MTNNumbers.ToList();
            List<string> data = new List<string>();
            foreach(var d in res)
            {
                data.Add(d.MoMoNumber);
            }
            return data;
        }

        // GET api/<MTNNumbersController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<MTNNumbersController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<MTNNumbersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<MTNNumbersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
