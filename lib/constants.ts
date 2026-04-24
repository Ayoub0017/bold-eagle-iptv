import type { NavItem, PricingPlan, Testimonial, BlogPost, Feature, FAQ } from "@/types";

export const WHATSAPP_NUMBER = "+1234567890"; // TODO: Replace with real WhatsApp number
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Subscriptions", href: "/subscriptions" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "15,000+", label: "Live Channels" },
  { value: "50,000+", label: "Movies & Series" },
  { value: "50+", label: "Countries" },
  { value: "24/7", label: "Live Support" },
];

export const FEATURES: Feature[] = [
  {
    id: "hd-4k",
    icon: "Monitor",
    title: "HD & 4K Quality",
    description:
      "Stream your favorite channels and movies in stunning HD and 4K resolution with zero buffering.",
  },
  {
    id: "channels",
    icon: "Tv",
    title: "15,000+ Live Channels",
    description:
      "Access thousands of live channels from around the world — sports, news, entertainment, and more.",
  },
  {
    id: "vod",
    icon: "Film",
    title: "Massive VOD Library",
    description:
      "Explore 50,000+ on-demand movies and series updated daily with the latest releases.",
  },
  {
    id: "multi-device",
    icon: "Smartphone",
    title: "Multi-Device Support",
    description:
      "Watch on Smart TV, Android, iOS, FireStick, MAG, PC, and more — up to 5 devices simultaneously.",
  },
  {
    id: "epg",
    icon: "CalendarDays",
    title: "Full EPG Guide",
    description:
      "Never miss a show with the electronic program guide — plan your viewing up to 7 days ahead.",
  },
  {
    id: "support",
    icon: "HeadphonesIcon",
    title: "24/7 Live Support",
    description:
      "Our expert support team is available around the clock to assist you via chat, email, or ticket.",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "3-months",
    name: "Starter",
    duration: "3 Months",
    price: 30,
    perMonth: 10,
    description: "Perfect for trying out Bald Eagle Streamz",
    features: [
      "15,000+ Live Channels",
      "50,000+ VOD Content",
      "HD & FHD Quality",
      "1 Active Connection",
      "EPG Guide Included",
      "Email Support",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/subscriptions/3-months",
  },
  {
    id: "6-months",
    name: "Value",
    duration: "6 Months",
    price: 50,
    perMonth: 8.33,
    description: "Great value for consistent viewers",
    features: [
      "15,000+ Live Channels",
      "50,000+ VOD Content",
      "HD, FHD & 4K Quality",
      "1 Active Connection",
      "EPG Guide Included",
      "Priority Support",
      "Anti-Freeze Technology",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/subscriptions/6-months",
  },
  {
    id: "12-months",
    name: "Premium",
    duration: "12 Months",
    price: 80,
    perMonth: 6.67,
    description: "Our most popular plan for full-year access",
    features: [
      "15,000+ Live Channels",
      "50,000+ VOD Content",
      "HD, FHD & 4K Quality",
      "1 Active Connection",
      "EPG Guide Included",
      "24/7 Priority Support",
      "Anti-Freeze Technology",
      "Catch-Up TV (7 Days)",
    ],
    popular: true,
    badge: "Most Popular",
    ctaLabel: "Get Premium",
    ctaHref: "/subscriptions/12-months",
  },
  {
    id: "24-months",
    name: "Ultimate",
    duration: "24 Months",
    price: 130,
    perMonth: 5.42,
    description: "Maximum savings for long-term subscribers",
    features: [
      "15,000+ Live Channels",
      "50,000+ VOD Content",
      "HD, FHD & 4K Quality",
      "1 Active Connection",
      "EPG Guide Included",
      "24/7 VIP Support",
      "Anti-Freeze Technology",
      "Catch-Up TV (30 Days)",
      "Early Access to New Features",
    ],
    bestValue: true,
    badge: "Best Value",
    ctaLabel: "Get Ultimate",
    ctaHref: "/subscriptions/24-months",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Switched to Bald Eagle Streamz 8 months ago and haven't looked back. The picture quality is incredible — my sports channels are crystal clear and there's never any lag during live games.",
    author: "Marcus T.",
    location: "United Kingdom",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "I was skeptical at first but the free trial won me over. Customer support answered my setup question within minutes. The channel selection is massive — I found channels I didn't even know existed.",
    author: "Aisha R.",
    location: "Canada",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "The VOD library alone is worth the subscription. 50,000 titles with new content added weekly. My whole family watches different things on different devices without any issues.",
    author: "Diego M.",
    location: "Spain",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "I travel for work constantly. Bald Eagle Streamz works seamlessly in every country I've visited. The app is clean, fast, and works on my laptop, phone, and hotel TV with no setup hassle.",
    author: "Priya S.",
    location: "United Arab Emirates",
    rating: 5,
  },
  {
    id: "5",
    quote:
      "Been using IPTV services for years and this is the most stable one I've found. The 24/7 support team actually knows what they're doing. Highly recommend the 12-month plan.",
    author: "James O.",
    location: "Australia",
    rating: 5,
  },
  {
    id: "6",
    quote:
      "The EPG guide is fantastic — I can plan my viewing for the whole week. The catch-up feature saved me when I missed the season finale of my favorite show.",
    author: "Fatima L.",
    location: "France",
    rating: 5,
  },
];

export const BLOG_POSTS: BlogPost[] = [];

export const FAQS: FAQ[] = [
  {
    id: "1",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, Amex), PayPal, and cryptocurrency (Bitcoin, USDT). All transactions are secured with 256-bit SSL encryption.",
  },
  {
    id: "2",
    question: "Can I try before I subscribe?",
    answer:
      "Yes! We offer a 24-hour free trial for new customers. Contact our support team to request your trial credentials. No credit card required.",
  },
  {
    id: "3",
    question: "How many devices can I use simultaneously?",
    answer:
      "All plans include 1 active connection. You can use it on any supported device, but only one device can stream at a time per subscription.",
  },
  {
    id: "4",
    question: "What devices are supported?",
    answer:
      "Bald Eagle Streamz works on Smart TVs (Samsung, LG, Sony), Android and iOS phones and tablets, Amazon Fire Stick, Android TV boxes, MAG devices, PC/Mac via VLC or any IPTV player, and Nvidia Shield.",
  },
  {
    id: "5",
    question: "What internet speed do I need?",
    answer:
      "We recommend at least 10 Mbps for HD streaming and 25 Mbps for 4K. For multiple simultaneous streams, multiply accordingly. A stable wired connection is preferred over Wi-Fi for best performance.",
  },
  {
    id: "6",
    question: "Do subscriptions auto-renew?",
    answer:
      "No. Our subscriptions do not auto-renew by default. You will receive a reminder email 7 days before your subscription expires with a renewal link.",
  },
  {
    id: "7",
    question: "What happens if I have technical issues?",
    answer:
      "Our 24/7 support team is available via live chat, email, and support ticket. We typically respond within 15 minutes and resolve most issues in under an hour.",
  },
  {
    id: "8",
    question: "Can I upgrade my plan mid-subscription?",
    answer:
      "Yes, you can upgrade to a higher plan at any time. The remaining value of your current subscription will be applied as credit toward your new plan.",
  },
];
