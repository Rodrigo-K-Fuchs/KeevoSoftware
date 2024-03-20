using System.ComponentModel.DataAnnotations;

namespace KeevoDesafio.Model
{
    public class Status
    {
        public int id { get; set; }
        [StringLength(20)]
        public string statusNome { get; set; } = string.Empty;
    }
}
