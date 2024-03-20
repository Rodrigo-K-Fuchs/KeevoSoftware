using System.ComponentModel.DataAnnotations;

namespace KeevoDesafio.Model
{
    public class TarefasTipo
    {
        public int id { get; set; }
        [StringLength(20)]
        public string tarefaNome { get; set; } = string.Empty;
    }
}
