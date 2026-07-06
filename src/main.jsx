import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const base = import.meta.env.BASE_URL

const copy = {
  en: {
    nav: ['Value', 'Dashboards', 'Experience', 'Contact'],
    heroEyebrow: 'Data Specialist, Business Intelligence, Reporting',
    heroTitle: 'Business dashboards, reporting automation and decision support.',
    heroText:
      'Data specialist based in Lisbon, focused on Power BI, Data Studio, SQL, BigQuery, Excel and Python. I help companies replace fragmented spreadsheets with clear dashboards, reliable KPIs and practical insight for finance, operations, commercial teams and management.',
    ctaDashboards: 'See dashboard examples',
    ctaCV: 'Download CV',
    profileName: 'Fernando Almeida',
    profileRole: 'Data Specialist, BI Specialist',
    profileDescription:
      'I help companies transform fragmented information into a reliable decision system, structured data, relevant KPIs, premium dashboards and practical business insight. My work goes beyond analysis alone, covering reporting design, performance tracking, automation and business storytelling for leadership and operational teams.',
    badges: ['Power BI', 'Data Studio', 'SQL', 'BigQuery', 'Excel', 'Python'],
    stats: [
      ['5+ yrs', 'experience across analytics, BI and business reporting'],
      ['Power BI, Data Studio', 'executive dashboards for management and business teams'],
      ['SQL, BigQuery, Automation', 'data extraction, modelling and process improvement']
    ],
    valueEyebrow: 'How I help companies',
    valueTitle: 'What the company gains from better BI.',
    valueText:
      'The output is not just a dashboard. The company gets cleaner reporting, faster answers, less manual work and a clearer view of performance, risk and priorities.',
    valueCards: [
      ['Management visibility', 'Executive KPI dashboards that make revenue, margin, operations and targets easy to follow.'],
      ['Finance control', 'Margin, budget, forecast and profitability views that help teams understand where value is created or lost.'],
      ['Operational clarity', 'SLA, workload, backlog and exception monitoring for teams that need daily visibility.'],
      ['Commercial performance', 'Pipeline, lead quality, channel performance and conversion tracking for growth teams.'],
      ['Less manual work', 'Structured SQL, scheduled refreshes and repeatable reporting flows that reduce Excel dependency.'],
      ['Actionable insight', 'Clear explanations of what changed, why it changed and what the business should do next.']
    ],
    dashboardsEyebrow: 'Power BI, Data Studio',
    dashboardsTitle: 'Power BI & Data Studio dashboard examples',
    dashboardsText:
      'Two simple examples of the type of BI output I can deliver, one Power BI style executive report and one Data Studio style performance dashboard.',
    tabs: ['All', 'Power BI', 'Data Studio'],
    detailsTitle: 'What this dashboard is for',
    pagesLabel: 'Typical report pages',
    sourcesLabel: 'Possible data sources',
    decisionsLabel: 'Decisions it supports',
    deliverablesLabel: 'What I would deliver',
    dashboards: {
      powerbiExecutive: {
        tool: 'Power BI',
        title: 'Power BI Business Performance Dashboard',
        image: `${base}dashboards/powerbi-business-dashboard.png`,
        pages: ['Overview', 'Revenue', 'Categories', 'Regions', 'Performance'],
        sources: 'ERP, CRM, finance exports, SQL datasets, operational files and management targets.',
        decisions: 'Helps leadership track revenue, profitability, regional performance, product mix and commercial trends in one place.',
        deliverables: 'A polished Power BI report with executive KPIs, slicers, drill downs, trend analysis and management ready summary pages.'
      },
      dataStudioMarketing: {
        tool: 'Data Studio',
        title: 'Data Studio Marketing Performance Dashboard',
        image: `${base}dashboards/datastudio-business-dashboard.png`,
        pages: ['Acquisition', 'Funnel', 'Campaigns', 'Weekly view', 'Trends'],
        sources: 'Google Analytics, Google Ads, Search Console, ecommerce data, CRM and spreadsheet inputs.',
        decisions: 'Shows which campaigns and channels generate quality traffic, leads, orders and revenue, and where efficiency needs to improve.',
        deliverables: 'A clean Data Studio report with KPI scorecards, funnel tracking, performance tables, time series analysis and channel filters.'
      }
    },
    experienceEyebrow: 'Experience overview',
    experienceTitle: 'Over the last 5 years, I have worked across data, dashboards and reporting.',
    experienceText:
      'The focus is on the work delivered, reporting foundations, dashboard development, automation and business support across different contexts.',
    experienceCards: [
      ['Over the last 5 years, I have built reporting foundations', 'Designed KPI structures, performance monitoring routines and recurring reporting that make business information easier to trust and use.'],
      ['Over the last 5 years, I have developed dashboards and BI reporting', 'Created business dashboards, executive views and structured analytics for teams that need clearer performance visibility.'],
      ['Over the last 5 years, I have supported cross functional decision making', 'Worked with data that can support finance, operations, commercial activity, CRM contexts and management reporting, always with a practical business focus.']
    ],
    contactEyebrow: 'Contact',
    contactTitle: 'Open to data, BI and reporting opportunities.',
    contactText: 'Available for roles where business understanding, KPI design, reporting quality and dashboard usability really matter.',
    ctaLinkedIn: 'LinkedIn'
  },
  pt: {
    nav: ['Valor', 'Dashboards', 'Experiência', 'Contacto'],
    heroEyebrow: 'Data Specialist, Business Intelligence, Reporting',
    heroTitle: 'Dashboards de negócio, automação de reporting e apoio à decisão.',
    heroText:
      'Data specialist em Lisboa, focado em Power BI, Data Studio, SQL, BigQuery, Excel e Python. Ajudo empresas a substituir ficheiros dispersos por dashboards claros, KPIs fiáveis e insight prático para financeiro, operações, equipas comerciais e gestão.',
    ctaDashboards: 'Ver exemplos de dashboards',
    ctaCV: 'Descarregar CV',
    profileName: 'Fernando Almeida',
    profileRole: 'Data Specialist, BI Specialist',
    profileDescription:
      'Ajudo empresas a transformar informação fragmentada num sistema de decisão fiável, dados estruturados, KPIs relevantes, dashboards premium e insight de negócio prático. O meu trabalho vai além da análise, incluindo desenho de reporting, acompanhamento de performance, automação e storytelling de negócio para gestão e equipas operacionais.',
    badges: ['Power BI', 'Data Studio', 'SQL', 'BigQuery', 'Excel', 'Python'],
    stats: [
      ['5+ anos', 'experiência em analytics, BI e reporting de negócio'],
      ['Power BI, Data Studio', 'dashboards executivos para gestão e equipas de negócio'],
      ['SQL, BigQuery, Automação', 'extração de dados, modelação e melhoria de processos']
    ],
    valueEyebrow: 'Como ajudo empresas',
    valueTitle: 'O que a empresa ganha com melhor BI.',
    valueText:
      'O resultado não é apenas um dashboard. A empresa ganha reporting mais limpo, respostas mais rápidas, menos trabalho manual e maior visibilidade sobre performance, risco e prioridades.',
    valueCards: [
      ['Visibilidade para gestão', 'Dashboards executivos de KPI que tornam receita, margem, operações e objetivos fáceis de acompanhar.'],
      ['Controlo financeiro', 'Visões de margem, orçamento, forecast e rentabilidade para perceber onde se cria ou perde valor.'],
      ['Clareza operacional', 'Monitorização de SLA, workload, backlog e exceções para equipas que precisam de visibilidade diária.'],
      ['Performance comercial', 'Acompanhamento de pipeline, qualidade de leads, canais e conversão para equipas de crescimento.'],
      ['Menos trabalho manual', 'SQL estruturado, refreshes programados e fluxos repetíveis que reduzem dependência de Excel.'],
      ['Insight acionável', 'Explicação clara do que mudou, porque mudou e o que o negócio deve fazer a seguir.']
    ],
    dashboardsEyebrow: 'Power BI, Data Studio',
    dashboardsTitle: 'Exemplos de dashboards Power BI & Data Studio',
    dashboardsText:
      'Dois exemplos simples do tipo de output de BI que posso entregar, um relatório executivo em estilo Power BI e um dashboard de performance em estilo Data Studio.',
    tabs: ['Todos', 'Power BI', 'Data Studio'],
    detailsTitle: 'Objetivo deste dashboard',
    pagesLabel: 'Páginas típicas do relatório',
    sourcesLabel: 'Fontes de dados possíveis',
    decisionsLabel: 'Decisões que suporta',
    deliverablesLabel: 'O que eu entregaria',
    dashboards: {
      powerbiExecutive: {
        tool: 'Power BI',
        title: 'Dashboard Power BI de Performance de Negócio',
        image: `${base}dashboards/powerbi-business-dashboard.png`,
        pages: ['Visão geral', 'Receita', 'Categorias', 'Regiões', 'Performance'],
        sources: 'ERP, CRM, exportações financeiras, datasets SQL, ficheiros operacionais e objetivos de gestão.',
        decisions: 'Ajuda a gestão a acompanhar receita, rentabilidade, performance regional, mix de produto e tendências comerciais num só local.',
        deliverables: 'Um relatório Power BI premium, com KPIs executivos, slicers, drill downs, análise de tendência e páginas resumo prontas para gestão.'
      },
      dataStudioMarketing: {
        tool: 'Data Studio',
        title: 'Dashboard Data Studio de Performance de Marketing',
        image: `${base}dashboards/datastudio-business-dashboard.png`,
        pages: ['Aquisição', 'Funil', 'Campanhas', 'Vista semanal', 'Tendências'],
        sources: 'Google Analytics, Google Ads, Search Console, dados de ecommerce, CRM e inputs em folhas de cálculo.',
        decisions: 'Mostra que campanhas e canais geram tráfego, leads, encomendas e receita de qualidade, e onde a eficiência precisa de melhorar.',
        deliverables: 'Um relatório Data Studio limpo, com scorecards, acompanhamento de funil, tabelas de performance, análise temporal e filtros por canal.'
      }
    },
    experienceEyebrow: 'Visão de experiência',
    experienceTitle: 'Nos últimos 5 anos, trabalhei em dados, dashboards e reporting.',
    experienceText:
      'O foco está no trabalho entregue, bases de reporting, desenvolvimento de dashboards, automação e apoio ao negócio em diferentes contextos.',
    experienceCards: [
      ['Nos últimos 5 anos, construí bases de reporting', 'Desenhei estruturas de KPI, rotinas de acompanhamento de performance e reporting recorrente para tornar a informação mais fiável e fácil de usar.'],
      ['Nos últimos 5 anos, desenvolvi dashboards e reporting de BI', 'Criei dashboards de negócio, vistas executivas e analytics estruturado para equipas que precisam de maior clareza sobre a performance.'],
      ['Nos últimos 5 anos, apoiei decisões transversais ao negócio', 'Trabalhei com dados capazes de apoiar áreas financeiras, operações, atividade comercial, contextos de CRM e reporting de gestão, sempre com foco prático no negócio.']
    ],
    contactEyebrow: 'Contacto',
    contactTitle: 'Disponível para oportunidades em dados, BI e reporting.',
    contactText: 'Aberto a funções onde a compreensão do negócio, o desenho de KPI, a qualidade do reporting e a utilidade dos dashboards sejam realmente importantes.',
    ctaLinkedIn: 'LinkedIn'
  }
}

