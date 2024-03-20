using System.ComponentModel.DataAnnotations;

namespace KeevoDesafio.Model
{
    public class Tarefa
    {
        public int id { get; set; }

        public int statusId { get; set; }
        [StringLength(100)]
        public string descricao { get; set; } = string.Empty;
        [StringLength(50)]
        public string responsavel { get; set; } = string.Empty;
        public int tarefaTipoId { get; set; }
        public TarefasTipo? TarefaTipo { get; set; }
        public Status? Status { get; set; }

    }
}
