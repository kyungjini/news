import { useState } from 'react'
import PressWordmark from './PressWordmark'

type Press = {
  id: string
  title: string
  category: string
}

export default function PressGrid({ presses }: { presses: Press[] }) {
  const perPage = 24
  const total = presses.length
  const totalPages = Math.max(1, Math.ceil(total / perPage))
  const [page, setPage] = useState(0)
  const [subs, setSubs] = useState<Record<string, boolean>>({})

  const start = page * perPage
  const visible = presses.slice(start, start + perPage)

  function toggleSub(id: string) {
    setSubs((s) => ({ ...s, [id]: !s[id] }))
  }

  function getWordmarkProps(press: Press) {
    const titleLength = press.title.length

    return {
      family: press.category === 'MAGAZINE' ? 'serif' : 'sans',
      italic: press.category === 'IT' || /News/i.test(press.title),
      weight: titleLength > 10 ? 500 : 700,
      tracking: titleLength > 12 ? 'tight' : titleLength > 8 ? 'normal' : 'wide',
      size: titleLength > 10 ? 'sm' : 'md',
    } as const
  }

  return (
    <section className="section-shell" aria-labelledby="press-grid-title">
      <div className="section-head">
        <h1 id="press-grid-title">전체 언론사</h1>
        <div className="pagination">
          <button
            className="chevron"
            aria-label="previous page"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            ‹
          </button>
          <span className="page-indicator">{page + 1} / {totalPages}</span>
          <button
            className="chevron"
            aria-label="next page"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          >
            ›
          </button>
        </div>
      </div>

      <div className="press-grid" role="presentation" aria-label="언론사 그리드 미리보기">
        {visible.map((press, index) => (
          <div
            key={press.id}
            className="press-cell"
            role="button"
            tabIndex={0}
            aria-label={`${press.title} (${press.category})`}
          >
            <span className="press-category">{press.category}</span>
            <PressWordmark title={press.title} {...getWordmarkProps(press)} />
            <span className="press-meta">{String(start + index + 1).padStart(2, '0')}</span>
            <button
              className="subscribe-pill"
              type="button"
              aria-pressed={!!subs[press.id]}
              aria-label={`${press.title} ${subs[press.id] ? '구독 해제' : '구독'}`}
              onClick={() => toggleSub(press.id)}
            >
              {subs[press.id] ? '구독중' : '구독'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
