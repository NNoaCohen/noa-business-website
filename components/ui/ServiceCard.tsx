import Link from "next/link";

import type { ServiceItem } from "@/types/service";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-background p-5 shadow-sm">
      <div className="mb-4 size-10 rounded-lg bg-primary/20" />

      <h3 className="text-lg font-semibold">
        {service.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
        {service.description}
      </p>

      {service.href && (
        <Link
          href={service.href}
          className="mt-4 inline-flex w-fit items-center justify-center rounded-md border border-primary px-3.5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          לפרטים נוספים
        </Link>
      )}
    </article>
  );
}