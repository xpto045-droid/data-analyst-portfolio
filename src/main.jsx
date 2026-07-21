import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const base = import.meta.env.BASE_URL

const profile = {
  name: 'Fernando Almeida',
  email: 'fernandoluisdba@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fernando-almeida-b33558301',
  location: 'Lisbon, Portugal',
  photo: `${base}profile.jpg`,
  fallbackPhoto: `${base}profile-placeholder.svg`,
  cv: `${base}cv-fernando-almeida.pdf`
}

const iconPaths = {
  visibility: 'M4 4h16v16H4z M8 15l3-3 3 2 3-5',
  finance: 'M4 19h16 M6 16V9 M11 16V5 M16 16v-7 M21 16V3',
  operations: 'M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83 M16.24 16.24l2.83 2.83 M2 12h4 M18 12h4 M4.93 19.07l2.83-2.83 M16.24 7.76l2.83-2.83 M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
  commercial: 'M4 18V8 M10 18V4 M16 18v-6 M3 21h18 M6 7l4-3 5 4 5-5',
  automation: 'M4 7h10 M10 3l4 4-4 4 M20 17H10 M14 13l-4 4 4 4',
  insight: 'M9 18h6 M10 22h4 M8.5 15.5A7 7 0 1 1 15.5 15.5C14.5 16.2 14 17 14 18h-4c0-1-.5-1.8-1.5-2.5z',
  report: 'M6 3h9l3 3v15H6z M9 10h6 M9 14h6 M9 18h4',
  risk: 'M12 3l9 4v5c0 5-3.5 8.5-9 10-5.5-1.5-9-5-9-10V7z M12 8v5 M12 17h.01',
  diagnostic: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z M16 16l5 5 M8 12l2-2 2 2 3-4',
  case: 'M4 7h16v13H4z M9 7V4h6v3 M4 12h16',
  review: 'M4 5h16 M4 12h10 M4 19h7 M18 15l3 3-3 3',
  summary: 'M5 4h14v16H5z M8 8h8 M8 12h8 M8 16h5'
}

