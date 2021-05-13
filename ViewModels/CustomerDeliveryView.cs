using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.ViewModels
{
    public class CustomerDeliveryView
    {
        public string Region { get; set; }
        public string District { get; set; }
        public double Weight { get; set; }
        public double DeliveryCost { get; set; }
    }
}
