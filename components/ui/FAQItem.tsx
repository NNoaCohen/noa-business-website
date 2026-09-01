"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import type { FAQItem as FAQItemType } from "@/types/faq";

interface FAQItemProps {
  item: FAQItemType;
}

export function FAQItem({ item }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl bg-muted/50">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 px-5 py-4 text-right"
      >
        <span className="text-sm font-semibold md:text-base">
          {item.question}
        </span>

        {isOpen ? (
          <Minus
            size={18}
            className="shrink-0"
          />
        ) : (
          <Plus
            size={18}
            className="shrink-0"
          />
        )}
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}