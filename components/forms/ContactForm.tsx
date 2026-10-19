"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  type ContactFormData,
} from "@/lib/contactSchema";
import { siteConfig } from "@/config/site.config";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSuccess(false);
    setErrorMessage("");

    try {
      const subject = encodeURIComponent(`פנייה חדשה מהאתר - ${data.name}`);
      const body = encodeURIComponent(
        `שם: ${data.name}\nטלפון: ${data.phone}\nאימייל: ${data.email}\n\nהודעה:\n${data.message}`
      );
      window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
      setIsSuccess(true);
      reset();
    } catch {
      setErrorMessage(
        "לא הצלחנו לפתוח את אפליקציית המייל. אפשר לכתוב ישירות למייל שמופיע באתר."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onChange={() => {
        setIsSuccess(false);
        setErrorMessage("");
      }}
      className="space-y-4"
      noValidate
    >
      {/* Name */}
      <div>
        <div className="relative">
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder=" "
            className="peer w-full rounded-md border bg-background px-4 pb-2.5 pt-5 outline-none transition focus:border-primary"
          />

          <label
            htmlFor="name"
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              bg-background
              px-1
              text-sm
              text-muted-foreground
              transition-all
              peer-focus:top-0
              peer-focus:text-xs
              peer-focus:text-primary
              peer-[:not(:placeholder-shown)]:top-0
              peer-[:not(:placeholder-shown)]:text-xs
            "
          >
            שם מלא
          </label>
        </div>

        {errors.name && (
          <p className="mt-1 text-sm text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <div className="relative">
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder=" "
            className="peer w-full rounded-md border bg-background px-4 pb-2.5 pt-5 outline-none transition focus:border-primary"
          />

          <label
            htmlFor="phone"
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              bg-background
              px-1
              text-sm
              text-muted-foreground
              transition-all
              peer-focus:top-0
              peer-focus:text-xs
              peer-focus:text-primary
              peer-[:not(:placeholder-shown)]:top-0
              peer-[:not(:placeholder-shown)]:text-xs
            "
          >
            טלפון
          </label>
        </div>

        {errors.phone && (
          <p className="mt-1 text-sm text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <div className="relative">
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder=" "
            className="peer w-full rounded-md border bg-background px-4 pb-2.5 pt-5 outline-none transition focus:border-primary"
          />

          <label
            htmlFor="email"
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              bg-background
              px-1
              text-sm
              text-muted-foreground
              transition-all
              peer-focus:top-0
              peer-focus:text-xs
              peer-focus:text-primary
              peer-[:not(:placeholder-shown)]:top-0
              peer-[:not(:placeholder-shown)]:text-xs
            "
          >
            אימייל
          </label>
        </div>

        {errors.email && (
          <p className="mt-1 text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <div className="relative">
          <textarea
            id="message"
            rows={3}
            {...register("message")}
            placeholder=" "
            className="peer w-full resize-none rounded-md border bg-background px-4 pb-2.5 pt-5 outline-none transition focus:border-primary"
          />

          <label
            htmlFor="message"
            className="
              pointer-events-none
              absolute
              right-4
              top-5
              bg-background
              px-1
              text-sm
              text-muted-foreground
              transition-all
              peer-focus:top-0
              peer-focus:text-xs
              peer-focus:text-primary
              peer-[:not(:placeholder-shown)]:top-0
              peer-[:not(:placeholder-shown)]:text-xs
            "
          >
            הודעה
          </label>
        </div>

        {errors.message && (
          <p className="mt-1 text-sm text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "שולח..." : "שליחת פרטים"}
      </button>

      {/* Success */}
      {isSuccess && (
        <div
          role="status"
          className="rounded-md bg-primary/10 px-4 py-2.5 text-center text-sm font-medium text-primary"
        >
          נפתחה הודעת מייל חדשה. שלחו אותה כדי להשלים את הפנייה.
        </div>
      )}

      {/* Error */}
      {errorMessage && (
        <div
          role="alert"
          className="rounded-md bg-destructive/10 px-4 py-2.5 text-center text-sm font-medium text-destructive"
        >
          {errorMessage}
        </div>
      )}
    </form>
  );
}