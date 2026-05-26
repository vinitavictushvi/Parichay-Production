import {
  FaVideo,
  FaCamera,
  FaMusic,
  FaBullhorn,
  FaInstagram,
  FaFilm,
  FaEdit,
  FaPalette,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: FaVideo,
    title: "Performance Video Ads",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1974&auto=format&fit=crop",
    pricing: "₹10,000 onwards",
    timeline: "3–7 Days",
    bestFor: "Startups & D2C Brands",
    deliverables: [
      "High-Converting Ad Creatives",
      "Script Writing",
      "Creative Direction",
      "Hook-Based Editing",
    ],
  },

  {
    id: 2,
    icon: FaInstagram,
    title: "Social Media Reels",
    category: "Content Production",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1974&auto=format&fit=crop",
    pricing: "₹2,000 per reel",
    timeline: "1–3 Days",
    bestFor: "Influencers & Brands",
    deliverables: [
      "Trend-Based Reels",
      "Short-Form Videos",
      "Captions & Hooks",
      "Viral Editing Style",
    ],
  },

  {
    id: 3,
    icon: FaFilm,
    title: "Corporate Video Production",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1974&auto=format&fit=crop",
    pricing: "₹25,000 onwards",
    timeline: "5–10 Days",
    bestFor: "Companies & Startups",
    deliverables: [
      "Corporate Storytelling",
      "Interview Setup",
      "Professional Editing",
      "Brand Messaging",
    ],
  },

  {
    id: 4,
    icon: FaBullhorn,
    title: "TV Commercial Production",
    category: "Commercial Production",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1974&auto=format&fit=crop",
    pricing: "₹50,000 onwards",
    timeline: "7–15 Days",
    bestFor: "Established Brands",
    deliverables: [
      "Full Production Setup",
      "Cinematic Shoots",
      "Script & Direction",
      "Ad Film Editing",
      "Color Grading & Sound Design",
    ],
  },

  {
    id: 5,
    icon: FaCamera,
    title: "Product Photography",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    pricing: "₹8,000 onwards",
    timeline: "1–5 Days",
    bestFor: "E-Commerce & Brands",
    deliverables: [
      "Product Shoots",
      "Creative Angles",
      "Professional Lighting",
      "High Resolution Images",
    ],
  },

  {
    id: 6,
    icon: FaEdit,
    title: "Video Editing & Post Production",
    category: "Post Production",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1974&auto=format&fit=crop",
    pricing: "₹2,500 onwards",
    timeline: "2–4 Days",
    bestFor: "Creators & Agencies",
    deliverables: [
      "Cinematic Editing",
      "Color Grading",
      "Motion Graphics",
      "VFX & Sound Design",
    ],
  },

  {
    id: 7,
    icon: FaPalette,
    title: "Creative Ad Design",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    pricing: "₹3,000 onwards",
    timeline: "1–3 Days",
    bestFor: "Digital Brands",
    deliverables: [
      "Ad Creatives Design",
      "Scroll-Stopping Hooks",
      "High CTR Visuals",
      "A/B Variations",
    ],
  },

  {
    id: 8,
    icon: FaGlobe,
    title: "Website Design",
    category: "Digital",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1972&auto=format&fit=crop",
    pricing: "₹15,000 onwards",
    timeline: "5–12 Days",
    bestFor: "Businesses & Startups",
    deliverables: [
      "Modern UI/UX Design",
      "Responsive Website",
      "SEO Friendly Structure",
      "Fast Loading Website",
    ],
  },

  {
    id: 9,
    icon: FaChartLine,
    title: "Digital Marketing Solutions",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1974&auto=format&fit=crop",
    pricing: "₹20,000 onwards",
    timeline: "Monthly",
    bestFor: "Growth Brands",
    deliverables: [
      "Social Media Marketing",
      "Paid Ads Strategy",
      "Lead Generation",
      "Growth Optimization",
    ],
  },

  {
    id: 10,
    icon: FaMusic,
    title: "Music Production",
    category: "Audio Production",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1974&auto=format&fit=crop",
    pricing: "₹5,000 onwards",
    timeline: "2–5 Days",
    bestFor: "Brands & Creators",
    deliverables: [
      "Custom Jingles",
      "Background Scores",
      "Audio Mixing",
      "Professional Sound Design",
    ],
  },
];

export default servicesData;