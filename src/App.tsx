import './App.css'

const todayLabel = new Intl.DateTimeFormat('ko-KR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
}).format(new Date())

const tickerItems = [
  '조용한 밀도, 가벼운 인터랙션, 또렷한 정보 계층',
  '언론사 워드마크는 이미지가 아니라 타이포그래피로 표현',
  '한 가지 강조색만 사용해 구독 상태와 진행 상태를 표시',
]

const pressItems = [
  '한겨레',
  '매일경제',
  '경향신문',
  '서울신문',
  '조선일보',
  '동아일보',
  '중앙일보',
  '한국경제',
  '국민일보',
  '세계일보',
  '연합뉴스',
  '이데일리',
]

const articleItems = [
  '정제된 헤드라인과 보조 정보를 한 화면에서 함께 읽을 수 있게 구성한다.',
  '나열된 목록과 주요 기사 이미지를 분리해 시선 흐름을 안정적으로 만든다.',
  '정확한 여백 규칙을 적용해 촘촘하지만 답답하지 않은 밀도를 유지한다.',
  '탭 전환 시에는 진행 상태가 시각적으로 이어지도록 설계한다.',
  '구독한 언론사와 전체 언론사를 구분해 탐색 맥락을 분명하게 만든다.',
  '접근성 속성과 버튼 의미를 유지하면서도 화면 정보량은 최대화한다.',
]

function App() {
  return (
    <div className="newsstand-app">
      <header className="newsstand-header">
        <div className="brand" aria-label="뉴스스탠드">
          <span className="brand-mark" aria-hidden="true">
            신문
          </span>
          <span className="brand-title">뉴스스탠드</span>
        </div>
        <p className="header-date">{todayLabel}</p>
      </header>

      <section className="ticker" aria-label="알림 배너">
        <div className="ticker-track">
          {tickerItems.map((item) => (
            <span key={item} className="ticker-item">
              {item}
            </span>
          ))}
        </div>
      </section>

      <main className="newsstand-main">
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
            {pressItems.map((press, index) => (
              <button key={press} className="press-cell" type="button">
                <span className="press-name">{press}</span>
                <span className="press-meta">{index + 1}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="section-shell list-shell" aria-labelledby="opened-press-title">
          <div className="section-head list-head">
            <div>
              <p className="eyebrow">Opened Press</p>
              <h2 id="opened-press-title">구독한 언론사 기사 목록</h2>
            </div>
            <div className="tabs" role="tablist" aria-label="언론사 탭 미리보기">
              <button className="tab is-active" type="button" role="tab" aria-selected="true">
                주요 기사
              </button>
              <button className="tab" type="button" role="tab" aria-selected="false">
                최신 기사
              </button>
              <button className="tab" type="button" role="tab" aria-selected="false">
                구독 현황
              </button>
            </div>
          </div>

          <div className="list-layout">
            <article className="featured-card">
              <p className="featured-kicker">오늘의 대표 기사</p>
              <h3>뉴스스탠드 화면의 밀도와 구조를 정돈한다</h3>
              <p>
                지금 단계에서는 시각적 토대만 먼저 만들고, 이후 단계에서 상호작용과
                애니메이션을 한 개씩 추가한다.
              </p>
            </article>

            <ol className="article-list">
              {articleItems.map((article, index) => (
                <li key={article}>
                  <span className="article-index">0{index + 1}</span>
                  <p>{article}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App