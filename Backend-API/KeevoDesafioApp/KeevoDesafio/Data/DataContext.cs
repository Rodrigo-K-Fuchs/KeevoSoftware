using KeevoDesafio.Model;
using Microsoft.EntityFrameworkCore;

namespace KeevoDesafio.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Tarefa>Tarefa { get; set;}
        public DbSet<TarefasTipo> TarefasTipo { get; set;}
        public DbSet<Status>Statususes { get; set;} 
    }
}
