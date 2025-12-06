export const projects = [
  {
    id: 1,
    title: '프로젝트 제목 1',
    shortDescription: '프로젝트에 대한 간단한 설명입니다. 사용된 기술과 주요 기능을 설명합니다.',
    image: 'https://via.placeholder.com/400x250',
    tags: ['React', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: 'https://project1-demo.com',
    duration: '2024.01 - 2024.03 (3개월)',
    role: '프론트엔드 개발 (개인 프로젝트)',

    // 5페이지 구조 데이터
    pages: [
      {
        // 1페이지: 목표, 결과, 개요, 주요장면
        type: 'overview',
        title: '프로젝트 개요',
        goal: 'React 기반의 고성능 웹 애플리케이션을 구축하여 사용자 경험을 극대화하고, 재사용 가능한 컴포넌트 아키텍처를 설계합니다.',
        result: '성능 40% 개선, 번들 크기 35% 감소, 사용자 만족도 85% 향상',
        overview: '이 프로젝트는 사용자들이 편리하게 사용할 수 있는 웹 애플리케이션입니다. React를 기반으로 하여 빠르고 반응성 있는 UI를 제공하며, 현대적인 웹 개발 기술을 활용하여 최적의 사용자 경험을 제공합니다.',
        keyScenes: [
          { image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=메인+화면', caption: '직관적인 메인 화면' },
          { image: 'https://via.placeholder.com/400x300/764ba2/ffffff?text=대시보드', caption: '실시간 대시보드' },
          { image: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=상세+기능', caption: '상세 기능 화면' }
        ]
      },
      {
        // 2페이지: 도전과제 1
        type: 'challenge',
        title: '도전 과제 1',
        requirement: '대량의 데이터를 렌더링할 때 성능 저하 문제가 발생했습니다. 1000개 이상의 아이템을 표시할 때 스크롤이 끊기고 응답 속도가 느려졌습니다.',
        requirementImage: 'https://via.placeholder.com/300x400/ff6b6b/ffffff?text=성능+문제',
        improvements: [
          'React.memo를 활용하여 불필요한 리렌더링 차단',
          'useMemo와 useCallback으로 연산 최적화',
          '가상 스크롤링(Virtual Scrolling) 구현',
          'Lazy Loading으로 초기 로딩 속도 개선'
        ],
        improvementImage: 'https://via.placeholder.com/600x400/4ecdc4/ffffff?text=최적화+결과'
      },
      {
        // 3페이지: 도전과제 2
        type: 'challenge',
        title: '도전 과제 2',
        requirement: '복잡한 전역 상태 관리로 인해 코드의 복잡도가 증가하고 유지보수가 어려워졌습니다. Props drilling 문제도 발생했습니다.',
        requirementImage: 'https://via.placeholder.com/300x400/feca57/333333?text=상태+관리+문제',
        improvements: [
          'Context API와 useReducer 조합으로 상태 로직 분리',
          '커스텀 훅으로 재사용 가능한 로직 추출',
          '상태를 도메인별로 분리하여 관리',
          '불변성을 유지하는 업데이트 패턴 적용'
        ],
        improvementImage: 'https://via.placeholder.com/600x400/48dbfb/ffffff?text=개선된+아키텍처'
      },
      {
        // 4페이지: 도전과제 3
        type: 'challenge',
        title: '도전 과제 3',
        requirement: '번들 크기가 지속적으로 증가하여 초기 로딩 시간이 길어졌습니다. 라이브러리 의존성이 많아지면서 3MB를 초과했습니다.',
        requirementImage: 'https://via.placeholder.com/300x400/ff9ff3/333333?text=번들+크기+증가',
        improvements: [
          'Code Splitting으로 라우트별 청크 분리',
          'Dynamic Import를 활용한 Lazy Loading',
          'Tree Shaking으로 미사용 코드 제거',
          '라이브러리 대체 및 경량화 작업 진행'
        ],
        improvementImage: 'https://via.placeholder.com/600x400/a29bfe/ffffff?text=번들+최적화'
      },
      {
        // 5페이지: 성과와 남은 과제
        type: 'results',
        title: '성과와 남은 과제',
        achievements: [
          { metric: '성능 개선', value: '40% 향상', description: 'Lighthouse 성능 점수 60점에서 95점으로' },
          { metric: '번들 크기', value: '35% 감소', description: '3.2MB에서 2.1MB로 축소' },
          { metric: '로딩 속도', value: '2.5배 개선', description: '초기 로딩 시간 6초에서 2.4초로' },
          { metric: '코드 품질', value: '유지보수성 향상', description: '컴포넌트 재사용률 70% 달성' }
        ],
        remainingTasks: [
          { task: 'E2E 테스트 커버리지 확대', priority: 'high' },
          { task: 'PWA 기능 추가', priority: 'medium' },
          { task: '다국어 지원 구현', priority: 'medium' },
          { task: '접근성(a11y) 개선', priority: 'high' }
        ],
        learned: [
          'React 성능 최적화의 실전 기법과 측정 방법',
          '대규모 애플리케이션에서의 상태 관리 아키텍처',
          '번들 최적화와 사용자 경험의 균형점 찾기',
          '지속적인 성능 모니터링의 중요성'
        ]
      }
    ]
  },
  {
    id: 2,
    title: '프로젝트 제목 2',
    shortDescription: '프로젝트에 대한 간단한 설명입니다. 사용된 기술과 주요 기능을 설명합니다.',
    fullDescription: '순수 HTML과 CSS만을 사용하여 만든 정적 웹사이트입니다. 시맨틱 HTML과 현대적인 CSS 기법을 활용하여 깔끔하고 접근성 높은 웹사이트를 구현했습니다.',
    image: 'https://via.placeholder.com/400x250',
    images: [
      'https://via.placeholder.com/800x500/ff6b6b/ffffff?text=랜딩+페이지',
      'https://via.placeholder.com/800x500/4ecdc4/ffffff?text=서비스+소개',
      'https://via.placeholder.com/800x500/45b7d1/ffffff?text=반응형+디자인'
    ],
    tags: ['HTML', 'CSS', 'Responsive'],
    githubUrl: 'https://github.com/yourusername/project2',
    liveUrl: 'https://project2-demo.com',
    duration: '2023.11 - 2023.12 (2개월)',
    role: 'UI/UX 디자인 및 퍼블리싱',
    features: [
      'CSS Grid와 Flexbox를 활용한 레이아웃',
      '접근성(a11y)을 고려한 시맨틱 마크업',
      'CSS 애니메이션과 트랜지션 효과',
      '크로스 브라우저 호환성 확보'
    ],
    detailedDescription: [
      {
        title: '프로젝트 목표',
        content: 'JavaScript 없이 순수 HTML과 CSS만으로 아름답고 인터랙티브한 웹사이트를 만드는 것이 목표였습니다. 웹 접근성과 시맨틱 마크업의 중요성을 체득하고자 했습니다.'
      },
      {
        title: '디자인 시스템',
        content: 'CSS 변수를 활용한 일관된 디자인 시스템을 구축했습니다. 색상, 간격, 타이포그래피 등을 변수로 관리하여 유지보수성을 높였습니다.'
      }
    ],
    challenges: [
      {
        problem: '크로스 브라우저 호환성 문제',
        solution: 'CSS Grid의 구형 브라우저 대체 방안으로 Flexbox 폴백을 구현하고, Autoprefixer를 활용하여 벤더 프리픽스를 자동으로 추가했습니다.'
      },
      {
        problem: '다크모드 전환 시 깜빡임 현상',
        solution: 'CSS 변수를 활용한 테마 시스템을 구축하고, prefers-color-scheme 미디어 쿼리로 시스템 설정을 따르도록 구현했습니다.'
      },
      {
        problem: '웹 접근성 기준 충족',
        solution: '시맨틱 HTML 태그 사용, ARIA 레이블 추가, 키보드 네비게이션 지원으로 WCAG 2.1 AA 기준을 만족시켰습니다.'
      }
    ],
    learned: [
      'CSS Grid와 Flexbox를 활용한 반응형 레이아웃 설계의 실무 적용',
      'CSS 변수와 calc() 함수를 활용한 유연한 디자인 시스템 구축',
      'WAI-ARIA 가이드라인을 준수한 접근 가능한 마크업 작성법',
      '성능을 고려한 CSS 애니메이션 최적화(will-change, transform 활용)'
    ]
  },
  {
    id: 3,
    title: '프로젝트 제목 3',
    shortDescription: '프로젝트에 대한 간단한 설명입니다. 사용된 기술과 주요 기능을 설명합니다.',
    fullDescription: 'Node.js와 Express를 사용하여 구축한 RESTful API 서버입니다. 확장 가능한 아키텍처와 보안을 고려한 백엔드 시스템을 설계했습니다.',
    image: 'https://via.placeholder.com/400x250',
    images: [
      'https://via.placeholder.com/800x500/96ceb4/ffffff?text=API+구조도',
      'https://via.placeholder.com/800x500/ffeaa7/333333?text=데이터베이스+스키마',
      'https://via.placeholder.com/800x500/dfe6e9/333333?text=인증+플로우'
    ],
    tags: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project3',
    liveUrl: 'https://project3-demo.com',
    duration: '2024.03 - 2024.05 (3개월)',
    role: '백엔드 개발 및 API 설계',
    features: [
      'RESTful API 설계 및 구현',
      'JWT 기반 인증 시스템',
      'MongoDB를 활용한 데이터 관리',
      '에러 핸들링 및 로깅 시스템'
    ],
    detailedDescription: [
      {
        title: '아키텍처 설계',
        content: 'MVC 패턴을 기반으로 한 레이어드 아키텍처를 적용했습니다. Controller, Service, Repository 계층을 분리하여 각 계층의 책임을 명확히 하고 테스트 가능한 구조를 만들었습니다.'
      },
      {
        title: '보안 구현',
        content: 'JWT 토큰 기반 인증, bcrypt를 이용한 비밀번호 암호화, Helmet.js를 통한 HTTP 헤더 보안, Rate Limiting으로 DDoS 공격 방지 등 다층 보안 체계를 구축했습니다.'
      },
      {
        title: '성능 최적화',
        content: 'Redis를 활용한 캐싱 전략, 데이터베이스 인덱싱, 쿼리 최적화를 통해 응답 시간을 70% 단축시켰습니다.'
      }
    ],
    challenges: [
      {
        problem: 'JWT 토큰 관리 및 보안 취약점',
        solution: 'Access Token과 Refresh Token을 분리하여 구현하고, HttpOnly 쿠키를 활용한 XSS 공격 방어, Token Rotation 전략으로 보안을 강화했습니다.'
      },
      {
        problem: '동시 요청 처리 시 데이터베이스 병목',
        solution: 'Connection Pooling 최적화, 적절한 인덱스 설정, N+1 쿼리 문제 해결로 쿼리 성능을 5배 향상시켰습니다.'
      },
      {
        problem: '대용량 파일 업로드 처리',
        solution: 'Multer와 Stream API를 활용한 청크 업로드 방식 구현, AWS S3 연동으로 서버 부하를 분산시켰습니다.'
      }
    ],
    learned: [
      '레이어드 아키텍처(Controller-Service-Repository)의 실제 적용과 장단점',
      'JWT 기반 인증 시스템의 설계 원칙과 보안 모범 사례',
      'MongoDB 인덱싱 전략과 쿼리 최적화를 통한 성능 개선 기법',
      'Redis를 활용한 캐싱 전략과 세션 관리, Rate Limiting 구현 방법'
    ]
  }
]
