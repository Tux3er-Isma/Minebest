// /pages/api/sendmail.json.ts
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
export const prerender = false;

export const POST: APIRoute = async ({ params, request }) => {
    // console.log('request', request)

    if (request.headers.get('Content-Type') === 'application/json') {
        const body = await request.json();
        const { to, from1, from2, html, subject, text, password, clientTo, clientHtml, smtp, user } = body;
        const host = smtp;
        const emailToPass = password;
        const emailTo = user;
        // const formData = await request.json()
        // const name = formData.name
        // const surname = formData.surname
        // const email = formData.email
        // const tel = formData.tel
        // const subject = formData.subject
        // const message = `${formData.message}
        // ----------------------------------------------------------------------
        // From: ${name} ${surname} • email: ${email} • tel: ${tel}
        // `
        // const html = `<div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">${message.replace(
        //   /[\r\n]/g,
        //   '<br>'
        // )}</div>`

        // sendmail
        let mailTransporter = nodemailer.createTransport({
            host,
            port: 587,
            secure: false,
            auth: {
                user: emailTo,
                pass: emailToPass,
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        mailTransporter.verify((error, success) => {
            if (error) {
                console.log(error)
            } else {
                console.log("All is ready")
            }
        })

        // {
        //   from: emailTo,
        //   to: email,
        //   subject: `${new URL(request.url).hostname}: ${subject}`,
        //   text: message,
        //   html,
        // },

        let mailDetails = ([
            {
                from: from1,
                to,
                subject: "Mensaje desde mineriabtc.com",
                text,
                html,
            },
            {
                from: from2,
                to: clientTo,
                subject: "Tu Información sobre Minería Bitcoin",
                html: clientHtml
            }
        ])


        let mailresult
        try {
            //   mailresult = await mailTransporter.sendMail(mailDetails)
            for (let i = 0; i < mailDetails.length; i++) {
                mailresult = await mailTransporter.sendMail(mailDetails[i])
            }
        } catch (error) {
            console.log('******* Error: ', error)
        }
        console.log('Message sent: %s', mailresult?.messageId)
        // return endpoint response
        return new Response(JSON.stringify(mailDetails), {
            status: 200,
        })
    }
    return new Response(null, { status: 400 }) // if not a json request
}