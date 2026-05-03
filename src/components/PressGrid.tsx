type Press = {
  id: string
  title: string
  category: string
}

export default function PressGrid({ presses }: { presses: Press[] }) {
  const visible = presses.slice(0, 24)
  return (
    <section className="section-shell" aria-labelledby="press-grid-title">
      <div className="section-head">
        <h1 id="press-grid-title">전체 언론사</h1>
        <div className="pagination" aria-hidden="true">
          <span className="chevron">‹</span>
          <span className="page-indicator">1 / 3</span>
          <span className="chevron">›</span>
        </div>
      </div>

      <div className="press-grid" role="presentation" aria-label="언론사 그리드 미리보기">
        {visible.map((press, index) => (
          <button key={press.id} className="press-cell" type="button">
            <span className="press-category">{press.category}</span>
            <span className="press-name">{press.title}</span>
            <span className="press-meta">{String(index + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
