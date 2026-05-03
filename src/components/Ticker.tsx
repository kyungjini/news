export default function Ticker({ items }: { items: string[] }) {
  return (
    <section className="ticker" aria-label="알림 배너">
      <div className="ticker-lane ticker-lane-primary">
        {items.map((item) => (
          <span key={item} className="ticker-item">
            {item}
          </span>
        ))}
      </div>
      <div className="ticker-lane ticker-lane-secondary" aria-hidden="true">
        {items.map((item) => (
          <span key={`${item}-clone`} className="ticker-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
