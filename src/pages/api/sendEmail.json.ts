import type { APIRoute } from "astro";
import { Resend } from "resend";

let part1 = "re_";
let part2 = "AoekZ6X8_";
let part3 = "JghmerihvW3XbE8H4YJPhDpx";

const apiKey = part1 + part2 + part3;

const resend = new Resend(apiKey);

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  const { to, from, html, subject, text } = body;

  if (!to || !from || !html || !subject || !text) {
    return new Response(null, {
      status: 404,
      statusText: "Did not provide the right data",
    });
  }

  const send = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text,
  });

  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: "OK",
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error,
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }
};