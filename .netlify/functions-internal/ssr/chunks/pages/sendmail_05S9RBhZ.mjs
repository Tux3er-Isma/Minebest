import nodemailer from 'nodemailer';

const prerender = false;
const POST = async ({ params, request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const { to, from1, from2, html, subject, text, password, clientTo, clientHtml, smtp, user } = body;
    const host = smtp;
    const emailToPass = password;
    const emailTo = user;
    let mailTransporter = nodemailer.createTransport({
      host,
      port: 587,
      secure: false,
      auth: {
        user: emailTo,
        pass: emailToPass
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    mailTransporter.verify((error, success) => {
      if (error) {
        console.log(error);
      } else {
        console.log("All is ready");
      }
    });
    let mailDetails = [
      {
        from: from1,
        to,
        subject: "Mensaje desde mineriabtc.com",
        text,
        html
      },
      {
        from: from2,
        to: clientTo,
        subject: "Tu Información sobre Minería Bitcoin",
        html: clientHtml
      }
    ];
    let mailresult;
    try {
      for (let i = 0; i < mailDetails.length; i++) {
        mailresult = await mailTransporter.sendMail(mailDetails[i]);
      }
    } catch (error) {
      console.log("******* Error: ", error);
    }
    console.log("Message sent: %s", mailresult?.messageId);
    return new Response(JSON.stringify(mailDetails), {
      status: 200
    });
  }
  return new Response(null, { status: 400 });
};

export { POST, prerender };
