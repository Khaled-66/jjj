/**
 * Portfolio Data Repository
 * Follows Single Responsibility Principle: Separates dynamic portfolio data from UI components.
 */

export const profileInfo = {
  name: "Kai Vance",
  title: "Senior Staff Creative Engineer & Systems Architect",
  badge: "Available for Q4 Consulting & Full-time Roles",
  location: "San Francisco, CA",
  bio: "Architecting high-performance web applications, WebGL graphics engines, and real-time reactive user interfaces with obsessive engineering quality.",
  stats: [
    { value: "8+", label: "Years Experience" },
    { value: "45+", label: "Projects Shipped" },
    { value: "99.9%", label: "Lighthouse Score" }
  ]
};

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai-systems", label: "AI & Systems" },
  { id: "3d-webgl", label: "3D & WebGL" },
  { id: "audio-synth", label: "Audio Synthesis" },
  { id: "saas", label: "SaaS Apps" }
];

export const projectsData = [
  {
    id: "aethera-ai",
    title: "Aethera AI Analytics Platform",
    category: "ai-systems",
    description: "Real-time AI model monitoring and neural network flow visualizer capable of streaming 100k events/sec.",
    image: "/assets/cyber_dashboard_preview.jpg",
    tags: ["TypeScript", "WebGL", "WebSockets", "RxJS", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "flux-3d-engine",
    title: "Flux3D Reactive Shader Engine",
    category: "3d-webgl",
    description: "Browser-based node visual shader graph editor and real-time GPU particle simulation framework.",
    image: "/assets/nexus_3d_engine.jpg",
    tags: ["Three.js", "GLSL", "WebGPU", "Custom AST Parser"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "synthwave-studio",
    title: "SynthWave Web DAW & Visualizer",
    category: "audio-synth",
    description: "Full-featured browser music studio featuring 16-step sequencer, WebAudio DSP filters, and real-time oscilloscope.",
    image: "/assets/zenith_audio_app.jpg",
    tags: ["WebAudio API", "Canvas 2D", "Web Assembly", "Modular Synth"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  }
];

export const skillsData = [
  {
    category: "Frontend Architecture",
    icon: "code",
    skills: [
      { name: "TypeScript & Modern JS (ESNext)", level: 95 },
      { name: "React / Next.js / Vue", level: 92 },
      { name: "State Engines & Micro-frontends", level: 90 },
      { name: "HTML5 Canvas & CSS Glassmorphism", level: 98 }
    ]
  },
  {
    category: "Graphics & Real-time",
    icon: "cpu",
    skills: [
      { name: "Three.js / WebGL / WebGPU", level: 88 },
      { name: "GLSL Shader Programming", level: 85 },
      { name: "WebAudio API & Sound Synthesis", level: 86 },
      { name: "Real-time WebSockets & WebRTC", level: 90 }
    ]
  },
  {
    category: "Systems & Engineering",
    icon: "layers",
    skills: [
      { name: "Clean Code & SOLID Design Patterns", level: 96 },
      { name: "Vite / Webpack / Build Pipelines", level: 92 },
      { name: "CI/CD & Automated Testing (Jest/Playwright)", level: 89 },
      { name: "Performance Optimization (Web Vitals)", level: 95 }
    ]
  }
];

export const experienceData = [
  {
    role: "Senior Staff Frontend Architect",
    company: "Aura Labs Inc.",
    date: "2023 - Present",
    description: "Led core web architecture for enterprise analytics platforms. Reduced bundle initialization time by 42% and introduced custom WebGL rendering components."
  },
  {
    role: "Lead Interactive Engineer",
    company: "Hyperion Digital Studio",
    date: "2020 - 2023",
    description: "Built award-winning 3D web experiences and interactive product launchers for global Fortune 500 clients using WebGL and custom canvas shaders."
  },
  {
    role: "Full-Stack Software Engineer",
    company: "Nexus Cloud Systems",
    date: "2018 - 2020",
    description: "Engineered scalable micro-services and responsive single-page web applications with real-time WebSocket communication."
  }
];
