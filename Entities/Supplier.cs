using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class Supplier
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Required]
        public string SupplierID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string Telephone { get; set; }
        [DataType(DataType.EmailAddress)]
        [Required]
        public string Email { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
