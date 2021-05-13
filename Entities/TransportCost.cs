using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class TransportCost
    {
        [Key]
        public int ID { get; set; }
        //[JsonProperty("costPerKillometer")]
        [Required]
        public double CostPerKillometer { get; set; }

        //[JsonProperty("payload")]
        [Required]
        public int Payload { get; set; }

       // [JsonProperty("unit")]
        public string Unit { get; set; }
    }
}
