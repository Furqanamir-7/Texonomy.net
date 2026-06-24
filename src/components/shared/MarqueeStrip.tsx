interface MarqueeStripProps {
  items: readonly string[];
  className?: string;
}

export function MarqueeStrip({ items, className = "" }: MarqueeStripProps) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-text-secondary font-display font-semibold text-lg"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
