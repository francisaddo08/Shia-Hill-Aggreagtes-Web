using Aggregate_Direct_ShiaHill.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.ViewModels
{
    public class OrdersViewModel
    {


        public string OrderID { get; set; }

        public string CustomerName { get; set; }

        public string MoMoProvider { get; set; }

        public string MoMoNumber { get; set; }
        public string OrderType { get; set; }
        public string OrderDate { get; set; }
        public string CollectionDate { get; set; }
        public double Weight { get; set; }
        public double SubTotal { get; set; }

        //public string OrderID { get; set; }

        //public string CustomerName { get; set; }

        //public string MoMoProvider { get; set; }

        //public string MoMoNumber { get; set; }

        //public string OrderDate { get; set; }

        //public string DeliveryDate { get; set; }
        //public double Weight { get; set; }
        //public double DeliveryCost { get; set; }
        //public double SubTotal { get; set; }


    }
    //internal class OrderLine
    //{
        
    //    public int OrderLineID { get; set; }
        
    //    public string OrderID { get; set; }
    //    public double UnitPrice { get; set; }
    //    public string ImageUrl { get; set; }
    //    public string ProductUrl { get; set; }
    //    public double Weight { get; set; }
    //    public double TotalWeight { get; set; }
    //    public string ProductName { get; set; }
    //    public double Quantity { get; set; }
    //    public double Price { get; set; }
    //}
    //internal class DeliveryAreas
    //{
        
    //    public int ID { get; set; }

    //    // [JsonProperty("region")]
    //   // [Required]
    //   // [StringLength(maximumLength: 40)]
    //    public string Region { get; set; }

    //    //  [JsonProperty("district")]
    //    //[Required]
    //    //[StringLength(maximumLength: 60)]
    //    public string District { get; set; }

    //    // [JsonProperty("distance")]
    //    //[Required]
    //    public double Distance { get; set; }

    //    // [JsonProperty("unit")]
    //    //[Required]
    //    //[StringLength(maximumLength: 2)]
    //    public string Unit { get; set; }
    //}
}
