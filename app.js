/* ==========================================================================
   KS IT Solutions - Promotional Portfolio App Engine (JavaScript ES6)
   Brand: KS IT Solutions (ksitsolutions.com)
   Contact Email: ksitsolution7@gmail.com
   ========================================================================== */

const CONTACT_EMAIL = 'ksitsolution7@gmail.com';

// --- Apps & Capabilities Showcase Data ---
const APPS_DATA = [
  {
    id: 'freshmart',
    title: 'FreshMart Express',
    category: 'mobile',
    categoryLabel: 'Mobile App (iOS & Android)',
    summary: 'Hyperlocal grocery & essentials delivery mobile application featuring live GPS courier tracking, instant catalog search, and seamless cart checkout.',
    icon: 'fa-basket-shopping',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    features: [
      'Real-time GPS Delivery Tracking & ETA',
      'Instant Search with Category Filtering',
      'Multi-method Payment Integration',
      'Push Notifications for Order Milestones'
    ],
    tech: ['Flutter', 'Firebase', 'Node.js', 'Google Maps API'],
    architecture: 'Clean MVVM Architecture with BLoC state management, offline-first SQLite caching, and WebSockets for real-time live map updates.'
  },
  {
    id: 'pulsehealth',
    title: 'PulseHealth Clinic',
    category: 'mobile',
    categoryLabel: 'Mobile & Web Telemedicine',
    summary: 'HIPAA-ready digital health application enabling patients to book verified doctor consultations, attend encrypted video sessions, and access digital prescriptions.',
    icon: 'fa-heart-pulse',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)',
    features: [
      'Encrypted HD Video Consultation (WebRTC)',
      'Calendar Slot Scheduling & Reminders',
      'Digital Prescription & Medical Records Vault',
      'Automated WhatsApp Appointment Alerts'
    ],
    tech: ['React Native', 'WebRTC', 'Express.js', 'PostgreSQL'],
    architecture: 'End-to-end encrypted media streams, JWT role-based access control, and modular RESTful microservices for healthcare data security.'
  },
  {
    id: 'neuralstudio',
    title: 'NeuralStudio AI',
    category: 'ai',
    categoryLabel: 'AI & Smart Web Platform',
    summary: 'Next-generation AI copywriting and creative assistant workspace powered by LLM models for marketing teams, founders, and content creators.',
    icon: 'fa-brain',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
    features: [
      'OpenAI GPT-4 API Workflow Integration',
      'Streamed Token Output for Zero-Latency UX',
      'Custom Brand Voice & Tone Fine-tuning',
      'Export directly to Markdown, Notion & CMS'
    ],
    tech: ['React', 'Next.js', 'Python FastAPI', 'OpenAI API'],
    architecture: 'Server-Sent Events (SSE) streaming engine, vector semantic search for contextual document retrieval, and TailwindCSS glassmorphism design.'
  },
  {
    id: 'zenithfin',
    title: 'ZenithFin Expense',
    category: 'mobile',
    categoryLabel: 'Mobile FinTech Application',
    summary: 'Minimalist mobile budgeting and personal wealth tracker with biometric security, auto-categorized expense insights, and visual financial analytics.',
    icon: 'fa-wallet',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
    features: [
      'Biometric Authentication (FaceID / Fingerprint)',
      'Interactive Spending Breakdown Charts',
      'Recurring Subscription & Bill Alerts',
      'Multi-currency & Local Offline Storage'
    ],
    tech: ['React Native', 'TypeScript', 'SQLite', 'Chart.js'],
    architecture: 'Strict local-first encryption, zero third-party telemetry for privacy, and native canvas chart rendering at 60 FPS.'
  },
  {
    id: 'taskflow',
    title: 'TaskFlow Pro',
    category: 'web',
    categoryLabel: 'Web Application & SaaS',
    summary: 'Collaborative agile sprint and project management platform with fluid drag-and-drop Kanban boards, team mentions, and milestone tracking.',
    icon: 'fa-list-check',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    features: [
      'Smooth Drag-and-Drop Kanban Boards',
      'Real-time Team Collaboration & Mentions',
      'Custom Workflow Status Automations',
      'Burndown Charts & Sprint Analytics'
    ],
    tech: ['React', 'Next.js', 'Node.js', 'Socket.io', 'TailwindCSS'],
    architecture: 'Optimistic UI state updates for immediate user feedback, WebSocket pub/sub synchronization, and Dockerized cloud containerization.'
  },
  {
    id: 'aerofleet',
    title: 'AeroFleet Logistics',
    category: 'web',
    categoryLabel: 'Enterprise Web Dashboard',
    summary: 'High-throughput operational dashboard for delivery and logistics fleets, featuring live vehicle telemetry, dynamic route optimization, and geofencing alerts.',
    icon: 'fa-truck-fast',
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
    features: [
      'Interactive Mapbox Route & Fleet Visualization',
      'Automated Geofence Entry/Exit Triggers',
      'Fuel Efficiency & Telematics Reports',
      'Instant Driver Dispatch Dispatcher'
    ],
    tech: ['Vue.js / React', 'Mapbox GL', 'Python', 'Redis', 'Docker'],
    architecture: 'High-performance geo-spatial clustering, real-time message brokering via Redis, and reactive data table grids.'
  }
];

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  bindEvents();
});

// --- Bind Interactive Events ---
function bindEvents() {
  // Filter Tabs
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.dataset.filter;
      renderProjects(cat);
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('inquiry-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleInquirySubmit);
  }
}

