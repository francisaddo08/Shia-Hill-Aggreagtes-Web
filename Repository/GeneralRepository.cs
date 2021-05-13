using Aggregate_Direct_ShiaHill.Entities;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Aggregate_Direct_ShiaHill.Repository
{
    public  class GeneralRepository

    {
       // //the GeneralRepository abst class will instantiate the dbcontext class
       // protected ShiaHillDbContext _context;
       // private readonly ILogger _looger;
       // public GeneralRepository(ShiaHillDbContext context, ILogger<GeneralRepository<object>> logger)
       // {
       //     this._context = context;

       // }

       // public T Add(T entity)
       // {
       //     return this._context.Add(entity).Entity;
       // }

       //public  IEnumerable<T> FindItem(Expression<Func<T, bool>> predicate)
       // {
       //     return this._context.Set<T>().AsQueryable().Where(predicate).ToList();
       // }
       // public  IEnumerable<Product> GetAll()
       // {
       //     return this._context.Set<Product>().ToList();
       // }
       // public  T Get(int id)
       // {
       //     return _context.Find<T>(id);
       // }

      

       // public  void SaveChanges()
       // {
       //     this._context.SaveChanges();
       // }

       //public  T Update(T entity)
       // {
       //     return _context.Update(entity).Entity;
       // }

       // T IRepository<T>.Add(T entity)
       // {
       //     throw new NotImplementedException();
       // }

       // T IRepository<T>.Update(T Entity)
       // {
       //     throw new NotImplementedException();
       // }

       // T IRepository<T>.Get(int id)
       // {
       //     throw new NotImplementedException();
       // }

       //public  IEnumerable<Product> GetAllProducts()
       // {
       //   return  this._context.Set<Product>().ToList();
       // }

       // IEnumerable<T> IRepository<T>.FindItem(Expression<Func<T, bool>> predicate)
       // {
       //     throw new NotImplementedException();
       // }

       // void IRepository<T>.SaveChanges()
       // {
       //     throw new NotImplementedException();
       // }

       // IEnumerable<T> IRepository<T>.GetAllProducts()
       // {
       //     throw new NotImplementedException();
       // }
    }
}
