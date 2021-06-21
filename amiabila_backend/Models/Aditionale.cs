namespace amiabila_backend.Models
{
  public class Aditionale
  {
    public bool Conditii { get; set; }
    public bool DocumenteNecesare { get; set; }
    public bool GDPR { get; set; }
    public bool TermeniSiConditii { get; set; }
    public bool PagubitDecontareDirecta { get; set; }
    public string PagubitSocietateDecontareDirecta { get; set; }
    public bool VinovatCasco { get; set; }
    public string VinovatSocietateCasco { get; set; }
    public bool StepCompleted { get; set; }
    /*
    Aditionale()
    {
      this.Conditii = false;
      this.DocumenteNecesare = false;
      this.GDPR = false;
      this.TermeniSiConditii = false;
      this.PagubitDecontareDirecta = false;
      this.PagubitSocietateDecontareDirecta = null;
      this.VinovatCasco = false;
      this.VinovatSocietateCasco = null;
      this.StepCompleted = false;
    }
    */
  }
}
