using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class Product
    {
        [Key]
        public Guid ID { get; set; }
        [ForeignKey("Supplier")]
        [Required]
        public string SupplierID { get; set; }
       // [ForeignKey("ProductCategory")]
        //[Required]
        //public int ProductCategoryID { get; set; }
        [Required]
        public string ProductName { get; set; }

        [Required]
        [StringLength(4)]
        public string EmployeeInitials { get; set; }

        [Required]
        public decimal Price { get; set; }
        [Required]
        public string Origin { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public string Packaging { get; set; }
        public double WeightPerUnit { get; set; }
        [Required]
        [StringLength(maximumLength:2)]
        public string Unit { get; set; }
        [Required]
        public int StockLevel { get; set; }
        [Required]
        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime EntryDate { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string DetailDescription { get; set; }
        [Required]
        public string ImageUrl { get; set; }
        [Required]
        public string ProductUrl { get; set; }

        public Supplier Supplier { get; set; }
    }
}
