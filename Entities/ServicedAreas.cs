using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class ServicedAreas
    {
        [Key]
     public int ServiceAreaID { get; set; }
    public string Region { get; set; }
   public string District { get; set; }
   public double Distance { get; set; }
   public string Unit { get; set; }
        //[ForeignKey("Orders")]
       // public int OrderID { get; set; }
        //public virtual Orders Orders { get; set; }
    }
}
