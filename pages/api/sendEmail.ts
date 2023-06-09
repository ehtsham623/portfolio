import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = req.body;
    const msgToClient = {
      to: "ehtshamulhaqat@gmail.com",
      from: "ehtshamulhaqat@gmail.com",
      subject: "ehthsam.live",
      text: "Contact received",
      html: `<strong>Contact received</strong>
      <div>----------------</div>
      <strong>${name}</strong>
      <div>${email}</div>  
      <div>${message}</div>`,
    };
    const msgToUser = {
      to: { email },
      from: "ehtshamulhaqat@gmail.com",
      subject: "ehthsam.live",
      text: "Contact created",
      html: `Hi! <strong> ${name}</strong>
      <div>I have received your message "${message}"</div>
      <br></br>
      <br></br>
      <div>Thanks for connecting, I'll be in touch with you soon.</div>`,
    };
    try {
      await sgMail.send(msgToClient);
      await sgMail.send(msgToUser);
      res
        .status(200)
        .send({ response: "Email sent successfully", success: true });
    } catch (error) {
      res.status(500).send({ response: "Error sending email", success: false });
    }
  }
};
