using Microsoft.AspNetCore.Mvc;
using System;
using Aggregate_Direct_ShiaHill.Repository;
using Aggregate_Direct_ShiaHill.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Aggregate_Direct_ShiaHill.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoMoProvidersController : ControllerBase
    {

        //instantiate the Repository in the controller by DI
        private ShiaHillDbContext _context;
        public MoMoProvidersController(ShiaHillDbContext context)
        {
            this._context = context;
        }


        // GET: api/<MoMoProvidersController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var result = this._context.MoMoProviders.ToList();
            List<string> data = new List<string>();
            foreach(var p in result)
            {
                data.Add(p.ProviderName);
            }
            return data;
        }

        // GET api/<MoMoProvidersController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<MoMoProvidersController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<MoMoProvidersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<MoMoProvidersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