const dashboardOrder = ['powerbiExecutive', 'dataStudioMarketing']

function App() {
  const [lang, setLang] = useState('en')
  const [tool, setTool] = useState('All')
  const [activeId, setActiveId] = useState('powerbiExecutive')
  const t = copy[lang]
  const dashboards = t.dashboards

  const filteredIds = useMemo(() => {
    const normalized = tool === 'Todos' ? 'All' : tool
    if (normalized === 'All') return dashboardOrder
    return dashboardOrder.filter((id) => dashboards[id].tool === normalized)
  }, [tool, dashboards])

  const activeDashboard = dashboards[activeId] ?? dashboards.powerbiExecutive

  const switchTool = (tab) => {
    setTool(tab)
    const normalized = tab === 'Todos' ? 'All' : tab
    const ids = normalized === 'All'
      ? dashboardOrder
      : dashboardOrder.filter((id) => dashboards[id].tool === normalized)
    if (!ids.includes(activeId)) setActiveId(ids[0])
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top">Fernando Almeida</a>
        <nav className="nav-links">
          {t.nav.map((item, index) => (
            <a key={item} href={['#value', '#dashboards', '#experience', '#contact'][index]}>{item}</a>
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
              <a className="button primary" href="#dashboards">{t.ctaDashboards}</a>
              <a className="button ghost" href={`${base}cv-fernando-almeida.pdf`} target="_blank" rel="noreferrer">{t.ctaCV}</a>
            </div>
          </div>

          <aside className="profile-panel">
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
              <h2>{t.profileName}</h2>
              <p>{t.profileRole}</p>
              <span>{t.profileDescription}</span>
            </div>
            <div className="badge-row">
              {t.badges.map((badge) => <span key={badge}>{badge}</span>)}
            </div>
          </aside>
        </section>

        <section className="metrics-strip section-x">
          {t.stats.map(([number, label]) => (
            <article className="metric-item" key={number}>
              <strong>{number}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section className="section-pad" id="value">
          <div className="section-heading narrow">
            <p className="eyebrow">{t.valueEyebrow}</p>
            <h2>{t.valueTitle}</h2>
            <p>{t.valueText}</p>
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
              <p className="eyebrow">{t.dashboardsEyebrow}</p>
              <h2>{t.dashboardsTitle}</h2>
              <p>{t.dashboardsText}</p>
            </div>
            <div className="tool-tabs">
              {t.tabs.map((tab) => (
                <button
                  key={tab}
                  className={tool === tab || (tool === 'All' && tab === 'All') || (tool === 'Todos' && tab === 'Todos') ? 'active' : ''}
                  onClick={() => switchTool(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="dashboard-layout">
            <aside className="report-list">
              {filteredIds.map((id) => {
                const dashboard = dashboards[id]
                const active = id === activeId
                return (
                  <button key={id} className={active ? 'report-card active' : 'report-card'} onClick={() => setActiveId(id)}>
                    <span className={`report-tool ${dashboard.tool === 'Power BI' ? 'power' : 'studio'}`}>{dashboard.tool}</span>
                    <strong>{dashboard.title}</strong>
                    <small>{dashboard.pages.slice(0, 3).join(' , ')}</small>
                  </button>
                )
              })}
            </aside>

            <div className="dashboard-main">
              <div className="dashboard-preview-card">
                <div className="preview-header">
                  <div>
                    <span className={`tool-badge ${activeDashboard.tool === 'Power BI' ? 'power' : 'studio'}`}>{activeDashboard.tool}</span>
                    <h3>{activeDashboard.title}</h3>
                  </div>
                </div>
                <div className="dashboard-image-wrap">
                  <img src={activeDashboard.image} alt={activeDashboard.title} className="dashboard-image" />
                </div>
              </div>

              <div className="dashboard-explainer card-surface">
                <div>
                  <strong>{t.detailsTitle}</strong>
                  <p>{activeDashboard.tool === 'Power BI'
                    ? (lang === 'en'
                      ? 'A premium executive style report designed for leadership visibility, KPI review and structured analysis.'
                      : 'Um relatório premium de estilo executivo, desenhado para visibilidade da gestão, revisão de KPI e análise estruturada.')
                    : (lang === 'en'
                      ? 'A clean, business ready Data Studio report suitable for acquisition, campaign and performance monitoring.'
                      : 'Um relatório Data Studio limpo e orientado ao negócio, adequado a monitorização de aquisição, campanhas e performance.')}
                  </p>
                </div>
                <div>
                  <strong>{t.pagesLabel}</strong>
                  <p>{activeDashboard.pages.join(' , ')}</p>
                </div>
                <div>
                  <strong>{t.sourcesLabel}</strong>
                  <p>{activeDashboard.sources}</p>
                </div>
                <div>
                  <strong>{t.decisionsLabel}</strong>
                  <p>{activeDashboard.decisions}</p>
                </div>
                <div>
                  <strong>{t.deliverablesLabel}</strong>
                  <p>{activeDashboard.deliverables}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" id="experience">
          <div className="section-heading narrow">
            <p className="eyebrow">{t.experienceEyebrow}</p>
            <h2>{t.experienceTitle}</h2>
            <p>{t.experienceText}</p>
          </div>
          <div className="experience-grid">
            {t.experienceCards.map(([title, text]) => (
              <article className="experience-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">{t.contactEyebrow}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:fernandoluisdba@gmail.com">fernandoluisdba@gmail.com</a>
            <a className="button ghost" href="https://www.linkedin.com/in/fernando-almeida-b33558301" target="_blank" rel="noreferrer">{t.ctaLinkedIn}</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Fernando Almeida</span>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
