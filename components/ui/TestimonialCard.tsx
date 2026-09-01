import { Quote } from "lucide-react";

import type { TestimonialItem } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <article className="rounded-2xl bg-background px-5 py-5 md:px-6">
      <Quote
        className="mb-3 text-primary"
        size={18}
      />

      <p className="text-sm leading-6">
        {testimonial.quote}
      </p>

      <div className="mt-4">
        <p className="text-sm font-semibold">
          {testimonial.name}
        </p>

        {testimonial.role && (
          <p className="mt-1 text-xs text-muted-foreground">
            {testimonial.role}
          </p>
        )}
      </div>
    </article>
  );
}