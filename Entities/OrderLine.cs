using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class OrderLine
    {
       [Key]
        public int OrderLineID { get; set; }
   public double Quantity { get; set; }
   public Guid ProductID { get; set; }
   [ForeignKey("Orders")]
   public int OrdersID { get; set; }
   public virtual Product Product { get; set; }
   public virtual Orders Orders { get; set; }

    }
}
