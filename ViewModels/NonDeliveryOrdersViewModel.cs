using Aggregate_Direct_ShiaHill.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.ViewModels
{
    public class NonDeliveryOrdersViewModel
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
        public OrderLineViewModel[] orderline { get; set; }

    }
}
