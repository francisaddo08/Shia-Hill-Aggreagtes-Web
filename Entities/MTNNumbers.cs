using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class MTNNumbers
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [StringLength(maximumLength: 10)]
        public string MoMoNumber { get; set; }
    }
}
