using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class CollectionDaysAvaliable
    {
        //[JsonProperty("id")]
        [Key]
        public int ID { get; set; }

        [JsonProperty("year")]
        [Required]
        public short Year { get; set; }
        [Required]

        [JsonProperty(" monthNumber")]
        public byte MonthNumber { get; set; }
        [Required]

        [JsonProperty("mouthName")]
        public string MouthName { get; set; }
        [Required]

        [JsonProperty("dayOfMonthName")]
        public string DayOfMonthName { get; set; }
        [Required]

        [JsonProperty("dayOfMonthNumber")]
        public byte DayOfMonthNumber { get; set; }
        [Required]

        [JsonProperty("start")]
        public string Start { get; set; }
        [Required]

        [JsonProperty("end")]
        
        public string End { get; set; }
        [Required]

        [JsonProperty("shift")]
        public string Shift { get; set; }
    }
}
