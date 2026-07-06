import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const base = import.meta.env.BASE_URL

const copy = {
  en: {
    nav: ['Value', 'Dashboards', 'Experience', 'Contact'],
    heroEyebrow: 'Data Specialist, Business Intelligence, Reporting',
    heroTitle: 'I build business ready dashboards, reporting systems and insight that help companies decide faster.',
    heroText:
      'Business facing data specialist based in Lisbon, with experience turning complex data into premium dashboards, automated reporting and clear business insight. I work across Power BI, Data Studio, SQL, BigQuery, Excel and Python to support finance, operations, commercial teams and management reporting.',
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
    valueTitle: 'A portfolio built for business value, not only design.',
    valueText:
      'The goal is to give decision makers a clearer operating picture, what is happening, why it is happening, what should be prioritised and where action is needed.',
    valueCards: [
      ['Executive dashboards', 'Premium KPI dashboards for management, with clear hierarchy, business context, target tracking and actionable insight.'],
      ['Finance reporting', 'Margin, budget, forecast, cost and profitability views that help leadership understand performance and control risk.'],
      ['Operations control', 'SLA, workload, backlog, productivity and exception monitoring for teams that need daily operational visibility.'],
      ['Commercial performance', 'Pipeline, lead quality, channel performance, conversion and growth dashboards for sales and marketing teams.'],
      ['Data automation', 'Less manual Excel work through structured SQL, scheduled refreshes, calculated logic and repeatable reporting flows.'],
      ['Business storytelling', 'Not only charts, concise analysis, interpretation and recommendations that help teams decide what to do next.']
    ],
    dashboardsEyebrow: 'Power BI, Data Studio',
    dashboardsTitle: 'Power BI & Data Studio dashboard examples',
    dashboardsText:
      'These examples are designed to show the type of dashboard a company can expect, premium presentation, clear KPI control, useful filters, business context and decision support.',
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
    experienceTitle: 'Experience built around capability and business support.',
    experienceText:
      'Instead of listing past job titles, this section shows the type of work delivered, the capabilities developed and the business problems that work can help solve.',
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
    heroTitle: 'Construo dashboards, sistemas de reporting e insight orientado ao negócio, para ajudar empresas a decidir mais depressa.',
    heroText:
      'Data specialist com foco de negócio, em Lisboa, com experiência a transformar dados complexos em dashboards premium, reporting automatizado e insight claro. Trabalho com Power BI, Data Studio, SQL, BigQuery, Excel e Python para apoiar financeiro, operações, equipas comerciais e reporting de gestão.',
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
    valueTitle: 'Um portfolio pensado para gerar valor de negócio, não apenas design.',
    valueText:
      'O objetivo é dar aos decisores uma visão operacional mais clara, o que está a acontecer, porque está a acontecer, o que deve ser priorizado e onde é preciso atuar.',
    valueCards: [
      ['Dashboards executivos', 'Dashboards premium para gestão, com hierarquia clara, contexto de negócio, acompanhamento de objetivos e insight acionável.'],
      ['Reporting financeiro', 'Visões de margem, orçamento, forecast, custos e rentabilidade para ajudar a liderança a perceber performance e controlar risco.'],
      ['Controlo operacional', 'Monitorização de SLA, workload, backlog, produtividade e exceções para equipas que precisam de visibilidade diária.'],
      ['Performance comercial', 'Dashboards de pipeline, qualidade de leads, canais, conversão e crescimento para equipas comerciais e marketing.'],
      ['Automação de dados', 'Menos trabalho manual em Excel através de SQL estruturado, refreshes programados, lógica calculada e fluxos de reporting repetíveis.'],
      ['Storytelling de negócio', 'Não apenas gráficos, análise concisa, interpretação e recomendações que ajudam as equipas a decidir os próximos passos.']
    ],
    dashboardsEyebrow: 'Power BI, Data Studio',
    dashboardsTitle: 'Exemplos de dashboards Power BI & Data Studio',
    dashboardsText:
      'Estes exemplos mostram o tipo de dashboard que uma empresa pode esperar, apresentação premium, controlo claro de KPI, filtros úteis, contexto de negócio e apoio à decisão.',
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
    experienceTitle: 'Experiência apresentada através de capacidade e apoio ao negócio.',
    experienceText:
      'Em vez de listar cargos passados, esta secção mostra o tipo de trabalho entregue, as capacidades desenvolvidas e os problemas de negócio que esse trabalho pode ajudar a resolver.',
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
