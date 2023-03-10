using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyDoctor.Service.Dto
{
    public class PatientDetailsDto
    {
        public string? userId { get; set; }

        public int? patientId { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public long? PhoneNumber { get; set; }

        public long? EmergencyPhoneNumber { get; set; }

        public string? DepartmentName { get; set; }
    }
}
