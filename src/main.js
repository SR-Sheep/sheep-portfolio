import './style.css'
import { projects } from './projectData.js'

document.querySelector('#app').innerHTML = `
  <!-- 헤더 섹션 -->
  <header class="header">
    <nav class="nav">
      <div class="logo">Portfolio</div>
      <ul class="nav-menu">
        <li><a href="#home">홈</a></li>
        <li><a href="#about">소개</a></li>
        <li><a href="#projects">프로젝트</a></li>
        <li><a href="#contact">연락처</a></li>
      </ul>
    </nav>
  </header>

  <!-- 메인 콘텐츠 -->
  <main class="main-content">
    <!-- 홈/소개 섹션 -->
    <section id="home" class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">안녕하세요, <span class="highlight">개발자</span>입니다</h1>
        <p class="hero-subtitle">창의적인 문제 해결과 사용자 중심의 웹 경험을 만듭니다</p>
        <div class="hero-buttons">
          <a href="#projects" class="btn btn-primary">프로젝트 보기</a>
          <a href="#contact" class="btn btn-secondary">연락하기</a>
        </div>
      </div>
    </section>

    <!-- About 섹션 -->
    <section id="about" class="about-section">
      <div class="container">
        <h2 class="section-title">소개</h2>
        <div class="about-content">
          <div class="about-text">
            <p>안녕하세요! 저는 열정적인 웹 개발자입니다.</p>
            <p>사용자 경험을 최우선으로 생각하며, 깨끗하고 효율적인 코드를 작성하는 것을 지향합니다.</p>
            <div class="skills">
              <h3>기술 스택</h3>
              <div class="skill-tags">
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">HTML/CSS</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 프로젝트 섹션 -->
    <section id="projects" class="projects-section">
      <div class="container">
        <h2 class="section-title">프로젝트</h2>
        <div class="projects-grid" id="projects-grid">
          <!-- 프로젝트 카드들이 JavaScript로 동적 생성됩니다 -->
        </div>
      </div>
    </section>

    <!-- 연락처 섹션 -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title">연락처</h2>
        <div class="contact-content">
          <p class="contact-description">프로젝트 협업이나 기회에 대해 이야기 나누고 싶으시다면 언제든 연락주세요!</p>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
            <div class="contact-item">
              <span class="contact-icon">💼</span>
              <a href="https://github.com/yourusername" target="_blank">GitHub</a>
            </div>
            <div class="contact-item">
              <span class="contact-icon">🔗</span>
              <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- 푸터 -->
  <footer class="footer">
    <p>&copy; 2024 Your Name. All rights reserved.</p>
  </footer>

  <!-- 프로젝트 상세 모달 (5페이지 구조) -->
  <div id="project-modal" class="modal">
    <div class="modal-content-new">
      <span class="modal-close">&times;</span>

      <!-- 페이지 헤더 -->
      <div class="modal-header-new">
        <h2 id="modal-title-new" class="modal-title-new"></h2>
        <div class="modal-meta-new">
          <span id="modal-duration-new"></span>
          <span id="modal-role-new"></span>
        </div>
      </div>

      <!-- 페이지 컨텐츠 -->
      <div id="modal-pages" class="modal-pages">
        <!-- 페이지가 동적으로 생성됩니다 -->
      </div>
    </div>
  </div>
`

