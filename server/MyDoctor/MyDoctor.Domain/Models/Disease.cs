using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyDoctor.Domain.Models
{
    public class Disease
    {
        public int Id { get; set; }

        [StringLength(25)]
        public string DiseaseName { get; set; }
    }
}
