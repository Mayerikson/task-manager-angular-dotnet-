using System;
using System.ComponentModel.DataAnnotations;

namespace TaskManager.Api.Models
{
    public class Tarefa
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Titulo { get; set; } = string.Empty;

        [StringLength(500)]
        public string Descricao { get; set; } = string.Empty;

        [Required]
        public string Status { get; set; } = "Pendente"; // Pendente / Concluída

        public DateTime DataCriacao { get; set; } = DateTime.Now;
    }
}
