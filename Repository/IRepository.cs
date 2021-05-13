using Aggregate_Direct_ShiaHill.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Repository
{
   public interface IRepository
    {
        //// Create Delete
        //void Add<T>(T entity) where T : class;
        //void Delete<T>(T entity) where T : class;
        //Task<bool> SaveChangesAsync();

        ////Orders methods
        //Task<Orders> GetAllOrdersAsync(bool includeOrderlines = false);
        //Task<Orders> GetOrderAsync(string orderNumber, bool includeOrderlines = false);

        ////OrderLines methods
        //Task<Orders> GetAllOrderlinesAsync(bool orders = true);
        //Task<Orders> GetOrderlinesAsync(string orderNumber, bool includeOrderlines = false);

        // abstract  T Add(T entity);
        //   T Update(T Entity);
        //   T Get(int id);

        //public  IEnumerable<T> GetAllProducts();
        //public   IEnumerable<T> FindItem(Expression<Func<T, bool>> predicate);
        //  public void SaveChanges();
    }
}
