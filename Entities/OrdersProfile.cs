using AutoMapper;
using System;
using Aggregate_Direct_ShiaHill.ViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Entities
{
    public class OrdersProfile: Profile
    {
        public OrdersProfile()
        {
            this.CreateMap<OrdersViewModel, Orders>()
                .ForMember(o => o.CustomerID, vm => vm.MapFrom(ovm => ovm.OrderID));
            this.CreateMap<Orders, OrdersViewModel>()
                .ForMember(ovm => ovm.OrderID, vm => vm.MapFrom(o => o.CustomerID));
            // colection date maps
            this.CreateMap<OrdersViewModel, Orders>()
              .ForMember(o => o.CollectionDate, vm => vm.MapFrom(ovm => ovm.CollectionDate));
            this.CreateMap<Orders, OrdersViewModel>()
                .ForMember(ovm => ovm.CollectionDate, vm => vm.MapFrom(o => o.CollectionDate));



            this.CreateMap<OrderLine, OrderLineViewModel>();
        }
    }
}
