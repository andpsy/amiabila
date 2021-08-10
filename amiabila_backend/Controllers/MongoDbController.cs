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
using Microsoft.AspNetCore.Cors;

namespace amiabila_backend.Controllers
{
  [EnableCors("MyPolicy")]
  [Route("api/[controller]")]
  [ApiController]
  public class MongoDbController : ControllerBase
  {
    [HttpGet]
    public List<Formular> GetAll()
    {
      MongoDbLayer db = new MongoDbLayer("Amiabila");
      return db.LoadRecords<Formular>("Formulare");
    }


    [HttpGet("{id}")]
    public Formular Get(string id)
    {
      Guid Id = new Guid(id);
      MongoDbLayer db = new MongoDbLayer("Amiabila");
      return db.LoadRecordById<Formular>("Formulare", Id);
    }

    [Route("~/api/[controller]/Upsert")]
    [HttpPost]
    public Formular Upsert([FromBody] Formular formular)
    {
      try
      {
        //Formular f = JsonConvert.DeserializeObject<Formular>(formular.ToString());
        //Formular f = formular.ToObject<Formular>();
        MongoDbLayer db = new MongoDbLayer("Amiabila");
        db.UpsertRecord("Formulare", formular);
        return formular;
      }catch(Exception exp) { Console.Write(exp); return null; }
    }
  }
}
