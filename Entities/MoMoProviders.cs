using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class MoMoProviders
    {
        [Key]
        public int ID { get; set; }

       public string ProviderName { get; set; }
    }
}
