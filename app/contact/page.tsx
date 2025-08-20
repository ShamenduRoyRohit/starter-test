'use client';
import { useState } from "react";

export const metadata = { title: "Contact" };

export default function Contact() {
  const [status, setStatus] = useState<null | string>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("Sending...");
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    });
    const data = await res.json();
    setStatus(data.message);
    if (res.ok) form.reset();
  }

  return (
    <div className="container-narrow">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <input name="name" required placeholder="Your name" className="w-full rounded-2xl border p-3" />
        <input name="email" required type="email" placeholder="Your email" className="w-full rounded-2xl border p-3" />
        <textarea name="message" required placeholder="How can we help?" rows={5} className="w-full rounded-2xl border p-3" />
        <button className="btn btn-primary" type="submit">Send</button>
        {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
      </form>
    </div>
  );
}
