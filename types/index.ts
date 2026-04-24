export interface NavItem {
  label: string;
  href: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  perMonth: number;
  description: string;
  features: string[];
  popular?: boolean;
  bestValue?: boolean;
  badge?: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
