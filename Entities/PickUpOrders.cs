using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class PickUpOrders 
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Required]
        public string PicUpOrderID { get; set; }
        public string CustomerName { get; set; }
        [Required]
        public string MoMoProvider { get; set; }
        [Required]
        public string MoMoNumber { get; set; }
        [Required]
        public string OrderDate { get; set; }
        [Required]
        public string PickUpDate { get; set; }
        [Required]
        public double ProductCost { get; set; }
        public ICollection<OrderLine> OrderLines { get; set; }
       
 

    }
}
