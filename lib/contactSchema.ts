import { z } from "zod";

const phoneSchema = z
  .string()
  .trim()
  .min(1, "נא להזין מספר טלפון תקין.")
  .max(40, "נא להזין מספר טלפון תקין.")
  .regex(/^\+?[0-9][0-9\s().-]*$/, "נא להזין מספר טלפון תקין.")
  .refine((value) => {
    const digitCount = value.replace(/\D/g, "").length;
    return digitCount >= 7 && digitCount <= 15;
  }, "נא להזין מספר טלפון תקין.");

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "נא להזין שם מלא.")
    .max(120, "השם ארוך מדי."),
  business: z.string().trim().max(120, "שם העסק ארוך מדי.").optional().default(""),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "נא להזין כתובת מייל תקינה.")
    .max(254, "נא להזין כתובת מייל תקינה.")
    .email("נא להזין כתובת מייל תקינה."),
  phone: phoneSchema,
  website: z.string().max(0, "הבקשה אינה תקינה.").optional().default(""),
});

export type ContactFormInput = z.input<typeof contactSchema>;
export type ContactFormData = z.output<typeof contactSchema>;
