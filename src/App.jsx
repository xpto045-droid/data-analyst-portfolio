import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  Cloud,
  Database,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Gauge,
  Languages,
  Layers3,
  LineChart,
  Mail,
  MapPin,
  PieChart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  Wrench,
} from 'lucide-react';

const profile = {
  name: 'Fernando Almeida',
  role: {
    en: 'Data Analyst & Business Intelligence Specialist',
    pt: 'Analista de Dados & Especialista em Business Intelligence',
  },
  headline: {
    en: 'I turn business data into dashboards, automation and decisions.',
    pt: 'Transformo dados de negócio em dashboards, automação e decisões.',
  },
  summary: {
    en: 'I help companies transform scattered data from sales, finance, operations, CRM and internal systems into clear KPIs, reliable reports and executive-ready dashboards.',
    pt: 'Ajudo empresas a transformar dados dispersos de vendas, finanças, operações, CRM e sistemas internos em KPIs claros, relatórios fiáveis e dashboards prontos para decisão.',
  },
  location: 'Lisbon, Portugal',
  email: 'fernandoluisdba@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fernando-almeida-b33558301',
  cv: './cv-fernando-almeida.pdf',
  photo: './profile.jpg',
};

const copy = {
  en: {
    nav: ['Value', 'Dashboards', 'Skills', 'Experience', 'Contact'],
    badge: 'Available for data analyst / BI opportunities in Portugal',
    viewDashboards: 'View dashboard examples',
    contact: 'Contact me',
    downloadCv: 'Download CV',
    heroStats: [
      ['Data analyst', 'Business, BI & reporting'],
      ['SQL + BI', 'Core analytical toolkit'],
      ['Power BI / Looker', 'Dashboard storytelling'],
      ['Python + Cloud', 'Automation & data quality'],
    ],
    valueKicker: 'Company value',
    valueTitle: 'How I can help your company',
    valueText: 'A practical data profile focused on business impact, not only technical delivery.',
    dashboardsKicker: 'Interactive examples',
    dashboardsTitle: 'Dashboard concepts for different business areas',
    dashboardsText: 'These mockups are illustrative examples built into the website to show the type of decision layer I can create. Real dashboards can be connected to Power BI, Looker Studio, BigQuery, SQL Server, Excel, Salesforce, finance systems or internal tools.',
    skillsKicker: 'Capabilities',
    skillsTitle: 'From raw data to business action',
    skillsText: 'I combine data extraction, modelling, visualisation and communication so teams can trust the numbers and act faster.',
    experienceKicker: 'Experience',
    experienceTitle: 'Professional background',
    experienceText: 'A profile that combines corporate analytics, business intelligence, data quality and performance analysis.',
    educationKicker: 'Education',
    educationTitle: 'Academic path & certifications',
    contactKicker: 'Let’s talk',
    contactTitle: 'Need better dashboards, cleaner data or faster reporting?',
    contactText: 'I can help turn complex business information into clear, decision-ready reporting for management and operational teams.',
    processTitle: 'A simple working method',
  },
  pt: {
    nav: ['Valor', 'Dashboards', 'Skills', 'Experiência', 'Contacto'],
    badge: 'Disponível para oportunidades de Data Analyst / BI em Portugal',
    viewDashboards: 'Ver exemplos de dashboards',
    contact: 'Contactar',
    downloadCv: 'Descarregar CV',
    heroStats: [
      ['Data analyst', 'Negócio, BI & reporting'],
      ['SQL + BI', 'Base analítica principal'],
      ['Power BI / Looker', 'Dashboards e storytelling'],
      ['Python + Cloud', 'Automação e qualidade de dados'],
    ],
    valueKicker: 'Valor para empresas',
    valueTitle: 'Como posso ajudar a tua empresa',
    valueText: 'Um perfil prático de dados, orientado para impacto no negócio e não apenas para execução técnica.',
    dashboardsKicker: 'Exemplos interativos',
    dashboardsTitle: 'Conceitos de dashboard para várias áreas de negócio',
    dashboardsText: 'Estes mockups são exemplos ilustrativos criados no site para mostrar o tipo de camada de decisão que posso construir. Dashboards reais podem ligar a Power BI, Looker Studio, BigQuery, SQL Server, Excel, Salesforce, sistemas financeiros ou ferramentas internas.',
    skillsKicker: 'Competências',
    skillsTitle: 'Do dado bruto à decisão de negócio',
    skillsText: 'Combino extração, modelação, visualização e comunicação para que as equipas confiem nos números e atuem mais depressa.',
    experienceKicker: 'Experiência',
    experienceTitle: 'Percurso profissional',
    experienceText: 'Um perfil que combina analytics em contexto empresarial, business intelligence, qualidade de dados e análise de performance.',
    educationKicker: 'Formação',
    educationTitle: 'Percurso académico & certificações',
    contactKicker: 'Vamos falar',
    contactTitle: 'Precisas de melhores dashboards, dados mais limpos ou reporting mais rápido?',
    contactText: 'Posso ajudar a transformar informação complexa em reporting claro, fiável e pronto para decisão.',
    processTitle: 'Método de trabalho simples',
  },
};

