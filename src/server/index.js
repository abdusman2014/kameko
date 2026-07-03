// import express from "express";
// import cors from "cors";
// import { Resend } from "resend";
// import "dotenv/config";

// const app = express();
// const resend = new Resend(process.env.RESEND_API_KEY);

// app.use(cors());
// app.use(express.json());

// app.post("/api/send-enquiry", async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ error: "Missing required fields" });
//   }

//   try {
//     const { data, error } = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["delivered@resend.dev"],
//       subject: `New Enquiry from ${name}`,
//       html: `<strong>${name}</strong> (${email}) says:<br/>${message}`,
//     });

//     if (error) {
//       console.error({ error });
//       return res.status(500).json({ error });
//     }

//     console.log({ data });
//     return res.status(200).json({ data });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Failed to send email" });
//   }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));