"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactContent } from "@/data/contact";
import {
  contactSchema,
  type ContactFormData,
  type ContactFormInput,
} from "@/lib/contactSchema";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInput, unknown, ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", business: "", email: "", phone: "", website: "" },
  });

  const onSubmit = async (values: ContactFormData) => {
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="contact-form__heading">
        <h3>{contactContent.form.title}</h3>
        <p>{contactContent.form.subtitle}</p>
      </div>

      <div className="contact-form__fields">
        <div className="contact-form__field">
          <label htmlFor="contact-name">{contactContent.form.fields.name}</label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            inputMode="text"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <span className="contact-form__field-error" id="contact-name-error">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-business">{contactContent.form.fields.business}</label>
          <input
            id="contact-business"
            type="text"
            autoComplete="organization"
            inputMode="text"
            aria-invalid={Boolean(errors.business)}
            aria-describedby={errors.business ? "contact-business-error" : undefined}
            {...register("business")}
          />
          {errors.business && (
            <span className="contact-form__field-error" id="contact-business-error">
              {errors.business.message}
            </span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-email">{contactContent.form.fields.email}</label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            inputMode="email"
            dir="ltr"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <span className="contact-form__field-error" id="contact-email-error">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-phone">{contactContent.form.fields.phone}</label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            dir="ltr"
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <span className="contact-form__field-error" id="contact-phone-error">
              {errors.phone.message}
            </span>
          )}
        </div>
      </div>

      <input
        className="contact-form__honeypot"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        {...register("website")}
      />

      <p className="contact-form__helper">{contactContent.form.helper}</p>
      <button className="contact-form__submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? contactContent.form.submitting : contactContent.form.submit}
      </button>

      <p
        className={`contact-form__status contact-form__status--${status}`}
        role={status === "error" ? "alert" : "status"}
        aria-live={status === "error" ? "assertive" : "polite"}
        aria-atomic="true"
      >
        {status === "success" && contactContent.form.success}
        {status === "error" && contactContent.form.error}
      </p>
    </form>
  );
}
