import React, { useMemo, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Database,
  Download,
  ExternalLink,
  FileSpreadsheet,
  Gauge,
  Globe2,
  LayoutDashboard,
  LineChart,
  Mail,
  MapPin,
  PlayCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  Zap
} from 'lucide-react'

const profile = {
  name: 'Fernando Almeida',
  title: 'Data Analyst & Business Intelligence Specialist',
  location: 'Lisbon, Portugal',
  email: 'fernandoluisdba@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fernando-almeida-b33558301',
  cv: './cv-fernando-almeida.pdf',
  photo: './profile-placeholder.svg'
}

const copy = {
  en: {
    nav: ['Value', 'Dashboards', 'Services', 'Experience', 'Contact'],
    badge: 'Available for data projects across Portugal',
    heroTitle: 'I turn business data into clear decisions, faster reporting and measurable action.',
    heroText:
      'Data Analyst with experience across business intelligence, reporting automation, SQL, Power BI, Looker Studio, Excel, Python and operational analysis. I help companies understand performance, detect opportunities and replace manual reporting with dashboards that actually support decisions.',
    ctaPrimary: 'See dashboard examples',
    ctaSecondary: 'Download CV',
    trusted: 'Business areas I can support',
    areas: ['Finance', 'Sales', 'Operations', 'Management', 'Marketing', 'Customer Data', 'After-sales', 'Sports Analytics'],
    stats: [
      ['SQL / BI', 'Data extraction, modelling and reporting'],
      ['Power BI', 'Executive and operational dashboards'],
      ['Automation', 'Less manual Excel, more reliable outputs'],
      ['Business focus', 'Insights connected to decisions']
    ],
    valueTitle: 'How I can help a company',
    valueIntro:
      'The goal is not only to build dashboards. The goal is to help teams see what is happening, why it is happening and what they should do next.',
    valueCards: [
      {
        icon: 'diagnostic',
        title: 'Data diagnosis',
        text: 'Map sources, manual reports, duplicated files and inconsistent KPIs to identify where decisions are being slowed down.'
      },
      {
        icon: 'dashboard',
        title: 'Decision dashboards',
        text: 'Build Power BI and Looker Studio dashboards for management, finance, sales, operations and service teams.'
      },
      {
        icon: 'automation',
        title: 'Reporting automation',
        text: 'Transform repetitive Excel work into automated flows, SQL logic and refreshed dashboards.'
      },
      {
        icon: 'quality',
        title: 'Data reliability',
        text: 'Improve query logic, validation checks, KPI definitions and data quality so reports are trusted.'
      }
    ],
    dashboardTitle: 'Dashboard examples',
    dashboardIntro:
      'Interactive portfolio mockups inspired by Power BI and Looker Studio/Data Studio. They show the type of dashboards I can design for different business areas. Real dashboards can later be embedded with public Power BI or Looker Studio links.',
    period: 'Period',
    scenario: 'Scenario',
    dashboardLabels: {
      purpose: 'Purpose',
      sources: 'Typical data sources',
      decisions: 'Decisions supported',
      deliverables: 'What I would deliver'
    },
    servicesTitle: 'What I build',
    services: [
      ['Executive BI layer', 'A single view of revenue, margins, pipeline, cost, forecasts and operational priorities.'],
      ['Finance dashboards', 'Budget vs actual, cost evolution, profitability, debtor ageing, cash visibility and variance analysis.'],
      ['Sales performance', 'Lead funnel, conversion, dealer/store performance, targets, pipeline, lost opportunities and follow-up quality.'],
      ['Operations monitoring', 'SLA, backlog, productivity, process bottlenecks, quality controls and team performance.'],
      ['Data automation', 'SQL queries, transformations, automated Excel/Sheets outputs, recurring reports and data validation.'],
      ['Analytics storytelling', 'Clear narratives for managers: what changed, why it changed and what to do next.']
    ],
    processTitle: 'Working method',
    process: [
      ['1', 'Understand the business question', 'Start with the decisions the dashboard must support, not only the data available.'],
      ['2', 'Model the data', 'Clean, join and structure data so KPIs are consistent and explainable.'],
      ['3', 'Design the dashboard', 'Create visual layers: executive summary, drill-down analysis and action lists.'],
      ['4', 'Automate and document', 'Reduce manual work, document rules and make the report easy to maintain.']
    ],
    experienceTitle: 'Experience',
    experiences: [
      {
        role: 'Data Analyst',
        company: 'Renault Group',
        date: '2024 — Present',
        text: 'Business data analysis, reporting, dashboards and data solutions across internal teams, supporting performance management, operational visibility and decision-making.'
      },
      {
        role: 'Data Analyst',
        company: 'Logical Jupiter',
        date: '2024',
        text: 'Power BI dashboards, SQL queries, stored procedures, CTEs, ETL processes, Azure, SQL Server and Microsoft Fabric reporting solutions.'
      },
      {
        role: 'Performance Data Analyst',
        company: 'CD Mafra / SL Benfica U-16',
        date: '2019 — 2024',
        text: 'Statistical and video data analysis, dashboards and performance reports for coaching decisions, player development and opponent scouting.'
      }
    ],
    educationTitle: 'Education & credentials',
    education: [
      'Bachelor’s Degree in Sports, specialized in Data Analysis — final grade 17/20',
      'Bachelor’s Degree in Computer Science and Engineering — ongoing',
      'AZ-900, Cybersecurity Fundamentals, Big Data MIT, leadership training'
    ],
    contactTitle: 'Ready to turn scattered data into decisions?',
    contactText:
      'I can help your company create dashboards, automate reporting and make business performance easier to understand. Send me a message and I will reply with a practical data improvement proposal.',
    contactButton: 'Send email',
    footer: 'Designed as a premium data portfolio for business decision-makers.'
  },
  pt: {
    nav: ['Valor', 'Dashboards', 'Serviços', 'Experiência', 'Contacto'],
    badge: 'Disponível para projetos de dados em Portugal',
    heroTitle: 'Transformo dados de negócio em decisões claras, reporting mais rápido e ação mensurável.',
    heroText:
      'Data Analyst com experiência em business intelligence, automação de reporting, SQL, Power BI, Looker Studio, Excel, Python e análise operacional. Ajudo empresas a perceber performance, encontrar oportunidades e substituir reporting manual por dashboards úteis para a decisão.',
    ctaPrimary: 'Ver dashboards',
    ctaSecondary: 'Descarregar CV',
    trusted: 'Áreas de negócio que posso apoiar',
    areas: ['Financeiro', 'Vendas', 'Operações', 'Gestão', 'Marketing', 'Dados de Cliente', 'Após-venda', 'Sports Analytics'],
    stats: [
      ['SQL / BI', 'Extração, modelação e reporting'],
      ['Power BI', 'Dashboards executivos e operacionais'],
      ['Automação', 'Menos Excel manual, outputs mais fiáveis'],
      ['Foco no negócio', 'Insights ligados a decisões']
    ],
    valueTitle: 'Como posso ajudar uma empresa',
    valueIntro:
      'O objetivo não é só construir dashboards. É ajudar as equipas a perceber o que está a acontecer, porque está a acontecer e o que devem fazer a seguir.',
    valueCards: [
      {
        icon: 'diagnostic',
        title: 'Diagnóstico de dados',
        text: 'Mapear fontes, reports manuais, ficheiros duplicados e KPIs inconsistentes para perceber onde a decisão está a ser atrasada.'
      },
      {
        icon: 'dashboard',
        title: 'Dashboards de decisão',
        text: 'Construir dashboards em Power BI e Looker Studio para gestão, financeiro, vendas, operações e equipas de serviço.'
      },
      {
        icon: 'automation',
        title: 'Automação de reporting',
        text: 'Transformar trabalho repetitivo em Excel em fluxos automáticos, lógica SQL e dashboards atualizados.'
      },
      {
        icon: 'quality',
        title: 'Fiabilidade dos dados',
        text: 'Melhorar queries, validações, definições de KPI e qualidade dos dados para que os reports sejam confiáveis.'
      }
    ],
    dashboardTitle: 'Exemplos de dashboards',
    dashboardIntro:
      'Mockups interativos inspirados em Power BI e Looker Studio/Data Studio. Mostram o tipo de dashboards que posso desenhar para diferentes áreas de negócio. Mais tarde, dashboards reais podem ser embebidos com links públicos de Power BI ou Looker Studio.',
    period: 'Período',
    scenario: 'Cenário',
    dashboardLabels: {
      purpose: 'Objetivo',
      sources: 'Fontes de dados típicas',
      decisions: 'Decisões suportadas',
      deliverables: 'O que entregaria'
    },
    servicesTitle: 'O que construo',
    services: [
      ['Camada BI executiva', 'Uma visão única de receita, margens, pipeline, custos, forecasts e prioridades operacionais.'],
      ['Dashboards financeiros', 'Budget vs real, evolução de custos, rentabilidade, aging de dívida, cash visibility e análise de desvios.'],
      ['Performance comercial', 'Funil de leads, conversão, performance por dealer/loja, objetivos, pipeline, oportunidades perdidas e qualidade de follow-up.'],
      ['Monitorização operacional', 'SLA, backlog, produtividade, bottlenecks, controlos de qualidade e performance de equipas.'],
      ['Automação de dados', 'Queries SQL, transformações, outputs automáticos Excel/Sheets, reports recorrentes e validação de dados.'],
      ['Storytelling analítico', 'Narrativas claras para gestão: o que mudou, porque mudou e qual a próxima ação.']
    ],
    processTitle: 'Método de trabalho',
    process: [
      ['1', 'Perceber a pergunta de negócio', 'Começar pelas decisões que o dashboard deve apoiar, não apenas pelos dados disponíveis.'],
      ['2', 'Modelar os dados', 'Limpar, juntar e estruturar dados para que os KPIs sejam consistentes e explicáveis.'],
      ['3', 'Desenhar o dashboard', 'Criar camadas visuais: resumo executivo, análise detalhada e listas de ação.'],
      ['4', 'Automatizar e documentar', 'Reduzir trabalho manual, documentar regras e tornar o report fácil de manter.']
    ],
    experienceTitle: 'Experiência',
    experiences: [
      {
        role: 'Data Analyst',
        company: 'Renault Group',
        date: '2024 — Presente',
        text: 'Análise de dados de negócio, reporting, dashboards e soluções de dados com equipas internas, apoiando gestão de performance, visibilidade operacional e tomada de decisão.'
      },
      {
        role: 'Data Analyst',
        company: 'Logical Jupiter',
        date: '2024',
        text: 'Dashboards Power BI, queries SQL, stored procedures, CTEs, ETL, Azure, SQL Server e soluções de reporting em Microsoft Fabric.'
      },
      {
        role: 'Performance Data Analyst',
        company: 'CD Mafra / SL Benfica U-16',
        date: '2019 — 2024',
        text: 'Análise estatística e vídeo, dashboards e reports de performance para decisões técnicas, desenvolvimento de jogadores e scouting adversário.'
      }
    ],
    educationTitle: 'Formação e certificações',
    education: [
      'Licenciatura em Desporto, especialização em Análise de Dados — nota final 17/20',
      'Licenciatura em Engenharia Informática — em curso',
      'AZ-900, Cybersecurity Fundamentals, Big Data MIT e formação em liderança'
    ],
    contactTitle: 'Pronto para transformar dados dispersos em decisões?',
    contactText:
      'Posso ajudar a criar dashboards, automatizar reporting e tornar a performance do negócio mais fácil de entender. Envie-me mensagem e respondo com uma proposta prática de melhoria de dados.',
    contactButton: 'Enviar email',
    footer: 'Desenhado como portfolio premium de dados para decisores de negócio.'
  }
}