const valueCards = [
  {
    icon: <Building2 />,
    title: { en: 'Management visibility', pt: 'Visibilidade para gestão' },
    text: {
      en: 'Executive dashboards that turn scattered business data into one clear view of performance.',
      pt: 'Dashboards executivos que transformam dados dispersos numa visão clara da performance.',
    },
  },
  {
    icon: <Calculator />,
    title: { en: 'Finance & cost control', pt: 'Finanças e controlo de custos' },
    text: {
      en: 'Reporting for budgets, costs, margins, anomalies and recurring business indicators.',
      pt: 'Reporting para budgets, custos, margens, anomalias e indicadores recorrentes de negócio.',
    },
  },
  {
    icon: <Workflow />,
    title: { en: 'Automation of repetitive reporting', pt: 'Automação de reporting repetitivo' },
    text: {
      en: 'Replace manual Excel work with repeatable flows, cleaner datasets and faster updates.',
      pt: 'Substituir trabalho manual em Excel por fluxos repetíveis, dados mais limpos e atualizações rápidas.',
    },
  },
  {
    icon: <Target />,
    title: { en: 'Sales, CRM & operations KPIs', pt: 'KPIs de vendas, CRM e operações' },
    text: {
      en: 'Translate commercial, operational and customer data into measurable actions and priorities.',
      pt: 'Traduzir dados comerciais, operacionais e de cliente em ações e prioridades mensuráveis.',
    },
  },
];

const dashboardSamples = [
  {
    id: 'executive',
    icon: <Gauge />,
    label: { en: 'Executive', pt: 'Executivo' },
    title: { en: 'Executive Performance Cockpit', pt: 'Cockpit Executivo de Performance' },
    subtitle: {
      en: 'Company-wide view for management meetings: revenue, costs, efficiency and operational risk.',
      pt: 'Visão global para reuniões de gestão: receita, custos, eficiência e risco operacional.',
    },
    metrics: [
      { label: 'Revenue', value: '€4.8M', delta: '+12.4%' },
      { label: 'Margin', value: '31.8%', delta: '+2.1pp' },
      { label: 'Cost variance', value: '-6.3%', delta: 'better' },
      { label: 'SLA', value: '94%', delta: '+8pp' },
    ],
    bars: [62, 78, 72, 88, 82, 94],
    funnel: [96, 74, 55, 38],
    table: [
      ['North', '€1.6M', '+9%'],
      ['Centre', '€1.2M', '+14%'],
      ['South', '€2.0M', '+11%'],
    ],
  },
  {
    id: 'finance',
    icon: <PieChart />,
    label: { en: 'Finance', pt: 'Financeiro' },
    title: { en: 'Finance & Cost Control', pt: 'Controlo Financeiro e Custos' },
    subtitle: {
      en: 'Budget monitoring, cost centres, forecast deviation and recurring anomalies.',
      pt: 'Monitorização de budgets, centros de custo, desvios ao forecast e anomalias recorrentes.',
    },
    metrics: [
      { label: 'Budget used', value: '68%', delta: 'on track' },
      { label: 'Savings found', value: '€82k', delta: '+18%' },
      { label: 'Open risks', value: '7', delta: '-3' },
      { label: 'Forecast gap', value: '2.4%', delta: 'low' },
    ],
    bars: [45, 54, 62, 58, 70, 68],
    funnel: [100, 81, 59, 42],
    table: [
      ['Marketing', '€240k', '-4%'],
      ['Operations', '€680k', '+2%'],
      ['IT & Data', '€190k', '-8%'],
    ],
  },
  {
    id: 'sales',
    icon: <TrendingUp />,
    label: { en: 'Sales', pt: 'Vendas' },
    title: { en: 'Sales & Pipeline Intelligence', pt: 'Inteligência de Vendas e Pipeline' },
    subtitle: {
      en: 'Lead flow, conversion rates, sales performance and prioritisation by team or territory.',
      pt: 'Fluxo de leads, taxas de conversão, performance comercial e prioridades por equipa ou território.',
    },
    metrics: [
      { label: 'Leads', value: '12.4k', delta: '+21%' },
      { label: 'Conversion', value: '18.7%', delta: '+3.2pp' },
      { label: 'Avg. response', value: '42m', delta: '-31%' },
      { label: 'Won value', value: '€920k', delta: '+15%' },
    ],
    bars: [48, 61, 57, 76, 85, 91],
    funnel: [100, 67, 46, 23],
    table: [
      ['Digital', '4.2k', '+24%'],
      ['Dealer', '5.8k', '+13%'],
      ['Outbound', '2.4k', '+31%'],
    ],
  },
  {
    id: 'operations',
    icon: <LineChart />,
    label: { en: 'Operations', pt: 'Operações' },
    title: { en: 'Operations & SLA Control', pt: 'Controlo Operacional e SLA' },
    subtitle: {
      en: 'Operational bottlenecks, SLA compliance, backlog, aging and process efficiency.',
      pt: 'Bottlenecks operacionais, cumprimento de SLA, backlog, aging e eficiência de processos.',
    },
    metrics: [
      { label: 'SLA met', value: '92%', delta: '+6pp' },
      { label: 'Backlog', value: '318', delta: '-19%' },
      { label: 'Cycle time', value: '2.8d', delta: '-0.7d' },
      { label: 'Quality', value: '98.1%', delta: '+1.4pp' },
    ],
    bars: [51, 63, 59, 73, 80, 92],
    funnel: [89, 72, 64, 51],
    table: [
      ['Queue A', '97%', '+5pp'],
      ['Queue B', '88%', '+9pp'],
      ['Queue C', '91%', '+4pp'],
    ],
  },
];

