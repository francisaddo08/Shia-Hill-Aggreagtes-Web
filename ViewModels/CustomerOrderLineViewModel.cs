using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.ViewModels
{
    public class CustomerOrderLineViewModel
    {
        public string ProductName { get; set; }
        public double ProductPrice { get; set; }
        public double Quantity { get; set; }
        public double Weight { get; set; }

    }
}
