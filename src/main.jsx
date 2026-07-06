import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { EMBED_URLS } from './reportEmbeds.js'
import './styles.css'

const base = import.meta.env.BASE_URL

const copy = {
  en: {
    nav: ['Value', 'Dashboards', 'Services', 'Experience', 'Contact'],
    heroEyebrow: 'Data Analyst & Business Intelligence Portfolio',
    heroTitle: 'I turn business data into decisions, dashboards and measurable action.',
    heroText:
      'Data analyst based in Lisbon, combining SQL, Power BI, Looker Studio, BigQuery, Excel, Python and business context to help teams understand performance, reduce manual reporting and make better decisions across finance, operations, sales, CRM and management.',
    ctaDashboard: 'View dashboard examples',
    ctaCV: 'Download CV',
    profileTitle: 'Fernando Almeida',
    profileRole: 'Data Analyst · BI Specialist',
    profileNote: 'Available for analytics, BI and reporting opportunities in Portugal or remote.',
    stats: [
      ['5+ yrs', 'data & performance analysis'],
      ['Power BI', 'executive dashboards'],
      ['SQL / BigQuery', 'data modelling & automation']
    ],
    valueTitle: 'How I can help a company',
    valueSubtitle:
      'The goal is not only to build dashboards. The goal is to create a reliable decision system: clean data, relevant KPIs, clear visuals and actions that managers can use.',
    valueCards: [
      ['Executive reporting', 'Build management dashboards that show revenue, cost, margin, targets, gaps and risks in one place.'],
      ['Finance & profitability', 'Transform financial and operational data into margin, budget, forecast, variance and profitability views.'],
      ['Sales & commercial performance', 'Track pipeline, conversion, lead quality, campaign performance, dealer/store/team performance and growth opportunities.'],
      ['Operations & SLA control', 'Monitor workload, response time, backlog, service level, productivity and bottlenecks.'],
      ['Data automation', 'Replace manual Excel work with SQL, Power Query, BigQuery, Python and automated refresh flows.'],
      ['Decision-ready storytelling', 'Turn raw numbers into board-ready analysis, recommendations and next steps.']
    ],
    dashboardsTitle: 'Power BI & Looker Studio dashboard examples',
    dashboardsSubtitle:
      'Below are portfolio-style dashboard concepts designed to look and behave like real BI deliverables. When real Power BI or Looker Studio links are available, the same section can display live embedded reports.',
    dashboardTabs: ['All', 'Power BI', 'Looker Studio'],
    period: 'Period',
    pages: 'Report pages',
    businessUse: 'Business use',
    dataSources: 'Possible data sources',
    decisions: 'Decisions supported',
    deliverable: 'Deliverable',
    embedReady: 'Ready for live embed',
    embedNote: 'Paste a Power BI or Looker Studio embed URL in src/reportEmbeds.js and this preview becomes a live report frame.',
    servicesTitle: 'What a company receives',
    services: [
      ['BI dashboard', 'Power BI or Looker Studio report with clear KPI logic, filters, pages and visual hierarchy.'],
      ['Data model', 'Clean datasets, measures, calculated fields, relationships and documentation.'],
      ['Automation', 'Reduced manual work through scheduled refreshes, SQL queries, Power Query or Python scripts.'],
      ['Insight pack', 'Explanation of what changed, why it changed and what the business should do next.']
    ],
    experienceTitle: 'Experience across business contexts',
    experience: [
      ['Renault Group', 'Data Analyst', '2024 – Current', 'BI, reporting, data extraction, dashboards, KPIs and business analysis across internal teams.'],
      ['Logical Jupiter', 'Data Analyst', '2024', 'Power BI dashboards, SQL Server, ETL processes, Microsoft Fabric and reporting automation.'],
      ['CD Mafra / SL Benfica U-16', 'Performance Data Analyst', '2019 – 2024', 'Performance analysis, dashboards, scouting reports and decision support for coaching staff.']
    ],
    contactTitle: 'Let’s build a dashboard your managers actually use.',
    contactText: 'Open to Data Analyst, BI Analyst, Reporting Analyst and Business Intelligence roles.',
    footer: 'Designed as a premium BI portfolio for business-facing analytics roles.'
  },
  pt: {
    nav: ['Valor', 'Dashboards', 'Serviços', 'Experiência', 'Contacto'],
    heroEyebrow: 'Portfolio de Data Analyst & Business Intelligence',
    heroTitle: 'Transformo dados de negócio em decisões, dashboards e ações mensuráveis.',
    heroText:
      'Data analyst em Lisboa, com SQL, Power BI, Looker Studio, BigQuery, Excel, Python e contexto de negócio para ajudar equipas a perceber performance, reduzir reporting manual e tomar melhores decisões em financeiro, operações, vendas, CRM e gestão.',
    ctaDashboard: 'Ver exemplos de dashboards',
    ctaCV: 'Descarregar CV',
    profileTitle: 'Fernando Almeida',
    profileRole: 'Data Analyst · BI Specialist',
    profileNote: 'Disponível para oportunidades de analytics, BI e reporting em Portugal ou remoto.',
    stats: [
      ['5+ anos', 'análise de dados e performance'],
      ['Power BI', 'dashboards executivos'],
      ['SQL / BigQuery', 'modelação e automação']
    ],
    valueTitle: 'Como posso ajudar uma empresa',
    valueSubtitle:
      'O objetivo não é só criar dashboards. O objetivo é criar um sistema de decisão fiável: dados limpos, KPIs relevantes, visuais claros e ações que a gestão consegue usar.',
    valueCards: [
      ['Reporting executivo', 'Dashboards de gestão com receita, custos, margem, objetivos, desvios e riscos num só lugar.'],
      ['Financeiro e rentabilidade', 'Transformação de dados financeiros e operacionais em margem, orçamento, forecast, desvios e rentabilidade.'],
      ['Performance comercial', 'Acompanhamento de pipeline, conversão, qualidade de leads, campanhas, performance por dealer/loja/equipa e oportunidades.'],
      ['Operações e SLA', 'Monitorização de workload, tempo de resposta, backlog, níveis de serviço, produtividade e bottlenecks.'],
      ['Automação de dados', 'Substituição de trabalho manual em Excel por SQL, Power Query, BigQuery, Python e refresh automático.'],
      ['Storytelling de decisão', 'Transformação de números em análise, recomendações e próximos passos para a gestão.']
    ],
    dashboardsTitle: 'Exemplos de dashboards Power BI & Looker Studio',
    dashboardsSubtitle:
      'Abaixo estão conceitos de dashboard com aspeto e comportamento de entregáveis reais de BI. Quando houver links reais de Power BI ou Looker Studio, esta secção pode mostrar relatórios embebidos ao vivo.',
    dashboardTabs: ['Todos', 'Power BI', 'Looker Studio'],
    period: 'Período',
    pages: 'Páginas do relatório',
    businessUse: 'Uso de negócio',
    dataSources: 'Fontes de dados possíveis',
    decisions: 'Decisões suportadas',
    deliverable: 'Entregável',
    embedReady: 'Pronto para embed real',
    embedNote: 'Cola um URL de embed do Power BI ou Looker Studio em src/reportEmbeds.js e esta pré-visualização passa a ser um relatório real.',
    servicesTitle: 'O que a empresa recebe',
    services: [
      ['Dashboard BI', 'Relatório em Power BI ou Looker Studio com lógica de KPIs, filtros, páginas e hierarquia visual.'],
      ['Modelo de dados', 'Datasets limpos, measures, calculated fields, relações e documentação.'],
      ['Automação', 'Menos trabalho manual com refreshes programados, queries SQL, Power Query ou scripts Python.'],
      ['Pacote de insights', 'Explicação do que mudou, por que mudou e o que o negócio deve fazer a seguir.']
    ],
    experienceTitle: 'Experiência em vários contextos de negócio',
    experience: [
      ['Renault Group', 'Data Analyst', '2024 – Atual', 'BI, reporting, extração de dados, dashboards, KPIs e análise de negócio com equipas internas.'],
      ['Logical Jupiter', 'Data Analyst', '2024', 'Dashboards Power BI, SQL Server, ETL, Microsoft Fabric e automação de reporting.'],
      ['CD Mafra / SL Benfica U-16', 'Performance Data Analyst', '2019 – 2024', 'Análise de performance, dashboards, relatórios de scouting e apoio à decisão técnica.']
    ],
    contactTitle: 'Vamos construir um dashboard que a gestão realmente usa.',
    contactText: 'Disponível para funções de Data Analyst, BI Analyst, Reporting Analyst e Business Intelligence.',
    footer: 'Desenhado como portfolio premium de BI para funções de analytics com foco no negócio.'
  }
}

