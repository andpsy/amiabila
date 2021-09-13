using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Net.Mail;

namespace amiabila_backend.Models
{
  public static class EmailProfiles
  {
    public static EmailProfile DefaultProfile
    {
      get
      {
        return new EmailProfile(null, "email-smtp.eu-west-1.amazonaws.com", "avizari_rca@compensaredirecta.ro", null, "AKIAJ4JUGCXZFH7D76XA", "AqyBno64mR1NzcMuh9wXYFEoBQ+fIijF9//s3HN5lfiv", null, 587, true, true);
      }
    }
  }

  public class EmailProfile
  {
    public string IncomingServer { get; set; }
    public string OutgoingServer { get; set; }
    public string IncomingUser { get; set; }
    public string IncomingPassword { get; set; }
    public string OutgoingUser { get; set; }
    public string OutgoingPassword { get; set; }
    public int? IncomingPort { get; set; }
    public int? OutgoingPort { get; set; }
    public bool? IncomingUsingSSL { get; set; }
    public bool? OutgoingUsingSSL { get; set; }

    public EmailProfile() { }

    public EmailProfile(string isrv, string osrv, string iusr, string ipsw, string ousr, string opsw, int? iport, int? oport, bool? issl, bool? ossl)
    {
      IncomingServer = isrv;
      OutgoingServer = osrv;
      IncomingUser = iusr;
      OutgoingUser = ousr;
      IncomingPassword = ipsw;
      OutgoingPassword = opsw;
      IncomingPort = iport;
      OutgoingPort = oport;
      IncomingUsingSSL = issl;
      OutgoingUsingSSL = ossl;
    }
  }

  public class Emailing
  {
    public EmailProfile Profile = EmailProfiles.DefaultProfile;
    public MailMessage Message = new MailMessage();
    const String CONFIGSET = "NOTIFICARIDAUNE-SES-CONFIGURATION-SET";

    public object[] SendSESMessage(EmailProfile profile)
    {
      if (profile == null) profile = this.Profile;
      Message.Headers.Add("X-SES-CONFIGURATION-SET", CONFIGSET);
      Message.IsBodyHtml = true; // Altfel nu merge notificarea de Open si Click pe Amazon SES/SNS
      /*
      SmtpClient client = new SmtpClient(this.AwsOutgoingSESServer, this.AwsOutgoingSESPort);
      client.Credentials = new NetworkCredential(this.AwsNotificariSESUser, this.AwsNotificariSESPassword);
      client.EnableSsl = this.AwsOutgoingUseSSL;
      */

      SmtpClient client = profile.OutgoingPort != null ? new SmtpClient(profile.OutgoingServer, Convert.ToInt32(profile.OutgoingPort)) : new SmtpClient(profile.OutgoingServer);
      client.Credentials = new NetworkCredential(profile.OutgoingUser, profile.OutgoingPassword);
      client.EnableSsl = profile.OutgoingUsingSSL != null ? Convert.ToBoolean(profile.OutgoingUsingSSL) : false;

      try
      {
        client.Send(Message);
        return new object[] {true, null};
      }
      catch (Exception ex)
      {
        return new object[] { false, ex.Message };
      }
    }

    public object[] SendVerificationCodeMessage(string _code, EmailProfile profile)
    {
      if (profile == null) profile = this.Profile;
      Message.IsBodyHtml = true; // Altfel nu merge notificarea de Open si Click pe Amazon SES/SNS
      SmtpClient client = profile.OutgoingPort != null ? new SmtpClient(profile.OutgoingServer, Convert.ToInt32(profile.OutgoingPort)) : new SmtpClient(profile.OutgoingServer);
      client.Credentials = new NetworkCredential(profile.OutgoingUser, profile.OutgoingPassword);
      client.EnableSsl = profile.OutgoingUsingSSL != null ? Convert.ToBoolean(profile.OutgoingUsingSSL) : false;

      try
      {
        client.Send(Message);
        return new object[] { true, null };
      }
      catch (Exception ex)
      {
        return new object[] { false, ex.Message };
      }
    }

    public string GenerateVerificationCode()
    {
      Random generator = new Random();
      string rnd = generator.Next(0, 1000000).ToString("D6");
      return rnd;
    }
  }
}
