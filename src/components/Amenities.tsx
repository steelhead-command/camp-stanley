const amenityCategories = [
  {
    name: "The Lodge",
    items: [
      { label: "12 Beds", icon: "home" },
      { label: "3 Bathrooms", icon: "droplet" },
      { label: "Full Kitchen", icon: "flame" },
      { label: "Washer & Dryer", icon: "shirt" },
    ],
  },
  {
    name: "Recreation",
    items: [
      { label: "Fishing", icon: "waves" },
      { label: "Archery", icon: "target" },
      { label: "Craft Barn", icon: "store" },
      { label: "DVD Collection", icon: "star" },
    ],
  },
  {
    name: "Outdoors",
    items: [
      { label: "River Access", icon: "waves" },
      { label: "Hiking Trails", icon: "trail" },
      { label: "Fire Pits", icon: "flame" },
      { label: "Wildlife", icon: "paw" },
    ],
  },
];

function AmenityIcon({ icon }: { icon: string }) {
  const cls = "h-5 w-5";
  const props = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, className: cls };

  switch (icon) {
    case "droplet":
      return <svg {...props}><path d="M12 2C8 8 5 11 5 15a7 7 0 0014 0c0-4-3-7-7-13z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "zap":
      return <svg {...props}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "home":
      return <svg {...props}><path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 21v-7h6v7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "wifi":
      return <svg {...props}><path d="M5 12.55a11 11 0 0114 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "trail":
      return <svg {...props}><path d="M4 19l4-4 4 4 4-4 4 4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="8" r="3" /></svg>;
    case "waves":
      return <svg {...props}><path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "flame":
      return <svg {...props}><path d="M12 22c-4 0-7-3-7-7 0-3 2-5 3-7 1 2 3 3 3 3s2-2 2-5c3 3 6 6 6 9 0 4-3 7-7 7z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "target":
      return <svg {...props}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
    case "car":
      return <svg {...props}><path d="M5 17h14M6 17l1-5h10l1 5M8 12l1-4h6l1 4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="7.5" cy="17" r="1.5" /><circle cx="16.5" cy="17" r="1.5" /></svg>;
    case "store":
      return <svg {...props}><path d="M3 9l1.5-5h15L21 9M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9M3 9h18M9 21v-7h6v7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "shirt":
      return <svg {...props}><path d="M16 3h4l2 4-4 2v12H6V9L2 7l2-4h4M8 3a4 4 0 008 0" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "star":
      return <svg {...props}><path d="M12 2l2.09 6.26L20.18 9l-5.09 3.74L16.18 19 12 15.27 7.82 19l1.09-6.26L3.82 9l6.09-.74L12 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "paw":
      return <svg {...props}><circle cx="8" cy="8" r="1.5" /><circle cx="16" cy="8" r="1.5" /><circle cx="6" cy="13" r="1.5" /><circle cx="18" cy="13" r="1.5" /><path d="M12 18c-2 0-4-1.5-4-3.5S10 11 12 11s4 1.5 4 3.5S14 18 12 18z" /></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="10" /></svg>;
  }
}

export default function Amenities() {
  return (
    <div className="grid gap-12 sm:grid-cols-3">
      {amenityCategories.map((cat) => (
        <div key={cat.name}>
          <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-bronze">
            {cat.name}
          </h3>
          <ul className="mt-4 space-y-3">
            {cat.items.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <span className="text-bronze">
                  <AmenityIcon icon={item.icon} />
                </span>
                <span className="text-sm text-cream/80">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
