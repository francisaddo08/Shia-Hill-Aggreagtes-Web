using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.ViewModels
{
    public class ProductViewModel
    {
        public Guid ID { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public string Origin { get; set; }
 
        public string Category { get; set; }
        
        public string Packaging { get; set; }
        public double WeightPerUnit { get; set; }
        public string Unit { get; set; }
        public int StockLevel { get; set; }
        public string ImageUrl { get; set; }
       
        public string ProductUrl { get; set; }

        public string Description { get; set; }
        public string DetailDescription { get; set; }



    }
}
