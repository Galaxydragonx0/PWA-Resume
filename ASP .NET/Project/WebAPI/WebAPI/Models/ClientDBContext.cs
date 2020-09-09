using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    //Here we inherit the class from DBContext off of the Entity Framework.
    public class ClientDBContext:DbContext
    {
        public ClientDBContext(DbContextOptions<ClientDBContext>options):base(options)
        {

        }

        public DbSet<Client> Clients { get; set; }
    }
}
