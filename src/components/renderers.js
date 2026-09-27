/**
 * Renderers Module - Handles dynamic rendering of projects, skills, and experience sections
 * DRY & SOLID Principles applied.
 */

import { projectsData, projectCategories, skillsData, experienceData } from '../data/portfolioData.js';

let activeCategory = 'all';
let searchQuery = '';

export function renderFilterBar() {
  const container = document.getElementById('filter-tabs');
  if (!container) return;

  container.innerHTML = projectCategories.map(cat => `
    <button class="filter-btn ${cat.id === activeCategory ? 'active' : ''}" data-category="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      activeCategory = e.target.dataset.category;
      renderFilterBar();
      renderProjects();
    }
  });

  const searchInput = document.getElementById('project-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }
}

export function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = projectsData.filter(proj => {
    const matchesCategory = activeCategory === 'all' || proj.category === activeCategory;
    const matchesSearch = !searchQuery || 
      proj.title.toLowerCase().includes(searchQuery) ||
      proj.description.toLowerCase().includes(searchQuery) ||
      proj.tags.some(tag => tag.toLowerCase().includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">No projects matching your search.</p>
        <p style="font-size: 0.9rem;">Try switching category filters or clearing search criteria.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(proj => `
    <article class="glass-panel project-card">
      <div class="project-thumb">
        <img src="${proj.image}" alt="${proj.title}" loading="lazy" />
        <div class="project-overlay">
          <a href="${proj.demoUrl}" class="btn btn-primary" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Live Demo</a>
          <a href="${proj.githubUrl}" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Code Repo</a>
        </div>
      </div>
      <div class="project-body">
        <span class="project-category">${proj.category.replace('-', ' ')}</span>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tech">
          ${proj.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

export function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = skillsData.map(cat => `
    <div class="glass-panel skill-category">
      <div class="category-header">
        <div class="category-icon">✦</div>
        <h3 style="font-size: 1.1rem; font-weight: 700;">${cat.category}</h3>
      </div>
      <div class="skill-list">
        ${cat.skills.map(skill => `
          <div class="skill-item">
            <div class="skill-info">
              <span>${skill.name}</span>
              <span style="color: var(--accent-cyan); font-family: var(--font-mono);">${skill.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: ${skill.level}%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

export function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = experienceData.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="glass-panel timeline-content">
        <div class="timeline-date">${exp.date}</div>
        <h3 class="timeline-role">${exp.role}</h3>
        <div class="timeline-company">${exp.company}</div>
        <p style="color: var(--text-muted); font-size: 0.95rem;">${exp.description}</p>
      </div>
    </div>
  `).join('');
}
