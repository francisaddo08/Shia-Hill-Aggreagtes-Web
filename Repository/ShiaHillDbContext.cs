using Aggregate_Direct_ShiaHill.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Repository
{
    public class ShiaHillDbContext : DbContext
    {
        public ShiaHillDbContext(DbContextOptions<ShiaHillDbContext> options) : base(options){ }
        public DbSet<Product> Products { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<Orders> Orders { get; set; }
        public DbSet<OrderLine> OrderLines { get; set; }
        public DbSet<AirTelNumbers> AirTelNumbers { get; set; }
        public DbSet<VodafoneNumbers> VodafoneNumbers{ get; set; }
        public DbSet<MTNNumbers> MTNNumbers { get; set; }
        public DbSet<DeliveryAreas> DeliveryAreas { get; set; }
         public DbSet<DeliveryDaysAvaliable> DeliveryDaysAvaliable { get; set; }
        public DbSet<CollectionDaysAvaliable> CollectionDaysAvaliable { get; set; }
        public DbSet<TransportCost> TransportCost { get; set; }
        public DbSet<ProductCategory> ProductCategory { get; set; }
        public DbSet<MoMoProviders> MoMoProviders { get; set; }
        public DbSet<Delivery>Deliveries { get; set; }

        //public DbSet<PickUpOrders> PickUpOrders { get; set; }
        //public DbSet<CollectionOrders> CollectionOrders { get; set; }
        //public DbSet<DeliveryOrders> DeliveryOrders { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Product>()
               .ToTable("Product").Property(i => i.Price).HasColumnType("money");


            //        builder.Entity<DeliveryOrders>()
            //         .ToTable("DeliveryOrders").Property(o => o.SubTotal).HasColumnType("money")
            //         .HasDefaultValue(0.0000);

            //        builder.Entity<DeliveryOrders>()
            //       .ToTable("DeliveryOrders").Property(o => o.DeliveryCost).HasColumnType("money")
            //       .HasDefaultValue(0.0000);

            //        builder.Entity<CollectionOrders>()
            //    .ToTable("CollectionOrders").Property(o => o.ProductCost).HasColumnType("money")
            //    .HasDefaultValue(0.0000);

            //        builder.Entity<PickUpOrders>()
            //.ToTable("PickUpOrders").Property(o => o.ProductCost).HasColumnType("money")
            //.HasDefaultValue(0.0000);

            //builder.Entity<Orders>()
            //    .ToTable("Orders")
            //    .Property(o => o.CostPerKillometer).HasColumnType("money")
            //    .HasDefaultValue("0.0000");
            //builder.Entity<Orders>()
            //   .ToTable("Orders")
            //   .Property(o => o.DeliveryCost).HasColumnType("money")
            //   .HasDefaultValue("0.0000");
            builder.Entity<Orders>()
               .ToTable("Orders")
               .Property(o => o.SubTotal).HasColumnType("money")
               .HasDefaultValue(0.00);
            builder.Entity<OrderLine>()
      .ToTable("OrderLines");
      //.Property(o => o.Price).HasColumnType("money")
      //.HasDefaultValue(0.0000);
            builder.Entity<Delivery>()
   .ToTable("Deliveries").Property(o => o.DeliveryCost).HasColumnType("money")
   .HasDefaultValue(0.00);

            builder.Entity<OrderLine>()
                .HasOne(p => p.Orders)
                .WithMany(o => o.OrderLines); // orderID is Foreign key in orderline



            // builder.Entity<Orders>()
            //.ToTable("Orders").Property(o => o.TotalCost).HasColumnType("money")
            //.HasComputedColumnSql();



            builder.Entity<Supplier>().ToTable("Supplier");
            builder.Entity<Employee>().ToTable("Employee");
        }
    }
}