const iconMap = {
  diagnostic: Search,
  dashboard: LayoutDashboard,
  automation: Workflow,
  quality: ShieldCheck
}

const dashboards = [
  {
    id: 'executive',
    tool: 'Power BI',
    theme: 'gold',
    title: { en: 'Executive Performance Cockpit', pt: 'Cockpit Executivo de Performance' },
    subtitle: { en: 'Board-level view of business health', pt: 'Visão de gestão sobre a saúde do negócio' },
    purpose: {
      en: 'Give management one page to monitor revenue, margin, forecast, pipeline and operational alerts.',
      pt: 'Dar à gestão uma página única para acompanhar receita, margem, forecast, pipeline e alertas operacionais.'
    },
    sources: ['ERP', 'CRM', 'Sales targets', 'Excel budgets', 'Operational systems'],
    decisions: {
      en: ['Where are we below target?', 'Which business unit needs attention?', 'What changed vs last month?', 'Which KPI is driving the gap?'],
      pt: ['Onde estamos abaixo do objetivo?', 'Que unidade precisa de atenção?', 'O que mudou vs mês anterior?', 'Que KPI explica o desvio?']
    },
    deliverables: {
      en: 'Power BI model, executive summary page, drill-down pages by area, KPI dictionary and refresh plan.',
      pt: 'Modelo Power BI, página executiva, páginas de detalhe por área, dicionário de KPIs e plano de atualização.'
    },
    kpis: [
      ['Revenue', '€4.82M', '+8.4%'],
      ['Gross Margin', '31.6%', '+2.1pp'],
      ['Forecast Accuracy', '94%', '+6pp'],
      ['Priority Alerts', '12', '-18%']
    ],
    bars: [72, 88, 64, 91, 79, 84],
    line: 'M28 142 C88 88 126 112 174 78 C226 40 272 62 326 34 C374 10 416 26 468 18',
    table: [
      ['Finance', 'Margin pressure', 'High'],
      ['Sales', 'Pipeline gap', 'Medium'],
      ['Ops', 'SLA risk', 'High']
    ]
  },
  {
    id: 'finance',
    tool: 'Power BI',
    theme: 'cyan',
    title: { en: 'Finance & Profitability Dashboard', pt: 'Dashboard Financeiro e Rentabilidade' },
    subtitle: { en: 'Budget, actuals, cash visibility and variance analysis', pt: 'Budget, real, cash visibility e análise de desvios' },
    purpose: {
      en: 'Track financial performance with budget vs actual, cost evolution, debtor ageing and profitability by segment.',
      pt: 'Acompanhar performance financeira com budget vs real, custos, aging de dívida e rentabilidade por segmento.'
    },
    sources: ['Accounting exports', 'ERP', 'Budget files', 'Invoices', 'Collections'],
    decisions: {
      en: ['Which costs are growing faster?', 'Where is profitability falling?', 'Which customers are overdue?', 'Are we on track against budget?'],
      pt: ['Que custos estão a crescer mais?', 'Onde a rentabilidade caiu?', 'Que clientes estão vencidos?', 'Estamos alinhados com o budget?']
    },
    deliverables: {
      en: 'P&L dashboard, variance bridges, cash/debtors view, automated monthly pack and Excel export layer.',
      pt: 'Dashboard P&L, pontes de desvio, visão cash/devedores, pack mensal automático e camada de exportação Excel.'
    },
    kpis: [
      ['EBITDA', '€680K', '+5.7%'],
      ['Budget Var.', '€-42K', 'Watch'],
      ['Cost Ratio', '22.4%', '-1.3pp'],
      ['Overdue', '€118K', '-9%']
    ],
    bars: [54, 68, 74, 62, 80, 92],
    line: 'M28 120 C78 126 124 84 168 92 C226 104 256 42 316 58 C372 74 416 30 468 44',
    table: [
      ['OPEX', 'Above budget', 'High'],
      ['Cash', 'Stable', 'Low'],
      ['Receivables', 'Improving', 'Medium']
    ]
  },
  {
    id: 'looker',
    tool: 'Looker Studio',
    theme: 'violet',
    title: { en: 'Digital & Lead Performance Studio', pt: 'Studio de Performance Digital e Leads' },
    subtitle: { en: 'Marketing, web, lead funnel and conversion quality', pt: 'Marketing, web, funil de leads e qualidade de conversão' },
    purpose: {
      en: 'Connect web, campaign and lead data to understand acquisition, conversion, quality and response speed.',
      pt: 'Ligar dados web, campanhas e leads para perceber aquisição, conversão, qualidade e velocidade de resposta.'
    },
    sources: ['GA4', 'Search Console', 'Ads platforms', 'CRM exports', 'Sheets'],
    decisions: {
      en: ['Which campaigns bring qualified demand?', 'Where do leads drop?', 'Which channel converts best?', 'Which team needs follow-up support?'],
      pt: ['Que campanhas trazem procura qualificada?', 'Onde caem as leads?', 'Que canal converte melhor?', 'Que equipa precisa de apoio?']
    },
    deliverables: {
      en: 'Looker Studio dashboard, channel funnel, campaign scorecard, lead response view and weekly performance commentary.',
      pt: 'Dashboard Looker Studio, funil por canal, scorecard de campanhas, resposta a leads e comentário semanal.'
    },
    kpis: [
      ['Sessions', '184K', '+14%'],
      ['Qualified Leads', '3,420', '+11%'],
      ['Conv. Rate', '4.8%', '+0.6pp'],
      ['Avg Response', '42m', '-23%']
    ],
    bars: [91, 76, 58, 69, 82, 73],
    line: 'M28 130 C74 100 118 122 166 82 C220 38 262 82 318 50 C372 20 420 54 468 30',
    table: [
      ['Organic', 'High intent', 'High'],
      ['Paid Search', 'Cost rising', 'Medium'],
      ['Email', 'Stable', 'Low']
    ]
  },
  {
    id: 'operations',
    tool: 'Looker Studio',
    theme: 'green',
    title: { en: 'Operations & SLA Control Room', pt: 'Sala de Controlo Operacional e SLA' },
    subtitle: { en: 'Backlog, productivity, response time and process quality', pt: 'Backlog, produtividade, tempo de resposta e qualidade de processo' },
    purpose: {
      en: 'Monitor daily operations, detect bottlenecks and create a shared view of workload, quality and SLA compliance.',
      pt: 'Monitorizar operações diárias, detetar bottlenecks e criar uma visão comum de carga, qualidade e cumprimento de SLA.'
    },
    sources: ['Ticketing systems', 'Internal apps', 'Sheets', 'SQL exports', 'Team logs'],
    decisions: {
      en: ['Where is backlog increasing?', 'Which process creates delays?', 'Which team is overloaded?', 'Are SLAs improving?'],
      pt: ['Onde o backlog está a crescer?', 'Que processo cria atrasos?', 'Que equipa está sobrecarregada?', 'Os SLAs estão a melhorar?']
    },
    deliverables: {
      en: 'Operational dashboard, SLA alerts, backlog ageing, productivity view and weekly action list for managers.',
      pt: 'Dashboard operacional, alertas SLA, aging de backlog, produtividade e lista semanal de ações para gestores.'
    },
    kpis: [
      ['SLA Met', '91%', '+7pp'],
      ['Backlog', '238', '-16%'],
      ['Productivity', '1.24x', '+9%'],
      ['Quality Score', '96%', '+3pp']
    ],
    bars: [65, 58, 71, 89, 93, 86],
    line: 'M28 68 C76 92 118 82 166 104 C216 128 254 74 312 90 C372 108 412 54 468 72',
    table: [
      ['SLA', 'Improving', 'Low'],
      ['Backlog', 'Needs review', 'Medium'],
      ['Quality', 'Strong', 'Low']
    ]
  }
]

