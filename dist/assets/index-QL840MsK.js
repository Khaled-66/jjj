(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();function E(i){const t=document.getElementById(i);if(!t)return;const e=t.getContext("2d");let d,n,a;const r=[],m=45,l={x:null,y:null,radius:150};function y(){n=t.width=t.parentElement.offsetWidth,a=t.height=t.parentElement.offsetHeight}window.addEventListener("resize",y),y(),window.addEventListener("mousemove",o=>{const c=t.getBoundingClientRect();l.x=o.clientX-c.left,l.y=o.clientY-c.top}),window.addEventListener("mouseleave",()=>{l.x=null,l.y=null});class v{constructor(){this.x=Math.random()*n,this.y=Math.random()*a,this.vx=(Math.random()-.5)*1.2,this.vy=(Math.random()-.5)*1.2,this.radius=Math.random()*2+1,this.baseAlpha=Math.random()*.5+.3}update(){if(this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>n)&&(this.vx*=-1),(this.y<0||this.y>a)&&(this.vy*=-1),l.x!==null&&l.y!==null){const c=l.x-this.x,u=l.y-this.y,g=Math.sqrt(c*c+u*u);if(g<l.radius){const h=Math.atan2(u,c),s=(l.radius-g)/l.radius;this.x-=Math.cos(h)*s*2,this.y-=Math.sin(h)*s*2}}}draw(){e.beginPath(),e.arc(this.x,this.y,this.radius,0,Math.PI*2),e.fillStyle=`rgba(56, 189, 248, ${this.baseAlpha})`,e.shadowBlur=10,e.shadowColor="#38bdf8",e.fill()}}for(let o=0;o<m;o++)r.push(new v);function p(){e.clearRect(0,0,n,a);for(let o=0;o<r.length;o++){r[o].update(),r[o].draw();for(let c=o+1;c<r.length;c++){const u=r[o].x-r[c].x,g=r[o].y-r[c].y,h=Math.sqrt(u*u+g*g);if(h<130){const s=(1-h/130)*.25;e.beginPath(),e.moveTo(r[o].x,r[o].y),e.lineTo(r[c].x,r[c].y),e.strokeStyle=`rgba(129, 140, 248, ${s})`,e.lineWidth=1,e.stroke()}}}d=requestAnimationFrame(p)}return p(),()=>{cancelAnimationFrame(d),window.removeEventListener("resize",y)}}function L(){const i=document.getElementById("playground-canvas");if(!i)return;const t=i.getContext("2d"),e={count:60,speed:1.5,hue:195,glow:15},d=document.getElementById("pg-count"),n=document.getElementById("pg-speed"),a=document.getElementById("pg-hue"),r=document.getElementById("pg-glow"),m=document.getElementById("val-count"),l=document.getElementById("val-speed"),y=document.getElementById("val-hue"),v=document.getElementById("val-glow");let p,o;function c(){p=i.width=i.parentElement.offsetWidth,o=i.height=340}c(),window.addEventListener("resize",c);let u=[];function g(){u=[];for(let s=0;s<e.count;s++)u.push({x:Math.random()*p,y:Math.random()*o,vx:(Math.random()-.5)*e.speed*2,vy:(Math.random()-.5)*e.speed*2,size:Math.random()*4+2})}g(),d&&d.addEventListener("input",s=>{e.count=parseInt(s.target.value),m&&(m.textContent=e.count),g()}),n&&n.addEventListener("input",s=>{e.speed=parseFloat(s.target.value),l&&(l.textContent=e.speed.toFixed(1)+"x")}),a&&a.addEventListener("input",s=>{e.hue=parseInt(s.target.value),y&&(y.textContent=e.hue+"°")}),r&&r.addEventListener("input",s=>{e.glow=parseInt(s.target.value),v&&(v.textContent=e.glow+"px")});function h(){t.fillStyle="rgba(8, 11, 17, 0.25)",t.fillRect(0,0,p,o),t.shadowBlur=e.glow,t.shadowColor=`hsl(${e.hue}, 100%, 65%)`,u.forEach(s=>{s.x+=s.vx*(e.speed/1.5),s.y+=s.vy*(e.speed/1.5),(s.x<0||s.x>p)&&(s.vx*=-1),(s.y<0||s.y>o)&&(s.vy*=-1),t.beginPath(),t.arc(s.x,s.y,s.size,0,Math.PI*2),t.fillStyle=`hsl(${e.hue}, 90%, 60%)`,t.fill()}),requestAnimationFrame(h)}h()}function S(){const i=document.getElementById("terminal-code");if(!i)return;const t=[`<span class="code-comment">// Systems Architecture & Creative Tech</span>
<span class="code-keyword">const</span> engineer = {
  name: <span class="code-string">"Kai Vance"</span>,
  role: <span class="code-string">"Senior Staff Engineer"</span>,
  specialties: [<span class="code-string">"WebGL"</span>, <span class="code-string">"TypeScript"</span>, <span class="code-string">"Systems"</span>],
  performance: <span class="code-string">"99.9% Web Vitals"</span>
};

<span class="code-keyword">await</span> engineer.<span class="code-fn">buildAwesomeProduct</span>();`];i.innerHTML=t[0]+'<span class="code-cursor"></span>'}const I=[{id:"all",label:"All Projects"},{id:"ai-systems",label:"AI & Systems"},{id:"3d-webgl",label:"3D & WebGL"},{id:"audio-synth",label:"Audio Synthesis"},{id:"saas",label:"SaaS Apps"}],C=[{id:"aethera-ai",title:"Aethera AI Analytics Platform",category:"ai-systems",description:"Real-time AI model monitoring and neural network flow visualizer capable of streaming 100k events/sec.",image:"/assets/cyber_dashboard_preview.jpg",tags:["TypeScript","WebGL","WebSockets","RxJS","Tailwind"],demoUrl:"#",githubUrl:"#",featured:!0},{id:"flux-3d-engine",title:"Flux3D Reactive Shader Engine",category:"3d-webgl",description:"Browser-based node visual shader graph editor and real-time GPU particle simulation framework.",image:"/assets/nexus_3d_engine.jpg",tags:["Three.js","GLSL","WebGPU","Custom AST Parser"],demoUrl:"#",githubUrl:"#",featured:!0},{id:"synthwave-studio",title:"SynthWave Web DAW & Visualizer",category:"audio-synth",description:"Full-featured browser music studio featuring 16-step sequencer, WebAudio DSP filters, and real-time oscilloscope.",image:"/assets/zenith_audio_app.jpg",tags:["WebAudio API","Canvas 2D","Web Assembly","Modular Synth"],demoUrl:"#",githubUrl:"#",featured:!0}],A=[{category:"Frontend Architecture",icon:"code",skills:[{name:"TypeScript & Modern JS (ESNext)",level:95},{name:"React / Next.js / Vue",level:92},{name:"State Engines & Micro-frontends",level:90},{name:"HTML5 Canvas & CSS Glassmorphism",level:98}]},{category:"Graphics & Real-time",icon:"cpu",skills:[{name:"Three.js / WebGL / WebGPU",level:88},{name:"GLSL Shader Programming",level:85},{name:"WebAudio API & Sound Synthesis",level:86},{name:"Real-time WebSockets & WebRTC",level:90}]},{category:"Systems & Engineering",icon:"layers",skills:[{name:"Clean Code & SOLID Design Patterns",level:96},{name:"Vite / Webpack / Build Pipelines",level:92},{name:"CI/CD & Automated Testing (Jest/Playwright)",level:89},{name:"Performance Optimization (Web Vitals)",level:95}]}],B=[{role:"Senior Staff Frontend Architect",company:"Aura Labs Inc.",date:"2023 - Present",description:"Led core web architecture for enterprise analytics platforms. Reduced bundle initialization time by 42% and introduced custom WebGL rendering components."},{role:"Lead Interactive Engineer",company:"Hyperion Digital Studio",date:"2020 - 2023",description:"Built award-winning 3D web experiences and interactive product launchers for global Fortune 500 clients using WebGL and custom canvas shaders."},{role:"Full-Stack Software Engineer",company:"Nexus Cloud Systems",date:"2018 - 2020",description:"Engineered scalable micro-services and responsive single-page web applications with real-time WebSocket communication."}];let b="all",f="";function x(){const i=document.getElementById("filter-tabs");if(!i)return;i.innerHTML=I.map(e=>`
    <button class="filter-btn ${e.id===b?"active":""}" data-category="${e.id}">
      ${e.label}
    </button>
  `).join(""),i.addEventListener("click",e=>{e.target.classList.contains("filter-btn")&&(b=e.target.dataset.category,x(),w())});const t=document.getElementById("project-search");t&&t.addEventListener("input",e=>{f=e.target.value.toLowerCase().trim(),w()})}function w(){const i=document.getElementById("projects-grid");if(!i)return;const t=C.filter(e=>{const d=b==="all"||e.category===b,n=!f||e.title.toLowerCase().includes(f)||e.description.toLowerCase().includes(f)||e.tags.some(a=>a.toLowerCase().includes(f));return d&&n});if(t.length===0){i.innerHTML=`
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">No projects matching your search.</p>
        <p style="font-size: 0.9rem;">Try switching category filters or clearing search criteria.</p>
      </div>
    `;return}i.innerHTML=t.map(e=>`
    <article class="glass-panel project-card">
      <div class="project-thumb">
        <img src="${e.image}" alt="${e.title}" loading="lazy" />
        <div class="project-overlay">
          <a href="${e.demoUrl}" class="btn btn-primary" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Live Demo</a>
          <a href="${e.githubUrl}" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Code Repo</a>
        </div>
      </div>
      <div class="project-body">
        <span class="project-category">${e.category.replace("-"," ")}</span>
        <h3 class="project-title">${e.title}</h3>
        <p class="project-desc">${e.description}</p>
        <div class="project-tech">
          ${e.tags.map(d=>`<span class="tech-tag">${d}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("")}function M(){const i=document.getElementById("skills-grid");i&&(i.innerHTML=A.map(t=>`
    <div class="glass-panel skill-category">
      <div class="category-header">
        <div class="category-icon">✦</div>
        <h3 style="font-size: 1.1rem; font-weight: 700;">${t.category}</h3>
      </div>
      <div class="skill-list">
        ${t.skills.map(e=>`
          <div class="skill-item">
            <div class="skill-info">
              <span>${e.name}</span>
              <span style="color: var(--accent-cyan); font-family: var(--font-mono);">${e.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: ${e.level}%;"></div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join(""))}function P(){const i=document.getElementById("experience-timeline");i&&(i.innerHTML=B.map(t=>`
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="glass-panel timeline-content">
        <div class="timeline-date">${t.date}</div>
        <h3 class="timeline-role">${t.role}</h3>
        <div class="timeline-company">${t.company}</div>
        <p style="color: var(--text-muted); font-size: 0.95rem;">${t.description}</p>
      </div>
    </div>
  `).join(""))}document.addEventListener("DOMContentLoaded",()=>{E("hero-canvas"),L(),S(),x(),w(),M(),P();const i=document.getElementById("navbar");window.addEventListener("scroll",()=>{window.scrollY>40?i.classList.add("scrolled"):i.classList.remove("scrolled")});const t=document.getElementById("theme-toggle"),e=document.getElementById("theme-icon"),d=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",d),e.textContent=d==="dark"?"🌙":"☀️",t.addEventListener("click",()=>{const m=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",m),localStorage.setItem("theme",m),e.textContent=m==="dark"?"🌙":"☀️"});const n=document.getElementById("contact-form"),a=document.getElementById("toast");n&&n.addEventListener("submit",r=>{r.preventDefault();const m=n.querySelector('button[type="submit"]'),l=m.textContent;m.textContent="Sending... ⏳",m.disabled=!0,setTimeout(()=>{m.textContent=l,m.disabled=!1,n.reset(),a&&(a.classList.add("show"),setTimeout(()=>{a.classList.remove("show")},4e3))},1e3)})});
