using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class DeliveryDaysAvaliable
    {
       // [JsonProperty("id")]
       [Key]
        public int ID{ get; set; }

        [JsonProperty("year")]
        public short Year { get; set; }

        [JsonProperty(" monthNumber")]
        public short MonthNumber { get; set; }

        [JsonProperty("mouthName")]
        public string MouthName { get; set; }

        [JsonProperty("dayOfMonthName")]
        public string DayOfMonthName { get; set; }

        [JsonProperty("dayOfMonthNumber")]
        public short DayOfMonthNumber { get; set; }

        [JsonProperty("start")]
        public string Start { get; set; }

        [JsonProperty("end")]
        
        public string End { get; set; }

        [JsonProperty("shift")]
        public string Shift { get; set; }
    }
}
