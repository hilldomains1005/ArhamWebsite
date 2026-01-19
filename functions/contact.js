export async function onRequestPost({ request, env }) {
  try {
    const { first_name, last_name, email, subject, message } =
      await request.json();

    if (!email || !message) {
      return new Response(
        JSON.stringify({ error: "Invalid payload" }),
        { status: 400 }
      );
    }

    const zeptoResponse = await fetch(
      "https://api.zeptomail.in/v1.1/email",
      {
        method: "POST",
        headers: {
          "Authorization": `Zoho-enczapikey ${env.ZEPTO_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: {
            address: "noreply@arhamexp.com",
            name: "Arham Exports Website"
          },
          to: [
            {
              email_address: {
                address: "info@arhamexp.com",
                name: "Arham Exports Support"
              }
            }
          ],
          subject: `New Lead: ${first_name} ${last_name} : ${subject}`,
          htmlbody: `
            <h3>New Inquiry</h3>
            <p><strong>Name:</strong> ${first_name} ${last_name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          `
        })
      }
    );

    if (!zeptoResponse.ok) {
      const err = await zeptoResponse.text();
      console.error('Zepto API Error:', zeptoResponse.status, err);
      throw new Error(`Zepto API failed with status ${zeptoResponse.status}: ${err}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500 }
    );
  }
}
