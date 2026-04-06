export const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "What We Analyze", href: "#science" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const heroContent = {
  headline: "Your health data exists.",
  headlineAccent: "Your doctor isn't using it.",
  subheadline:
    "DNA + comprehensive blood panel cross-referenced into a personalised protocol. Supplements, nutrition, training — mapped to your genotype. From $1,000.",
  cta: "Get Started",
};

export const pressLogos = ["Nature", "The Lancet", "Cell", "NEJM", "The New York Times"];

export const guidedPathTabs = [
  {
    label: "Supplement Protocol",
    image: "/images/lifestyle-entrepreneur.png",
    headline: "Precision supplements mapped to your DNA",
    description:
      "No more guessing which supplements to take. Your protocol is built from your genetic variants and blood markers — right forms, right doses, right timing.",
    dataCards: [
      { label: "Magnesium", value: "400mg", sublabel: "Glycinate" },
      { label: "Methylfolate", value: "800mcg", sublabel: "Active B9" },
      { label: "Omega-3", value: "2g", sublabel: "EPA/DHA" },
    ],
  },
  {
    label: "Blood Analysis",
    image: "/images/lifestyle-runner.png",
    headline: "75+ biomarkers decoded against your genetics",
    description:
      "Your blood panel isn't read in isolation — it's cross-referenced with your DNA to reveal what generic ranges miss entirely.",
    dataCards: [
      { label: "Vitamin D", value: "62", sublabel: "ng/mL" },
      { label: "Ferritin", value: "89", sublabel: "ng/mL" },
      { label: "hsCRP", value: "0.4", sublabel: "mg/L" },
    ],
  },
  {
    label: "DNA Insights",
    image: "/images/lifestyle-couple.png",
    headline: "138 clinically-studied SNPs decoded",
    description:
      "From methylation to detoxification, caffeine metabolism to inflammation — your genetic blueprint informs every recommendation.",
    dataCards: [
      { label: "MTHFR", value: "C677T", sublabel: "Heterozygous" },
      { label: "CYP1A2", value: "Fast", sublabel: "Metabolizer" },
      { label: "APOE", value: "3/3", sublabel: "Normal Risk" },
    ],
  },
  {
    label: "Lifestyle",
    image: "/images/lifestyle-yoga.png",
    headline: "Training, sleep and recovery — personalised",
    description:
      "Your protocol extends beyond supplements. Training style, sleep optimization, and recovery strategies calibrated to your biology.",
    dataCards: [
      { label: "Sleep Score", value: "87", sublabel: "Optimal" },
      { label: "Recovery", value: "92%", sublabel: "High" },
      { label: "VO2 Est.", value: "48", sublabel: "mL/kg/min" },
    ],
  },
];

export const pricingTiers = [
  {
    name: "DNA Only",
    price: "$399",
    period: "one-time",
    description: "Upload existing genetic data and receive your personalised protocol.",
    featured: false,
    features: [
      "Upload 23andMe or AncestryDNA data",
      "138 SNP analysis",
      "Personalised supplement protocol",
      "Nutrition recommendations",
      "Digital protocol delivery",
      "30-day money-back guarantee",
    ],
    cta: "Get Started",
  },
  {
    name: "Complete",
    price: "$1,000",
    period: "one-time",
    description: "The full DioGen experience — DNA kit, blood panel, and ongoing support.",
    featured: true,
    features: [
      "Clinical-grade DNA kit shipped to you",
      "75+ biomarker blood panel",
      "Full cross-referenced protocol",
      "Physician-reviewed recommendations",
      "6-month follow-up retest",
      "Ongoing protocol support",
      "HSA / FSA eligible",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "$2,500",
    period: "one-time",
    description: "Everything in Complete plus quarterly retesting and 1:1 consultation.",
    featured: false,
    features: [
      "Everything in Complete",
      "Quarterly blood retesting (4x/year)",
      "1:1 consultation with physician",
      "Priority protocol updates",
      "Advanced pharmacogenomics panel",
      "Dedicated support channel",
      "Family member discount (20%)",
    ],
    cta: "Get Started",
  },
];

export const testimonials = [
  {
    name: "Marcus T.",
    role: "Software Engineer, 34",
    quote:
      "My vitamin D was critically low despite supplementing. DioGen found a VDR variant that explained everything — switched to the right form and my levels normalized in 8 weeks.",
    image: "/images/lifestyle-runner.png",
  },
  {
    name: "Sarah K.",
    role: "Founder, 41",
    quote:
      "I'd been taking the wrong form of folate for years. The MTHFR insight alone was worth 10x the investment. My energy levels transformed.",
    image: "/images/lifestyle-entrepreneur.png",
  },
  {
    name: "David & Lisa M.",
    role: "Couple, late 30s",
    quote:
      "We did it together — completely different protocols for completely different genetics. That's the point. Generic advice can't do this.",
    image: "/images/lifestyle-couple.png",
  },
  {
    name: "Priya R.",
    role: "Yoga Instructor, 29",
    quote:
      "The recovery and sleep recommendations were game-changing. My inflammation markers dropped 40% at the 6-month retest.",
    image: "/images/lifestyle-yoga.png",
  },
];

export const scienceJournals = [
  {
    name: "Nature",
    stat: "47",
    statLabel: "cited studies",
    description: "Foundational genomics and SNP-phenotype associations powering our variant database.",
  },
  {
    name: "The Lancet",
    stat: "31",
    statLabel: "cited studies",
    description: "Clinical outcomes data validating supplement-genotype interaction protocols.",
  },
  {
    name: "Cell",
    stat: "28",
    statLabel: "cited studies",
    description: "Molecular biology research informing metabolic pathway analysis.",
  },
  {
    name: "NEJM",
    stat: "19",
    statLabel: "cited studies",
    description: "Evidence-based clinical guidelines underlying physician review standards.",
  },
];

export const faqItems = [
  {
    question: "How does DioGen work?",
    answer:
      "We collect your saliva for DNA analysis and send you to LabCorp or Quest for a blood panel covering 75+ biomarkers. Our system cross-references your genetic variants against your blood data to generate a personalised protocol — supplements, nutrition, training, and lifestyle — with the reasoning behind every recommendation.",
  },
  {
    question: "Is my genetic data secure?",
    answer:
      "Your privacy is non-negotiable. DNA processing happens with HIPAA-compliant infrastructure. We never sell your data, never share it with third parties, and you can request full deletion at any time.",
  },
  {
    question: "What's included in the protocol?",
    answer:
      "Your protocol covers exact supplement recommendations (right forms, right doses), nutrition adjustments, training modifications, sleep optimization, and specific drug interaction warnings — all mapped to your genotype with evidence confidence scores.",
  },
  {
    question: "Who reviews the protocol?",
    answer:
      "Every protocol is reviewed by a licensed physician before delivery. The analysis is grounded in peer-reviewed research from journals including Nature, The Lancet, Cell, and NEJM.",
  },
  {
    question: "Can I use existing DNA data?",
    answer:
      "Yes. If you already have raw DNA data from 23andMe or AncestryDNA, you can upload it directly. Our DNA Only tier at $399 is built for exactly this use case.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied with your protocol, we'll refund your investment in full — no questions asked.",
  },
];
