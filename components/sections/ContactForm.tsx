"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card p-8 flex flex-col items-center gap-4 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--success-muted)]">
          <CheckCircle className="h-7 w-7 text-[var(--success)]" />
        </div>
        <h3 className="text-xl font-semibold text-[var(--text-primary)]">
          Message Sent!
        </h3>
        <p className="text-sm text-[var(--text-secondary)] max-w-sm">
          Thanks for reaching out. Our support team will respond within 2 hours during business hours.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-6 md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
        {/* Name */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="John Smith"
            {...register("name")}
            className={cn(errors.name && "border-[var(--error)]")}
          />
          {errors.name && (
            <p className="text-xs text-[var(--error)]">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className={cn(errors.email && "border-[var(--error)]")}
          />
          {errors.email && (
            <p className="text-xs text-[var(--error)]">{errors.email.message}</p>
          )}
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            type="text"
            placeholder="Setup help / Billing question / Other"
            {...register("subject")}
            className={cn(errors.subject && "border-[var(--error)]")}
          />
          {errors.subject && (
            <p className="text-xs text-[var(--error)]">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Describe your question or issue in detail..."
            rows={5}
            {...register("message")}
            className={cn(errors.message && "border-[var(--error)]")}
          />
          {errors.message && (
            <p className="text-xs text-[var(--error)]">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full mt-1"
        >
          {isSubmitting ? (
            "Sending…"
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
