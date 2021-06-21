namespace amiabila_backend.Models
{
  public class Zona12
  {
    public ImprejurariProducereAccident Imprejurari { get; set; }
    public int? CasuteA { get; set; }
    public int? CasuteB { get; set; }
    public bool StepCompleted { get; set; }
    public string VinovatEstimat { get; set; }
    public string VinovatSelectat { get; set; }
  }
}
