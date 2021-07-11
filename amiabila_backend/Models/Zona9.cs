using System;

namespace amiabila_backend.Models
{
  public class Zona9
  {
    public bool IdenticCuAsiguratul { get; set; }
    public string Nume { get; set; }
    public string Prenume { get; set; }
    public DateTime? DataNasterii { get; set; }
    public string Adresa { get; set; }
    public string Tara { get; set; }
    public string Telefon { get; set; }
    public string Email { get; set; }
    public string PermisConducereNr { get; set; }
    public string Categoria { get; set; }
    public DateTime? ValabilPanaLa { get; set; }
    public bool StepCompleted { get; set; }
  }
}
