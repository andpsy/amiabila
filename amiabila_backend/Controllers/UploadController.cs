using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace amiabila_backend.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UploadController : ControllerBase
  {
    [HttpPost, DisableRequestSizeLimit]
    [Route("~/api/[controller]/Upload")]
    public IActionResult Upload()
    {
      try
      {
        string id = Request.Form["id"].ToString();
        var file = Request.Form.Files[0];
        var folderName = Path.Combine("Resources", "Formulare", id);
        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

        if (file.Length > 0 && id != null)
        {
          if (!Directory.Exists(pathToSave))
          {
            DirectoryInfo di = Directory.CreateDirectory(pathToSave);
          }

          var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
          var fullPath = Path.Combine(pathToSave, fileName);
          //var dbPath = Path.Combine(folderName, fileName);

          using (var stream = new FileStream(fullPath, FileMode.Create))
          {
            file.CopyTo(stream);
          }
          return Ok(new { fileName });
        }
        else
        {
          return BadRequest();
        }
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal server error: {ex}");
      }
    }

  }
}
