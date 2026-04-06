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
    "DioGen cross-references your DNA against 75+ blood biomarkers to build a protocol no generic advice could match. Supplements, nutrition, training — mapped to your genotype.",
  cta: "Get your protocol",
  ctaSecondary: "See how it works",
};

export const pressLogos = ["Nature", "The Lancet", "Cell", "NEJM", "JAMA"];

export const howItWorksSteps = [
  {
    step: "01",
    title: "DNA collection",
    description:
      "A saliva kit ships to you. Swab, seal, send. Already have 23andMe or AncestryDNA data? Upload your raw file instead.",
    image: "/images/step-dna-collection.png",
  },
  {
    step: "02",
    title: "Blood panel",
    description:
      "Walk into any LabCorp or Quest location. Your panel covers 75+ biomarkers including hormones, inflammation, and micronutrients.",
    image: "/images/step-blood-panel.png",
  },
  {
    step: "03",
    title: "Your protocol",
    description:
      "Within 48 hours you receive a complete, prioritized protocol: supplements, nutrition, training, and the reasoning behind every recommendation.",
    image: "/images/step-protocol.png",
  },
  {
    step: "04",
    title: "Refine and adjust",
    description:
      "Your protocol comes with a support team that has full context on your data. Ask questions, adjust goals, refine over time.",
    image: "/images/step-consultation.png",
  },
];

export const features = [
  {
    label: "Methylation",
    variant: "MTHFR C677T",
    status: "OPTIMIZE" as const,
    detail:
      "Reduced folate conversion efficiency. Methylated B-vitamins recommended.",
  },
  {
    label: "Caffeine",
    variant: "CYP1A2",
    status: "FAVORABLE" as const,
    detail:
      "Fast metabolizer. 200mg morning intake optimal. No circadian interference.",
  },
  {
    label: "Vitamin D",
    variant: "VDR Bsm1",
    status: "HIGH RISK" as const,
    detail:
      "Impaired vitamin D receptor binding. Higher supplementation dose required.",
  },
  {
    label: "Inflammation",
    variant: "IL-6 GG",
    status: "OPTIMIZE" as const,
    detail:
      "Elevated inflammatory response. Omega-3 EPA/DHA 2-3g/day recommended.",
  },
  {
    label: "Detoxification",
    variant: "GSTP1",
    status: "FAVORABLE" as const,
    detail:
      "Normal glutathione pathway. Standard antioxidant support sufficient.",
  },
];

export const stats = [
  {
    value: "94%",
    description: "of clients show improved biomarkers at first retest",
  },
  {
    value: "138",
    description: "clinically-studied SNPs analyzed per protocol",
  },
  {
    value: "75+",
    description: "blood biomarkers cross-referenced with your DNA",
  },
  {
    value: "$2,100+",
    description: "average annual savings vs. concierge medicine",
  },
];

export const pricingContent = {
  price: "$1,000",
  period: "one-time",
  badge: "Full Precision Access",
  deliverables: [
    {
      title: "DNA test kit",
      description: "Clinical-grade sequencing of 138 health-relevant SNPs",
    },
    {
      title: "Blood panel",
      description:
        "Comprehensive analysis covering 75+ metabolic biomarkers",
    },
    {
      title: "Personalised protocol",
      description:
        "Physician-reviewed roadmap for supplements, nutrition, and training",
    },
    {
      title: "6-month follow-up",
      description:
        "Post-implementation blood retest and protocol adjustment",
    },
    {
      title: "Ongoing support",
      description: "Protocol refinement as your goals and data evolve",
    },
  ],
  cta: "Get your protocol",
};

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
      "Yes. If you already have raw DNA data from 23andMe or AncestryDNA, you can upload it directly. We'll adjust your pricing accordingly since you won't need the saliva kit.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied with your protocol, we'll refund your investment in full — no questions asked.",
  },
];
