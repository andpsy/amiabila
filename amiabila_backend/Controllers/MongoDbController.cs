using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB;
using amiabila_backend.Models;
using System;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace amiabila_backend.Controllers
{

  [Route("api/[controller]")]
  [ApiController]
  public class MongoDbController : ControllerBase
  {
    [HttpGet]
    public void Get()
    {
      MongoDbLayer db = new MongoDbLayer("Amiabila");
      db.InsertRecord("Zona2", new Zona2 { Loc = "Bucuresti", Tara = "Romania", StepCompleted = false });
    }

    [Route("~/api/[controller]/Upsert")]
    [HttpPost]
    public Formular Upsert([FromBody] Formular formular)
    {
      //Formular f = JsonConvert.DeserializeObject<Formular>(formular.ToString());
      //Formular f = formular.ToObject<Formular>();
      MongoDbLayer db = new MongoDbLayer("Amiabila");
      db.UpsertRecord("Formulare", formular);
      return formular;
    }
  }
}
