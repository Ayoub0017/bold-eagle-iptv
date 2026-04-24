import React from "react";

const DEVICES = [
  {
    label: "Smart TV",
    brands: "Samsung · LG · Sony",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden>
        <rect x="4" y="6" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 34v6M32 34v6M12 40h24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="10" y="12" width="28" height="16" rx="1.5" fill="currentColor" opacity="0.1" />
      </svg>
    ),
  },
  {
    label: "Android & iOS",
    brands: "Phone · Tablet",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden>
        <rect x="13" y="3" width="22" height="42" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="24" cy="39" r="2" fill="currentColor" opacity="0.5" />
        <path d="M20 7h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="17" y="12" width="14" height="20" rx="1" fill="currentColor" opacity="0.1" />
      </svg>
    ),
  },
  {
    label: "Fire Stick",
    brands: "Amazon Fire TV",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden>
        <rect x="6" y="16" width="28" height="16" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M34 24h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="39" cy="24" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M16 22h10M16 26h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    label: "Android Box",
    brands: "Nvidia Shield · MAG",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden>
        <rect x="6" y="14" width="36" height="22" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M18 36v6M30 36v6M14 42h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="25" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M14 22h10M14 28h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    label: "PC & Mac",
    brands: "Windows · macOS",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden>
        <rect x="4" y="6" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 34l-4 8M32 34l4 8M12 42h24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="10" y="12" width="28" height="16" rx="1.5" fill="currentColor" opacity="0.1" />
        <circle cx="24" cy="20" r="4" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: "VLC & Kodi",
    brands: "Any IPTV Player",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden>
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20 17l12 7-12 7V17z" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
];

export function DevicesSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--bg-surface)] section-dark" aria-label="Supported devices">
      <div className="container-box">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
            Compatibility
          </p>
          <h2 className="heading-display heading-2 text-balance mb-4">
            Works on all your devices
          </h2>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed">
            One subscription. Every screen. Set up in minutes on any device you already own —
            no hardware upgrades required.
          </p>
        </div>

        {/* Device grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 mb-14">
          {DEVICES.map(({ label, brands, icon }) => (
            <div
              key={label}
              className="card flex flex-col items-center gap-3 p-5 text-center group hover:border-[var(--accent)] transition-colors"
            >
              <div className="text-[var(--accent)] transition-transform duration-200 group-hover:scale-110">
                {icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">{label}</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">{brands}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--bg-card)] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-xl)] bg-[var(--accent-muted)] text-[var(--accent)]">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">1 active connection per subscription</p>
              <p className="text-xs text-[var(--text-secondary)]">Use on any supported device — switch freely between them anytime</p>
            </div>
          </div>
          <p className="text-xs text-[var(--text-muted)] sm:text-right shrink-0">
            Compatible with M3U, Xtream Codes & all major IPTV apps
          </p>
        </div>
      </div>
    </section>
  );
}