function Icon({ name, size = 22 }) {
  const path = iconPaths[name] || iconPaths.insight
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

const copy = {
  en: {
    documentTitle: 'Fernando Almeida | Data Specialist & BI Portfolio',
    skip: 'Skip to content',
    nav: [
      ['Value', '#value'],
      ['Dashboards', '#dashboards'],
      ['Decision support', '#analysis'],
      ['Experience', '#experience'],
      ['Contact', '#contact']
    ],
    menu: 'Menu',
    heroEyebrow: 'Data Specialist · Business Intelligence · Reporting',
    heroTitle: 'From fragmented data to decisions people can act on.',
    heroText:
      'I design reliable reporting systems, executive dashboards and practical analysis for finance, operations, commercial teams and management. My focus is simple: less manual work, clearer KPIs and faster decisions.',
    heroPrimary: 'Explore dashboard work',
    heroSecondary: 'Download CV',
    heroNote: 'Based in Lisbon · Available for data and BI opportunities',
    heroProof: ['Business Intelligence', 'Reporting Automation', 'Decision Support'],
    profileRole: 'Data Specialist & BI Analyst',
    profileStatus: 'Open to opportunities',
    profileIntro:
      'I connect business questions with data, from extraction and modelling to dashboards, automation and executive communication.',
    badges: ['Power BI', 'Looker Studio', 'SQL', 'BigQuery', 'Excel', 'Python'],
    quickLink: 'View LinkedIn profile',
    stats: [
      ['5+ years', 'working with analytics, BI and performance reporting'],
      ['End to end', 'from business question and SQL logic to a decision-ready dashboard'],
      ['Business first', 'KPIs and analysis designed around real operational decisions']
    ],
    valueEyebrow: 'Business value',
    valueTitle: 'Better BI should change how a company works.',
    valueText:
      'A useful data solution does more than look good. It creates a shared version of the truth, removes reporting friction and gives teams a clearer next action.',
    valueCards: [
      ['visibility', 'Management visibility', 'Executive views that make revenue, margin, targets, operations and risk easier to understand.'],
      ['finance', 'Financial control', 'Budget, forecast, cost and profitability analysis that shows where value is created or lost.'],
      ['operations', 'Operational clarity', 'SLA, backlog, workload and exception monitoring for teams that need daily visibility.'],
      ['commercial', 'Commercial performance', 'Lead quality, pipeline, conversion and channel analysis connected to growth decisions.'],
      ['automation', 'Less manual reporting', 'Structured SQL, reusable transformations and refreshable outputs that reduce spreadsheet dependency.'],
      ['insight', 'Actionable insight', 'Clear explanations of what changed, why it matters and what the business should do next.']
    ],
    dashboardsEyebrow: 'Selected work',
    dashboardsTitle: 'Dashboards built for clarity, not decoration.',
    dashboardsText:
      'Two portfolio examples that demonstrate how I structure executive information, hierarchy, navigation and KPI storytelling across Power BI and Looker Studio.',
    tabs: ['All', 'Power BI', 'Looker Studio'],
    viewLarge: 'Open full dashboard',
    close: 'Close dashboard',
    pagesLabel: 'Report structure',
    sourcesLabel: 'Possible sources',
    decisionsLabel: 'Business use',
    deliverablesLabel: 'Delivery scope',
    dashboards: {
      powerbiExecutive: {
        tool: 'Power BI',
        title: 'Business Performance Dashboard',
        image: `${base}dashboards/powerbi-business-dashboard.png`,
        alt: 'Power BI business performance dashboard portfolio example',
        summary: 'Executive performance overview for management teams.',
        pages: ['Overview', 'Revenue', 'Categories', 'Regions', 'Performance'],
        sources: 'ERP, CRM, financial exports, SQL datasets, operational files and management targets.',
        decisions: 'Track revenue, profitability, regional performance, product mix and commercial trends in one place.',
        deliverables: 'KPI definition, data model, Power BI report, filters, drill-down paths, validation and management-ready summary pages.'
      },
      lookerMarketing: {
        tool: 'Looker Studio',
        title: 'Marketing Performance Dashboard',
        image: `${base}dashboards/datastudio-business-dashboard.png`,
        alt: 'Looker Studio marketing performance dashboard portfolio example',
        summary: 'Acquisition and funnel visibility for growth teams.',
        pages: ['Acquisition', 'Funnel', 'Campaigns', 'Weekly view', 'Trends'],
        sources: 'Google Analytics, Google Ads, Search Console, ecommerce data, CRM and spreadsheet inputs.',
        decisions: 'Identify which campaigns and channels generate quality traffic, leads, orders and revenue, and where efficiency needs to improve.',
        deliverables: 'KPI scorecards, funnel tracking, performance tables, time-series analysis, channel filters and documented metric logic.'
      }
    },
    analysisEyebrow: 'Beyond the dashboard',
    analysisTitle: 'Decision support that explains the numbers.',
    analysisText:
      'When a dashboard shows that something changed, the next question is why. I turn data into structured analysis, scenarios and recommendations that leadership and operational teams can use.',
    analysisCards: [
      ['report', 'Decision reports', 'Context, findings, recommendations and next steps in a format that is easy to share.'],
      ['risk', 'Risk and impact analysis', 'Operational exposure, financial impact and scenario comparison before a decision is made.'],
      ['diagnostic', 'KPI diagnostics', 'Review of metric logic, data gaps and inconsistencies that can distort performance.'],
      ['case', 'Business cases', 'Comparison of options, expected impact, trade-offs and a practical recommendation.'],
      ['review', 'Operational reviews', 'Bottlenecks, SLA issues, workload, exceptions and process improvement opportunities.'],
      ['summary', 'Executive summaries', 'One-page narratives explaining what changed, why it matters and what happens next.']
    ],
    decisionCard: {
      eyebrow: 'A decision-ready output',
      title: 'What changed?',
      answer: 'Conversion declined in two high-volume channels.',
      title2: 'Why does it matter?',
      answer2: 'The impact is concentrated in the segments with the highest revenue potential.',
      title3: 'What happens next?',
      answer3: 'Prioritise follow-up quality, review channel allocation and validate lead scoring.'
    },
    experienceEyebrow: 'Experience',
    experienceTitle: 'A practical mix of analytics, technology and business context.',
    experienceText:
      'Across the last five years, my work has evolved from performance analysis to business intelligence, data quality, automation and cross-functional reporting.',
    experienceCards: [
      ['01', 'Reporting foundations', 'Built KPI structures, recurring reporting routines and validation logic that make information more consistent and trustworthy.'],
      ['02', 'Dashboard delivery', 'Designed executive and operational dashboards that turn complex datasets into clear performance views.'],
      ['03', 'Cross-functional analytics', 'Supported CRM, finance, operations, commercial activity and management reporting with a practical business focus.']
    ],
    stackTitle: 'Working toolkit',
    stack: ['SQL', 'BigQuery', 'Power BI', 'Looker Studio', 'Excel', 'Python', 'SQL Server', 'Power Query', 'Google Cloud', 'Salesforce'],
    contactEyebrow: 'Contact',
    contactTitle: 'Need clearer reporting or stronger BI?',
    contactText:
      'I am open to opportunities where business understanding, KPI quality, automation and dashboard usability genuinely matter.',
    emailButton: 'Send an email',
    linkedinButton: 'LinkedIn',
    footer: 'Data Specialist · Business Intelligence · Lisbon'
  },
  pt: {
    documentTitle: 'Fernando Almeida | Data Specialist e Portefólio BI',
    skip: 'Saltar para o conteúdo',
    nav: [
      ['Valor', '#value'],
      ['Dashboards', '#dashboards'],
      ['Apoio à decisão', '#analysis'],
      ['Experiência', '#experience'],
      ['Contacto', '#contact']
    ],
    menu: 'Menu',
    heroEyebrow: 'Data Specialist · Business Intelligence · Reporting',
    heroTitle: 'De dados dispersos a decisões que geram ação.',
    heroText:
      'Desenho sistemas de reporting fiáveis, dashboards executivos e análises práticas para financeiro, operações, equipas comerciais e gestão. O objetivo é simples: menos trabalho manual, KPIs mais claros e decisões mais rápidas.',
    heroPrimary: 'Explorar dashboards',
    heroSecondary: 'Descarregar CV',
    heroNote: 'Lisboa · Disponível para oportunidades em dados e BI',
    heroProof: ['Business Intelligence', 'Automação de Reporting', 'Apoio à Decisão'],
    profileRole: 'Data Specialist & BI Analyst',
    profileStatus: 'Disponível para oportunidades',
    profileIntro:
      'Ligo perguntas de negócio aos dados, desde a extração e modelação até ao dashboard, automação e comunicação executiva.',
    badges: ['Power BI', 'Looker Studio', 'SQL', 'BigQuery', 'Excel', 'Python'],
    quickLink: 'Ver perfil no LinkedIn',
    stats: [
      ['5+ anos', 'a trabalhar com analytics, BI e reporting de performance'],
      ['End to end', 'da pergunta de negócio e lógica SQL ao dashboard pronto para decisão'],
      ['Business first', 'KPIs e análises desenhados em torno de decisões operacionais reais']
    ],
    valueEyebrow: 'Valor para o negócio',
    valueTitle: 'Melhor BI deve mudar a forma como uma empresa trabalha.',
    valueText:
      'Uma solução de dados útil faz mais do que ter bom aspeto. Cria uma versão partilhada da verdade, reduz fricção no reporting e dá às equipas um próximo passo mais claro.',
    valueCards: [
      ['visibility', 'Visibilidade para a gestão', 'Vistas executivas que tornam receita, margem, objetivos, operações e risco mais fáceis de compreender.'],
      ['finance', 'Controlo financeiro', 'Análise de budget, forecast, custos e rentabilidade que mostra onde se cria ou perde valor.'],
      ['operations', 'Clareza operacional', 'Monitorização de SLA, backlog, workload e exceções para equipas que precisam de visibilidade diária.'],
      ['commercial', 'Performance comercial', 'Qualidade de leads, pipeline, conversão e canais ligados às decisões de crescimento.'],
      ['automation', 'Menos reporting manual', 'SQL estruturado, transformações reutilizáveis e outputs atualizáveis que reduzem dependência de folhas de cálculo.'],
      ['insight', 'Insight acionável', 'Explicações claras sobre o que mudou, porque importa e o que o negócio deve fazer a seguir.']
    ],
    dashboardsEyebrow: 'Trabalho selecionado',
    dashboardsTitle: 'Dashboards construídos para clareza, não decoração.',
    dashboardsText:
      'Dois exemplos de portefólio que demonstram como estruturo informação executiva, hierarquia, navegação e storytelling de KPI em Power BI e Looker Studio.',
    tabs: ['Todos', 'Power BI', 'Looker Studio'],
    viewLarge: 'Abrir dashboard completo',
    close: 'Fechar dashboard',
    pagesLabel: 'Estrutura do relatório',
    sourcesLabel: 'Fontes possíveis',
    decisionsLabel: 'Utilização no negócio',
    deliverablesLabel: 'Âmbito da entrega',
    dashboards: {
      powerbiExecutive: {
        tool: 'Power BI',
        title: 'Dashboard de Performance de Negócio',
        image: `${base}dashboards/powerbi-business-dashboard.png`,
        alt: 'Exemplo de portefólio de dashboard Power BI de performance de negócio',
        summary: 'Visão executiva de performance para equipas de gestão.',
        pages: ['Visão geral', 'Receita', 'Categorias', 'Regiões', 'Performance'],
        sources: 'ERP, CRM, exportações financeiras, datasets SQL, ficheiros operacionais e objetivos de gestão.',
        decisions: 'Acompanhar receita, rentabilidade, performance regional, mix de produto e tendências comerciais num só local.',
        deliverables: 'Definição de KPIs, modelo de dados, relatório Power BI, filtros, drill-downs, validação e páginas resumo prontas para gestão.'
      },
      lookerMarketing: {
        tool: 'Looker Studio',
        title: 'Dashboard de Performance de Marketing',
        image: `${base}dashboards/datastudio-business-dashboard.png`,
        alt: 'Exemplo de portefólio de dashboard Looker Studio de performance de marketing',
        summary: 'Visibilidade sobre aquisição e funil para equipas de crescimento.',
        pages: ['Aquisição', 'Funil', 'Campanhas', 'Vista semanal', 'Tendências'],
        sources: 'Google Analytics, Google Ads, Search Console, ecommerce, CRM e inputs em folhas de cálculo.',
        decisions: 'Identificar campanhas e canais que geram tráfego, leads, encomendas e receita de qualidade, e onde a eficiência precisa de melhorar.',
        deliverables: 'Scorecards, acompanhamento de funil, tabelas de performance, análise temporal, filtros por canal e lógica de métricas documentada.'
      }
    },
    analysisEyebrow: 'Além do dashboard',
    analysisTitle: 'Apoio à decisão que explica os números.',
    analysisText:
      'Quando um dashboard mostra que algo mudou, a pergunta seguinte é porquê. Transformo dados em análise estruturada, cenários e recomendações que a gestão e as equipas operacionais conseguem utilizar.',
    analysisCards: [
      ['report', 'Relatórios de decisão', 'Contexto, conclusões, recomendações e próximos passos num formato fácil de partilhar.'],
      ['risk', 'Análise de risco e impacto', 'Exposição operacional, impacto financeiro e comparação de cenários antes da decisão.'],
      ['diagnostic', 'Diagnóstico de KPIs', 'Revisão da lógica das métricas, gaps de dados e inconsistências que distorcem performance.'],
      ['case', 'Business cases', 'Comparação de opções, impacto esperado, trade-offs e uma recomendação prática.'],
      ['review', 'Revisões operacionais', 'Bottlenecks, problemas de SLA, workload, exceções e oportunidades de melhoria.'],
      ['summary', 'Sumários executivos', 'Narrativas de uma página que explicam o que mudou, porque importa e o que acontece a seguir.']
    ],
    decisionCard: {
      eyebrow: 'Um output pronto para decisão',
      title: 'O que mudou?',
      answer: 'A conversão caiu em dois canais de elevado volume.',
      title2: 'Porque importa?',
      answer2: 'O impacto está concentrado nos segmentos com maior potencial de receita.',
      title3: 'O que acontece a seguir?',
      answer3: 'Priorizar a qualidade do follow-up, rever a alocação por canal e validar o lead scoring.'
    },
    experienceEyebrow: 'Experiência',
    experienceTitle: 'Uma combinação prática de analytics, tecnologia e contexto de negócio.',
    experienceText:
      'Ao longo dos últimos cinco anos, o meu trabalho evoluiu de análise de performance para business intelligence, qualidade de dados, automação e reporting transversal.',
    experienceCards: [
      ['01', 'Bases de reporting', 'Construí estruturas de KPI, rotinas recorrentes e lógica de validação que tornam a informação mais consistente e fiável.'],
      ['02', 'Entrega de dashboards', 'Desenhei dashboards executivos e operacionais que transformam datasets complexos em vistas claras de performance.'],
      ['03', 'Analytics transversal', 'Apoiei CRM, financeiro, operações, atividade comercial e reporting de gestão com foco prático no negócio.']
    ],
    stackTitle: 'Ferramentas de trabalho',
    stack: ['SQL', 'BigQuery', 'Power BI', 'Looker Studio', 'Excel', 'Python', 'SQL Server', 'Power Query', 'Google Cloud', 'Salesforce'],
    contactEyebrow: 'Contacto',
    contactTitle: 'Precisa de reporting mais claro ou BI mais forte?',
    contactText:
      'Estou disponível para oportunidades onde a compreensão do negócio, a qualidade dos KPIs, a automação e a utilidade dos dashboards sejam realmente importantes.',
    emailButton: 'Enviar email',
    linkedinButton: 'LinkedIn',
    footer: 'Data Specialist · Business Intelligence · Lisboa'
  }
}

const dashboardOrder = ['powerbiExecutive', 'lookerMarketing']

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio-language') === 'pt' ? 'pt' : 'en')
  const [tool, setTool] = useState('all')
  const [activeId, setActiveId] = useState('powerbiExecutive')
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const t = copy[lang]
  const dashboards = t.dashboards
  const activeDashboard = dashboards[activeId] || dashboards.powerbiExecutive

  const filteredIds = useMemo(() => {
    if (tool === 'all') return dashboardOrder
    return dashboardOrder.filter((id) => dashboards[id].tool === tool)
  }, [tool, dashboards])

  useEffect(() => {
    localStorage.setItem('portfolio-language', lang)
    document.documentElement.lang = lang
    document.title = t.documentTitle
    setTool('all')
  }, [lang, t.documentTitle])

  useEffect(() => {
    if (!modalOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setModalOpen(false)
    }
    document.body.classList.add('modal-active')
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('modal-active')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [modalOpen])

  const selectTool = (nextTool) => {
    setTool(nextTool)
    const nextIds = nextTool === 'all'
      ? dashboardOrder
      : dashboardOrder.filter((id) => dashboards[id].tool === nextTool)
    if (!nextIds.includes(activeId)) setActiveId(nextIds[0])
  }

  const tabOptions = [
    ['all', t.tabs[0]],
    ['Power BI', t.tabs[1]],
    ['Looker Studio', t.tabs[2]]
  ]

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{t.skip}</a>

      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top" aria-label="Fernando Almeida homepage">
            <span className="brand-mark">FA</span>
            <span className="brand-copy">
              <strong>Fernando Almeida</strong>
              <small>Data Specialist</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span>{t.menu}</span>
            <i aria-hidden="true" />
          </button>

          <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            {t.nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>

          <button
            className="lang-toggle"
            type="button"
            aria-label={lang === 'en' ? 'Mudar para português' : 'Switch to English'}
            onClick={() => setLang((current) => current === 'en' ? 'pt' : 'en')}
          >
            <span className={lang === 'en' ? 'active' : ''}>EN</span>
            <span className={lang === 'pt' ? 'active' : ''}>PT</span>
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section-wrap" id="top">
          <div className="hero-copy-column">
            <div className="availability-pill"><span />{t.heroNote}</div>
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-copy">{t.heroText}</p>
            <div className="hero-actions">
              <a className="button primary" href="#dashboards">
                {t.heroPrimary}
                <span aria-hidden="true">↘</span>
              </a>
              <a className="button secondary" href={profile.cv} target="_blank" rel="noreferrer">
                {t.heroSecondary}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-proof" aria-label="Core capabilities">
              {t.heroProof.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>

          <aside className="profile-card">
            <div className="profile-visual">
              <img
                src={profile.photo}
                alt="Fernando Almeida"
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = profile.fallbackPhoto
                }}
              />
              <div className="profile-status"><span />{t.profileStatus}</div>
            </div>
            <div className="profile-content">
              <div className="profile-heading">
                <div>
                  <h2>{profile.name}</h2>
                  <p>{t.profileRole}</p>
                </div>
                <span className="location-badge">PT</span>
              </div>
              <p className="profile-intro">{t.profileIntro}</p>
              <div className="skill-cloud">
                {t.badges.map((badge) => <span key={badge}>{badge}</span>)}
              </div>
              <a className="profile-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                {t.quickLink}<span aria-hidden="true">↗</span>
              </a>
            </div>
          </aside>
        </section>

        <section className="stats section-wrap" aria-label="Professional summary">
          {t.stats.map(([number, label], index) => (
            <article key={number} className="stat-item">
              <span className="stat-index">0{index + 1}</span>
              <strong>{number}</strong>
              <p>{label}</p>
            </article>
          ))}
        </section>

        <section className="content-section section-wrap" id="value">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{t.valueEyebrow}</p>
              <h2>{t.valueTitle}</h2>
            </div>
            <p>{t.valueText}</p>
          </div>

          <div className="value-grid">
            {t.valueCards.map(([icon, title, text], index) => (
              <article className="value-card" key={title}>
                <div className="card-topline">
                  <span className="icon-box"><Icon name={icon} /></span>
                  <span className="card-index">0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section dashboard-section" id="dashboards">
          <div className="section-wrap">
            <div className="section-heading dashboard-heading">
              <div>
                <p className="eyebrow">{t.dashboardsEyebrow}</p>
                <h2>{t.dashboardsTitle}</h2>
                <p>{t.dashboardsText}</p>
              </div>
              <div className="tool-tabs" role="tablist" aria-label="Dashboard tool filter">
                {tabOptions.map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    className={tool === value ? 'active' : ''}
                    aria-selected={tool === value}
                    onClick={() => selectTool(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="dashboard-workspace">
              <aside className="dashboard-list" aria-label="Dashboard examples">
                {filteredIds.map((id) => {
                  const item = dashboards[id]
                  return (
                    <button
                      key={id}
                      type="button"
                      className={`dashboard-list-item ${activeId === id ? 'active' : ''}`}
                      onClick={() => setActiveId(id)}
                    >
                      <span className={`tool-dot ${item.tool === 'Power BI' ? 'powerbi' : 'looker'}`} />
                      <span>
                        <small>{item.tool}</small>
                        <strong>{item.title}</strong>
                        <em>{item.summary}</em>
                      </span>
                      <b aria-hidden="true">→</b>
                    </button>
                  )
                })}
              </aside>

              <div className="dashboard-stage">
                <div className="dashboard-stage-header">
                  <div>
                    <span className={`tool-label ${activeDashboard.tool === 'Power BI' ? 'powerbi' : 'looker'}`}>{activeDashboard.tool}</span>
                    <h3>{activeDashboard.title}</h3>
                  </div>
                  <button className="expand-button" type="button" onClick={() => setModalOpen(true)}>
                    {t.viewLarge}<span aria-hidden="true">↗</span>
                  </button>
                </div>

                <button className="dashboard-image-button" type="button" onClick={() => setModalOpen(true)} aria-label={t.viewLarge}>
                  <img src={activeDashboard.image} alt={activeDashboard.alt} />
                  <span className="image-overlay">{t.viewLarge}</span>
                </button>

                <div className="dashboard-details">
                  <article>
                    <span>01</span>
                    <strong>{t.pagesLabel}</strong>
                    <p>{activeDashboard.pages.join(' · ')}</p>
                  </article>
                  <article>
                    <span>02</span>
                    <strong>{t.sourcesLabel}</strong>
                    <p>{activeDashboard.sources}</p>
                  </article>
                  <article>
                    <span>03</span>
                    <strong>{t.decisionsLabel}</strong>
                    <p>{activeDashboard.decisions}</p>
                  </article>
                  <article>
                    <span>04</span>
                    <strong>{t.deliverablesLabel}</strong>
                    <p>{activeDashboard.deliverables}</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="analysis">
          <div className="analysis-intro">
            <div className="section-heading">
              <p className="eyebrow">{t.analysisEyebrow}</p>
              <h2>{t.analysisTitle}</h2>
              <p>{t.analysisText}</p>
            </div>

            <aside className="decision-card">
              <p className="decision-eyebrow">{t.decisionCard.eyebrow}</p>
              <div>
                <span>01</span>
                <strong>{t.decisionCard.title}</strong>
                <p>{t.decisionCard.answer}</p>
              </div>
              <div>
                <span>02</span>
                <strong>{t.decisionCard.title2}</strong>
                <p>{t.decisionCard.answer2}</p>
              </div>
              <div>
                <span>03</span>
                <strong>{t.decisionCard.title3}</strong>
                <p>{t.decisionCard.answer3}</p>
              </div>
            </aside>
          </div>

          <div className="analysis-grid">
            {t.analysisCards.map(([icon, title, text]) => (
              <article className="analysis-card" key={title}>
                <span className="analysis-icon"><Icon name={icon} size={20} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section experience-section" id="experience">
          <div className="section-wrap">
            <div className="section-heading split-heading experience-heading">
              <div>
                <p className="eyebrow">{t.experienceEyebrow}</p>
                <h2>{t.experienceTitle}</h2>
              </div>
              <p>{t.experienceText}</p>
            </div>

            <div className="experience-grid">
              {t.experienceCards.map(([number, title, text]) => (
                <article className="experience-card" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="stack-row">
              <strong>{t.stackTitle}</strong>
              <div>
                {t.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="contact-copy">
              <p className="eyebrow">{t.contactEyebrow}</p>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
              <div className="contact-meta">
                <span>{profile.location}</span>
                <span>{profile.email}</span>
              </div>
            </div>
            <div className="contact-actions">
              <a className="button light" href={`mailto:${profile.email}`}>{t.emailButton}<span aria-hidden="true">↗</span></a>
              <a className="button outline-light" href={profile.linkedin} target="_blank" rel="noreferrer">{t.linkedinButton}<span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{t.footer}</span>
      </footer>

      {modalOpen && (
        <div className="dashboard-modal" role="dialog" aria-modal="true" aria-label={activeDashboard.title} onMouseDown={() => setModalOpen(false)}>
          <div className="dashboard-modal-panel" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className={`tool-label ${activeDashboard.tool === 'Power BI' ? 'powerbi' : 'looker'}`}>{activeDashboard.tool}</span>
                <strong>{activeDashboard.title}</strong>
              </div>
              <button type="button" onClick={() => setModalOpen(false)} aria-label={t.close}>×</button>
            </div>
            <div className="modal-image-wrap">
              <img src={activeDashboard.image} alt={activeDashboard.alt} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
