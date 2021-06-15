using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB;
using amiabila_backend.Models;

namespace amiabila_backend.Controllers
{

  [Route("api/[controller]")]
  [ApiController]
  public class MongoDbController : ControllerBase
  {
    [HttpGet]
    public void Insert()
    {
      MongoDbLayer db = new MongoDbLayer("Amiabila");
      db.InsertRecord("Zona2", new Zona2 { Loc = "Bucuresti", Tara = "Romania", StepCompleted = false });
    }
  }
}
