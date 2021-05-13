using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.ViewModels
{
    public class OrderLineViewModel
    {
        
        public string OrderID { get; set; }
        public Guid ProductID { get; set; }
        public double TotalWeight { get; set; }
        public double Quantity { get; set; }
    }
}