const skills = [
  'SQL', 'T-SQL', 'SQL Server', 'BigQuery', 'Power BI', 'Looker Studio', 'Excel', 'Power Query',
  'Python', 'Jupyter', 'Salesforce', 'SFMC', 'Google Cloud Platform', 'Azure', 'Microsoft Fabric',
  'ETL', 'Data Quality', 'Data Visualization', 'Dashboard Development', 'Reporting Automation',
  'Business Intelligence', 'KPI Design', 'Stakeholder Management', 'Process Improvement',
];

const skillGroups = [
  {
    icon: <Database />,
    title: { en: 'Data extraction & modelling', pt: 'Extração e modelação de dados' },
    items: ['SQL Server', 'BigQuery', 'T-SQL', 'CTEs', 'Stored procedures', 'Data transformations'],
  },
  {
    icon: <BarChart3 />,
    title: { en: 'BI dashboards & storytelling', pt: 'Dashboards BI e storytelling' },
    items: ['Power BI', 'Looker Studio', 'Excel', 'KPI design', 'Executive reports', 'Data visualization'],
  },
  {
    icon: <Cloud />,
    title: { en: 'Cloud, CRM & business platforms', pt: 'Cloud, CRM e plataformas de negócio' },
    items: ['GCP', 'Azure', 'Microsoft Fabric', 'Salesforce', 'SFMC', 'Internal systems'],
  },
  {
    icon: <Wrench />,
    title: { en: 'Automation & data quality', pt: 'Automação e qualidade de dados' },
    items: ['Power Query', 'Python/Jupyter', 'Dataflows', 'Validation rules', 'Recurring reporting', 'Process automation'],
  },
];

