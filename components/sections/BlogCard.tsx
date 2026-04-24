import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { slug, title, excerpt, category, date, readTime, image } = post;
  const href = `/blog/${slug}`;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="card group flex flex-col overflow-hidden">
      {/* Thumbnail */}
      <div className="relative h-44 w-full bg-[var(--bg-subtle)] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent" aria-hidden />
      </div>

      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-center gap-3">
          <Badge variant="category">{category}</Badge>
          <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
            <Clock className="h-3 w-3" />
            {readTime}
          </span>
        </div>

        <h3 className="text-base font-semibold leading-snug text-[var(--text-primary)] text-balance group-hover:text-[var(--accent)] transition-colors">
          <Link href={href} className="stretched-link">
            {title}
          </Link>
        </h3>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-[var(--border)] mt-auto">
          <time
            dateTime={date}
            className="text-xs text-[var(--text-muted)]"
          >
            {formattedDate}
          </time>
          <Link
            href={href}
            className="flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:gap-2 transition-all"
          >
            Read more
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}
