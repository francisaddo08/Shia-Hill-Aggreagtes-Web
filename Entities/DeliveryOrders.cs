using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class DeliveryOrders 
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Required]
        public string OrderID { get; set; }
        [Required]
        public string CustomerName { get; set; }
        [Required]
        public string MoMoProvider { get; set; }
        [Required]
        public string MoMoNumber { get; set; }
        [Required]
        public string OrderDate { get; set; }
        [Required]
        public string DeliveryDate { get; set; }
        [Required]
        public double CostPerKillometer { get; set; }
        [Required]
        public double Weight { get; set; }
        [Required]
        public double DeliveryCost { get; set; }
        public double SubTotal { get; set; }
        public ICollection<OrderLine> OrderLines { get; set; }
        public ServicedAreas ServicedAreas { get; set; }
      

    }
}
