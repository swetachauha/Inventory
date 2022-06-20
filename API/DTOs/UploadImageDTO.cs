using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class UploadImageDTO
    {

        [Required]
        public Byte[] image { get; set; }
    }
}