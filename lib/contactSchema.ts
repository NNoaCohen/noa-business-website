import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "יש להזין שם מלא"),

  phone: z
    .string()
    .min(9, "יש להזין מספר טלפון תקין"),

  email: z
    .string()
    .email("יש להזין כתובת אימייל תקינה")
    .or(z.literal("")),

  message: z
    .string()
    .max(500, "ההודעה יכולה להכיל עד 500 תווים")
    .optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;