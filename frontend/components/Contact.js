import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  // Default to localhost if NEXT_PUBLIC_API_BASE_URL is not set
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`${API_BASE}/api/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("❌ Error sending message:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="section-title">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto card p-6 space-y-4"
      >
        <input
          className="w-full p-3 rounded-xl bg-black/40 border border-gray-700"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full p-3 rounded-xl bg-black/40 border border-gray-700"
          placeholder="Your Email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          className="w-full p-3 rounded-xl bg-black/40 border border-gray-700"
          placeholder="Your Message"
          rows="5"
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn justify-center"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-400">✅ Thanks! I’ll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="text-red-400">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>

      <div className="text-center mt-6 text-gray-400">
        Or email me at{" "}
        <a className="link" href=" workwitharsalan24.7@gmail.com">
          workwitharsalan24.7@gmail.com
        </a>
      </div>
    </section>
  );
}
