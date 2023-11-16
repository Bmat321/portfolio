import Error from "next/error";

export const SendContactForm = async (data) => {
  await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json({ message: "Message sent successfully" });
  });
};