const experience = [
  {
    company: 'Renault Group',
    role: { en: 'Data Analyst', pt: 'Analista de Dados' },
    period: '2024 – Current',
    bullets: {
      en: [
        'Extract, transform and analyse data from business, CRM, operations, aftersales, distribution and internal systems.',
        'Build dashboards and KPI reports to support management decisions and operational follow-up.',
        'Improve queries, reporting flows and data quality controls to make recurring outputs more reliable.',
        'Work with different business teams to understand requirements and deliver practical data solutions.',
      ],
      pt: [
        'Extração, transformação e análise de dados de negócio, CRM, operações, aftersales, distribuição e sistemas internos.',
        'Construção de dashboards e relatórios de KPIs para apoiar decisões de gestão e acompanhamento operacional.',
        'Melhoria de queries, fluxos de reporting e controlos de qualidade de dados para tornar outputs recorrentes mais fiáveis.',
        'Trabalho com diferentes equipas de negócio para levantar requisitos e entregar soluções práticas de dados.',
      ],
    },
  },
  {
    company: 'Logical Jupiter',
    role: { en: 'Data Analyst', pt: 'Analista de Dados' },
    period: '2024',
    bullets: {
      en: [
        'Built and maintained interactive Power BI dashboards and reports for business decision-making.',
        'Developed SQL queries, stored procedures, CTEs and data transformations for reporting and analysis.',
        'Worked with Azure, SQL Server, Microsoft Fabric and ETL processes to extract, clean and manage data.',
      ],
      pt: [
        'Construção e manutenção de dashboards interativos em Power BI e relatórios para apoio à decisão.',
        'Desenvolvimento de queries SQL, stored procedures, CTEs e transformações de dados para reporting e análise.',
        'Trabalho com Azure, SQL Server, Microsoft Fabric e processos ETL para extrair, limpar e gerir dados.',
      ],
    },
  },
  {
    company: 'CD Mafra / SL Benfica U-16',
    role: { en: 'Data Analyst', pt: 'Analista de Dados' },
    period: '2019 – 2024',
    bullets: {
      en: [
        'Analysed individual and team performance using statistical and video data.',
        'Created dashboards and reports to support coaching staff decision-making.',
        'Supported player development analysis and opponent scouting through data-driven insights.',
      ],
      pt: [
        'Análise de performance individual e coletiva com base em dados estatísticos e vídeo.',
        'Criação de dashboards e relatórios para apoiar decisões da equipa técnica.',
        'Apoio à análise de desenvolvimento de jogadores e scouting de adversários com dados.',
      ],
    },
  },
];

const education = [
  {
    icon: <GraduationCap />,
    title: { en: 'Bachelor’s Degree in Sports, specialized in Data Analysis', pt: 'Licenciatura em Desporto, especialização em Análise de Dados' },
    detail: { en: 'Finished · Final grade: 17/20', pt: 'Concluída · Nota final: 17/20' },
  },
  {
    icon: <Layers3 />,
    title: { en: 'Bachelor’s Degree in Computer Science and Engineering', pt: 'Licenciatura em Engenharia Informática' },
    detail: { en: 'Ongoing · Expected final grade: 18/20', pt: 'Em curso · Nota final esperada: 18/20' },
  },
  {
    icon: <ShieldCheck />,
    title: { en: 'Certifications', pt: 'Certificações' },
    detail: { en: 'AZ-900 · Cybersecurity Fundamentals · Manager Coach Leadership · Big Data MIT', pt: 'AZ-900 · Cybersecurity Fundamentals · Manager Coach Leadership · Big Data MIT' },
  },
];

const process = [
  {
    step: '01',
    title: { en: 'Understand the business question', pt: 'Perceber a pergunta de negócio' },
    text: { en: 'Clarify what the company needs to decide, monitor or improve.', pt: 'Clarificar o que a empresa precisa de decidir, acompanhar ou melhorar.' },
  },
  {
    step: '02',
    title: { en: 'Map and clean the data', pt: 'Mapear e limpar os dados' },
    text: { en: 'Connect sources, validate rules and build a reliable dataset.', pt: 'Ligar fontes, validar regras e construir uma base de dados fiável.' },
  },
  {
    step: '03',
    title: { en: 'Build the dashboard layer', pt: 'Construir a camada de dashboard' },
    text: { en: 'Create KPIs, filters, views and visuals that are easy to read.', pt: 'Criar KPIs, filtros, vistas e visuais fáceis de interpretar.' },
  },
  {
    step: '04',
    title: { en: 'Automate and improve', pt: 'Automatizar e melhorar' },
    text: { en: 'Reduce manual work, document logic and keep improving with users.', pt: 'Reduzir trabalho manual, documentar lógica e melhorar com os utilizadores.' },
  },
];

function t(value, lang) {
  return typeof value === 'string' ? value : value[lang];
}

