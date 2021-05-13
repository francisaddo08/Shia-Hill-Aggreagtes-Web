using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class CollectionOrders 
    {
        [Key]
        
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Required]
        public string CollectionOrdersID { get; set; }
        public string CustomerName { get; set; }
        [Required]
        public string MoMoProvider { get; set; }
        [Required]
        public string MoMoNumber { get; set; }
        [Required]
        public string OrderDate { get; set; }
        [Required]
        public double ProductCost { get; set; }
        public ICollection<OrderLine> OrderLines { get; set; }
        [Required]
        public string CollectionDate { get; set; }
       
    }
}
