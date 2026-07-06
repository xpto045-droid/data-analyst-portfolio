import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const base = import.meta.env.BASE_URL

const copy = {
  en: {
    nav: ['Value', 'Dashboards', 'Experience', 'Contact'],
    heroEyebrow: 'Data Specialist · Business Intelligence · Reporting',
    heroTitle: 'I build decision-ready dashboards, reporting systems and business insight.',
    heroText:
      'Business-facing data specialist based in Lisbon, with experience translating complex datasets into executive dashboards, automated reporting and clear recommendations. I work across Power BI, Data Studio, SQL, BigQuery, Excel and Python to support finance, operations, commercial teams and management reporting.',
    ctaDashboards: 'See dashboard examples',
    ctaCV: 'Download CV',
    profileName: 'Fernando Almeida',
    profileRole: 'Data Specialist · BI Specialist',
    profileDescription:
      'I focus on helping companies turn fragmented information into a reliable decision system: structured data, relevant KPIs, premium dashboards and practical insight. My work is not limited to analytics alone — it includes reporting design, performance tracking, automation and business storytelling for leadership and operational teams.',
    badges: ['Power BI', 'Data Studio', 'SQL', 'BigQuery', 'Excel', 'Python'],
    stats: [
      ['5+ yrs', 'experience across analytics, BI and business reporting'],
      ['Power BI & Data Studio', 'executive dashboards for management and business teams'],
      ['SQL / BigQuery / Automation', 'data extraction, modelling and process improvement']
    ],
    valueEyebrow: 'How I help companies',
    valueTitle: 'A portfolio built for business value, not just visuals.',
    valueText:
      'The goal is to give decision-makers a clearer operating picture: what is happening, why it is happening, what should be prioritised and where action is needed.',
    valueCards: [
      ['Executive dashboards', 'Premium KPI dashboards for management, with clear hierarchy, business context, target tracking and actionable insight.'],
      ['Finance reporting', 'Margin, budget, forecast, cost and profitability views that help leadership understand performance and control risk.'],
      ['Operations control', 'SLA, workload, backlog, productivity and exception monitoring for teams that need daily operational visibility.'],
      ['Commercial performance', 'Pipeline, lead quality, channel performance, conversion and growth dashboards for sales and marketing teams.'],
      ['Data automation', 'Less manual Excel work through structured SQL, scheduled refreshes, calculated logic and repeatable reporting flows.'],
      ['Business storytelling', 'Not only charts: concise analysis, interpretation and recommendations that help teams decide what to do next.']
    ],
    dashboardsEyebrow: 'Power BI · Data Studio',
    dashboardsTitle: 'Power BI & Data Studio dashboard examples',
    dashboardsText:
      'Below are premium portfolio examples designed to look like real business dashboards. Each example shows the type of reporting a company can expect: executive visibility, KPI control, operational tracking and clear decision support.',
    tabs: ['All', 'Power BI', 'Data Studio'],
    detailsTitle: 'What this dashboard is for',
    pagesLabel: 'Typical report pages',
    sourcesLabel: 'Possible data sources',
    decisionsLabel: 'Decisions it supports',
    deliverablesLabel: 'What I would deliver',
    dashboards: {
      powerbiExecutive: {
        tool: 'Power BI',
        title: 'Executive Performance Dashboard',
        image: `${base}dashboards/powerbi-executive.png`,
        pages: ['Overview', 'Revenue', 'Margin', 'Variance', 'Risks'],
        sources: 'ERP, finance exports, CRM, operational files, SQL datasets and budget data.',
        decisions: 'Helps leadership track revenue, margin, target gaps, risk areas and where intervention is needed first.',
        deliverables: 'A multi-page Power BI report with management KPIs, drill-downs, slicers, trend analysis and commentary-ready views.'
      },
      powerbiFinance: {
        tool: 'Power BI',
        title: 'Finance & Profitability Dashboard',
        image: `${base}dashboards/powerbi-finance.png`,
        pages: ['P&L', 'Budget vs Actual', 'Cost Drivers', 'Profitability', 'Trend'],
        sources: 'Accounting files, ERP, cost centre data, Excel budgets, SQL tables and monthly actuals.',
        decisions: 'Supports margin analysis, budget control, profitability review and identification of cost lines that need attention.',
        deliverables: 'A finance-focused Power BI dashboard with P&L structure, variance logic, profitability cuts and leadership summary pages.'
      },
      dataStudioDigital: {
        tool: 'Data Studio',
        title: 'Digital & Lead Performance Dashboard',
        image: `${base}dashboards/datastudio-digital.png`,
        pages: ['Acquisition', 'Leads', 'Conversion', 'Campaigns', 'Channels'],
        sources: 'Google Analytics, Search Console, Google Ads, spreadsheets and CRM / lead data.',
        decisions: 'Shows which channels and campaigns generate quality leads, where conversion drops and how cost per lead evolves.',
        deliverables: 'A Data Studio report with channel filters, scorecards, funnel analysis, campaign views and commercial performance context.'
      },
      dataStudioOperations: {
        tool: 'Data Studio',
        title: 'Operations & SLA Control Dashboard',
        image: `${base}dashboards/datastudio-operations.png`,
        pages: ['SLA', 'Backlog', 'Queues', 'Exceptions', 'Actions'],
        sources: 'BigQuery, operational logs, ticketing exports, CRM extracts and Google Sheets.',
        decisions: 'Helps teams prioritise queues, understand SLA breaches, reallocate workload and reduce operational bottlenecks.',
        deliverables: 'A Data Studio operations report with live KPI monitoring, breakdowns by queue/team and recommended action views.'
      }
    },
    experienceEyebrow: 'Experience snapshot',
    experienceTitle: 'Experience presented as capability, not job titles.',
    experienceText:
      'Rather than listing roles one by one, this portfolio highlights the scope of work delivered over time: dashboard development, reporting, analysis and business support across different environments.',
    experienceCards: [
      ['2019 – 2021', 'Foundations in data and performance reporting', 'Built structured reporting habits, KPI tracking routines and analytical support for performance-focused environments.'],
      ['2022 – 2024', 'Dashboard development and reporting automation', 'Expanded into BI tooling, data extraction, dashboard design and more consistent reporting workflows.'],
      ['2024 – Present', 'Cross-functional business intelligence support', 'Delivering dashboards and analysis that can support finance, operations, commercial teams, CRM contexts and management reporting.']
    ],
    contactEyebrow: 'Contact',
    contactTitle: 'Open to data, BI and reporting opportunities.',
    contactText: 'Available for roles where business understanding, KPI design, reporting quality and dashboard usability matter.',
    ctaLinkedIn: 'LinkedIn'
  },
  pt: {
    nav: ['Valor', 'Dashboards', 'Experiência', 'Contacto'],
    heroEyebrow: 'Data Specialist · Business Intelligence · Reporting',
    heroTitle: 'Construo dashboards, sistemas de reporting e insight orientado à decisão.',
    heroText:
      'Data specialist com foco de negócio, em Lisboa, com experiência a transformar dados complexos em dashboards executivos, reporting automatizado e recomendações claras. Trabalho com Power BI, Data Studio, SQL, BigQuery, Excel e Python para apoiar financeiro, operações, equipas comerciais e reporting de gestão.',
    ctaDashboards: 'Ver exemplos de dashboards',
    ctaCV: 'Descarregar CV',
    profileName: 'Fernando Almeida',
    profileRole: 'Data Specialist · BI Specialist',
    profileDescription:
      'O meu foco é ajudar empresas a transformar informação fragmentada num sistema de decisão fiável: dados estruturados, KPIs relevantes, dashboards premium e insight prático. O meu trabalho não se limita à análise — inclui desenho de reporting, acompanhamento de performance, automação e storytelling de negócio para gestão e equipas operacionais.',
    badges: ['Power BI', 'Data Studio', 'SQL', 'BigQuery', 'Excel', 'Python'],
    stats: [
      ['5+ anos', 'experiência em analytics, BI e reporting de negócio'],
      ['Power BI & Data Studio', 'dashboards executivos para gestão e equipas de negócio'],
      ['SQL / BigQuery / Automação', 'extração de dados, modelação e melhoria de processos']
    ],
    valueEyebrow: 'Como ajudo empresas',
    valueTitle: 'Um portfolio pensado para gerar valor de negócio, não apenas visuais.',
    valueText:
      'O objetivo é dar aos decisores uma visão operacional mais clara: o que está a acontecer, porque está a acontecer, o que deve ser priorizado e onde é preciso atuar.',
    valueCards: [
      ['Dashboards executivos', 'Dashboards premium para gestão, com hierarquia clara, contexto de negócio, acompanhamento de objetivos e insight acionável.'],
      ['Reporting financeiro', 'Visões de margem, orçamento, forecast, custos e rentabilidade para ajudar a liderança a perceber performance e controlar risco.'],
      ['Controlo operacional', 'Monitorização de SLA, workload, backlog, produtividade e exceções para equipas que precisam de visibilidade diária.'],
      ['Performance comercial', 'Dashboards de pipeline, qualidade de leads, canais, conversão e crescimento para equipas comerciais e marketing.'],
      ['Automação de dados', 'Menos trabalho manual em Excel através de SQL estruturado, refreshes programados, lógica calculada e fluxos de reporting repetíveis.'],
      ['Storytelling de negócio', 'Não apenas gráficos: análise concisa, interpretação e recomendações que ajudam as equipas a decidir os próximos passos.']
    ],
    dashboardsEyebrow: 'Power BI · Data Studio',
    dashboardsTitle: 'Exemplos de dashboards Power BI & Data Studio',
    dashboardsText:
      'Abaixo estão exemplos premium de portfolio desenhados para parecer dashboards reais de negócio. Cada exemplo mostra o tipo de reporting que uma empresa pode esperar: visibilidade executiva, controlo de KPI, monitorização operacional e apoio claro à decisão.',
    tabs: ['Todos', 'Power BI', 'Data Studio'],
    detailsTitle: 'Objetivo deste dashboard',
    pagesLabel: 'Páginas típicas do relatório',
    sourcesLabel: 'Fontes de dados possíveis',
    decisionsLabel: 'Decisões que suporta',
    deliverablesLabel: 'O que eu entregaria',
    dashboards: {
      powerbiExecutive: {
        tool: 'Power BI',
        title: 'Dashboard Executivo de Performance',
        image: `${base}dashboards/powerbi-executive.png`,
        pages: ['Visão geral', 'Receita', 'Margem', 'Desvios', 'Riscos'],
        sources: 'ERP, exportações financeiras, CRM, ficheiros operacionais, datasets SQL e dados de orçamento.',
        decisions: 'Ajuda a gestão a acompanhar receita, margem, desvios a objetivos, áreas de risco e onde é preciso intervir primeiro.',
        deliverables: 'Um relatório Power BI multi-página com KPIs de gestão, drill-downs, slicers, análise de tendência e vistas prontas para comentário executivo.'
      },
      powerbiFinance: {
        tool: 'Power BI',
        title: 'Dashboard Financeiro & Rentabilidade',
        image: `${base}dashboards/powerbi-finance.png`,
        pages: ['P&L', 'Orçamento vs Real', 'Drivers de Custo', 'Rentabilidade', 'Tendência'],
        sources: 'Ficheiros contabilísticos, ERP, dados de centros de custo, orçamentos em Excel, tabelas SQL e reais mensais.',
        decisions: 'Suporta análise de margem, controlo orçamental, revisão de rentabilidade e identificação de rubricas de custo que exigem atenção.',
        deliverables: 'Um dashboard Power BI financeiro com estrutura P&L, lógica de desvios, cortes de rentabilidade e páginas resumo para gestão.'
      },
      dataStudioDigital: {
        tool: 'Data Studio',
        title: 'Dashboard Digital & Performance de Leads',
        image: `${base}dashboards/datastudio-digital.png`,
        pages: ['Aquisição', 'Leads', 'Conversão', 'Campanhas', 'Canais'],
        sources: 'Google Analytics, Search Console, Google Ads, folhas de cálculo e dados de CRM / leads.',
        decisions: 'Mostra que canais e campanhas geram leads de qualidade, onde a conversão cai e como evolui o custo por lead.',
        deliverables: 'Um relatório Data Studio com filtros por canal, scorecards, análise de funil, vistas de campanha e contexto comercial.'
      },
      dataStudioOperations: {
        tool: 'Data Studio',
        title: 'Dashboard Operacional & Controlo de SLA',
        image: `${base}dashboards/datastudio-operations.png`,
        pages: ['SLA', 'Backlog', 'Filas', 'Exceções', 'Ações'],
        sources: 'BigQuery, logs operacionais, exportações de ticketing, extrações de CRM e Google Sheets.',
        decisions: 'Ajuda equipas a priorizar filas, compreender breaches de SLA, redistribuir workload e reduzir bottlenecks operacionais.',
        deliverables: 'Um relatório Data Studio operacional com monitorização de KPI, breakdowns por fila/equipa e vistas de ações recomendadas.'
      }
    },
    experienceEyebrow: 'Resumo de experiência',
    experienceTitle: 'Experiência apresentada como capacidade, não como lista de cargos.',
    experienceText:
      'Em vez de listar funções individualmente, este portfolio destaca o tipo de trabalho entregue ao longo do tempo: desenvolvimento de dashboards, reporting, análise e apoio ao negócio em diferentes contextos.',
    experienceCards: [
      ['2019 – 2021', 'Base em análise de dados e reporting de performance', 'Construção de hábitos de reporting estruturado, rotinas de acompanhamento de KPI e suporte analítico em ambientes orientados à performance.'],
      ['2022 – 2024', 'Desenvolvimento de dashboards e automação de reporting', 'Expansão para ferramentas de BI, extração de dados, desenho de dashboards e workflows de reporting mais consistentes.'],
      ['2024 – Atual', 'Suporte transversal de business intelligence', 'Entrega de dashboards e análise capazes de apoiar financeiro, operações, equipas comerciais, contextos de CRM e reporting de gestão.']
    ],
    contactEyebrow: 'Contacto',
    contactTitle: 'Disponível para oportunidades em dados, BI e reporting.',
    contactText: 'Aberto a funções onde a compreensão do negócio, o desenho de KPI, a qualidade do reporting e a utilidade dos dashboards sejam realmente importantes.',
    ctaLinkedIn: 'LinkedIn'
  }
}

const dashboardOrder = ['powerbiExecutive', 'powerbiFinance', 'dataStudioDigital', 'dataStudioOperations']

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
                    <small>{dashboard.pages.slice(0, 3).join(' · ')}</small>
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
                      ? 'A premium executive-style report designed for leadership visibility, KPI review and structured analysis.'
                      : 'Um relatório premium de estilo executivo desenhado para visibilidade da gestão, revisão de KPI e análise estruturada.')
                    : (lang === 'en'
                      ? 'A clean, business-ready Data Studio report suitable for operational or commercial monitoring and quick action.'
                      : 'Um relatório Data Studio limpo e orientado ao negócio, adequado a monitorização operacional ou comercial e ação rápida.')}
                  </p>
                </div>
                <div>
                  <strong>{t.pagesLabel}</strong>
                  <p>{activeDashboard.pages.join(' · ')}</p>
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
            {t.experienceCards.map(([period, title, text]) => (
              <article className="experience-card" key={period}>
                <span>{period}</span>
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
