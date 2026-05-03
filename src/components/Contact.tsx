"use client";

import { useState, type FormEvent } from "react";
import { Clock, MapPin, Phone, ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { INSTAGRAM_URL, buildWhatsAppUrl } from "@/lib/i18n";
import Reveal from "./Reveal";

type Props = { dict: Dictionary };

export default function Contact({ dict }: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    date: "",
    message: "",
  });
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const composeMessage = (): string => {
    const f = dict.contact.fields;
    const lines: string[] = [dict.contact.whatsappIntro, ""];
    if (form.name) lines.push(`${f.name}: ${form.name}`);
    if (form.phone) lines.push(`${f.phone}: ${form.phone}`);
    if (form.treatment) lines.push(`${f.treatment}: ${form.treatment}`);
    if (form.date) lines.push(`${f.date}: ${form.date}`);
    if (form.message) lines.push(`${f.message}: ${form.message}`);
    return lines.join("\n");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = buildWhatsAppUrl(composeMessage());
    setSentUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const setField = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [k]: e.target.value });

  return (
    <section
      id="contact"
      className="border-b border-line scroll-mt-24"
      aria-labelledby="contact-title"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-[11px] tracking-[0.32em] uppercase text-forest">
                {dict.contact.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2
                id="contact-title"
                className="font-serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.1] mt-5 max-w-[16ch]"
              >
                {dict.contact.title}
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-12 space-y-7">
                <li className="flex gap-4">
                  <MapPin size={20} strokeWidth={1.25} className="text-forest mt-1" />
                  <div>
                    <div className="text-[11px] tracking-[0.22em] uppercase text-ink-muted">
                      {dict.contact.addressLabel}
                    </div>
                    <div className="text-[1rem] text-ink mt-1">
                      {dict.contact.address}
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone size={20} strokeWidth={1.25} className="text-forest mt-1" />
                  <div>
                    <div className="text-[11px] tracking-[0.22em] uppercase text-ink-muted">
                      {dict.contact.phoneLabel}
                    </div>
                    <a
                      href={`tel:${dict.contact.phone.replace(/\s/g, "")}`}
                      className="text-[1rem] text-ink mt-1 inline-block hover:text-forest transition-colors"
                    >
                      {dict.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock size={20} strokeWidth={1.25} className="text-forest mt-1" />
                  <div>
                    <div className="text-[11px] tracking-[0.22em] uppercase text-ink-muted">
                      {dict.contact.hoursLabel}
                    </div>
                    <ul className="mt-1 text-[1rem] text-ink space-y-1">
                      {dict.contact.hours.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-12 aspect-[4/3] border border-line overflow-hidden">
                <iframe
                  title="Synergie clinic location"
                  src="https://www.google.com/maps?q=Nalbandyan+23%2F17%2C+Yerevan&output=embed"
                  className="w-full h-full grayscale-[35%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-8 xl:pl-16">
            <Reveal delay={150}>
              <div className="border border-line bg-cream p-8 lg:p-12">
                <h3 className="font-serif text-[1.8rem] leading-tight">
                  {dict.contact.formTitle}
                </h3>
                <p className="mt-3 text-[0.95rem] text-ink-soft max-w-[44ch]">
                  {dict.contact.formSubtitle}
                </p>

                <form className="mt-9 grid sm:grid-cols-2 gap-x-6 gap-y-5" onSubmit={onSubmit}>
                  <Field
                    label={dict.contact.fields.name}
                    value={form.name}
                    onChange={setField("name")}
                    required
                  />
                  <Field
                    label={dict.contact.fields.phone}
                    type="tel"
                    value={form.phone}
                    onChange={setField("phone")}
                    required
                  />
                  <SelectField
                    label={dict.contact.fields.treatment}
                    placeholder={dict.contact.fields.treatmentPlaceholder}
                    value={form.treatment}
                    onChange={setField("treatment")}
                    options={dict.services.items.map((it) => it.name)}
                  />
                  <Field
                    label={dict.contact.fields.date}
                    type="date"
                    value={form.date}
                    onChange={setField("date")}
                  />
                  <div className="sm:col-span-2">
                    <TextAreaField
                      label={dict.contact.fields.message}
                      value={form.message}
                      onChange={setField("message")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="sm:col-span-2 group inline-flex items-center justify-center gap-2 mt-3 px-7 py-4 bg-ink text-cream text-[12px] tracking-[0.22em] uppercase hover:bg-forest transition-colors"
                  >
                    {dict.contact.submit}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </form>

                {sentUrl && (
                  <div className="mt-5 flex flex-col gap-1 text-[13px] text-ink-soft">
                    <span>{dict.contact.sendingNotice}</span>
                    <a
                      href={sentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest underline underline-offset-4 hover:text-ink transition-colors w-fit"
                    >
                      {dict.contact.fallbackLink}
                    </a>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={250}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 group flex items-end justify-between gap-6 border-t border-b border-ink py-12 hover:bg-ink hover:text-cream transition-colors"
              >
                <span className="font-serif text-[clamp(2rem,4vw,3.6rem)] leading-[1] tracking-tight pl-4">
                  {dict.contact.bigCta}
                </span>
                <ArrowUpRight
                  size={42}
                  strokeWidth={1}
                  className="mr-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.22em] uppercase text-ink-muted">
        {props.label}
        {props.required ? " *" : ""}
      </span>
      <input
        type={props.type ?? "text"}
        required={props.required}
        value={props.value}
        onChange={props.onChange}
        className="mt-2 w-full bg-transparent border-b border-ink/30 py-2.5 text-[1rem] text-ink focus:outline-none focus:border-ink transition-colors"
      />
    </label>
  );
}

function TextAreaField(props: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.22em] uppercase text-ink-muted">
        {props.label}
      </span>
      <textarea
        rows={3}
        value={props.value}
        onChange={props.onChange}
        className="mt-2 w-full bg-transparent border-b border-ink/30 py-2.5 text-[1rem] text-ink focus:outline-none focus:border-ink transition-colors resize-none"
      />
    </label>
  );
}

function SelectField(props: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: readonly string[];
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.22em] uppercase text-ink-muted">
        {props.label}
      </span>
      <select
        value={props.value}
        onChange={props.onChange}
        className="mt-2 w-full bg-transparent border-b border-ink/30 py-2.5 text-[1rem] text-ink focus:outline-none focus:border-ink transition-colors appearance-none"
      >
        <option value="">{props.placeholder}</option>
        {props.options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
