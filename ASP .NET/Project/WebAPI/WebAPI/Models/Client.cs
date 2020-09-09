using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    //This class basically states our attributes for the Client this allows us to make the form for
    // a user to input the data.
    public class Client
    {
        [Key]
        public int id { get; set; }
        
        [Column(TypeName = "nvarchar(100)")]
        public string fname { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string lname { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string mobile { get; set; }

    }
}
