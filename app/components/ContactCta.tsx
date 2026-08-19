"use client";

import { useState, FormEvent } from "react";

type Wing = "education" | "hr" | "not-sure";

type FormState = {
  name: string;
  email: string;
  phone: string;
  wing: Wing;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  wing: "not-sure",
  message: ""
};

const wingOptions: { value: Wing; label: string }[] = [
  { value: "education", label: "Education wing — admissions" },
  { value: "hr", label: "HR wing — hiring / staffing" },
  { value: "not-sure", label: "Not sure yet" }
];

export default function ContactCta() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email.";
    if (!values.message.trim()) next.message = "Tell us a little about what you need.";
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // No backend is wired up yet at the Basic-Plan stage — this is where
      // a forms endpoint / CRM webhook drops in during build.
      setStatus("sent");
    }
  }

  if (status === "sent") {
    return (
      <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <span className="hex mx-auto flex h-16 w-16 items-center justify-center bg-amber text-2xl">✓</span>
        <h2 className="mt-6 font-display text-3xl font-bold">Inquiry received.</h2>
        <p className="mt-3 text-ink/70">
          Thanks, {form.name.split(" ")[0]}. This is where a live site would route your message to the{" "}
          {form.wing === "hr" ? "HR wing" : form.wing === "education" ? "Education wing" : "right"} team —
          for this proposal, consider the flow demonstrated end to end.
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setStatus("idle");
          }}
          className="mt-8 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition hover:border-ink/50"
        >
          Send another test inquiry
        </button>
      </section>
    );
  }

  return (
    <section id="contact" className="border-t border-wax-line bg-ink text-wax">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">Next step</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Let's build the Basic Plan.
          </h2>
          <p className="mt-4 max-w-md text-wax/70">
            This form is the same lead-capture pattern the live site will use for both wings — a short,
            low-friction ask that routes by intent instead of one generic "contact us" box.
          </p>
          <div className="mt-10 flex gap-4">
            <span className="hex flex h-10 w-10 shrink-0 items-center justify-center bg-amber text-ink">
              🐝
            </span>
            <p className="text-sm leading-relaxed text-wax/60">
              Every inquiry below is tagged by wing at the point of entry, so the same site quietly does the
              job of two separate landing funnels.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="rounded-3xl bg-wax p-8 text-ink">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm">
              Name
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl border border-wax-line bg-white px-4 py-2.5 text-ink outline-none focus:border-amber-deep"
                placeholder="Priya Sharma"
              />
              {errors.name && <span className="text-xs text-navy">{errors.name}</span>}
            </label>
            <label className="flex flex-col gap-1.5 text-sm">
              Phone <span className="text-ink/40">(optional)</span>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-xl border border-wax-line bg-white px-4 py-2.5 text-ink outline-none focus:border-amber-deep"
                placeholder="+91 98765 43210"
              />
            </label>
          </div>

          <label className="mt-5 flex flex-col gap-1.5 text-sm">
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl border border-wax-line bg-white px-4 py-2.5 text-ink outline-none focus:border-amber-deep"
              placeholder="you@example.com"
            />
            {errors.email && <span className="text-xs text-navy">{errors.email}</span>}
          </label>

          <fieldset className="mt-5">
            <legend className="text-sm">I'm interested in</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {wingOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => setForm({ ...form, wing: opt.value })}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                    form.wing === opt.value
                      ? "border-ink bg-ink text-wax"
                      : "border-wax-line text-ink/65 hover:border-ink/40"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="mt-5 flex flex-col gap-1.5 text-sm">
            Message
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="rounded-xl border border-wax-line bg-white px-4 py-2.5 text-ink outline-none focus:border-amber-deep"
              placeholder="Tell us what you're looking for..."
            />
            {errors.message && <span className="text-xs text-navy">{errors.message}</span>}
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-amber-deep px-6 py-3 text-sm font-medium text-white transition hover:bg-amber-deep/90"
          >
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
