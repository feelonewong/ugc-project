import { UploadIcon, VideoIcon, ZapIcon } from "lucide-react";

export const featuresData = [
  {
    icon: <UploadIcon className="w-6 h-6" />,
    title: "Smart Upload",
    desc: "Drag & drop your assets. We auto-optimize formats and sizes.",
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: "Instant Generation",
    desc: "Optimized models deliver output in seconds with great fidelity.",
  },
  {
    icon: <VideoIcon className="w-6 h-6" />,
    title: "Video Synthesis",
    desc: "Bring your product to life with AI-generated lifestyle videos.",
  },
];

export const plansData = [
  {
    id: "starter",
    name: "Starter",
    price: "$10",
    desc: "Try the platform at no cost.",
    credits: 25,
    features: [
      "25 Credits",
      "Standard quality",
      "No watermark",
      "Slow generation speed",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29",
    desc: "Create & small teams.",
    credits: 80,
    features: [
      "80 Credits",
      "HD quality",
      "No watermark",
      "Video generation",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "ultra",
    name: "Ultra",
    price: "$99",
    desc: "Scale across teams and agencies.",
    credits: 300,
    features: [
      "300 Credits",
      "FHD quality",
      "No watermark",
      "Fast generation speed",
      "Chat + Email support",
    ],
  },
];

export const faqData = [
  {
    question: "What services does your agency provide?",
    answer:
      "We leverage state-of-the-art diffusion models trained on millions of product images to blend your product into realistic scenes while preserving details, lighting and reflections.",
  },

  {
    question: "Do I own the generated images?",
    answer:
      "Yes - you receive full commercial rights to any images and videos generated on the platform. Use them for ads, ecommerce, social media and more.",
  },
  {
    question: "Do you work with startups or only large companies?",
    answer:
      "We work with startups, growing businesses and established brands. Our process is flexible and tailored to match your goals and scale.",
  },
  {
    question: "Do I cancel anytime?",
    answer:
      "Yes - you can cancel from your dashboard. You will retain access to through the end of your billing period.",
  },
  {
    question: "What input formats do you support?",
    answer:
      "We accept JPG, PNG, and WebP. Outputs are high-resolution PNGs and MP4s optimized for social platforms.",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", url: "#" },
      { name: "Features", url: "#" },
      { name: "Pricing", url: "#" },
      { name: "FAQ", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Twitter", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "GitHub", url: "#" },
    ],
  },
];
