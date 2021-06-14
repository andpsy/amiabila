using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB;
using MongoDB.Driver;

namespace amiabila_backend.Controllers
{
  public class MongoCRUD
  {
    private IMongoDatabase db;

    public MongoCRUD(string dbName)
    {
      var client = new MongoClient();
      db = client.GetDatabase(dbName);
    }

    public void InsertRecord<T>(string table, T record)
    {
      var collection = db.GetCollection<T>(table);
      collection.InsertOne(record);
    }
  }

  public class Zona1
  {
    public DateTime Data;
    public string Ora;
    public bool StepCompleted;
  }

  public class Zona2
  {
    public string Loc;
    public string Tara;
    public bool StepCompleted;
  }

  public class Zona3{
    public bool VatamariDa;
    public bool VatamariNu;
    public bool StepCompleted;
    public bool Confirma112;
  }

  public class Zona4
  {
    public bool PagubeAlteVehiculeDa;
    public bool PagubeAlteVehiculeNu;
    public bool PagubeAlteObiecteDa;
    public bool PagubeAlteObiecteNu;
    public bool StepCompleted;
  }

  public class Martor
  {
    public string Nume;
    public string Adresa;
    public string Telefon;
  }

  public class Zona5
  {
    public bool ExistaMartori;
    public Martor[] Martori;
    public bool StepCompleted;
  }

  public class Zona6
  {
    string Nume;
    string Prenume;
    string Adresa;
    string CodPostal;
    string Tara;
    string TelefonEmail;
    bool StepCompleted;
  }

  public class MarcaAuto
  {
    int Id;
    string Model;
  }

  public class Motor
  {
    MarcaAuto MarcaAuto;
    string Marca;
    string Tip;
    string TipAltul;
    string NrInmatriculare;
    string TaraInmatriculare;
  }

  public class Remorca
  {
    string NrInmatriculare;
    string TaraInmatriculare;
  }

  public class Zona7
  {
    Motor Motor;
    Remorca Remorca;
    bool StepCompleted;
  }

  public class Zona8
  {
    string Denumire;
    string PolitaNr;
    string CarteVerdeNr;
    DateTime ValabilDeLa;
    DateTime ValabilPanaLa;
    string Sucursala;
    string DenumireSucursala;
    string Adresa;
    string Tara;
    string TelefonEmail;
    bool Casco;
    bool StepCompleted;
  }

  public class Zona9
  {
    bool IdenticCuAsiguratul;
    string Nume;
    string Prenume;
    DateTime DataNasterii;
    string Adresa;
    string Tara;
    string TelefonEmail;
    string PermisConducereNr;
    string Categoria;
    DateTime ValabilPanaLa;
    bool StepCompleted;
  }

  public class Zona10
  {
    string PunctImpact;
    bool StepCompleted;
  }

  public class Zona11
  {
    string[] Pagube;
    bool StepCompleted;
  }

  public class Zona14
  {
    string Observatii;
    bool StepCompleted;
  }

  public class Zona15
  {
    string CaleSemnatura;
    bool StepCompleted;
  }

  public class Aditionale
  {
    bool PagubitDecontareDirecta;
    string PagubitSocietateDecontareDirecta;
    bool VinovatCasco;
    string VinovatSocietateCasco;
    bool StepCompleted;
  }

  public class Vehicul
  {
    Zona6 Zona6;
    Zona7 Zona7;
    Zona8 Zona8;
    Zona9 Zona9;
    Zona10 Zona10;
    Zona11 Zona11;
    Zona14 Zona14;
    Zona15 Zona15;
  }

  public class ImprejurareProducereAccident
  {
    int Id;
    string[] Denumire;
    string DenumireSelected;
    bool VehiculA;
    bool VehiculB;
  }

  public class ImprejurariProducereAccident
  {
    ImprejurareProducereAccident[] Imprejurari;
  }

  public class Zona12
  {
    ImprejurariProducereAccident Imprejurari;
    int CasuteA;
    int CasuteB;
    bool StepCompleted;
    string VinovatEstimat;
    string VinovatSelectat;
  }

  public class Zona13
  {
    string CaleSchita;
    string ImgMap;
    bool StepCompleted;
  }

    public class Formular
  {
    public Zona1 Zona1;
    public Zona2 Zona2;
    public Zona3 Zona3;
    public Zona4 Zona4;
    public Zona5 Zona5;
    public Vehicul VehiculA;
    public Vehicul VehiculB;
    public Zona12 Zona12;
    public Zona13 Zona13;
    public Aditionale Aditionale;
  }

  [Route("api/[controller]")]
  [ApiController]
  public class MongoDbController : ControllerBase
  {
    [HttpGet]
    public void Insert()
    {
      MongoCRUD db = new MongoCRUD("Amiabila");
      db.InsertRecord("Zona2", new Zona2 { Loc = "Bucuresti", Tara = "Romania", StepCompleted = false });
    }
  }
}