// --- Render Project Cards ---
function renderProjects(filterCategory) {
  const container = document.getElementById('showcase-grid-container');
  if (!container) return;

  const filtered = filterCategory === 'all' 
    ? APPS_DATA 
    : APPS_DATA.filter(app => app.category === filterCategory);

  let html = '';

  filtered.forEach(app => {
    html += `
      <div class="project-card">
        <div class="project-header-preview" style="background: ${app.gradient};">
          <div class="preview-overlay"></div>
          <div class="project-icon-badge" style="background: rgba(255,255,255,0.15); color: #fff;">
            <i class="fa-solid ${app.icon}"></i>
          </div>
        </div>

        <div class="project-body">
          <div class="project-type-badge">${app.categoryLabel}</div>
          <h3 class="project-title">${app.title}</h3>
          <p class="project-desc">${app.summary}</p>

          <ul class="project-features">
            ${app.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join('')}
          </ul>

          <div class="project-tech">
            ${app.tech.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>

          <button class="btn btn-outline btn-block btn-sm" onclick="openAppDetailModal('${app.id}')">
            <i class="fa-solid fa-circle-info"></i> View App Architecture & Specs
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// --- App Details Modal ---
function openAppDetailModal(appId) {
  const app = APPS_DATA.find(a => a.id === appId);
  if (!app) return;

  const modal = document.getElementById('app-modal');
  const body = document.getElementById('app-modal-body');

  body.innerHTML = `
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
      <div style="width: 54px; height: 54px; border-radius: 12px; background: ${app.gradient}; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1.5rem;">
        <i class="fa-solid ${app.icon}"></i>
      </div>
      <div>
        <span class="project-type-badge">${app.categoryLabel}</span>
        <h3 style="font-size: 1.6rem; margin-top: 2px;">${app.title}</h3>
      </div>
    </div>

    <p style="color: var(--text-muted); font-size: 0.96rem; margin-bottom: 24px; line-height: 1.6;">
      ${app.summary}
    </p>

    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 18px; margin-bottom: 24px;">
      <h5 style="color: var(--accent-cyan); font-size: 0.95rem; margin-bottom: 8px;">
        <i class="fa-solid fa-cubes"></i> Architecture & Engineering Highlights
      </h5>
      <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.6;">
        ${app.architecture}
      </p>
    </div>

    <div style="margin-bottom: 24px;">
      <h5 style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 10px;">Core Feature Set:</h5>
      <ul class="project-features">
        ${app.features.map(f => `<li><i class="fa-solid fa-check" style="color: var(--accent-emerald);"></i> ${f}</li>`).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 28px;">
      <h5 style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 10px;">Primary Tech Stack:</h5>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${app.tech.map(t => `<span class="tag" style="background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3); color: #c7d2fe;">${t}</span>`).join('')}
      </div>
    </div>

    <div style="border-top: 1px solid var(--border-color); padding-top: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: gap; gap: 12px;">
      <span style="font-size: 0.85rem; color: var(--text-muted);">Interested in similar app architecture?</span>
      <a href="mailto:${CONTACT_EMAIL}?subject=Inquiry regarding ${encodeURIComponent(app.title)} Architecture" class="btn btn-primary btn-sm">
        <i class="fa-solid fa-envelope"></i> Discuss via Email
      </a>
    </div>
  `;

  openModal('app-modal');
}

// --- Copy Email to Clipboard ---
function copyContactEmail() {
  navigator.clipboard.writeText(CONTACT_EMAIL).then(() => {
    const feedback = document.getElementById('copy-feedback-msg');
    if (feedback) {
      feedback.style.display = 'block';
      setTimeout(() => {
        feedback.style.display = 'none';
      }, 3000);
    }
  }).catch(() => {
    // Fallback if clipboard API restricted
    prompt('Copy email address:', CONTACT_EMAIL);
  });
}

// --- Handle Inquiry Form Submission ---
function handleInquirySubmit(e) {
  e.preventDefault();

  const name = document.getElementById('inquiry-name').value.trim();
  const email = document.getElementById('inquiry-email').value.trim();
  const category = document.getElementById('inquiry-category').value;
  const message = document.getElementById('inquiry-message').value.trim();

  if (!name || !email || !message) {
    alert('Please complete all required fields.');
    return;
  }

  // Construct structured mailto link
  const subject = encodeURIComponent(`Inquiry from ${name} regarding ${category} - KS IT Solutions`);
  const body = encodeURIComponent(
    `Hello KS IT Solutions,\n\n` +
    `Name: ${name}\n` +
    `Sender Email: ${email}\n` +
    `Interest Category: ${category}\n\n` +
    `Message / App Idea:\n${message}\n\n` +
    `Sent from ksitsolutions.com website showcase`
  );

  const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  
  // Trigger user's mail client
  window.location.href = mailtoLink;

  // Show friendly on-screen confirmation
  const resultMsg = document.getElementById('inquiry-result-msg');
  if (resultMsg) {
    resultMsg.innerHTML = `
      <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid var(--accent-emerald); padding: 14px; border-radius: var(--radius-md); margin-top: 16px; color: #6ee7b7; font-size: 0.9rem;">
        <i class="fa-solid fa-circle-check"></i> Thank you, <strong>${name}</strong>! Your email client has been prepared with your inquiry to <strong>${CONTACT_EMAIL}</strong>.
      </div>
    `;
  }

  document.getElementById('inquiry-form').reset();
}

// --- Modal Helper Functions ---
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('active');
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('active');
}
