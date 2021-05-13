using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class Delivery
    {
        [Key]
        public int DeliveryID { get; set; }
        [ForeignKey("Orders")]
        public int OrderID { get; set; }
        [ForeignKey("TransportCost")]
       public int TransportCostID { get; set; }
        public double DeliveryCost { get; set; }
        [ForeignKey("DeliveryAreas")]
        public int DeliveryAreaID { get; set; }
        public double Weight { get; set; }
        public DeliveryAreas DeliveryAreas { get; set; }
        public TransportCost TransportCost { get; set; }
        public virtual Orders Orders { get; set; }

    }
}
