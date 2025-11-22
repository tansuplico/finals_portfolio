"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function validate() {
    if (!form.name || !form.email || !form.message) return false;
    return /\S+@\S+\.\S+/.test(form.email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      setStatus({
        type: "error",
        message: "Please complete required fields with a valid email.",
      });
      return;
    }

    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:you@example.com?subject=${encodeURIComponent(
      form.subject || "Portfolio contact"
    )}&body=${encodeURIComponent(body)}`;

    setStatus({ type: "info", message: "Opening your email client..." });
    window.location.href = mailto;
  }

  return (
    <div className="w-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
        Contact Me
      </h1>{" "}
      <p className="mt-2 text-slate-300">Feel free to reach out</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm text-slate-300">Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 input"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-300">Email *</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 input"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-300">Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="mt-1 input"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-300">Message *</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="mt-1 input"
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-5 py-2 bg-[#8000FF] hover:bg-[#9600ff] text-white rounded-md shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            Send
          </button>
        </div>

        {status && (
          <div
            className={`mt-2 text-sm ${
              status.type === "error" ? "text-red-600" : "text-green-400"
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
      <div className="mt-6 text-sm text-slate-300">
        <p>
          Or email me directly at{" "}
          <a href="tsuplico772@gmail.com" className="underline text-slate-200">
            tsuplico772@gmail.com
          </a>
        </p>
        <p className="mt-2">
          GitHub:{" "}
          <a
            href="https://github.com/tansuplico"
            className="underline text-slate-200"
          >
            github.com/tansuplico
          </a>
          · LinkedIn:{" "}
          <a href="#" className="underline text-slate-200">
            linkedin.com/in/tansuplico
          </a>
        </p>
      </div>
    </div>
  );
}