const reports = [
  {
    id: 'powerbiExecutive',
    tool: 'Power BI',
    title: 'Executive Performance Cockpit',
    ptTitle: 'Cockpit Executivo de Performance',
    accent: '#F2C811',
    pages: ['Overview', 'Revenue', 'Margin', 'Risks'],
    ptPages: ['Visão geral', 'Receita', 'Margem', 'Riscos'],
    kpis: [
      ['Revenue', '€12.8M', '+8.4%'],
      ['EBITDA margin', '18.7%', '+1.9 pp'],
      ['Target gap', '€420K', 'at risk'],
      ['Forecast accuracy', '94.2%', '+3.1 pp']
    ],
    ptKpis: [
      ['Receita', '€12.8M', '+8.4%'],
      ['Margem EBITDA', '18.7%', '+1.9 pp'],
      ['Desvio objetivo', '€420K', 'em risco'],
      ['Precisão forecast', '94.2%', '+3.1 pp']
    ],
    use: 'Board-level view of revenue, costs, margin, targets and forecast gaps.',
    ptUse: 'Visão para gestão de receita, custos, margem, objetivos e desvios de forecast.',
    sources: 'ERP, finance files, CRM/Salesforce, budget files, SQL Server, BigQuery.',
    ptSources: 'ERP, ficheiros financeiros, CRM/Salesforce, orçamento, SQL Server, BigQuery.',
    decisions: 'Where to act first, which business units are below target, where margin is being lost.',
    ptDecisions: 'Onde atuar primeiro, que áreas estão abaixo do objetivo e onde se perde margem.',
    deliverable: 'Power BI executive report with KPI cards, drill-down pages, variance analysis and refresh logic.',
    ptDeliverable: 'Relatório Power BI executivo com KPIs, drill-down, análise de desvios e lógica de refresh.'
  },
  {
    id: 'powerbiFinance',
    tool: 'Power BI',
    title: 'Finance & Profitability Dashboard',
    ptTitle: 'Dashboard Financeiro & Rentabilidade',
    accent: '#F2C811',
    pages: ['P&L', 'Budget vs Actual', 'Cost drivers', 'Profitability'],
    ptPages: ['P&L', 'Orçamento vs real', 'Drivers de custo', 'Rentabilidade'],
    kpis: [
      ['Gross margin', '31.4%', '+2.2 pp'],
      ['OPEX', '€2.1M', '-4.6%'],
      ['Budget variance', '€185K', 'above plan'],
      ['Profit / customer', '€418', '+6.8%']
    ],
    ptKpis: [
      ['Margem bruta', '31.4%', '+2.2 pp'],
      ['OPEX', '€2.1M', '-4.6%'],
      ['Desvio orçamento', '€185K', 'acima plano'],
      ['Lucro / cliente', '€418', '+6.8%']
    ],
    use: 'Finance dashboard for budget control, cost monitoring and profitability analysis.',
    ptUse: 'Dashboard financeiro para controlo orçamental, custos e análise de rentabilidade.',
    sources: 'Accounting exports, ERP, Excel budgets, cost centres, SQL tables.',
    ptSources: 'Exportações contabilísticas, ERP, orçamentos Excel, centros de custo, tabelas SQL.',
    decisions: 'Which cost lines require review, which products or segments are more profitable, where to reduce waste.',
    ptDecisions: 'Que custos rever, que produtos/segmentos são mais rentáveis e onde reduzir desperdício.',
    deliverable: 'Power BI finance dashboard with P&L structure, measures, variance views and management commentary.',
    ptDeliverable: 'Dashboard Power BI financeiro com estrutura P&L, measures, desvios e comentário de gestão.'
  },
  {
    id: 'lookerOperations',
    tool: 'Looker Studio',
    title: 'Operations & SLA Control Room',
    ptTitle: 'Controlo Operacional & SLA',
    accent: '#4285F4',
    pages: ['SLA', 'Backlog', 'Productivity', 'Exceptions'],
    ptPages: ['SLA', 'Backlog', 'Produtividade', 'Exceções'],
    kpis: [
      ['SLA < 1h', '87.6%', '+5.4 pp'],
      ['Open backlog', '1,248', '-12.1%'],
      ['Avg response', '42m', '-18m'],
      ['Exception rate', '3.2%', '-0.8 pp']
    ],
    ptKpis: [
      ['SLA < 1h', '87.6%', '+5.4 pp'],
      ['Backlog aberto', '1,248', '-12.1%'],
      ['Resposta média', '42m', '-18m'],
      ['Taxa exceções', '3.2%', '-0.8 pp']
    ],
    use: 'Operational control dashboard for teams that need daily visibility over workload and bottlenecks.',
    ptUse: 'Dashboard operacional para equipas que precisam de visibilidade diária sobre workload e bottlenecks.',
    sources: 'Google Sheets, BigQuery, CRM exports, ticketing tools, operational logs.',
    ptSources: 'Google Sheets, BigQuery, exportações CRM, ticketing, logs operacionais.',
    decisions: 'Where to allocate resources, which queues are delayed, which exceptions require intervention.',
    ptDecisions: 'Onde alocar recursos, que filas estão atrasadas e que exceções precisam de intervenção.',
    deliverable: 'Looker Studio report with daily refresh, filters, scorecards, tables and exception lists.',
    ptDeliverable: 'Relatório Looker Studio com refresh diário, filtros, scorecards, tabelas e listas de exceções.'
  },
  {
    id: 'lookerMarketing',
    tool: 'Looker Studio',
    title: 'Digital & Lead Performance Dashboard',
    ptTitle: 'Dashboard Digital & Leads',
    accent: '#34A853',
    pages: ['Acquisition', 'Leads', 'Conversion', 'Channels'],
    ptPages: ['Aquisição', 'Leads', 'Conversão', 'Canais'],
    kpis: [
      ['Qualified leads', '8,942', '+14.7%'],
      ['Conversion rate', '11.8%', '+1.4 pp'],
      ['Cost / lead', '€18.60', '-9.3%'],
      ['Best channel', 'Organic', '31% share']
    ],
    ptKpis: [
      ['Leads qualificadas', '8,942', '+14.7%'],
      ['Taxa conversão', '11.8%', '+1.4 pp'],
      ['Custo / lead', '€18.60', '-9.3%'],
      ['Melhor canal', 'Orgânico', '31% share']
    ],
    use: 'Marketing and commercial dashboard to connect traffic, campaigns, leads and sales outcomes.',
    ptUse: 'Dashboard de marketing/comercial para ligar tráfego, campanhas, leads e resultados de venda.',
    sources: 'Google Analytics, Search Console, Google Ads, CRM, Salesforce, spreadsheets.',
    ptSources: 'Google Analytics, Search Console, Google Ads, CRM, Salesforce, folhas de cálculo.',
    decisions: 'Which channels deserve investment, which campaigns generate quality leads, where conversion drops.',
    ptDecisions: 'Que canais merecem investimento, que campanhas geram leads de qualidade e onde cai a conversão.',
    deliverable: 'Looker Studio dashboard with acquisition funnel, channel analysis and lead quality indicators.',
    ptDeliverable: 'Dashboard Looker Studio com funil de aquisição, análise por canal e indicadores de qualidade.'
  }
]

