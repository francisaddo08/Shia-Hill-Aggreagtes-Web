using Aggregate_Direct_ShiaHill.Repository;
using Aggregate_Direct_ShiaHill.ViewModels;
using Aggregate_Direct_ShiaHill.Entities;
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
    public class ProductsController : ControllerBase
    {
        //instantiate the Repository in the controller by DI
        //private readonly IRepository<Product> _repository;
        private readonly ShiaHillDbContext _cxt;
        public ProductsController(ShiaHillDbContext context)
        {
            this._cxt = context;
        }
        [HttpGet("{term}")]
        public IEnumerable<ProductViewModel> GetSearchedProducts(string term)
        {
            return this._cxt.Products.Select
               (p => new ProductViewModel
               {
                   ID = p.ID,
                   ProductName = p.ProductName,
                   Price = p.Price,
                   Origin = p.Origin,
                   Category = p.Category,
                   Packaging = p.Packaging,
                   Unit = p.Unit,
                   WeightPerUnit = p.WeightPerUnit,
                   StockLevel = p.StockLevel,
                   ImageUrl = p.ImageUrl,
                   ProductUrl = p.ProductUrl,
                   Description = p.Description,
                   DetailDescription = p.DetailDescription

               })
               .Where(p => p.ProductName.Contains(term) || p.ProductName.StartsWith(term))
               .OrderByDescending(p => p.ProductName)
               .ToList();


        }
        // GET: api/<ProductsController>
        [HttpGet]
        public IEnumerable<ProductViewModel> Get()
        {
            return this._cxt.Products.Select
                (p => new ProductViewModel
                {
                    ID = p.ID,
                    ProductName = p.ProductName,
                    Price = p.Price,
                    Origin = p.Origin,
                    Category = p.Category,
                    Packaging = p.Packaging,
                    Unit = p.Unit,
                    WeightPerUnit = p.WeightPerUnit,
                    StockLevel = p.StockLevel,
                    ImageUrl = p.ImageUrl,
                    ProductUrl = p.ProductUrl,
                    Description = p.Description,
                    DetailDescription = p.DetailDescription

                })
                .ToArray();
        }


        public IEnumerable<RelatedProductsViewModel> TilesRelatedProducts()
        {
            List<RelatedProductsViewModel> r = new List<RelatedProductsViewModel>();
            var result = this._cxt.Products
                .Where(o => o.Category
                .Contains("Tiles") && o.Category.Contains("Decorative Aggregates"))
                .Take(10)
                .ToList();
            foreach (var d in result)
            {
                r.Add(new RelatedProductsViewModel
                {
                 ProductName = d.ProductName,
                 ImageUrl = d.ImageUrl,
                 ProductUrl = d.ProductUrl
                });
            }
            return r;
        }




        // GET api/<ProductsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ProductsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ProductsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ProductsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
