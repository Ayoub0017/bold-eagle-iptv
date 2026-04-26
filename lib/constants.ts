import type { NavItem, PricingPlan, Testimonial, BlogPost, Feature, FAQ } from "@/types";

export const WHATSAPP_NUMBER = "+33753820307";
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

export const PLAN_WHY_CHOOSE: Record<string, { title: string; description: string }[]> = {
  "3-months": [
    { title: "Ideal for Discovery", description: "Test the full Bald Eagle Streamz experience without a long commitment. Perfect for exploring our catalog before choosing a longer plan." },
    { title: "Maximum Flexibility", description: "Renew, switch plans, or stop at any time after your period ends. No hidden fees, no auto-renewals." },
    { title: "Instant Activation", description: "Receive your login credentials within minutes after payment and start streaming your favorite channels immediately." },
  ],
  "6-months": [
    { title: "Better Value per Month", description: "Save over 16% compared to the 3-month plan. At just $8.33/mo, you get premium streaming at a fraction of the cost." },
    { title: "4K Ultra HD Included", description: "Unlike the Starter plan, the 6-month tier unlocks 4K quality streaming for the sharpest picture on any screen." },
    { title: "Anti-Freeze Technology", description: "Enjoy uninterrupted streaming powered by our anti-freeze server infrastructure — no buffering, no lag, even during peak hours." },
  ],
  "12-months": [
    { title: "Most Popular Choice", description: "Chosen by the majority of our subscribers for the ideal balance of savings and commitment. Our best-selling plan for a reason." },
    { title: "Catch-Up TV (7 Days)", description: "Missed a show? No problem. Rewind and watch any program from the last 7 days on supported channels." },
    { title: "Priority 24/7 Support", description: "Skip the queue with priority access to our expert support team. Average response time under 5 minutes." },
  ],
  "24-months": [
    { title: "Maximum Savings", description: "At just $5.42/mo, the Ultimate plan offers the lowest cost per month — saving you over 45% compared to the Starter plan." },
    { title: "30-Day Catch-Up TV", description: "Extended catch-up lets you rewind up to 30 days of programming. Never miss a game, episode, or breaking news." },
    { title: "Early Access to Features", description: "Be the first to try new features, channels, and improvements before they roll out to all subscribers." },
  ],
};

export const PLAN_FAQS: Record<string, FAQ[]> = {
  "3-months": [
    { id: "p3-1", question: "Is the 3-month plan really no-commitment?", answer: "Yes, completely. There is no contract, no auto-renewal, and no hidden fees. At the end of your 3 months, you freely choose whether to renew or not." },
    { id: "p3-2", question: "Can I upgrade to a longer plan later?", answer: "Absolutely. When your 3-month subscription expires, you can easily upgrade to a 6, 12, or 24-month plan and benefit from a lower monthly rate." },
    { id: "p3-3", question: "What video quality is included?", answer: "The 3-month plan includes HD and Full HD quality. For 4K Ultra HD streaming, we recommend upgrading to the 6-month plan or higher." },
    { id: "p3-4", question: "What devices can I use?", answer: "Your subscription works on all devices: Smart TVs (Samsung, LG, Sony), iOS/Android phones and tablets, Amazon Fire Stick, PC/Mac, and any IPTV-compatible device." },
    { id: "p3-5", question: "How fast is the activation?", answer: "After payment confirmation, you receive your login credentials via WhatsApp or email within minutes. Our team will guide you through setup on your device." },
  ],
  "6-months": [
    { id: "p6-1", question: "How much do I save compared to the 3-month plan?", answer: "The 6-month plan costs $8.33/mo vs $10/mo on the 3-month plan — that's a 17% saving, plus you unlock 4K streaming and Anti-Freeze technology." },
    { id: "p6-2", question: "Is 4K streaming included?", answer: "Yes! The 6-month plan includes HD, Full HD, and 4K Ultra HD quality. You'll need a 25+ Mbps internet connection for the best 4K experience." },
    { id: "p6-3", question: "What is Anti-Freeze technology?", answer: "Anti-Freeze is our proprietary server technology that eliminates buffering and stream drops. It automatically routes your connection through the fastest available server." },
    { id: "p6-4", question: "Can I switch devices during my subscription?", answer: "Yes. While only 1 device can stream at a time, you can freely switch between any supported devices — Smart TV, phone, tablet, Fire Stick, PC, etc." },
    { id: "p6-5", question: "What happens when my 6 months expire?", answer: "You'll receive a reminder email 7 days before expiration. There is no auto-renewal — you choose whether to renew at the same rate or upgrade to a longer plan." },
  ],
  "12-months": [
    { id: "p12-1", question: "Why is the 12-month plan the most popular?", answer: "It offers the ideal balance of savings ($6.67/mo) and features — including 4K, Anti-Freeze, 7-day Catch-Up TV, and priority 24/7 support. Most subscribers find it's the sweet spot." },
    { id: "p12-2", question: "What is Catch-Up TV?", answer: "Catch-Up TV lets you rewind and watch programs you missed from the last 7 days on supported channels. It's like having a built-in DVR without any extra hardware." },
    { id: "p12-3", question: "What does priority support mean?", answer: "Priority support means your tickets and chat messages are handled first. Average response time is under 5 minutes, compared to 15 minutes on standard support." },
    { id: "p12-4", question: "Can I get a refund if I'm not satisfied?", answer: "We offer a free 24-hour trial before purchase. Refund requests after subscription are reviewed case by case. We're confident you'll love the service." },
    { id: "p12-5", question: "Is the EPG guide included?", answer: "Yes. The electronic program guide is included with all plans. It shows you what's currently airing and upcoming programs up to 7 days in advance." },
  ],
  "24-months": [
    { id: "p24-1", question: "How much do I save with the 24-month plan?", answer: "At $5.42/mo ($130 total), you save over 45% compared to the 3-month plan's $10/mo rate. It's by far the best value we offer." },
    { id: "p24-2", question: "What is 30-day Catch-Up TV?", answer: "Extended Catch-Up lets you go back up to 30 days on supported channels. Whether you missed a game last weekend or a show from 3 weeks ago, it's all available." },
    { id: "p24-3", question: "What does Early Access to Features include?", answer: "As an Ultimate subscriber, you'll be first to try new channels, UI improvements, and features as we develop them — before they roll out to other tiers." },
    { id: "p24-4", question: "What if I want to cancel before 24 months?", answer: "There's no lock-in or penalty. While we don't offer prorated refunds, you can simply not renew. You'll continue to have access until your period ends." },
    { id: "p24-5", question: "Do I get VIP support?", answer: "Yes. Ultimate subscribers get VIP support with a dedicated priority queue, average response under 5 minutes, and extended troubleshooting assistance." },
  ],
};
