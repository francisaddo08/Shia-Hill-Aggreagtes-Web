using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public enum OrderFulfiled { YES, NO}
    [Index(nameof(CustomerID), IsUnique = true)]
    public class Orders
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string CustomerID { get; set; }
        [Required]
        public string CustomerName { get; set; }
        [Required]
        public string MoMoProvider { get; set; }
        [Required]
        public string MoMoNumber { get; set; }
        [Required]
        public string OrderDate { get; set; }
        public string OrderType { get; set; }
        public string CollectionDate { get; set; }
        public string ActualCollectionDate { get; set; }
        public OrderFulfiled Fulfilled { get; set; }
        public double SubTotal { get; set; }
        public virtual ICollection<OrderLine> OrderLines { get; set; }
        public virtual Delivery Delivery { get; set; }
        



    }
}
