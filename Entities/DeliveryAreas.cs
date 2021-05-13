using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class DeliveryAreas
    {
      //  [JsonProperty("id")]
      [Key]
        public int ID { get; set; }

       // [JsonProperty("region")]
       [Required]
       [StringLength(maximumLength: 40)]
        public string Region { get; set; }

      //  [JsonProperty("district")]
      [Required]
        [StringLength(maximumLength: 60)]
        public string District { get; set; }

       // [JsonProperty("distance")]
       [Required]
        public double Distance { get; set; }

       // [JsonProperty("unit")]
       [Required]
       [StringLength(maximumLength:2)]
        public string Unit { get; set; }
    }
}
