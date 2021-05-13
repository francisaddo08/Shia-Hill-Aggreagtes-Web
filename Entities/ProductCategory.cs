using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class ProductCategory
    {
        [Key]
        public int ID { get; set; }
        public string ProductName { get; set; }
        public string ProductUrl { get; set; }
        public string MainImage { get; set; }
        public string FirstImage { get; set; }
        public string SecondImage { get; set; }
        //public virtual ICollection<Product> Products { get; set; }
    }
}
