export const SITE_NAME = "Bald Eagle Streamz";
export const SITE_URL = "https://baldeaglestreamz.com"; // Replace with your actual domain

type SchemaObject = Record<string, any>;

/**
 * Generate WebSite schema
 */
export function generateWebSiteSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate Organization schema with ContactPoint
 */
export function generateOrganizationSchema(sameAs?: string[]): SchemaObject {
  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33753820307", // WhatsApp Number
      contactType: "customer service",
      availableLanguage: ["English", "French"],
    },
  };

  if (sameAs && sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  return schema;
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema(
  title: string,
  description: string,
  url: string,
  type: "WebPage" | "ContactPage" | "AboutPage" | "FAQPage" = "WebPage"
): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description: description,
    url: url,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Product schema
 */
export function generateProductSchema({
  name,
  description,
  price,
  currency = "USD",
  url,
  imageUrl,
  sku,
  reviews = [],
}: {
  name: string;
  description: string;
  price: number | string;
  currency?: string;
  url: string;
  imageUrl?: string;
  sku?: string;
  reviews?: { author: string; reviewBody: string; ratingValue: number }[];
}): SchemaObject {
  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    url: url,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    offers: {
      "@type": "Offer",
      url: url,
      priceCurrency: currency,
      price: price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: SITE_NAME,
      },
    },
  };

  if (imageUrl) schema.image = imageUrl;
  if (sku) schema.sku = sku;

  if (reviews.length > 0) {
    const totalRating = reviews.reduce((sum, r) => sum + r.ratingValue, 0);
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: (totalRating / reviews.length).toFixed(1),
      reviewCount: reviews.length,
    };
    schema.review = reviews.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.ratingValue,
      },
      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewBody: r.reviewBody,
    }));
  }

  return schema;
}

/**
 * Generate Service schema
 */
export function generateServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: url,
  };
}

/**
 * Generate Blog schema
 */
export function generateBlogSchema(url: string, description: string): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    description: description,
    url: url,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
    },
  };
}

/**
 * Generate BlogPosting schema
 */
export function generateBlogPostingSchema({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}): SchemaObject {
  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName || SITE_NAME, // Default to SITE_NAME if author isn't provided
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
    },
  };

  if (imageUrl) schema.image = imageUrl;

  return schema;
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
