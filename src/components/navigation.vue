<template>
  <div class="navigation-container1">
    <nav id="mainNavigation" class="navigation">
      <div class="navigation__container">
        <a href="/">
          <div
            aria-label="CodeCraft Template - Главная страница"
            class="navigation__logo"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="navigation__logo-icon"
            >
              <path
                d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="navigation__logo-text">CodeCraft Template</span>
          </div>
        </a>
        <button
          id="navToggle"
          type="button"
          aria-label="Открыть меню навигации"
          aria-controls="navMenu"
          aria-expanded="false"
          class="navigation__toggle"
        >
          <svg
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="navigation-navigationtoggle-icon1 navigation__toggle-icon--menu"
          >
            <path
              d="M4 5h16M4 12h16M4 19h16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></svg
          ><svg
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="navigation-navigationtoggle-icon2"
          >
            <path
              d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <div id="navMenu" class="navigation__menu">
          <ul class="navigation__list">
            <li class="navigation__item">
              <a href="/task-template-builder">
                <div class="navigation__link">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="navigation__link-icon"
                  >
                    <path
                      d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Создать Шаблон</span>
                </div>
              </a>
            </li>
            <li class="navigation__item">
              <a href="/students">
                <div class="navigation__link">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="navigation__link-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </g>
                  </svg>
                  <span>Пользователи</span>
                </div>
              </a>
            </li>
            <li class="navigation__item">
              <a href="/statistics">
                <div class="navigation__link">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="navigation__link-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
                      ></path>
                      <circle r="3" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                  <span>Статистика</span>
                </div>
              </a>
            </li>
          </ul>
          <div class="navigation__actions">
            <div v-if="user" class="user-menu">
              <button class="navigation__action-btn btn-outline btn">
                {{ user.firstName }} {{ user.lastName }}
              </button>
              <button @click="logout" class="navigation__action-btn btn-outline btn">
                Выйти
              </button>
            </div>
            <div v-else class="auth-buttons">
              <button @click="$router.push('/auth')" class="navigation__action-btn btn-outline btn">
                Войти
              </button>
            </div>
          </div>
<!--          <div class="navigation__actions">-->
<!--            <button class="navigation__action-btn btn-outline btn">Войти</button>-->
<!--          </div>-->
        </div>
      </div>
    </nav>
    <div class="navigation-container2">
      <div class="navigation-container3">
        <DangerousHTML
          html="<style>
  @media (prefers-reduced-motion: reduce) {
  .navigation__logo, .navigation__toggle, .navigation__link, .navigation__menu, .navigation__toggle-icon, .navigation__link::before {
    transition: none;
  }
  .navigation__logo:hover, .navigation__link:hover {
    transform: none;
  }
  .navigation__toggle:hover {
    transform: none;
  }
  }
  </style>"
        ></DangerousHTML>
      </div>
    </div>
    <div class="navigation-container4">
      <div class="navigation-container5">
        <DangerousHTML
          html="<script defer data-name='navigation'>
  (function(){
    const navToggle = document.getElementById('navToggle')
    const navMenu = document.getElementById('navMenu')
    const mainNavigation = document.getElementById('mainNavigation')
  
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function () {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true'
  
        navToggle.setAttribute('aria-expanded', !isExpanded)
        navMenu.classList.toggle('navigation__menu--open')
  
        if (!isExpanded) {
          navToggle.setAttribute('aria-label', 'Закрыть меню навигации')
          document.body.style.overflow = 'hidden'
        } else {
          navToggle.setAttribute('aria-label', 'Открыть меню навигации')
          document.body.style.overflow = ''
        }
      })
  
      navMenu.addEventListener('click', function (e) {
        if (e.target.closest('.navigation__link')) {
          navToggle.setAttribute('aria-expanded', 'false')
          navMenu.classList.remove('navigation__menu--open')
          navToggle.setAttribute('aria-label', 'Открыть меню навигации')
          document.body.style.overflow = ''
        }
      })
  
      const mediaQuery = window.matchMedia('(min-width: 992px)')
  
      function handleViewportChange(e) {
        if (e.matches) {
          navToggle.setAttribute('aria-expanded', 'false')
          navMenu.classList.remove('navigation__menu--open')
          document.body.style.overflow = ''
        }
      }
  
      mediaQuery.addEventListener('change', handleViewportChange)
    }
  })()
  </script>"
        ></DangerousHTML>
      </div>
    </div>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/vue'

export default {
  name: 'Navigation',
  data() {
    return {
      user: null
    }
  },
  mounted() {
    this.checkAuth()
  },
  methods: {
    checkAuth() {
      const userData = localStorage.getItem('user')
      if (userData) {
        try {
          const parsedData = JSON.parse(userData)
          // Проверяем структуру данных
          if (parsedData.user) {
            this.user = parsedData.user
          } else if (parsedData.firstName) {
            this.user = parsedData
          }
          console.log('User data:', this.user)
        } catch (error) {
          console.error('Error parsing user data:', error)
        }
      }
    },
    logout() {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      localStorage.removeItem('rememberMe')
      localStorage.clear()
      this.user = null
    }
  }
}
</script>

<style scoped>
.navigation-container1 {
  display: contents;
}
 
.navigation-navigationtoggle-icon1 {
  color: var(--color-on-surface);
  width: 24px;
  height: 24px;
  position: absolute;
  transition: color var(--animation-duration-standard)
      var(--animation-curve-primary);
}
 
.navigation-navigationtoggle-icon2 {
  color: var(--color-on-surface);
  width: 24px;
  height: 24px;
  opacity: 0;
  position: absolute;
  transform: rotate(180deg) scale(0.8);
  transition: color var(--animation-duration-standard)
      var(--animation-curve-primary);
}
 
.navigation-container2 {
  display: none;
}
 
.navigation-container3 {
  display: contents;
}
 
.navigation-container4 {
  display: none;
}
 
.navigation-container5 {
  display: contents;
}
</style>
