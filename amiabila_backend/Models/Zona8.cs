using System;

namespace amiabila_backend.Models
{
  public class Zona8
  {
    public string Denumire { get; set; }
    public string PolitaNr { get; set; }
    public string CarteVerdeNr { get; set; }
    public DateTime? ValabilDeLa { get; set; }
    public DateTime? ValabilPanaLa { get; set; }
    public string Sucursala { get; set; }
    public string DenumireSucursala { get; set; }
    public string Adresa { get; set; }
    public string Tara { get; set; }
    public string TelefonEmail { get; set; }
    public bool Casco { get; set; }
    public bool StepCompleted { get; set; }
  }
}
