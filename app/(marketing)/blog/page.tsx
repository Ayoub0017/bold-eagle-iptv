import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { BlogCard } from "@/components/sections/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IPTV Blog — Guides, Tips & Streaming News",
  description:
    "IPTV setup guides, streaming tips, device tutorials, and channel reviews from the Bald Eagle Streamz team. Stay informed and stream smarter.",
  alternates: { canonical: "/blog" },
};

const ALL_CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Guides, tutorials, and news from the world of IPTV streaming."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="py-16 md:py-20" aria-label="Blog posts">
        <div className="container-box">
          {/* Category filter (static display — could be made interactive with a client component) */}
          <div className="mb-10 flex flex-wrap gap-2">
            {ALL_CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={
                  cat === "All"
                    ? "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-[var(--accent)] text-[var(--accent-fg)]"
                    : "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                }
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
