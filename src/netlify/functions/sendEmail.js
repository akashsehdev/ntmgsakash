const fetch = require("node-fetch");

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const { name, email, phone, city, about, age } = data;

  const mailchimpAudienceId = "YOUR_AUDIENCE_ID";
  const dc = mailchimpApiKey.split("-")[1]; // datacenter
  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${mailchimpApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
          PHONE: phone,
          CITY: city,
          ABOUT: about,
          AGE: age,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Mailchimp email sent!" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
