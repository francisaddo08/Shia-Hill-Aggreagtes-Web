using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.ViewModels
{
    public class CustomerOrderViewModel
    {
        public string CustomerID { get; set; }
        public string CustomerName { get; set; }
        public string CollectionDate { get; set; }
        public string OrderDate { get; set; }
        public string OrderType { get; set; }
        public double SubTotal { get; set; }
    }
}