function Nav({ lang, setLang }) {
  const labels = copy[lang].nav;
  const links = ['#value', '#dashboards', '#skills', '#experience', '#contact'];
  return (
    <header className="nav-shell">
      <a href="#top" className="brand" aria-label="Go to top">
        <span>FA</span>
        <strong>Fernando Almeida</strong>
      </a>
      <nav aria-label="Main navigation">
        {labels.map((label, index) => (
          <a href={links[index]} key={label}>{label}</a>
        ))}
      </nav>
      <button className="language-toggle" onClick={() => setLang(lang === 'en' ? 'pt' : 'en')} type="button" aria-label="Change language">
        <Languages size={16} /> {lang === 'en' ? 'PT' : 'EN'}
      </button>
    </header>
  );
}

function SectionHeading({ kicker, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Hero({ lang }) {
  return (
    <section id="top" className="hero section-grid">
      <div className="hero-copy reveal">
        <div className="status-pill"><span /> {copy[lang].badge}</div>
        <p className="eyebrow">{t(profile.role, lang)}</p>
        <h1>{t(profile.headline, lang)}</h1>
        <p className="hero-text">{t(profile.summary, lang)}</p>
        <div className="hero-actions">
          <a className="btn primary" href="#dashboards">{copy[lang].viewDashboards} <ArrowRight size={18} /></a>
          <a className="btn secondary" href={`mailto:${profile.email}`}>{copy[lang].contact} <Mail size={18} /></a>
          <a className="btn ghost" href={profile.cv} target="_blank" rel="noreferrer">{copy[lang].downloadCv} <Download size={18} /></a>
        </div>
      </div>

      <aside className="hero-visual reveal" aria-label="Profile and dashboard preview">
        <div className="portrait-card">
          <div className="portrait-frame">
            <img src={profile.photo} alt="Fernando Almeida profile" />
          </div>
          <div>
            <h2>{profile.name}</h2>
            <p>{t(profile.role, lang)}</p>
            <span><MapPin size={15} /> {profile.location}</span>
          </div>
        </div>
        <div className="mini-dashboard-card">
          <div className="mini-topline">
            <span>{lang === 'en' ? 'Business dashboard preview' : 'Pré-visualização de dashboard'}</span>
            <BarChart3 size={18} />
          </div>
          <div className="mini-kpis">
            <strong>94%</strong>
            <strong>€4.8M</strong>
            <strong>+18%</strong>
          </div>
          <div className="mini-bars" aria-hidden="true">
            {[38, 52, 47, 68, 74, 86, 79].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}
          </div>
        </div>
      </aside>
    </section>
  );
}

function Stats({ lang }) {
  return (
    <section className="stats-wrap" aria-label="Highlights">
      {copy[lang].heroStats.map(([value, label]) => (
        <div className="stat-card" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

function Value({ lang }) {
  return (
    <section id="value" className="section-block">
      <SectionHeading kicker={copy[lang].valueKicker} title={copy[lang].valueTitle} text={copy[lang].valueText} />
      <div className="value-grid">
        {valueCards.map((card) => (
          <article className="value-card" key={t(card.title, lang)}>
            <div className="icon-bubble">{card.icon}</div>
            <h3>{t(card.title, lang)}</h3>
            <p>{t(card.text, lang)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DashboardStudio({ lang }) {
  const [activeId, setActiveId] = useState('executive');
  const active = useMemo(() => dashboardSamples.find((item) => item.id === activeId), [activeId]);

  return (
    <section id="dashboards" className="section-block dashboard-section">
      <SectionHeading kicker={copy[lang].dashboardsKicker} title={copy[lang].dashboardsTitle} text={copy[lang].dashboardsText} />
      <div className="dashboard-tabs" role="tablist" aria-label="Dashboard examples">
        {dashboardSamples.map((item) => (
          <button key={item.id} type="button" className={activeId === item.id ? 'active' : ''} onClick={() => setActiveId(item.id)} aria-pressed={activeId === item.id}>
            {item.icon}
            {t(item.label, lang)}
          </button>
        ))}
      </div>

      <article className="dashboard-mockup">
        <div className="dashboard-header">
          <div>
            <p className="eyebrow">{lang === 'en' ? 'Interactive mockup' : 'Mockup interativo'}</p>
            <h3>{t(active.title, lang)}</h3>
            <p>{t(active.subtitle, lang)}</p>
          </div>
          <span className="live-badge"><Sparkles size={15} /> {lang === 'en' ? 'Sample data' : 'Dados exemplo'}</span>
        </div>

        <div className="metric-grid">
          {active.metrics.map((metric) => (
            <div className="metric-card" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>{metric.delta}</small>
            </div>
          ))}
        </div>

        <div className="analytics-grid">
          <div className="chart-panel large">
            <div className="panel-title">
              <span>{lang === 'en' ? 'Monthly trend' : 'Tendência mensal'}</span>
              <LineChart size={17} />
            </div>
            <div className="bar-chart" aria-hidden="true">
              {active.bars.map((height, index) => (
                <span key={index} style={{ height: `${height}%` }}>
                  <i>{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}</i>
                </span>
              ))}
            </div>
          </div>

          <div className="chart-panel">
            <div className="panel-title">
              <span>{lang === 'en' ? 'Conversion / flow' : 'Conversão / fluxo'}</span>
              <Target size={17} />
            </div>
            <div className="funnel-chart" aria-hidden="true">
              {active.funnel.map((width, index) => (
                <span key={index} style={{ width: `${width}%` }} />
              ))}
            </div>
          </div>

          <div className="chart-panel">
            <div className="panel-title">
              <span>{lang === 'en' ? 'Breakdown' : 'Detalhe'}</span>
              <Database size={17} />
            </div>
            <div className="data-table" role="table" aria-label="Sample data table">
              {active.table.map((row) => (
                <div className="table-row" key={row.join('-')} role="row">
                  <span>{row[0]}</span>
                  <strong>{row[1]}</strong>
                  <em>{row[2]}</em>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

function Skills({ lang }) {
  return (
    <section id="skills" className="section-block">
      <SectionHeading kicker={copy[lang].skillsKicker} title={copy[lang].skillsTitle} text={copy[lang].skillsText} />
      <div className="tool-grid">
        {skillGroups.map((group) => (
          <article className="tool-card" key={t(group.title, lang)}>
            <div className="icon-bubble">{group.icon}</div>
            <h3>{t(group.title, lang)}</h3>
            <ul>{group.items.map((item) => <li key={item}><CheckCircle2 size={15} /> {item}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className="skill-cloud" aria-label="Skill keywords">
        {skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </section>
  );
}

function Experience({ lang }) {
  return (
    <section id="experience" className="section-block">
      <SectionHeading kicker={copy[lang].experienceKicker} title={copy[lang].experienceTitle} text={copy[lang].experienceText} />
      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline-card" key={`${job.company}-${job.period}`}>
            <div className="timeline-head">
              <span className="period">{job.period}</span>
              <h3>{t(job.role, lang)}</h3>
              <p className="company"><BriefcaseBusiness size={16} /> {job.company}</p>
            </div>
            <ul>{job.bullets[lang].map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationAndProcess({ lang }) {
  return (
    <section className="section-block split-section">
      <div>
        <SectionHeading kicker={copy[lang].educationKicker} title={copy[lang].educationTitle} />
        <div className="education-list">
          {education.map((item) => (
            <article className="education-card" key={t(item.title, lang)}>
              {item.icon}
              <div>
                <h3>{t(item.title, lang)}</h3>
                <p>{t(item.detail, lang)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="process-card">
        <p className="eyebrow">Workflow</p>
        <h2>{copy[lang].processTitle}</h2>
        <div className="process-list">
          {process.map((item) => (
            <article key={item.step}>
              <span>{item.step}</span>
              <div>
                <h3>{t(item.title, lang)}</h3>
                <p>{t(item.text, lang)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ lang }) {
  return (
    <section id="contact" className="contact-section">
      <p className="eyebrow">{copy[lang].contactKicker}</p>
      <h2>{copy[lang].contactTitle}</h2>
      <p>{copy[lang].contactText}</p>
      <div className="hero-actions center-actions">
        <a className="btn primary" href={`mailto:${profile.email}`}>{copy[lang].contact} <Mail size={18} /></a>
        <a className="btn secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={18} /></a>
        <a className="btn ghost" href={profile.cv} target="_blank" rel="noreferrer">CV <FileText size={18} /></a>
      </div>
    </section>
  );
}

function Footer({ lang }) {
  return (
    <footer>
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <div>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.cv} target="_blank" rel="noreferrer">{lang === 'en' ? 'Download CV' : 'Descarregar CV'}</a>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <>
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />
      <Nav lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Stats lang={lang} />
        <Value lang={lang} />
        <DashboardStudio lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <EducationAndProcess lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
