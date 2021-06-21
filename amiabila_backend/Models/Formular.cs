using MongoDB.Bson.Serialization.Attributes;
using System;

namespace amiabila_backend.Models
{
  public class Formular
  {
    [BsonId]
    public Guid? Id { get; set; }
    
    public Zona1 Zona1 { get; set; }
    public Zona2 Zona2 { get; set; }
    public Zona3 Zona3 { get; set; }
    public Zona4 Zona4 { get; set; }
    public Zona5 Zona5 { get; set; }
    public Vehicul VehiculA { get; set; }
    public Vehicul VehiculB { get; set; }
    public Zona12 Zona12 { get; set; }
    public Zona13 Zona13 { get; set; }
    
    public Aditionale Aditionale { get; set; }
  }
}
