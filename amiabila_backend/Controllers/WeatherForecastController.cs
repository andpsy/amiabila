using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xfinium.Pdf;

using Xfinium.Pdf.Content;
using Xfinium.Pdf.FlowDocument;
using Xfinium.Pdf.Graphics.FormattedContent;
using Xfinium.Pdf.Graphics;
using Xfinium.Pdf.DigitalSignatures;
using Xfinium.Pdf.Forms;
using System.IO;
using amiabila_backend.Models;

namespace amiabila_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }
        /*
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
        */
        [HttpGet]
        public void Pdf(Formular f)
        {
          try
          {
            string templateFileName = Path.Combine("formular.pdf");
            FileStream fs = null;
            byte[] bs = null;
            if (System.IO.File.Exists(templateFileName))
              fs = new FileStream(templateFileName, FileMode.Open, FileAccess.ReadWrite);
            if (fs != null)
            {
              bs = new byte[fs.Length];
              int n = fs.Read(bs, 0, (int)fs.Length);
              MemoryStream ms = new MemoryStream(bs);
              PdfFixedDocument poDocument = new PdfFixedDocument(ms);
            //poDocument.Form.Fields["1DATA"].Value = String.Format("{0}.{1}.{2}", DateTime.Now.Day, DateTime.Now.Month, DateTime.Now.Year);
              poDocument.Form.Fields["1DATA"].Value = f.Zona1.Data;
              poDocument.Form.Fields["1ORA"].Value = f.Zona1.Ora;

              poDocument.Save(fs);
              fs.Flush();
              fs.Dispose();
              ms.Close();
              ms.Dispose();
            }
          }
          catch (Exception exp) { Console.Write(exp); }
        }


  }
}
