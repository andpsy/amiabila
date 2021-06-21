namespace amiabila_backend.Models
{
  public class ImprejurareProducereAccident
  {
    public int? Id { get; set; }
    public string[] Denumire { get; set; }
    public string DenumireSelected { get; set; }
    public bool VehiculA { get; set; }
    public bool VehiculB { get; set; }
  }
}