function App() {
  const [lang, setLang] = useState('en')
  const [tool, setTool] = useState('All')
  const [activeReportId, setActiveReportId] = useState('powerbiExecutive')
  const [pageIndex, setPageIndex] = useState(0)
  const [period, setPeriod] = useState('YTD')
  const t = copy[lang]

  const filteredReports = useMemo(() => {
    if (tool === 'All' || tool === 'Todos') return reports
    return reports.filter((r) => r.tool === tool)
  }, [tool])

  const activeReport = reports.find((r) => r.id === activeReportId) || reports[0]
  const activeKpis = lang === 'pt' ? activeReport.ptKpis : activeReport.kpis
  const activePages = lang === 'pt' ? activeReport.ptPages : activeReport.pages
  const embedUrl = EMBED_URLS[activeReport.id]

  const handleTool = (tab) => {
    const normalized = tab === 'Todos' ? 'All' : tab
    setTool(tab)
    const next = normalized === 'All' ? reports[0] : reports.find((r) => r.tool === normalized)
    if (next) setActiveReportId(next.id)
    setPageIndex(0)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Fernando Almeida home">
          <span className="brand-mark">FA</span>
          <span>Fernando Almeida</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {t.nav.map((item, index) => (
            <a key={item} href={['#value', '#dashboards', '#services', '#experience', '#contact'][index]}>{item}</a>
          ))}
        </nav>
        <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}>
          {lang === 'en' ? 'PT' : 'EN'}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-content">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-copy">{t.heroText}</p>
            <div className="hero-actions">
              <a className="button primary" href="#dashboards">{t.ctaDashboard}</a>
              <a className="button ghost" href={`${base}cv-fernando-almeida.pdf`} target="_blank" rel="noreferrer">{t.ctaCV}</a>
            </div>
          </div>

          <aside className="profile-panel" aria-label="Profile card">
            <div className="profile-photo-wrap">
              <img
                className="profile-photo"
                src={`${base}profile.jpg`}
                alt="Fernando Almeida profile"
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = `${base}profile-placeholder.svg`
                }}
              />
            </div>
            <div className="profile-card-text">
              <h2>{t.profileTitle}</h2>
              <p>{t.profileRole}</p>
              <span>{t.profileNote}</span>
            </div>
            <div className="profile-mini-chart" aria-hidden="true">
              {[58, 78, 66, 90, 84, 96].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
            </div>
          </aside>
        </section>

        <section className="metrics-strip" aria-label="Highlights">
          {t.stats.map(([number, label]) => (
            <div key={number} className="metric-item">
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="section-pad value-section" id="value">
          <div className="section-heading narrow">
            <p className="eyebrow">Business value</p>
            <h2>{t.valueTitle}</h2>
            <p>{t.valueSubtitle}</p>
          </div>
          <div className="value-grid">
            {t.valueCards.map(([title, text], index) => (
              <article className="value-card" key={title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad dashboards-section" id="dashboards">
          <div className="section-heading dashboards-heading">
            <div>
              <p className="eyebrow">Power BI · Looker Studio</p>
              <h2>{t.dashboardsTitle}</h2>
              <p>{t.dashboardsSubtitle}</p>
            </div>
            <div className="tool-tabs" role="tablist" aria-label="Dashboard tools">
              {t.dashboardTabs.map((tab) => {
                const active = tool === tab || (tool === 'All' && tab === 'All') || (tool === 'Todos' && tab === 'Todos')
                return <button key={tab} className={active ? 'active' : ''} onClick={() => handleTool(tab)}>{tab}</button>
              })}
            </div>
          </div>

          <div className="dashboard-layout">
            <aside className="report-list" aria-label="Dashboard list">
              {filteredReports.map((report) => (
                <button
                  key={report.id}
                  onClick={() => { setActiveReportId(report.id); setPageIndex(0) }}
                  className={activeReportId === report.id ? 'report-card active' : 'report-card'}
                  style={{ '--accent': report.accent }}
                >
                  <span className="report-tool" style={{ '--accent': report.accent }}>{report.tool}</span>
                  <strong>{lang === 'pt' ? report.ptTitle : report.title}</strong>
                  <small>{lang === 'pt' ? report.ptUse : report.use}</small>
                </button>
              ))}
            </aside>

            <div className="dashboard-main">
              <div className="dashboard-toolbar">
                <div>
                  <span className="tool-badge" style={{ '--accent': activeReport.accent }}>{activeReport.tool}</span>
                  <h3>{lang === 'pt' ? activeReport.ptTitle : activeReport.title}</h3>
                </div>
                <label className="period-select">
                  {t.period}
                  <select value={period} onChange={(event) => setPeriod(event.target.value)}>
                    <option>YTD</option>
                    <option>QTD</option>
                    <option>Last 12 months</option>
                    <option>Custom</option>
                  </select>
                </label>
              </div>

              <div className="report-pages" aria-label={t.pages}>
                {activePages.map((page, index) => (
                  <button key={page} className={pageIndex === index ? 'active' : ''} onClick={() => setPageIndex(index)}>{page}</button>
                ))}
              </div>

              {embedUrl ? (
                <iframe className="live-embed" title={activeReport.title} src={embedUrl} allowFullScreen />
              ) : (
                <DashboardMock report={activeReport} kpis={activeKpis} lang={lang} period={period} page={activePages[pageIndex]} />
              )}

              <div className="dashboard-explainer">
                <InfoBlock label={t.businessUse} value={lang === 'pt' ? activeReport.ptUse : activeReport.use} />
                <InfoBlock label={t.dataSources} value={lang === 'pt' ? activeReport.ptSources : activeReport.sources} />
                <InfoBlock label={t.decisions} value={lang === 'pt' ? activeReport.ptDecisions : activeReport.decisions} />
                <InfoBlock label={t.deliverable} value={lang === 'pt' ? activeReport.ptDeliverable : activeReport.deliverable} />
              </div>

              <div className="embed-note">
                <strong>{t.embedReady}</strong>
                <span>{t.embedNote}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad services-section" id="services">
          <div className="section-heading narrow">
            <p className="eyebrow">Deliverables</p>
            <h2>{t.servicesTitle}</h2>
          </div>
          <div className="services-grid">
            {t.services.map(([title, text]) => (
              <article className="service-card" key={title}>
                <div className="service-icon">✦</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad experience-section" id="experience">
          <div className="section-heading narrow">
            <p className="eyebrow">Experience</p>
            <h2>{t.experienceTitle}</h2>
          </div>
          <div className="timeline">
            {t.experience.map(([company, role, dates, text]) => (
              <article className="timeline-item" key={`${company}-${dates}`}>
                <div>
                  <span>{dates}</span>
                  <h3>{company}</h3>
                  <strong>{role}</strong>
                </div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:fernandoluisdba@gmail.com">fernandoluisdba@gmail.com</a>
            <a className="button ghost" href="https://www.linkedin.com/in/fernando-almeida-b33558301" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>{t.footer}</span>
        <span>© {new Date().getFullYear()} Fernando Almeida</span>
      </footer>
    </div>
  )
}

function InfoBlock({ label, value }) {
  return (
    <div>
      <strong>{label}</strong>
      <p>{value}</p>
    </div>
  )
}

function DashboardMock({ report, kpis, lang, period, page }) {
  const isPower = report.tool === 'Power BI'
  const palette = isPower ? ['#F2C811', '#EAB308', '#8A6F00'] : ['#4285F4', '#34A853', '#FBBC05']

  return (
    <div className={isPower ? 'bi-frame power-frame' : 'bi-frame looker-frame'}>
      <header className="bi-header">
        <div>
          <span>{report.tool} {lang === 'pt' ? 'report' : 'report'}</span>
          <h4>{lang === 'pt' ? report.ptTitle : report.title}</h4>
        </div>
        <div className="bi-filters">
          <span>{period}</span>
          <span>{page}</span>
          <span>{lang === 'pt' ? 'Atualizado hoje' : 'Updated today'}</span>
        </div>
      </header>

      <div className="bi-body">
        <aside className="bi-sidebar">
          <span>{lang === 'pt' ? 'Páginas' : 'Pages'}</span>
          {(lang === 'pt' ? report.ptPages : report.pages).map((p, index) => <i key={p} className={p === page ? 'selected' : ''}>{index + 1}. {p}</i>)}
        </aside>

        <section className="bi-canvas">
          <div className="bi-kpis">
            {kpis.map(([label, value, delta]) => (
              <article key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <em>{delta}</em>
              </article>
            ))}
          </div>

          <div className="visual-grid">
            <div className="visual-card wide">
              <VisualTitle title={lang === 'pt' ? 'Performance mensal vs objetivo' : 'Monthly performance vs target'} />
              <BarChart palette={palette} />
            </div>
            <div className="visual-card">
              <VisualTitle title={lang === 'pt' ? 'Contribuição por área' : 'Contribution by area'} />
              <DonutChart color={palette[0]} />
            </div>
            <div className="visual-card">
              <VisualTitle title={lang === 'pt' ? 'Tendência' : 'Trend'} />
              <LineChart color={palette[0]} />
            </div>
            <div className="visual-card table-card wide">
              <VisualTitle title={lang === 'pt' ? 'Ações recomendadas' : 'Recommended actions'} />
              <table>
                <tbody>
                  {(lang === 'pt' ? [
                    ['Financeiro', 'Rever centros de custo acima do orçamento', 'Alta'],
                    ['Comercial', 'Priorizar canais com maior conversão', 'Média'],
                    ['Operações', 'Reduzir backlog nas filas críticas', 'Alta']
                  ] : [
                    ['Finance', 'Review cost centres above budget', 'High'],
                    ['Sales', 'Prioritise channels with higher conversion', 'Medium'],
                    ['Operations', 'Reduce backlog in critical queues', 'High']
                  ]).map((row) => (
                    <tr key={row.join('-')}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td><span className="priority">{row[2]}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function VisualTitle({ title }) {
  return <div className="visual-title"><strong>{title}</strong><span>⋯</span></div>
}

function BarChart({ palette }) {
  const bars = [48, 64, 58, 76, 70, 88, 82, 94]
  return <div className="bar-chart">{bars.map((bar, i) => <span key={i} style={{ height: `${bar}%`, background: i > 5 ? palette[0] : undefined }} />)}</div>
}

function DonutChart({ color }) {
  return <div className="donut" style={{ '--donut': color }}><strong>68%</strong><span>target</span></div>
}

function LineChart({ color }) {
  return (
    <svg className="line-chart" viewBox="0 0 320 160" role="img" aria-label="Trend line chart">
      <path d="M18 124 C62 98, 72 112, 108 84 S168 68, 206 92 S264 44, 302 36" fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" />
      <path d="M18 124 C62 98, 72 112, 108 84 S168 68, 206 92 S264 44, 302 36 L302 144 L18 144 Z" fill={color} opacity=".12" />
      {[18,108,206,302].map((x, i) => <circle key={i} cx={x} cy={[124,84,92,36][i]} r="6" fill={color} />)}
    </svg>
  )
}

createRoot(document.getElementById('root')).render(<App />)
