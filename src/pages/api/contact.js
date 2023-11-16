import { sendMail } from "@/app/services/mail-service";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const data = req.body;

    if (!data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: "Bad request" });
    }
    try {
      await sendMail({
        email: data.email,
        subject: data.subject,
        message: data.message,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      res.status(200).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
}