const periods = ['YTD', 'Q4', 'Last 90 days']
const scenarios = ['Actual', 'Forecast', 'Target gap']

function MetricCard({ label, value, delta }) {
  return (
    <div className="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <em>{delta}</em>
    </div>
  )
}

function MiniBars({ values }) {
  return (
    <div className="mini-bars" aria-hidden="true">
      {values.map((value, index) => (
        <span key={index} style={{ height: `${value}%` }} />
      ))}
    </div>
  )
}

function MockDashboard({ dashboard, lang, period, scenario }) {
  const multiplier = period === 'Q4' ? 1.08 : period === 'Last 90 days' ? 0.94 : 1
  const bars = dashboard.bars.map((v, i) => Math.max(18, Math.min(98, Math.round(v * multiplier - i * 2))))
  const toolClass = dashboard.tool === 'Power BI' ? 'powerbi' : 'looker'

  return (
    <div className={`dashboard-shell ${dashboard.theme}`}>
      <div className="dashboard-topbar">
        <div>
          <span className={`tool-pill ${toolClass}`}>{dashboard.tool}</span>
          <h3>{dashboard.title[lang]}</h3>
          <p>{dashboard.subtitle[lang]}</p>
        </div>
        <div className="live-chip"><span /> Portfolio demo</div>
      </div>

      <div className="dashboard-grid">
        <aside className="dashboard-filters">
          <div className="filter-title">Slicers</div>
          <div className="filter-box">Business Unit <ChevronRight size={14} /></div>
          <div className="filter-box">Region <ChevronRight size={14} /></div>
          <div className="filter-box">Channel <ChevronRight size={14} /></div>
          <div className="filter-box">Month <ChevronRight size={14} /></div>
          <div className="quality-block">
            <span>Data Quality</span>
            <strong>97%</strong>
          </div>
        </aside>

        <section className="dashboard-main">
          <div className="metric-row">
            {dashboard.kpis.map(([label, value, delta]) => (
              <MetricCard key={label} label={label} value={value} delta={scenario === 'Target gap' ? 'Gap view' : delta} />
            ))}
          </div>

          <div className="visual-row">
            <div className="chart-card large">
              <div className="chart-head">
                <span>Trend analysis</span>
                <em>{period}</em>
              </div>
              <svg viewBox="0 0 500 170" className="line-svg" role="img" aria-label="Trend chart">
                <defs>
                  <linearGradient id={`area-${dashboard.id}`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.32" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={`${dashboard.line} L468 164 L28 164 Z`} fill={`url(#area-${dashboard.id})`} />
                <path d={dashboard.line} fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                <circle cx="468" cy={dashboard.id === 'operations' ? 72 : dashboard.id === 'finance' ? 44 : dashboard.id === 'looker' ? 30 : 18} r="8" fill="currentColor" />
              </svg>
            </div>

            <div className="chart-card">
              <div className="chart-head">
                <span>Performance by area</span>
                <em>{scenario}</em>
              </div>
              <MiniBars values={bars} />
            </div>
          </div>

          <div className="bottom-row">
            <div className="chart-card table-card">
              <div className="chart-head">
                <span>Action list</span>
                <em>Priority</em>
              </div>
              <table>
                <tbody>
                  {dashboard.table.map(([area, issue, risk]) => (
                    <tr key={area}>
                      <td>{area}</td>
                      <td>{issue}</td>
                      <td><span className={`risk ${risk.toLowerCase()}`}>{risk}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="insight-card">
              <Sparkles size={18} />
              <strong>Insight layer</strong>
              <p>
                {lang === 'en'
                  ? 'Each dashboard should include a clear management interpretation: what changed, why it changed and which action should follow.'
                  : 'Cada dashboard deve incluir uma leitura clara para gestão: o que mudou, porque mudou e qual a ação seguinte.'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function App() {
  const [lang, setLang] = useState('en')
  const [activeDashboard, setActiveDashboard] = useState(dashboards[0].id)
  const [period, setPeriod] = useState(periods[0])
  const [scenario, setScenario] = useState(scenarios[0])
  const t = copy[lang]

  const selected = useMemo(
    () => dashboards.find((dashboard) => dashboard.id === activeDashboard) || dashboards[0],
    [activeDashboard]
  )

  return (
    <div className="site-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="grid-bg" />

      <header className="navbar">
        <a className="brand" href="#top" aria-label="Fernando Almeida portfolio">
          <span>FA</span>
          <div>
            <strong>Fernando Almeida</strong>
            <small>Data Analyst</small>
          </div>
        </a>
        <nav>
          {t.nav.map((item, index) => (
            <a key={item} href={`#${['value', 'dashboards', 'services', 'experience', 'contact'][index]}`}>{item}</a>
          ))}
        </nav>
        <button className="lang-switch" onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}>
          <Globe2 size={16} /> {lang === 'en' ? 'PT' : 'EN'}
        </button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={16} /> {t.badge}</div>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroText}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#dashboards">{t.ctaPrimary}<ArrowRight size={18} /></a>
              <a className="btn secondary" href={profile.cv} download>{t.ctaSecondary}<Download size={18} /></a>
            </div>
            <div className="tool-stack">
              {['Power BI', 'Looker Studio', 'SQL', 'BigQuery', 'Python', 'Excel', 'SQL Server', 'Salesforce'].map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-card">
              <img src={profile.photo} alt={`${profile.name} profile`} />
              <div className="photo-caption">
                <strong>{profile.name}</strong>
                <span>{profile.title}</span>
              </div>
            </div>
            <div className="floating-card card-a">
              <Gauge size={18} />
              <strong>Decision KPI layer</strong>
              <span>Executive-ready insights</span>
            </div>
            <div className="floating-card card-b">
              <BarChart3 size={18} />
              <strong>BI dashboards</strong>
              <span>Power BI + Looker Studio</span>
            </div>
          </div>
        </section>

        <section className="business-areas section-wrap">
          <div className="section-kicker">{t.trusted}</div>
          <div className="area-grid">
            {t.areas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </section>

        <section className="stats section-wrap">
          {t.stats.map(([title, text]) => (
            <div className="stat-card" key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </section>

        <section id="value" className="section-wrap value-section">
          <div className="section-heading">
            <span className="section-kicker">Value proposition</span>
            <h2>{t.valueTitle}</h2>
            <p>{t.valueIntro}</p>
          </div>
          <div className="value-grid">
            {t.valueCards.map((card) => {
              const Icon = iconMap[card.icon]
              return (
                <article className="value-card" key={card.title}>
                  <div className="value-icon"><Icon size={24} /></div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section id="dashboards" className="section-wrap dashboard-section">
          <div className="section-heading wide">
            <span className="section-kicker">Power BI / Looker Studio</span>
            <h2>{t.dashboardTitle}</h2>
            <p>{t.dashboardIntro}</p>
          </div>

          <div className="dashboard-selector">
            {dashboards.map((dashboard) => (
              <button
                key={dashboard.id}
                className={dashboard.id === activeDashboard ? 'active' : ''}
                onClick={() => setActiveDashboard(dashboard.id)}
              >
                <span>{dashboard.tool}</span>
                {dashboard.title[lang]}
              </button>
            ))}
          </div>

          <div className="control-row">
            <div>
              <span>{t.period}</span>
              <div className="segmented">
                {periods.map((item) => (
                  <button key={item} className={period === item ? 'active' : ''} onClick={() => setPeriod(item)}>{item}</button>
                ))}
              </div>
            </div>
            <div>
              <span>{t.scenario}</span>
              <div className="segmented">
                {scenarios.map((item) => (
                  <button key={item} className={scenario === item ? 'active' : ''} onClick={() => setScenario(item)}>{item}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="dashboard-content">
            <MockDashboard dashboard={selected} lang={lang} period={period} scenario={scenario} />
            <aside className="dashboard-explainer">
              <div className="explainer-block">
                <span>{t.dashboardLabels.purpose}</span>
                <p>{selected.purpose[lang]}</p>
              </div>
              <div className="explainer-block">
                <span>{t.dashboardLabels.sources}</span>
                <div className="chip-list">{selected.sources.map((source) => <em key={source}>{source}</em>)}</div>
              </div>
              <div className="explainer-block">
                <span>{t.dashboardLabels.decisions}</span>
                <ul>{selected.decisions[lang].map((item) => <li key={item}><CheckCircle2 size={15} />{item}</li>)}</ul>
              </div>
              <div className="explainer-block">
                <span>{t.dashboardLabels.deliverables}</span>
                <p>{selected.deliverables[lang]}</p>
              </div>
            </aside>
          </div>
        </section>

        <section id="services" className="section-wrap services-section">
          <div className="section-heading">
            <span className="section-kicker">Services</span>
            <h2>{t.servicesTitle}</h2>
          </div>
          <div className="services-grid">
            {t.services.map(([title, text], index) => (
              <article className="service-card" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap process-section">
          <div className="section-heading">
            <span className="section-kicker">Method</span>
            <h2>{t.processTitle}</h2>
          </div>
          <div className="process-grid">
            {t.process.map(([number, title, text]) => (
              <article className="process-card" key={number}>
                <strong>{number}</strong>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-wrap experience-section">
          <div className="section-heading">
            <span className="section-kicker">Background</span>
            <h2>{t.experienceTitle}</h2>
          </div>
          <div className="timeline">
            {t.experiences.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.date}`}>
                <span>{item.date}</span>
                <div>
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="education-card">
            <h3>{t.educationTitle}</h3>
            {t.education.map((item) => <p key={item}><CheckCircle2 size={16} /> {item}</p>)}
          </div>
        </section>

        <section id="contact" className="section-wrap contact-section">
          <div className="contact-card">
            <div>
              <span className="section-kicker">Contact</span>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
              <div className="contact-meta">
                <span><Mail size={16} /> {profile.email}</span>
                <span><MapPin size={16} /> {profile.location}</span>
              </div>
            </div>
            <div className="contact-actions">
              <a className="btn primary" href={`mailto:${profile.email}`}>{t.contactButton}<Mail size={18} /></a>
              <a className="btn secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<ExternalLink size={18} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{t.footer}</span>
      </footer>
    </div>
  )
}

export default App