// 프로젝트 카드 생성
function createProjectCards() {
  const projectsGrid = document.getElementById('projects-grid')

  projects.forEach(project => {
    const card = document.createElement('div')
    card.className = 'project-card'
    card.onclick = () => openModal(project.id)

    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" />
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.shortDescription}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <button class="project-link">자세히 보기</button>
        </div>
      </div>
    `

    projectsGrid.appendChild(card)
  })
}

// 현재 프로젝트와 페이지 상태
let currentProject = null
let currentPage = 0

// 모달 열기
function openModal(projectId) {
  const project = projects.find(p => p.id === projectId)
  if (!project || !project.pages) return

  currentProject = project
  currentPage = 0

  // 헤더 정보
  document.getElementById('modal-title-new').textContent = project.title
  document.getElementById('modal-duration-new').textContent = project.duration || ''
  document.getElementById('modal-role-new').textContent = project.role || ''

  // 페이지 생성
  renderPages()
  showPage(0)

  document.getElementById('project-modal').style.display = 'block'
  document.body.style.overflow = 'hidden'
}

// 페이지 렌더링
function renderPages() {
  const pagesContainer = document.getElementById('modal-pages')
  pagesContainer.innerHTML = currentProject.pages.map((page, index) => {
    let pageHTML = ''

    if (page.type === 'overview') {
      // 1페이지: 개요
      pageHTML = `
        <div class="page-content page-overview">
          <div class="overview-section">
            <div class="overview-item">
              <h3>🎯 프로젝트 목표</h3>
              <p>${page.goal}</p>
            </div>
            <div class="overview-item">
              <h3>✨ 주요 성과</h3>
              <p>${page.result}</p>
            </div>
          </div>
          <div class="overview-description">
            <h3>📋 개요</h3>
            <p>${page.overview}</p>
          </div>
          <div class="key-scenes">
            <h3>🖼️ 주요 장면</h3>
            <div class="scenes-grid">
              ${page.keyScenes.map(scene => `
                <div class="scene-item">
                  <img src="${scene.image}" alt="${scene.caption}">
                  <p>${scene.caption}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `
    } else if (page.type === 'challenge') {
      // 2-4페이지: 도전과제
      pageHTML = `
        <div class="page-content page-challenge">
          <div class="challenge-layout">
            <div class="challenge-requirement">
              <h3>📌 요구사항 및 문제점</h3>
              <p>${page.requirement}</p>
              <img src="${page.requirementImage}" alt="문제 상황">
            </div>
            <div class="challenge-improvement">
              <h3>✅ 개선사항 및 해결책</h3>
              <ul>
                ${page.improvements.map(item => `<li>${item}</li>`).join('')}
              </ul>
              <img src="${page.improvementImage}" alt="개선 결과">
            </div>
          </div>
        </div>
      `
    } else if (page.type === 'results') {
      // 5페이지: 성과와 남은 과제
      pageHTML = `
        <div class="page-content page-results">
          <div class="achievements">
            <h2>🏆 주요 성과</h2>
            <div class="achievements-grid">
              ${page.achievements.map(ach => `
                <div class="achievement-card">
                  <h3>${ach.metric}</h3>
                  <div class="achievement-value">${ach.value}</div>
                  <p>${ach.description}</p>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="remaining-tasks">
            <h2>📋 남은 과제</h2>
            <ul class="tasks-list">
              ${page.remainingTasks.map(task => `
                <li class="task-item priority-${task.priority}">
                  <span class="priority-badge">${task.priority === 'high' ? '높음' : '보통'}</span>
                  ${task.task}
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="learned">
            <h2>💡 배운 점</h2>
            <ul class="learned-list-new">
              ${page.learned.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
      `
    }

    return `<div class="modal-page" data-page="${index}">${pageHTML}</div>`
  }).join('')
}

// 페이지 표시
window.showPage = function(pageIndex) {
  if (pageIndex < 0 || pageIndex >= currentProject.pages.length) return

  currentPage = pageIndex

  // 모든 페이지 숨기기
  document.querySelectorAll('.modal-page').forEach(page => {
    page.classList.remove('active')
  })

  // 현재 페이지 표시
  document.querySelector(`.modal-page[data-page="${pageIndex}"]`).classList.add('active')
}

// 휠 스크롤로 페이지 전환
let isScrolling = false

function handleWheel(e) {
  if (isScrolling) return

  const modalPages = document.getElementById('modal-pages')
  const modal = document.getElementById('project-modal')

  // 모달이 열려있을 때만 작동
  if (!modal || modal.style.display !== 'block') return

  // 페이지 내부 스크롤이 끝에 도달했는지 확인
  const isAtTop = modalPages.scrollTop === 0
  const isAtBottom = modalPages.scrollHeight - modalPages.scrollTop === modalPages.clientHeight

  if (e.deltaY > 0) {
    // 아래로 스크롤: 다음 페이지
    if (isAtBottom && currentPage < currentProject.pages.length - 1) {
      e.preventDefault()
      isScrolling = true
      showPage(currentPage + 1)
      setTimeout(() => {
        isScrolling = false
        modalPages.scrollTop = 0
      }, 600)
    }
  } else {
    // 위로 스크롤: 이전 페이지
    if (isAtTop && currentPage > 0) {
      e.preventDefault()
      isScrolling = true
      showPage(currentPage - 1)
      setTimeout(() => {
        isScrolling = false
        modalPages.scrollTop = modalPages.scrollHeight
      }, 600)
    }
  }
}

// 모달이 열릴 때 휠 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', () => {
  const modalPages = document.getElementById('modal-pages')
  if (modalPages) {
    modalPages.addEventListener('wheel', handleWheel, { passive: false })
  }
})

// 모달 닫기
function closeModal() {
  document.getElementById('project-modal').style.display = 'none'
  document.body.style.overflow = 'auto'
}

// 모달 닫기 이벤트
document.querySelector('.modal-close').addEventListener('click', closeModal)

window.addEventListener('click', (e) => {
  const modal = document.getElementById('project-modal')
  if (e.target === modal) {
    closeModal()
  }
})

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal()
  }
})

// 부드러운 스크롤 효과
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// 페이지 로드 시 프로젝트 카드 생성
createProjectCards()
