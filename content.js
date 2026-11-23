/*
 * ALL site content lives here. Edit this file to update the portfolio.
 * Accomplishment statements and numbers are copied verbatim from
 * cv/master_resume_projects.json and 01-candidate-profile.md (LOCKED: never change a number).
 */
window.CONTENT = {
  name: "Dawson Conlon",
  roles: ["Data Scientist", "Data Analyst", "Data Engineer", "AI Engineer"],
  pitch:
    "I find the business pain point hiding in the data, then build the fix: pipelines, databases and AI tools that decision-makers trust.",
  status: "Available May 2027 · full-time or 4-month work term",
  links: {
    email: "conlondawson@gmail.com",
    linkedin: "https://www.linkedin.com/in/dawson-conlon-268165345/",
    github: "https://github.com/DawsonConlon",
    resume: "assets/Dawson-Conlon-Resume.pdf",
  },

  metrics: [
    { value: 1694, label: "embedded chunks powering a RAG chatbot", src: "Biktrix" },
    { value: 725481, label: "row MySQL database of 2025 dispatch records", src: "MDSA DATA 604" },
    { value: 1087, label: "support tickets closed (23.57% of company volume)", src: "Biktrix" },
    { value: 4.84, decimals: 2, suffix: "/5", label: "customer satisfaction rating", src: "Biktrix" },
    { value: 25, prefix: "~", suffix: "%", label: "cheaper carrier, confirmed with a tracking database", src: "Biktrix" },
    { value: 16600, prefix: "$", suffix: "/yr", label: "remediation plan vs. capital upgrades", src: "City of Saskatoon" },
  ],

  about: [
    "I'm a Master of Data Science and Analytics student at the University of Calgary with a background in biotechnology and over a year and a half of internship experience in data quality, analysis and reporting.",
    "As a first-generation university student, I've learned to figure things out by building. My favourite work starts with a messy problem: an underused database, a shipping decision nobody could prove, a treatment plant that wasn't nitrifying. I dig into the data, build the tool, and present the answer to the people who need it, from a CEO to a panel of farmers and engineers.",
  ],
  facts: [
    ["Based in", "Calgary, AB · Saskatoon roots"],
    ["Studying", "MDSA, University of Calgary (Sep 2026 - Sep 2027)"],
    ["Available", "May 2027"],
    ["Work authorization", "Permanent Resident of Canada"],
  ],

  experience: [
    {
      title: "CX Team – Internship",
      org: "Biktrix Electronic Bicycles",
      place: "Saskatoon, SK",
      dates: "Mar 2026 - Sep 2026",
      headline: "Spotted a pain point, pitched a RAG chatbot to the CEO, then built it.",
      tags: ["RAG", "n8n", "ETL", "Qdrant", "OpenAI embeddings", "Supply chain", "CX analytics"],
      repo: "https://github.com/DawsonConlon/biktrix-support-bot",
      bullets: [
        "Identified a business pain point where simple tickets could be resolved using an underutilized internal database and presented a proposal to key stakeholders (CEO, managers), securing approval",
        "Built an ETL pipeline ingesting 261 support guides into 1,694 embedded chunks to power a RAG chatbot, giving internal sales and technical support teams one-click access to troubleshooting guides across all 9 Ebike models",
        "When a new carrier caused an increase in shipping damage tickets, built a tracking database to monitor carrier performance, confirming the low-cost carrier was about 25% cheaper despite the damage rate, informing an evidence-based supply-chain decision",
        "Redesigned customer support ticket categories (fault type, component, resolution type) to enable richer data collection and identified trends in product failures, enabling effective trend reporting",
        "Managed 2,114 customer messages and closed 1,087 support tickets (23.57% of total company ticket volume) in an environment handling 470+ tickets weekly, maintaining a 4.84/5 customer satisfaction rating and a two-day average resolution time",
      ],
    },
    {
      title: "Data Scientist – Internship",
      org: "University of Saskatchewan",
      place: "Saskatoon, SK",
      dates: "Apr 2025 - Dec 2025",
      headline: "Turned a messy 20-table research database into statistically sound findings.",
      tags: ["R / RStudio", "Data cleaning", "Statistics", "Deep learning", "HPC", "Access/Excel"],
      bullets: [
        "Developed the foundations of a deep learning model that took over 3 million DNA reads and mapped them to a reference genome to create a fully annotated large DNA database",
        "Migrated and cleaned a 3-year, 20-table Microsoft Access/Excel database (4,417 reproductive records across 240 subjects), identifying and resolving approximately 418 data-quality issues",
        "Built an RStudio statistical pipeline applying descriptive statistics, linear regression, and Welch's t-tests to quantify reproductive intervals (mean 22 days, SD ±11) and developmental timing across 9 life stages",
        "Identified a statistically significant impact of a controlled 5°C environmental change on reproductive timing, a 5-day increase in lay interval, a 3-day increase in hatch time, and significant differences in 6 of 9 developmental stages",
      ],
    },
    {
      title: "Data Analyst Intern",
      org: "City of Saskatoon Wastewater Treatment Plant",
      place: "Saskatoon, SK",
      dates: "Apr 2022 - Jun 2022",
      headline: "Diagnosed a plant-wide process failure from 360+ field data points.",
      tags: ["Excel", "Python", "Field study", "Root-cause analysis", "Environmental"],
      bullets: [
        "Executed an oxidation-reduction potential (ORP) field study across 18 bioreactors at a treatment plant serving 273,000 residents, collecting and analyzing 360+ data points in Excel to assess nitrification efficiency",
        "Diagnosed a plant-wide process failure by identifying that ORP never exceeded 62 mV against the required +100 to +350 mV range, providing definitive evidence of 0% nitrification efficiency across all monitored bioreactors",
        "Conducted Gram stain, spore stain, and wet-mount microscopy across 3 bioreactor zones to identify Microthrix parvicella as the root cause of failing dormant nitrifying bacteria, directly informing a targeted remediation strategy",
        "Proposed a biostimulator-based remediation plan projected at $16,600/year, presenting plant stakeholders with a lower-cost alternative to capital infrastructure upgrades",
        "Authored initial Python logic to classify real-time ORP readings into 6 biochemical process states, laying the groundwork for an automated control-room monitoring system",
      ],
    },
  ],

  // Featured projects: approved résumé bullets, verbatim.
  projects: [
    {
      title: "SpraySmart",
      featured: true,
      badge: "2nd Place · USASK AgTech Hackathon",
      dates: "Mar 2026",
      kind: "Team project",
      cats: ["ml", "ag"],
      stack: ["Python", "scikit-learn", "pandas", "Open-Meteo API", "Docker"],
      stat: { value: "720", label: "hours of weather data" },
      repo: "https://github.com/DawsonConlon/spraymart",
      blurb: "Tells farmers when weather conditions are right to spray herbicide.",
      bullets: [
        "Placed 2nd at the March 2026 University of Saskatchewan Agriculture Technology Hackathon with a team-built tool that tells farmers when weather conditions are right to spray herbicide",
        "Interviewed University of Saskatchewan agriculture professors to pinpoint a pain point farmers face, deciding when to spray herbicide based on intuition, then built a 7-day dashboard rating 7 weather measurements as green, yellow or red spray recommendations with plain-language reasons",
        "Trained a decision tree classifier on 720 hours of Environment Canada weather data and designed a farmer-feedback loop that turns every spray into a labelled training example",
      ],
    },
    {
      title: "Animal Husbandry Analysis",
      featured: true,
      badge: "Pending publication · Journal of Invertebrate Zoology",
      dates: "Apr 2025 - Dec 2025",
      kind: "Research for Dr. Nicole Webster, University of Saskatchewan",
      cats: ["analytics", "health"],
      stack: ["R", "RStudio", "dplyr", "ggplot2", "broom", "Microsoft Access", "Excel"],
      stat: { value: "4,417", label: "records across 240 subjects" },
      repo: null,
      repoNote: "Private research repo",
      blurb: "Three years of lab husbandry records for the slipper snail Crepidula atrasolea, turned into evidence of how a 5°C temperature change shifted reproduction and development.",
      bullets: [
        "Migrated and cleaned a 3-year, 20-table Microsoft Access/Excel database (4,417 reproductive records across 240 subjects), identifying and resolving approximately 418 data-quality issues",
        "Built an RStudio statistical pipeline applying descriptive statistics, linear regression, and Welch's t-tests to quantify reproductive intervals (mean 22 days, SD ±11) and developmental timing across 9 life stages",
        "Identified a statistically significant impact of a controlled 5°C environmental change on reproductive timing, a 5-day increase in lay interval, a 3-day increase in hatch time, and significant differences in 6 of 9 developmental stages",
      ],
    },
    {
      title: "First Responder Response Times",
      badge: "MDSA Group Project · DATA 604",
      dates: "Nov 2026",
      kind: "Team of 4",
      cats: ["sql"],
      stack: ["Python", "pandas", "SQLAlchemy", "MySQL", "Jupyter"],
      stat: { value: "725,481", label: "rows across 4 cities" },
      repo: "https://github.com/DawsonConlon/first-responder-response-times",
      blurb: "How fast do first responders arrive in Waterloo, New York, Seattle and San Francisco?",
      bullets: [
        "Built a 725,481-row MySQL relational database of 2025 first-responder dispatch records from Waterloo, New York City, Seattle and San Francisco open data, cleaning each city in pandas to a shared 7-column schema, loading through SQLAlchemy and combining tables with UNION ALL (team of 4)",
        "Cleaned Waterloo Regional Police's 292,876-row 2025 occurrence dataset to 106,016 valid calls, using SQL quality checks to find and remove missing and negative travel times, then wrote aggregate, GROUP BY and nested queries by patrol division and month",
        "Found Waterloo and New York averaged roughly 4 to 6 times slower than Seattle and San Francisco, and disproved the snow hypothesis (Waterloo's December averaged 26.4 min against a 29.9 min yearly baseline), recommending medians because a few multi-day calls inflated the means",
      ],
    },
    {
      title: "E-Commerce Analytics",
      badge: "MDSA Course Project",
      dates: "Sep 2026 - Dec 2026",
      kind: "With a partner",
      cats: ["analytics", "ml"],
      stack: ["Python", "scikit-learn", "R", "ANOVA"],
      stat: { value: "138,116", label: "orders analyzed" },
      repo: "https://github.com/DawsonConlon/ecommerce-analytics",
      blurb: "Shipping cost prediction and customer segment analysis.",
      bullets: [
        "Integrated 4 relational tables into a 397,569-line dataset (138,116 orders) and found through linear regression that shipping cost was an exact function of financial fields (R² = 1.0), showing a formula, not a model, was needed",
        "Ran ANOVA across customer tiers, finding VIP customers had no higher lifetime value (p = 0.317) but paid significantly less for shipping and rated products higher, informing loyalty-perk decisions",
      ],
    },
    {
      title: "BDM Inventory Intelligence",
      badge: "Build Challenge",
      dates: "Nov 2026",
      kind: "Deployed app",
      cats: ["analytics", "health", "sql"],
      stack: ["Python", "Streamlit", "SQLite", "Streamlit Cloud"],
      stat: { value: "25", label: "drug–site combinations monitored" },
      repo: "https://github.com/DawsonConlon/bdm-inventory-intelligence",
      blurb: "Decision support for pharmacy reorders, ranked by patient-care risk.",
      bullets: [
        "Built and deployed a Streamlit/SQLite decision-support app flagging drugs with 7 or fewer days of supply across 25 drug–site combinations, cross-referenced against active Health Canada shortage data",
        "Derived consumption metrics from procurement history and added cascading region-to-site filters so pharmacy staff can prioritize reorders by patient-care risk",
      ],
    },
    {
      title: "Multiple Regression & Model Selection",
      badge: "MDSA Assignment · DATA 603",
      dates: "Nov 2026",
      kind: "3 case studies",
      cats: ["analytics", "ml"],
      stack: ["R", "olsrr", "ggplot2", "plotly", "R Markdown"],
      stat: { value: "96.47%", label: "variation explained (from 88.69%)" },
      repo: "https://github.com/DawsonConlon/multiple-regression-model-selection",
      blurb: "Regression modelling across manufacturing, education finance and energy.",
      bullets: [
        "Built and compared multiple linear regression models in R across 3 domains (manufacturing, higher-education finance, energy engineering), selecting final models with global F-tests, t-tests, partial F-tests, adjusted R² and residual standard error",
        "Raised the explained variation in a plant's monthly water usage (250 months) from 88.69% to 96.47% by testing interaction effects with 3D plots and backward elimination, cutting average prediction error from 1.766 to 0.9866 gal/min",
        "Modelled heat rate for 67 gas turbines, dropping a non-significant predictor confirmed by partial F-test (p = 0.9905) and keeping two airflow interactions to explain 93.7% of the variation (residual SE 401.35 kJ/kWh)",
      ],
    },
  ],

  // Hackathon spotlight. Event facts are from the organizers' post-event announcement;
  // project facts reuse the locked SpraySmart bullets.
  hackathon: {
    event: "USask Agriculture Technology Hackathon",
    date: "March 15, 2026",
    place: "University of Saskatchewan, Saskatoon",
    intro: "The organizers' largest event yet: 60 students in 16 teams, each taking on a real challenge facing Saskatchewan agriculture, then pitching it to a panel of judges that afternoon. Our team built SpraySmart and placed 2nd.",
    stats: [
      { value: "2nd", label: "place overall" },
      { value: "16", label: "competing teams" },
      { value: "60", label: "student competitors" },
      { value: "7-day", label: "spray forecast built" },
    ],
    problem: "No dedicated tool gives the farmer a simple go / no-go spray verdict 7 days ahead.",
    steps: [
      { title: "Found the problem", text: "We interviewed University of Saskatchewan agriculture professors to find a real pain point farmers face. The answer: farmers decide when to spray herbicide based on intuition, and a wrong call is costly. I saw an opportunity for AI to predict when they should spray." },
      { title: "Built the tool", text: "A 7-day dashboard rating 7 weather measurements as green, yellow or red spray recommendations with plain-language reasons, plus a decision tree classifier trained on 720 hours of Environment Canada weather data." },
      { title: "Designed it to learn", text: "A farmer-feedback loop turns every spray into a labelled training example, so the model gets better the more it's used." },
      { title: "Pitched it", text: "Presented to a panel of farmers and engineers, and took 2nd place out of 16 teams." },
    ],
    // Shown in this order, one under the other. The "result" photo gets a short note beside it.
    photos: [
      { src: "assets/hackathon/pitching.jpg", w: 1182, h: 665, alt: "Dawson presenting the SpraySmart pitch with a microphone beside a screen titled A Critical Decision Based on Intuition", caption: "Pitching SpraySmart to the judges" },
      { src: "assets/hackathon/dashboard-full.jpg", w: 1600, h: 1108, alt: "The full SpraySmart dashboard: a 7-day spray forecast for Saskatoon with 4 of 7 days good to spray, all seven weather checks green for Sunday, and an hourly wind chart", caption: "SpraySmart dashboard: good to spray" },
      { slot: "result", src: "assets/hackathon/team-2nd-place.jpg", w: 528, h: 453, alt: "The SpraySmart team standing beside the results screen after placing", caption: "Results announced: 2nd place" },
    ],
    result: "SpraySmart placed 2nd out of 16 teams at the organizers' largest hackathon yet.",
    sponsors: "Supported by Innovation Saskatchewan, SaskTel, Opus USask, the USask Office of Sustainability and PrairiesCan.",
    repo: "https://github.com/DawsonConlon/spraymart",
  },

  filters: [
    ["all", "All"],
    ["ml", "AI & ML"],
    ["sql", "SQL & Data Eng"],
    ["analytics", "Analytics & Stats"],
    ["health", "Health & Bio"],
    ["ag", "AgTech"],
  ],

  skills: [
    ["Programming & Querying", ["Python", "R", "SQL", "Snowflake", "Databricks", "Bash"]],
    ["ML & Statistics", ["Scikit-learn", "TensorFlow", "Regression Analysis", "Classification Modelling", "Statistical Inference", "Deep Learning"]],
    ["AI Implementation", ["RAG", "n8n", "Claude", "Claude Code", "ChatGPT", "Copilot"]],
    ["Visualization & Reporting", ["Excel", "Power BI", "Tableau", "Seaborn", "Matplotlib", "ggplot"]],
    ["Cloud & Tools", ["Microsoft Azure", "AWS", "Git", "Jupyter", "Google Colab", "HPC clusters", "Streamlit"]],
    ["Domains", ["Supply Chain & Logistics", "E-Commerce & CX", "Environmental", "Bioinformatics", "AgTech", "Healthcare Inventory"]],
  ],

  // Volunteering. Bullets are verbatim from 01-candidate-profile.md.
  volunteerIntro: "Outside of data work, I've given my time across Lloydminster: coaching kids, caring for shelter animals and organizing support for families in need.",
  volunteer: [
    {
      icon: "flag",
      title: "Volunteer Flag Football Coach",
      org: "Winston Churchill Elementary School",
      place: "Lloydminster, SK",
      dates: "May 2018 - May 2019",
      stat: { value: "50+", label: "students mentored" },
      text: "Coached elementary school flag football for two seasons, mentoring over 50 students on teamwork and sportsmanship",
    },
    {
      icon: "paw",
      title: "Volunteer Animal Caretaker",
      org: "SPCA",
      place: "Lloydminster, AB",
      dates: "Jan 2017 - Jan 2019",
      stat: { value: "1,400+", label: "animals cared for" },
      text: "Provided walking, feeding and socialization care for over 1,400 animals to support animal welfare and adoption readiness",
    },
    {
      icon: "heart",
      title: "Volunteer, Food Drive",
      org: "Lloydminster Interval Home Society",
      place: "Lloydminster, SK",
      dates: "Dec 2018",
      stat: { value: "Hundreds", label: "of women and children sheltered" },
      text: "Organized a food drive which supported an institute that provides shelter to hundreds of women and children fleeing family violence",
    },
  ],

  education: [
    { title: "Master of Data Science and Analytics", org: "University of Calgary", dates: "Sep 2026 - Sep 2027" },
    { title: "Bachelor of Science, Biology", org: "University of Saskatchewan", dates: "Sep 2023 - Apr 2026" },
    { title: "Diploma, Bioscience Technology", org: "Saskatchewan Polytechnic", dates: "Sep 2020 - Jun 2022" },
  ],
  awards: [
    { title: "2nd Place, Agriculture Technology Hackathon", org: "University of Saskatchewan · SpraySmart", dates: "Mar 2026" },
  ],
};
