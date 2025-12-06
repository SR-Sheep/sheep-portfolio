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

  <!-- 프로젝트 상세 모달 -->
  <div id="project-modal" class="modal">
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <div class="modal-body">
        <div class="modal-header">
          <h2 id="modal-title" class="modal-title"></h2>
          <div class="modal-meta">
            <span id="modal-duration" class="modal-meta-item"></span>
            <span id="modal-role" class="modal-meta-item"></span>
          </div>
        </div>

        <!-- 이미지 갤러리 -->
        <div class="modal-gallery">
          <div class="gallery-main">
            <img id="gallery-main-image" src="" alt="프로젝트 메인 이미지" class="gallery-main-img">
          </div>
          <div class="gallery-thumbnails" id="gallery-thumbnails">
            <!-- 썸네일이 동적으로 추가됩니다 -->
          </div>
        </div>

        <div class="modal-info">
          <div class="modal-section">
            <h3>프로젝트 개요</h3>
            <p id="modal-description"></p>
          </div>

          <!-- 상세 내용 섹션 -->
          <div id="modal-detailed-sections" class="modal-detailed-sections">
            <!-- 상세 내용이 동적으로 추가됩니다 -->
          </div>

          <div class="modal-section">
            <h3>주요 기능</h3>
            <ul id="modal-features" class="feature-list"></ul>
          </div>

          <div class="modal-section">
            <h3>기술 스택</h3>
            <div id="modal-tags" class="modal-tags"></div>
          </div>

          <div class="modal-section">
            <h3>도전 과제 및 해결</h3>
            <div id="modal-challenges" class="challenges-list"></div>
          </div>

          <div class="modal-section">
            <h3>배운 점</h3>
            <ul id="modal-learned" class="learned-list"></ul>
          </div>

          <div class="modal-links">
            <a id="modal-github" href="#" target="_blank" class="btn btn-primary">
              <span class="btn-icon">📦</span> GitHub 저장소
            </a>
            <a id="modal-live" href="#" target="_blank" class="btn btn-secondary">
              <span class="btn-icon">🚀</span> 라이브 데모
            </a>
          </div>
        </div>
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

// 모달 열기
function openModal(projectId) {
  const project = projects.find(p => p.id === projectId)
  if (!project) return

  // 기본 정보
  document.getElementById('modal-title').textContent = project.title
  document.getElementById('modal-duration').textContent = project.duration || ''
  document.getElementById('modal-role').textContent = project.role || ''
  document.getElementById('modal-description').textContent = project.fullDescription

  // 이미지 갤러리
  const images = project.images || [project.image]
  const mainImage = document.getElementById('gallery-main-image')
  mainImage.src = images[0]

  const thumbnailsContainer = document.getElementById('gallery-thumbnails')
  thumbnailsContainer.innerHTML = images.map((img, index) => `
    <div class="gallery-thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', ${index})">
      <img src="${img}" alt="썸네일 ${index + 1}">
    </div>
  `).join('')

  // 상세 내용 섹션
  const detailedSections = document.getElementById('modal-detailed-sections')
  if (project.detailedDescription && project.detailedDescription.length > 0) {
    detailedSections.innerHTML = project.detailedDescription.map(section => `
      <div class="modal-section detailed-section">
        <h3>${section.title}</h3>
        <p>${section.content}</p>
      </div>
    `).join('')
  } else {
    detailedSections.innerHTML = ''
  }

  // 주요 기능
  const featuresList = document.getElementById('modal-features')
  featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('')

  // 기술 스택
  const tagsContainer = document.getElementById('modal-tags')
  tagsContainer.innerHTML = project.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')

  // 도전 과제
  const challengesContainer = document.getElementById('modal-challenges')
  if (Array.isArray(project.challenges)) {
    challengesContainer.innerHTML = project.challenges.map(challenge => `
      <div class="challenge-item">
        <div class="challenge-problem">
          <span class="challenge-icon">⚠️</span>
          <strong>문제:</strong> ${challenge.problem}
        </div>
        <div class="challenge-solution">
          <span class="challenge-icon">✅</span>
          <strong>해결:</strong> ${challenge.solution}
        </div>
      </div>
    `).join('')
  } else {
    challengesContainer.innerHTML = `<p>${project.challenges}</p>`
  }

  // 배운 점
  const learnedContainer = document.getElementById('modal-learned')
  if (Array.isArray(project.learned)) {
    learnedContainer.innerHTML = project.learned.map(item => `<li>${item}</li>`).join('')
  } else {
    learnedContainer.innerHTML = `<li>${project.learned}</li>`
  }

  // 링크
  document.getElementById('modal-github').href = project.githubUrl
  document.getElementById('modal-live').href = project.liveUrl

  document.getElementById('project-modal').style.display = 'block'
  document.body.style.overflow = 'hidden'
}

// 갤러리 메인 이미지 변경
window.changeMainImage = function(imageSrc, index) {
  const mainImage = document.getElementById('gallery-main-image')
  mainImage.src = imageSrc

  // 활성 썸네일 업데이트
  document.querySelectorAll('.gallery-thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index)
  })
}

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
