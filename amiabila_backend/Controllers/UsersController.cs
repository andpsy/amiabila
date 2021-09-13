using amiabila_backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace amiabila_backend.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    private readonly IConfiguration _config;
    public UsersController(IConfiguration config)
    {
      _config = config;
    }

    [Route("~/api/[controller]/GetForLogin/{id}/{letter}")]
    [HttpGet("{id}/{letter}")]
    public object[] GetForLogin(string id, char letter)
    {
      Guid Id = new Guid(id);
      MongoDbLayer db = new MongoDbLayer("Amiabila");
      Formular f = db.LoadRecordById<Formular>("Formulare", Id);
      object[] toReturn = letter == 'A' ? new object[] { MaskEmail(f.VehiculA.Zona6.Email), MaskPhone(f.VehiculA.Zona6.Telefon) } : new object[] { MaskEmail(f.VehiculB.Zona6.Email), MaskPhone(f.VehiculB.Zona6.Telefon) };
      return toReturn;
    }

    public string MaskEmail(string email)
    {
      string toReturn = "";
      string[] spl = email.Split('.');
      for (int i = 0; i < spl.Length - 1; i++)
      {
        if (spl[i].IndexOf('@') < 0)
        {
          toReturn += (i == 0 ? spl[i].Substring(0, 3) + new string('*', spl[i].Length - 3) : new string('*', spl[i].Length));
        }
        else
        {
          string[] spl2 = spl[i].Split('@');
          toReturn += (i == 0 ? spl2[0].Substring(0, 3) + new string('*', spl2[0].Length - 3) : new string('*', spl2[0].Length) + "@" + new string('*', spl2[1].Length));
        }
        toReturn += "." + spl[spl.Length - 1];
      }
      return toReturn;
    }

    public string MaskPhone(string phone)
    {
      string toReturn = "";
      toReturn = new string('*', phone.Length - 3) + phone.Substring(phone.Length - 3);
      return toReturn;
    }

    [Route("~/api/[controller]/Login")]
    [HttpPost]
    public object[] Login(LoginModel model)
    {
      return null;
    }

    [Route("~/api/[controller]/SendFirstEmail")]
    [HttpPost]
    public object[] SendFirstEmail([FromBody] Formular formular)
    {
      object[] toReturn = new object[] { false, null };
      for (int i = 0; i < formular.Utilizatori.Length; i++)
      {
        Emailing e = new Emailing();
        var ea1 = _config.GetValue<string>("ApplicationSettings:email_test_address1");
        e.Message.From = new MailAddress(ea1);
        //e.Message.Bcc.Add(new MailAddress(null));
        e.Message.CC.Add(formular.Utilizatori[i].Email);
        var ea2 = _config.GetValue<string>("ApplicationSettings:email_test_address2");
        //e.Message.To.Add("liviu@chiric.eu");
        e.Message.To.Add(ea2);
        e.Message.Subject = String.Format("Dosar de despagubire {0}", formular.Id.ToString());
        e.Message.Headers.Add("ID", formular.Id.ToString());
        e.Message.IsBodyHtml = true; // Altfel nu merge notificarea de Open si Click pe Amazon SES/SNS

        //string pathQuery = String.Format("{0}://{1}/{2}/{3}", HttpContext.Request.Scheme, HttpContext.Request.Host, formular.Utilizatori[i].Litera, formular.Id);
        var url = _config.GetValue<string>("ApplicationSettings:URL_Client");
        string pathQuery = String.Format("{0}{1}/{2}", url, formular.Utilizatori[i].Litera, formular.Id);

        e.Message.Body = pathQuery;

        toReturn = e.SendSESMessage(null);
      }
      return toReturn;
    }

  }
}
