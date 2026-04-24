import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { FAQ } from "@/types";

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

export function FAQAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know before subscribing.",
}: FAQAccordionProps) {
  return (
    <section className="py-20 md:py-28" aria-label="FAQ">
      <div className="container-box">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
              FAQ
            </p>
            <h2 className="heading-display heading-2 text-balance mb-4">{title}</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">{subtitle}</p>
          </div>

          {/* Accordion */}
          <div className="card px-6 md:px-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
