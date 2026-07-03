
import express from "express";
import cors from "cors";
import { Resend } from "resend";
import "dotenv/config";

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());


app.post("/api/send-enquiry", async (req, res) => {
  const fields = req.body;

  if (!fields || Object.keys(fields).length === 0) {
    return res.status(400).json({ error: "No form data received" });
  }

  const name = fields.Name || fields.name || "Someone";
  const email = fields.Email || fields.email || "no email provided";
  const organisation = fields.Organisation || fields.organisation || "an unspecified organisation";
  const message = fields.message || fields.Message || "no message provided";

  const html = `
    <p>Hi Niall,</p>
    <p>${name} from ${organisation} just filled the Kameko form with message "${message}".</p>
    <p>Contact him at: <a href="mailto:${email}">${email}</a></p>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: "KAMEKO <onboarding@kamekoproperty.com>",
      to: ["abdusman2014@gmail.com"],
      subject: "New Enquiry from KAMEKO Website",
      html: html,
    });

    if (error) {
      console.error({ error });
      return res.status(500).json({ error });
    }

    console.log({ data });
    return res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));