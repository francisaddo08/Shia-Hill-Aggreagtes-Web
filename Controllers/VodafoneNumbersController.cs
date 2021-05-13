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
    public class VodafoneNumbersController : ControllerBase
    {
        private readonly ShiaHillDbContext _context;
        public VodafoneNumbersController(ShiaHillDbContext context)
        {
            this._context = context;

        }
        // GET: api/<VodafoneNumbersController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var res = this._context.VodafoneNumbers.ToList();
            List<string> data = new List<string>();
            foreach (var d in res)
            {
                data.Add(d.MoMoNumber);
            }
            return data;
        }

        // GET api/<VodafoneNumbersController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<VodafoneNumbersController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<VodafoneNumbersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<VodafoneNumbersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
