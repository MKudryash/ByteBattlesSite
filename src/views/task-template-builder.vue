<template>
  <div class="task-template-builder-container10">
    <app-navigation></app-navigation>
    <div class="task-template-builder-container11">
      <div class="task-template-builder-container12">
        <DangerousHTML
          html="<style>
  #hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: var(--spacing-4xl) var(--spacing-lg);
    background: var(--color-surface);
    position: relative;
  }
  #hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        color-mix(in srgb, var(--color-border) 10%, transparent) 2px,
        color-mix(in srgb, var(--color-border) 10%, transparent) 4px
      );
    pointer-events: none;
    z-index: 1;
    opacity: 0.3;
  }
  #process-section {
    padding: var(--spacing-3xl) var(--spacing-2xl);
    background: var(--color-surface);
  }
  #settings-section {
    padding: var(--spacing-4xl) var(--spacing-lg);
    background: var(--color-surface);
  }
  #docs-section {
    padding: var(--spacing-4xl) var(--spacing-lg);
    background: var(--color-surface);
  }
  #documentation-section {
    padding: var(--spacing-4xl) var(--spacing-lg);
    background: var(--color-surface);
  }
  #dashboard-section {
    padding: var(--spacing-4xl) var(--spacing-lg);
    background: var(--color-surface);
  }
  #stats-section {
    padding: var(--spacing-4xl) var(--spacing-lg);
    background: var(--color-surface);
  }
  #faq-section {
    padding: var(--spacing-4xl) var(--spacing-lg);
    background: var(--color-surface);
  }
  @media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  }
  </style>"
        ></DangerousHTML>
      </div>
    </div>
    <section
      id="hero-section"
      role="region"
      aria-label="Intro to Task Template Builder"
    >
      <div class="hero-container">
        <div class="hero-panel">
          <div class="hero-grid">
            <div class="hero-head">
              <h1 class="hero-title task-template-builder-hero-title">
                Task Template Builder
              </h1>
              <p class="hero-lead">Ретро-интерфейс для современного обучения</p>
            </div>
            <div class="controls-card">
              <h2 class="controls-title">Конфигурация шаблона</h2>
              <div class="form-group">
                <label for="language-select">Язык программирования</label>
                <select id="language-select" aria-label="Language">
                  <option value="python">Python 3.10</option>
                  <option value="cpp">C++ 17</option>
                  <option value="java">Java 11</option>
                  <option value="csharp">C# 10</option>
                </select>
              </div>
              <div class="library-section">
                <label>Библиотеки</label>
                <div class="chip-container">
                  <button role="button" aria-pressed="true" class="chip">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m16 6l4 14M12 6v14M8 8v12M4 4v16"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>
                      NumPy
                      <span v-html="rawvb1s"></span>
                    </span>
                  </button>
                  <button role="button" aria-pressed="false" class="chip">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m16 6l4 14M12 6v14M8 8v12M4 4v16"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>
                      Pandas
                      <span v-html="rawjkm7"></span>
                    </span>
                  </button>
                  <button role="button" aria-pressed="false" class="chip">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m16 6l4 14M12 6v14M8 8v12M4 4v16"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>
                      Matplotlib
                      <span v-html="rawuxah"></span>
                    </span>
                  </button>
                </div>
              </div>
              <div class="template-preview">
                <label>Шаблон функции</label>
                <pre><span>def calculate_sum(numbers):
      &quot;&quot;&quot;
      Вычисляет сумму элементов списка
      Args: numbers (list)
      Returns: int
      &quot;&quot;&quot;
      pass</span></pre>
              </div>
              <button class="cta btn-primary btn">Начать создание</button>
            </div>
            <div class="code-panel">
              <div class="panel-header">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
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
                <span>Предпросмотр</span>
              </div>
              <pre class="code-block"><span># main.py
  import numpy as np
  
  def calculate_sum(numbers):
      &quot;&quot;&quot;Функция для задачи&quot;&quot;&quot;
      pass
  
  if __name__ == &quot;__main__&quot;:
      data = [1, 2, 3, 4, 5]
      result = calculate_sum(data)
      print(f&quot;Result: &#123;result&#125;&quot;)</span></pre>
              <ul aria-label="Quick statistics" class="stats-list">
                <li>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                  <span>Среднее время: 22 мин</span>
                </li>
                <li>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"
                      ></path>
                      <circle r="4" cx="9" cy="7"></circle>
                    </g>
                  </svg>
                  <span>Используется: 1,920 раз</span>
                </li>
                <li>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Успешность: 87%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="process-section" role="region" aria-labelledby="process-title">
      <div class="process-container">
        <div class="process-layout">
          <nav role="navigation" aria-label="Process steps" class="stepper">
            <div aria-current="step" class="step-item">
              <div aria-hidden="true" class="step-number"><span>1</span></div>
              <div class="step-content">
                <h3 class="step-title">Выбор языка</h3>
                <p class="step-hint">Определите целевую платформу</p>
              </div>
            </div>
            <div class="step-item">
              <div aria-hidden="true" class="step-number"><span>2</span></div>
              <div class="step-content">
                <h3 class="step-title">Библиотеки</h3>
                <p class="step-hint">Добавьте зависимости</p>
              </div>
            </div>
            <div class="step-item">
              <div aria-hidden="true" class="step-number"><span>3</span></div>
              <div class="step-content">
                <h3 class="step-title">Функция</h3>
                <p class="step-hint">Задайте сигнатуру</p>
              </div>
            </div>
            <div class="step-item">
              <div aria-hidden="true" class="step-number"><span>4</span></div>
              <div class="step-content">
                <h3 class="step-title">Main</h3>
                <p class="step-hint">Определите вызов</p>
              </div>
            </div>
            <div class="step-item">
              <div aria-hidden="true" class="step-number"><span>5</span></div>
              <div class="step-content">
                <h3 class="step-title">Проверки</h3>
                <p class="step-hint">Добавьте тесты</p>
              </div>
            </div>
            <div class="step-item">
              <div aria-hidden="true" class="step-number"><span>6</span></div>
              <div class="step-content">
                <h3 class="step-title">Публикация</h3>
                <p class="step-hint">Сохраните шаблон</p>
              </div>
            </div>
          </nav>
          <div class="work-area">
            <h2 id="process-title" class="section-title">
              Пошаговый мастер создания задач
              <span v-html="raw071s"></span>
            </h2>
            <div class="work-card">
              <h3 class="card-title">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
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
                <span>
                  1. Выбор языка программирования
                  <span v-html="raw4vw0"></span>
                </span>
              </h3>
              <p class="card-body">
                Аккуратно отметьте целевую платформу (Python, C++, Java и др.).
                Подсказки в винтажном стиле помогут учитывать особенности
                синтаксиса и версий.
                <span v-html="rawg1ys"></span>
              </p>
              <div class="language-options">
                <button class="btn-outline btn option-btn">Python 3.10</button>
                <button class="btn-outline btn option-btn">C++ 17</button>
                <button class="btn-outline btn option-btn">Java 11</button>
              </div>
            </div>
            <div class="work-card">
              <h3 class="card-title">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m16 6l4 14M12 6v14M8 8v12M4 4v16"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>
                  2. Подключение библиотек
                  <span v-html="raw7ybv"></span>
                </span>
              </h3>
              <p class="card-body">
                Добавьте список зависимостей с возможностью версионирования.
                Каждый пакет отображается как аккуратно помеченная карточка для
                быстрого контроля.
                <span v-html="raw32jf"></span>
              </p>
              <div class="library-tags">
                <span class="tag">NumPy 1.23.0</span>
                <span class="tag">Pandas 1.5.3</span>
                <span class="tag">Matplotlib 3.7.1</span>
              </div>
            </div>
            <div class="work-card">
              <h3 class="card-title">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect x="3" y="3" rx="2" ry="2" width="18" height="18"></rect>
                    <path
                      d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3m-6 4.2h5.7"
                    ></path>
                  </g>
                </svg>
                <span>
                  3. Шаблон функции
                  <span v-html="rawzvz0"></span>
                </span>
              </h3>
              <p class="card-body">
                Задайте сигнатуру, описание параметров и ожидаемый результат.
                Встроенные примечания в ретро-тоне напоминают о лучших практиках.
                <span v-html="rawmzmw"></span>
              </p>
              <pre
                class="code-snippet"
              ><span>def process_data(input_list: list) -&gt; int:
      &quot;&quot;&quot;
      Обрабатывает входные данные
      Параметры:
          input_list: список целых чисел
      Возвращает:
          обработанный результат
      &quot;&quot;&quot;
      # Ваша реализация здесь
      pass</span></pre>
            </div>
            <div class="work-card">
              <h3 class="card-title">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>
                  4. Вызов из main
                  <span v-html="raw135x"></span>
                </span>
              </h3>
              <p class="card-body">
                Определите каркас main-скрипта или точки входа, порядок
                чтения/записи и пример вызова функции для демонстрации.
                <span v-html="raw29lq"></span>
              </p>
              <pre class="code-snippet"><span>if __name__ == &quot;__main__&quot;:
      data = [1, 2, 3, 4, 5]
      result = process_data(data)
      print(f&quot;Результат: &#123;result&#125;&quot;)</span></pre>
            </div>
            <div class="work-card">
              <h3 class="card-title">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>
                  5. Проверки и примеры
                  <span v-html="raw2hf3"></span>
                </span>
              </h3>
              <p class="card-body">
                Добавьте тест-кейсы и образцы ввода-вывода прямо в процессе —
                студенты увидят, как задача оценивается.
                <span v-html="raw0rvi"></span>
              </p>
            </div>
            <div class="work-card">
              <h3 class="card-title">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                    ></path>
                    <path
                      d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7"
                    ></path>
                  </g>
                </svg>
                <span>
                  6. Сохранение и публикация
                  <span v-html="raw4lsj"></span>
                </span>
              </h3>
              <p class="card-body">
                Сохраните шаблон в библиотеку, назначьте уровень сложности и
                метки. История версий сохраняет действия, как старые пометки
                учителя в тетради.
                <span v-html="rawycll"></span>
              </p>
              <div class="action-buttons">
                <button class="btn-primary btn">Сохранить черновик</button>
                <button class="btn-accent btn">Опубликовать</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="settings-section" role="region" aria-label="Configuration">
      <div class="settings-container">
        <h2 class="section-title">Настройки окружения</h2>
        <div class="settings-grid">
          <aside role="region" aria-label="Configuration" class="config-panel">
            <div class="panel-group">
              <h3 class="panel-title">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
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
                <span>
                  Конфигурация
                  <span v-html="rawup19"></span>
                </span>
              </h3>
              <div class="form-field">
                <label for="env-language">Язык</label>
                <select id="env-language" aria-controls="library-list">
                  <option>Python 3.10</option>
                  <option>C++ 17</option>
                  <option>Java 11</option>
                </select>
              </div>
              <div class="form-field">
                <label for="env-version">Версия</label>
                <input type="text" id="env-version" value="3.10.12" />
              </div>
              <div class="saved-profiles">
                <h4>Сохранённые профили</h4>
                <button class="profile-item btn-outline btn">
                  <span>Python Standard</span>
                </button>
                <button class="profile-item btn-outline btn">
                  <span>C++ Competitive</span>
                </button>
                <button class="profile-item btn-outline btn">
                  <span>Java Enterprise</span>
                </button>
              </div>
              <button class="btn-primary btn">Сохранить профиль</button>
            </div>
          </aside>
          <main role="main" class="work-area">
            <div id="library-list" class="library-grid">
              <div class="library-card">
                <div class="card-header">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m16 6l4 14M12 6v14M8 8v12M4 4v16"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <h4>NumPy</h4>
                </div>
                <p class="card-version">v1.23.0</p>
                <div class="compatibility-chips">
                  <span aria-hidden="true" class="compat-full compat-chip">
                    <svg
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>
                      Совместима
                      <span v-html="raw3jo9"></span>
                    </span>
                  </span>
                </div>
                <p class="card-note">LTS версия, стабильная</p>
              </div>
              <div class="library-card">
                <div class="card-header">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m16 6l4 14M12 6v14M8 8v12M4 4v16"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <h4>Pandas</h4>
                </div>
                <p class="card-version">v1.5.3</p>
                <div class="compatibility-chips">
                  <span aria-hidden="true" class="compat-full compat-chip">
                    <svg
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>
                      Совместима
                      <span v-html="raw90c8"></span>
                    </span>
                  </span>
                </div>
                <p class="card-note">Рекомендована для анализа данных</p>
              </div>
              <div class="library-card">
                <div class="card-header">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m16 6l4 14M12 6v14M8 8v12M4 4v16"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <h4>Matplotlib</h4>
                </div>
                <p class="card-version">v3.7.1</p>
                <div class="compatibility-chips">
                  <span aria-hidden="true" class="compat-full compat-chip">
                    <svg
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>
                      Совместима
                      <span v-html="raw6fdq"></span>
                    </span>
                  </span>
                </div>
                <p class="card-note">Визуализация данных</p>
              </div>
              <div class="library-card">
                <div class="card-header">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m16 6l4 14M12 6v14M8 8v12M4 4v16"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <h4>Requests</h4>
                </div>
                <p class="card-version">v2.28.2</p>
                <div class="compatibility-chips">
                  <span aria-hidden="true" class="compat-full compat-chip">
                    <svg
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>
                      Совместима
                      <span v-html="raw3pqk"></span>
                    </span>
                  </span>
                </div>
                <p class="card-note">HTTP библиотека</p>
              </div>
              <div class="library-card">
                <div class="card-header">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m16 6l4 14M12 6v14M8 8v12M4 4v16"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <h4>SciPy</h4>
                </div>
                <p class="card-version">v1.10.1</p>
                <div class="compatibility-chips">
                  <span aria-hidden="true" class="compat-full compat-chip">
                    <svg
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>
                      Совместима
                      <span v-html="rawsszg"></span>
                    </span>
                  </span>
                </div>
                <p class="card-note">Научные вычисления</p>
              </div>
              <div class="library-card">
                <div class="card-header">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m16 6l4 14M12 6v14M8 8v12M4 4v16"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <h4>Flask</h4>
                </div>
                <p class="card-version">v2.3.2</p>
                <div class="compatibility-chips">
                  <span aria-hidden="true" class="compat-full compat-chip">
                    <svg
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>
                      Совместима
                      <span v-html="rawsxyj"></span>
                    </span>
                  </span>
                </div>
                <p class="card-note">Веб-фреймворк</p>
              </div>
            </div>
            <div class="history-timeline">
              <h3 class="timeline-title">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <span>
                  История изменений
                  <span v-html="rawz1d9"></span>
                </span>
              </h3>
              <div class="timeline-entry">
                <span class="entry-time">15:42</span>
                <span class="entry-text">Добавлена библиотека NumPy v1.23.0</span>
              </div>
              <div class="timeline-entry">
                <span class="entry-time">15:38</span>
                <span class="entry-text">Изменён язык на Python 3.10</span>
              </div>
              <div class="timeline-entry">
                <span class="entry-time">15:35</span>
                <span class="entry-text">Создан новый профиль окружения</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
    <section id="docs-section" role="region" aria-labelledby="docs-title">
      <div class="docs-container">
        <div class="docs-panel">
          <div class="docs-primary">
            <h2 id="docs-title" class="section-title">
              Определение сигнатуры функции
              <span v-html="raw5lxg"></span>
            </h2>
            <div class="docs-block">
              <h3 class="docs-subtitle">Имя функции и параметры</h3>
              <p class="section-content">
                Задайте имя функции и список параметров — кратко, как запись в
                старой тетради: типы, порядок и описание каждого аргумента. Это
                поможет студентам понять контракт задачи мгновенно и без лишней
                путаницы.
                <span v-html="raw86zo"></span>
              </p>
              <pre
                class="docs-code"
              ><span>def calculate_result(input_data: list, threshold: int) -&gt; dict:
      &quot;&quot;&quot;
      Обрабатывает входные данные с учётом порога
      
      Параметры:
          input_data: список числовых значений для обработки
          threshold: минимальное значение для фильтрации
      
      Возвращает:
          словарь с результатами обработки
      &quot;&quot;&quot;
      pass</span></pre>
            </div>
            <div class="docs-block">
              <h3 class="docs-subtitle">Тип возвращаемого значения</h3>
              <div class="return-badge"><span>Возвращает: dict</span></div>
              <p class="section-content">
                Выберите точный тип результата: целое, строка, массив или сложная
                структура. Укажите поведение при ошибках и случаи, когда
                возвращается значение по умолчанию.
                <span v-html="raw56uv"></span>
              </p>
            </div>
            <div class="docs-block">
              <h3 class="docs-subtitle">Вызов из main</h3>
              <p class="section-content">
                Опишите пример вызова функции в теле main: создание входных
                данных, обработка результата и вывод.
                <span v-html="rawn4bc"></span>
              </p>
              <pre class="docs-code"><span>if __name__ == &quot;__main__&quot;:
      # Чтение входных данных
      data = [10, 25, 30, 5, 15]
      threshold = 12
      
      # Вызов пользовательской функции
      result = calculate_result(data, threshold)
      
      # Вывод результата
      print(f&quot;Обработано: &#123;result&#125;&quot;)</span></pre>
            </div>
            <div class="docs-block">
              <h3 class="docs-subtitle">Примеры и граничные случаи</h3>
              <p class="section-content">
                Добавьте 2–3 кратких тестовых примера с ожидаемым выводом, включая
                хотя бы один граничный случай.
                <span v-html="rawct1j"></span>
              </p>
              <ul class="example-list">
                <li>
                  <strong>Пример 1:</strong>
                  <span>
                    input=[1,2,3], threshold=2 → &#123;&apos;filtered&apos;:
                    [2,3], &apos;count&apos;: 2&#125;
                    <span v-html="rawnlo0"></span>
                  </span>
                </li>
                <li>
                  <strong>Пример 2:</strong>
                  <span>
                    input=[], threshold=0 → &#123;&apos;filtered&apos;: [],
                    &apos;count&apos;: 0&#125;
                    <span v-html="rawed06"></span>
                  </span>
                </li>
                <li>
                  <strong>Граничный:</strong>
                  <span>
                    input=[100], threshold=100 → &#123;&apos;filtered&apos;:
                    [100], &apos;count&apos;: 1&#125;
                    <span v-html="rawc6x4"></span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <aside class="docs-side">
            <div class="side-card">
              <h4 class="side-title">Контракты</h4>
              <ul class="contract-list">
                <li><span>Список не может быть None</span></li>
                <li><span>Threshold ≥ 0</span></li>
                <li><span>Возвращает пустой dict при ошибке</span></li>
              </ul>
            </div>
            <div class="side-card">
              <h4 class="side-title">Готовые пресеты</h4>
              <button class="preset-btn btn-outline btn">
                Сортировка массива
              </button>
              <button class="preset-btn btn-outline btn">Поиск элемента</button>
              <button class="preset-btn btn-outline btn">Обработка строк</button>
            </div>
            <div class="side-card">
              <h4 class="side-title">Статистика использования</h4>
              <div class="stat-item">
                <span class="stat-label">Запусков:</span>
                <span class="stat-value">1,920</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">Успешность:</span>
                <span class="stat-value">87%</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">Среднее время:</span>
                <span class="stat-value">22 мин</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <section
      id="documentation-section"
      role="region"
      aria-labelledby="documentation-title"
    >
      <div class="documentation-container">
        <div class="doc-hero">
          <div class="doc-editorial">
            <h2 id="documentation-title" class="section-title">
              Документация — Шаблон main и вызов функции
              <span v-html="rawjrvj"></span>
            </h2>
            <p class="section-subtitle">
              Кратко и душевно: этот блок объясняет, как подготовить главный
              исполняемый файл (main) и корректно вызывать функцию, которую
              напишет студент. Стиль — в духе классической мастерской: ясно,
              аккуратно, с заботой о будущем разработчике.
              <span v-html="rawic51"></span>
            </p>
            <div class="doc-section">
              <h3 class="doc-heading">Структура шаблона main</h3>
              <ol class="doc-list">
                <li>
                  <strong>Заголовок и комментарии:</strong>
                  <span>
                    начните с краткого описания задачи, авторства и ожидаемого
                    поведения программы. Нота ретро: используйте вёрстку
                    комментариев как в старых печатных руководствах — читабельно и
                    элегантно.
                    <span v-html="raww2o8"></span>
                  </span>
                </li>
                <li>
                  <strong>Подключение библиотек:</strong>
                  <span>
                    перечислите стандартные и дополнительные библиотеки в
                    отдельном блоке, чтобы студент видел зависимости сразу.
                    <span v-html="rawvvxq"></span>
                  </span>
                </li>
                <li>
                  <strong>Определение пользовательской функции:</strong>
                  <span>
                    помещайте сигнатуру и минимальный комментарий по контракту
                    (входы/выходы/ограничения).
                    <span v-html="raw8i48"></span>
                  </span>
                </li>
                <li>
                  <strong>main:</strong>
                  <span>
                    в main — минимальная логика: чтение входных данных, вызов
                    пользовательской функции, вывод результата.
                    <span v-html="raw2cdr"></span>
                  </span>
                </li>
              </ol>
              <pre class="doc-code"><span># -*- coding: utf-8 -*-
  &quot;&quot;&quot;
  Задача: Обработка массива данных
  Автор: Преподаватель курса
  Дата: 2025
  &quot;&quot;&quot;
  
  import sys
  from typing import List, Dict
  
  def process_array(data: List[int]) -&gt; Dict[str, int]:
      &quot;&quot;&quot;
      Обрабатывает массив целых чисел
      Входные данные: список целых чисел
      Выходные данные: словарь со статистикой
      &quot;&quot;&quot;
      # Реализация студента
      pass
  
  def main():
      # Чтение данных
      n = int(input())
      data = list(map(int, input().split()))
      
      # Вызов функции
      result = process_array(data)
      
      # Вывод результата
      print(f&quot;Sum: &#123;result[&apos;sum&apos;]&#125;&quot;)
      print(f&quot;Count: &#123;result[&apos;count&apos;]&#125;&quot;)
  
  if __name__ == &quot;__main__&quot;:
      main()</span></pre>
            </div>
            <div class="doc-section">
              <h3 class="doc-heading">
                Рекомендации по оформлению и совместимости
                <span v-html="rawtpvq"></span>
              </h3>
              <div class="recommendation-grid">
                <div class="rec-card">
                  <h4>Язык</h4>
                  <p>
                    Придерживайтесь выбранного языка и его соглашений по стилю
                    кодирования. Цвет ретро-типографии в комментариях — спокойный
                    и аккуратный.
                    <span v-html="rawqzb9"></span>
                  </p>
                </div>
                <div class="rec-card">
                  <h4>Граничные случаи</h4>
                  <p>
                    В комментариях к функции укажите предполагаемые крайние
                    значения и сложность — это помогает оценивать решения
                    последовательнее.
                    <span v-html="rawz79d"></span>
                  </p>
                </div>
                <div class="rec-card">
                  <h4>IO форматы</h4>
                  <p>
                    Явно опишите входной и выходной формат (разделители, порядок),
                    чтобы исключить неоднозначности при автоматических тестах.
                    <span v-html="raw84zb"></span>
                  </p>
                </div>
                <div class="rec-card">
                  <h4>Изоляция логики</h4>
                  <p>
                    Избегайте побочных эффектов в функции — весь ввод/вывод должен
                    происходить в main, а функция возвращает результат.
                    <span v-html="rawd929"></span>
                  </p>
                </div>
              </div>
            </div>
            <div class="vintage-note">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p>
                «Пишите как мастер: аккуратно, с пометками, чтобы через годы
                другой разработчик понял задумку. Мы собираем не только решения —
                мы сохраняем ремесло.»
                <span v-html="rawvx5k"></span>
              </p>
            </div>
          </div>
          <aside class="doc-examples">
            <div class="example-card">
              <h4>Быстрый старт</h4>
              <p>Используйте готовые шаблоны для быстрого начала работы</p>
              <button class="btn-primary btn">Выбрать шаблон</button>
            </div>
            <div class="example-card">
              <h4>Тестирование</h4>
              <p>Добавьте тест-кейсы для проверки корректности</p>
              <button class="btn-outline btn">Добавить тесты</button>
            </div>
            <div class="example-card retro-callout">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"
                  ></path>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path>
                </g>
              </svg>
              <p>
                <span class="task-template-builder-text182">Совет мастера:</span>
                <span>
                  Начните с простого примера, протестируйте его, затем добавляйте
                  сложность постепенно.
                  <span v-html="rawvpss"></span>
                </span>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <section
      id="dashboard-section"
      role="region"
      aria-labelledby="dashboard-title"
    >
      <div class="dashboard-container">
        <div class="dashboard">
          <div class="preview-column">
            <h2 id="dashboard-title" class="section-title">
              Живой предпросмотр шаблона задачи
              <span v-html="rawu0el"></span>
            </h2>
            <div class="preview-panel">
              <div class="panel-badge">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
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
                <span>Python 3.10</span>
              </div>
              <h3 class="preview-title">Обработка массива данных</h3>
              <pre class="preview-code"><span># main.py
  import sys
  from typing import List, Dict
  
  def process_array(data: List[int]) -&gt; Dict[str, int]:
      &quot;&quot;&quot;
      Обрабатывает массив целых чисел
      Возвращает статистику обработки
      &quot;&quot;&quot;
      # Ваша реализация здесь
      pass
  
  if __name__ == &quot;__main__&quot;:
      # Чтение входных данных
      n = int(input())
      data = list(map(int, input().split()))
      
      # Вызов функции
      result = process_array(data)
      
      # Вывод результата  
      print(f&quot;Sum: &#123;result[&apos;sum&apos;]&#125;&quot;)
      print(f&quot;Count: &#123;result[&apos;count&apos;]&#125;&quot;)</span></pre>
            </div>
            <div class="preview-panel">
              <h3 class="preview-subtitle">Пример использования (main)</h3>
              <div class="example-io">
                <div class="io-block">
                  <strong>Ввод:</strong>
                  <pre><div class="task-template-builder-io-block2"><strong>Вывод:</strong><pre><div class="task-template-builder-action-row"><button class="btn-primary btn"><svg
    width="18"
    xmlns="http://www.w3.org/2000/svg"
    height="18"
    viewBox="0 0 24 24"
  ><g
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ><path
    d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
  ></path><path
    d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7"
  ></path></g></svg><span> Сохранить шаблон <span v-html="raw5b95"></span></span></button><button
    class="btn-accent btn"
  ><svg
    width="18"
    xmlns="http://www.w3.org/2000/svg"
    height="18"
    viewBox="0 0 24 24"
  ><g
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path
    d="m7 10l5 5l5-5"
  ></path></g></svg><span> Экспорт в задачу <span v-html="rawvwe9"></span></span></button><button
    class="btn-outline btn"
  ><svg
    width="18"
    xmlns="http://www.w3.org/2000/svg"
    height="18"
    viewBox="0 0 24 24"
  ><path
    d="M20 6L9 17l-5-5"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path></svg><span> Предпросмотр тестов <span v-html="rawfyli"></span></span></button></div><aside
    class="task-template-builder-rail-column"
  ><div class="rail-card"><h4 class="rail-title">Статус совместимости</h4><div class="status-badges"><span class="status-ready status-badge"><svg
    width="14"
    xmlns="http://www.w3.org/2000/svg"
    height="14"
    viewBox="0 0 24 24"
  ><path
    d="M20 6L9 17l-5-5"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path></svg><span> Готово к оцениванию <span v-html="rawduyo"></span></span></span><span
    class="status-deps status-badge"
  ><svg
    width="14"
    xmlns="http://www.w3.org/2000/svg"
    height="14"
    viewBox="0 0 24 24"
  ><path
    d="m16 6l4 14M12 6v14M8 8v12M4 4v16"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path></svg><span> 2 библиотеки <span v-html="rawh979"></span></span></span></div></div><div
    class="rail-card"
  ><h4 class="rail-title">Требования</h4><ul class="requirements-list"><li><span>Время: ≤ 2 секунды</span></li><li><span>Память: ≤ 256 МБ</span></li><li><span>Ввод: stdin</span></li><li><span>Вывод: stdout</span></li></ul></div><div
    class="rail-card"
  ><h4 class="rail-title"><svg
    width="18"
    xmlns="http://www.w3.org/2000/svg"
    height="18"
    viewBox="0 0 24 24"
  ><g
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ><path
    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"
  ></path><circle
    r="4"
    cx="9"
    cy="7"
  ></circle></g></svg><span> Данные студентов <span v-html="rawq06z"></span></span></h4><div
    class="student-stats"
  ><div class="stat-row"><span>Среднее время:</span><strong>22 мин</strong></div><div
    class="stat-row"
  ><span>Успешных запусков:</span><strong>87%</strong></div><div
    class="stat-row"
  ><span>Типичные ошибки:</span><strong>IndexError (12%)</strong></div></div></div><div
    class="rail-card history-rail"
  ><h4 class="rail-title"><svg
    width="18"
    xmlns="http://www.w3.org/2000/svg"
    height="18"
    viewBox="0 0 24 24"
  ><g
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ><path d="M12 6v6l4 2"></path><circle r="10" cx="12" cy="12"></circle></g></svg><span> История изменений <span v-html="raw9l1k"></span></span></h4><div
    class="history-list"
  ><div class="history-item"><span class="history-time">16:24</span><p
    class="history-text"
  >Обновлена сигнатура функции</p><span
    class="history-author"
  >Иван С.</span></div><div
    class="history-item"
  ><span class="history-time">15:42</span><p
    class="history-text"
  >Добавлена библиотека NumPy</p><span
    class="history-author"
  >Анна П.</span></div><div
    class="history-item"
  ><span class="history-time">14:18</span><p class="history-text">Создан шаблон</p><span class="history-author">Анна П.</span></div></div></div><div
    class="author-signature"
  ><p><span class="task-template-builder-text208">Автор:</span><span> Анна П. <span v-html="rawzwnb"></span></span></p><p><span class="task-template-builder-text211">Уровень:</span><span> Средний <span v-html="rawximm"></span></span></p></div></aside><section
    id="stats-section"
    role="region"
    aria-labelledby="stats-title"
  ><div class="stats-container"><div class="stats-panel"><div class="stats-left"><h2 id="stats-title" class="section-title">Статистика шаблонов</h2><p
    class="stats-subtitle"
  >Винтажный отчет о современных успехах</p><div
    class="key-metrics"
  ><div class="metric-badge"><span class="metric-label">Всего шаблонов</span><span class="metric-value">128</span></div><div
    class="metric-badge"
  ><span class="metric-label">Использований за месяц</span><span
    class="metric-value"
  >3,482</span></div></div><p
    class="stats-interpretation"
  > Эти данные подсказывают, какие языки и библиотеки востребованы в
            реальных занятиях, где требуется упрощение или дополнительная
            документация, и какие шаблоны стоит продвигать при наборе на курсы. <span
    v-html="rawsvcp"
  ></span></p></div><div
    class="stats-center"
  ><div class="stat-card"><h3 class="card-title"><svg
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 0 24 24"
  ><path
    d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path></svg><span> Топ языков по популярности <span v-html="rawt7t7"></span></span></h3><ul
    class="language-list"
  ><li><span class="lang-name">Python</span><span
    class="lang-stat"
  >54 шаблона • 1,920 запусков</span></li><li><span class="lang-name">C++</span><span
    class="lang-stat"
  >32 шаблона • 890 запусков</span></li><li><span class="lang-name">Java</span><span
    class="lang-stat"
  >18 шаблонов • 420 запусков</span></li></ul></div><div
    class="stat-card"
  ><h3 class="card-title"><svg
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 0 24 24"
  ><path
    d="m16 6l4 14M12 6v14M8 8v12M4 4v16"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path></svg><span> Наиболее добавляемые библиотеки <span v-html="rawmlij"></span></span></h3><ul
    class="library-list-stats"
  ><li><span class="lib-name">NumPy</span><span class="lib-count">620 использований</span></li><li><span class="lib-name">STL</span><span class="lib-count">410 использований</span></li><li><span class="lib-name">JUnit</span><span class="lib-count">150 использований</span></li></ul></div></div><div
    class="stats-right"
  ><div class="authors-card"><h3 class="card-title"><svg
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 0 24 24"
  ><g
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ><path
    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"
  ></path><circle
    r="4"
    cx="9"
    cy="7"
  ></circle></g></svg><span> Лучшие авторы <span v-html="raw7n0b"></span></span></h3><ul
    class="authors-list"
  ><li><span class="author-name">Анна П.</span><span
    class="author-stat"
  >26 шаблонов • 4.8/5</span></li><li><span class="author-name">Иван С.</span><span
    class="author-stat"
  >18 шаблонов • 4.6/5</span></li></ul></div><div
    class="activity-card"
  ><h4 class="card-title"><svg
    width="18"
    xmlns="http://www.w3.org/2000/svg"
    height="18"
    viewBox="0 0 24 24"
  ><g
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ><path d="M12 6v6l4 2"></path><circle r="10" cx="12" cy="12"></circle></g></svg><span> Активность <span v-html="rawzmwl"></span></span></h4><p
    class="activity-text"
  > Пики загрузки в будние дни утром и поздним вечером <span v-html="raws2kh"></span></p><p
    class="activity-stat"
  ><span> Среднее время на выполнение: <span v-html="rawq005"></span></span><span
    class="task-template-builder-text218"
  >22 минуты</span></p></div><div
    class="action-group"
  ><button class="btn-primary btn"><svg
    width="18"
    xmlns="http://www.w3.org/2000/svg"
    height="18"
    viewBox="0 0 24 24"
  ><g
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path
    d="m7 10l5 5l5-5"
  ></path></g></svg><span> Экспортировать отчет <span v-html="rawlpjf"></span></span></button><button
    class="btn-outline btn"
  ><svg
    width="18"
    xmlns="http://www.w3.org/2000/svg"
    height="18"
    viewBox="0 0 24 24"
  ><g
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ><path
    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"
  ></path><circle
    r="4"
    cx="9"
    cy="7"
  ></circle></g></svg><span> Показать пользователей <span v-html="rawq0we"></span></span></button></div></div></div></div></section><section
    id="faq-section"
    role="region"
    aria-labelledby="faq-title"
  ><div class="faq-container"><h2 id="faq-title" class="section-title">Часто задаваемые вопросы</h2><div
    class="faq-grid"
  ><div class="faq-cards"><div class="faq-card"><svg
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
  ><g
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ><path
    d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"
  ></path><path
    d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"
  ></path></g></svg><h3>Какие языки поддерживаются?</h3><p> Поддерживаем популярные учебные языки: Python, Java, C++, C#,
              JavaScript (Node.js). Список регулярно обновляется по мере появления
              учебных трендов. <span
    v-html="raw24ro"
  ></span></p></div><div
    class="faq-card"
  ><svg
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
  ><g
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ><path
    d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"
  ></path><path
    d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"
  ></path></g></svg><h3>Можно ли добавить внешние библиотеки?</h3><p> Да. Вы можете подключать стандартные и общедоступные библиотеки,
              необходимые для учебной задачи. Ограничения применяются: только
              проверенные пакеты. <span
    v-html="rawmv7z"
  ></span></p></div><div
    class="faq-card"
  ><svg
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
  ><g
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ><path
    d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"
  ></path><path
    d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"
  ></path></g></svg><h3>Можно ли сохранить и повторно использовать шаблоны?</h3><p> Конечно. Шаблоны сохраняются в личной библиотеке преподавателя и
              могут копироваться, версионироваться и публиковаться для коллег. <span
    v-html="rawhjqf"
  ></span></p></div><div
    class="faq-card"
  ><svg
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
  ><g
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ><path
    d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"
  ></path><path
    d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"
  ></path></g></svg><h3>Есть ли готовые ретро-шаблоны?</h3><p> Да — коллекция «Наследие» содержит премиум-шаблоны в винтажной
              стилистике документации: аккуратно оформленные сигнатуры,
              комментарии и тесты. <span
    v-html="rawoqx2"
  ></span></p></div></div><div
    class="faq-accordion"
  ><details class="accordion-item"><summary role="button" aria-controls="faq-1" aria-expanded="false"><span>Какие существуют ограничения на библиотеки?</span><svg
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 0 24 24"
  ><path
    d="m18 15l-6-6l-6 6"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path></svg></summary><div
    id="faq-1"
    role="region"
    aria-labelledby="faq-1-title"
    class="accordion-content"
  ><p> Максимум 10 внешних пакетов на шаблон; суммарный объём
                зависимостей не должен превышать 50 МБ. Запрещены пакеты с
                исполнением небезопасного кода и пакеты, требующие нестандартных
                системных привилегий. <span
    v-html="raw8rpn"
  ></span></p></div></details><details
    class="accordion-item"
  ><summary role="button" aria-controls="faq-2" aria-expanded="false"><span>Как оформлять шаблон функции и её вызов из main?</span><svg
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 0 24 24"
  ><path
    d="m18 15l-6-6l-6 6"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path></svg></summary><div
    id="faq-2"
    role="region"
    aria-labelledby="faq-2-title"
    class="accordion-content"
  ><p> В форме шаблона предусмотрены поля для сигнатуры функции,
                комментариев с описанием контрактов и примера вызова в main.
                Система автоматически генерирует каркас main с подсказками для
                студентов. <span
    v-html="rawy18n"
  ></span></p></div></details><details
    class="accordion-item"
  ><summary role="button" aria-controls="faq-3" aria-expanded="false"><span>Как проверяется совместимость шаблона?</span><svg
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 0 24 24"
  ><path
    d="m18 15l-6-6l-6 6"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path></svg></summary><div
    id="faq-3"
    role="region"
    aria-labelledby="faq-3-title"
    class="accordion-content"
  ><p> Для каждой языковой конфигурации можно указать версию
                компилятора/интерпретатора. Система выполняет быструю валидацию
                шаблона в выбранной среде и сообщает о несовместимостях. <span
    v-html="rawggm7"
  ></span></p></div></details><details
    class="accordion-item"
  ><summary role="button" aria-controls="faq-4" aria-expanded="false"><span>Как обеспечить авторский контроль?</span><svg
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 0 24 24"
  ><path
    d="m18 15l-6-6l-6 6"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path></svg></summary><div
    id="faq-4"
    role="region"
    aria-labelledby="faq-4-title"
    class="accordion-content"
  ><p> У каждого шаблона можно задать права: личный, доступ коллегам,
                публичный для курса. История изменений и отметки автора видны в
                интерфейсе. <span
    v-html="rawp5us"
  ></span></p></div></details><details
    class="accordion-item"
  ><summary role="button" aria-controls="faq-5" aria-expanded="false"><span>Что делать, если шаблон вызывает ошибки у студентов?</span><svg
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 0 24 24"
  ><path
    d="m18 15l-6-6l-6 6"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path></svg></summary><div
    id="faq-5"
    role="region"
    aria-labelledby="faq-5-title"
    class="accordion-content"
  ><p> В интерфейсе есть режим просмотра журналов выполнения и
                рекомендаций. Вы можете включить более подробный вывод ошибок для
                отладки или ограничить его для экзаменационных условий. <span
    v-html="rawelng"
  ></span></p></div></details><details
    class="accordion-item"
  ><summary role="button" aria-controls="faq-6" aria-expanded="false"><span>Как работают лимиты по времени и памяти?</span><svg
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 0 24 24"
  ><path
    d="m18 15l-6-6l-6 6"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path></svg></summary><div
    id="faq-6"
    role="region"
    aria-labelledby="faq-6-title"
    class="accordion-content"
  ><p> Преподаватель настраивает таймауты и лимиты памяти для каждой
                задачи. Рекомендуемые значения подсказаны в ретро-стиле подсказок,
                опираясь на лучшие образовательные практики. <span
    v-html="rawq45l"
  ></span></p></div></details><div
    class="support-card"
  ><h3>Поддержка и обратная связь</h3><p> Если вы столкнулись с нестандартной библиотекой или сценарием,
              команда CodeCraft Template поможет адаптировать среду. Оставьте
              запрос через панель поддержки — ответ в рабочие часы, как принято у
              заботливых преподавателей старой школы. <span
    v-html="raws0n7"
  ></span></p><button
    class="btn-primary btn"
  >Связаться с поддержкой</button></div></div></div></div></section><div
    class="task-template-builder-container27"
  ><div class="task-template-builder-container28"><DangerousHTML
    html="<style>
          @keyframes revealFade {from {opacity: 0;
  transform: translateY(8px);}
  to {opacity: 1;
  transform: translateY(0);}}@keyframes accordionOpen {from {opacity: 0;
  transform: translateY(-4px);}
  to {opacity: 1;
  transform: translateY(0);}}
          </style> "
  ></DangerousHTML></div></div><div
    class="task-template-builder-container29"
  ><div class="task-template-builder-container30"><DangerousHTML
    html="<script defer data-name='task-template-builder'>
  (function(){
    // Accordion functionality for FAQ section
    const accordionItems = document.querySelectorAll('.accordion-item')
  
    accordionItems.forEach((item) => {
      const summary = item.querySelector('summary')
  
      summary.addEventListener('click', () => {
        const isOpen = item.hasAttribute('open')
        summary.setAttribute('aria-expanded', !isOpen)
      })
    })
  
    // Chip toggle functionality
    const chips = document.querySelectorAll('.chip')
  
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const isPressed = chip.getAttribute('aria-pressed') === 'true'
        chip.setAttribute('aria-pressed', !isPressed)
      })
    })
  
    // Reveal animations for timeline entries
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)
  
    const timelineEntries = document.querySelectorAll('.timeline-entry')
    timelineEntries.forEach((entry) => {
      entry.style.opacity = '0'
      entry.style.transform = 'translateY(6px)'
      entry.style.transition = `opacity ${getComputedStyle(
        document.documentElement
      ).getPropertyValue('--animation-duration-standard')} ${getComputedStyle(
        document.documentElement
      ).getPropertyValue(
        '--animation-curve-primary'
      )}, transform ${getComputedStyle(document.documentElement).getPropertyValue(
        '--animation-duration-standard'
      )} ${getComputedStyle(document.documentElement).getPropertyValue(
        '--animation-curve-primary'
      )}`
      observer.observe(entry)
    })
  
    // Library card hover effects
    const libraryCards = document.querySelectorAll('.library-card')
    libraryCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)'
      })
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)'
      })
    })
  
    // CTA button press effect
    const ctaButtons = document.querySelectorAll(
      '.cta, .btn-primary, .btn-accent'
    )
    ctaButtons.forEach((btn) => {
      btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.98)'
      })
  
      btn.addEventListener('mouseup', () => {
        btn.style.transform = 'scale(1)'
      })
  
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)'
      })
    })
  
    // Step navigation highlight
    const stepItems = document.querySelectorAll('.step-item')
    stepItems.forEach((step, index) => {
      step.addEventListener('click', () => {
        stepItems.forEach((s) => s.removeAttribute('aria-current'))
        step.setAttribute('aria-current', 'step')
      })
    })
  })()
  </script>"
  ></DangerousHTML></div></div>Sum: 85 Count: 5&lt;/pre &gt;</pre></div>5 10 25 30 5 15&lt;/pre &gt;</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <app-footer></app-footer>
    <a href="https://play.teleporthq.io/signup">
      <div
        aria-label="Sign up to TeleportHQ"
        class="task-template-builder-container31"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="task-template-builder-icon244"
        >
          <path
            d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
            fill="#B23ADE"
          ></path>
          <path
            d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
            fill="#FF5C5C"
          ></path>
          <path
            d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
            fill="#2874DE"
          ></path>
        </svg>
        <span class="task-template-builder-text243">Built in TeleportHQ</span>
      </div>
    </a>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/vue'

import AppNavigation from '../components/navigation'
import AppFooter from '../components/footer'

export default {
  name: 'TaskTemplateBuilder',
  props: {},
  components: {
    AppNavigation,
    DangerousHTML,
    AppFooter,
  },
  data() {
    return {
      rawvb1s: ' ',
      rawjkm7: ' ',
      rawuxah: ' ',
      raw071s: ' ',
      raw4vw0: ' ',
      rawg1ys: ' ',
      raw7ybv: ' ',
      raw32jf: ' ',
      rawzvz0: ' ',
      rawmzmw: ' ',
      raw135x: ' ',
      raw29lq: ' ',
      raw2hf3: ' ',
      raw0rvi: ' ',
      raw4lsj: ' ',
      rawycll: ' ',
      rawup19: ' ',
      raw3jo9: ' ',
      raw90c8: ' ',
      raw6fdq: ' ',
      raw3pqk: ' ',
      rawsszg: ' ',
      rawsxyj: ' ',
      rawz1d9: ' ',
      raw5lxg: ' ',
      raw86zo: ' ',
      raw56uv: ' ',
      rawn4bc: ' ',
      rawct1j: ' ',
      rawnlo0: ' ',
      rawed06: ' ',
      rawc6x4: ' ',
      rawjrvj: ' ',
      rawic51: ' ',
      raww2o8: ' ',
      rawvvxq: ' ',
      raw8i48: ' ',
      raw2cdr: ' ',
      rawtpvq: ' ',
      rawqzb9: ' ',
      rawz79d: ' ',
      raw84zb: ' ',
      rawd929: ' ',
      rawvx5k: ' ',
      rawvpss: ' ',
      rawu0el: ' ',
      raw5b95: ' ',
      rawvwe9: ' ',
      rawfyli: ' ',
      rawduyo: ' ',
      rawh979: ' ',
      rawq06z: ' ',
      raw9l1k: ' ',
      rawzwnb: ' ',
      rawximm: ' ',
      rawsvcp: ' ',
      rawt7t7: ' ',
      rawmlij: ' ',
      raw7n0b: ' ',
      rawzmwl: ' ',
      raws2kh: ' ',
      rawq005: ' ',
      rawlpjf: ' ',
      rawq0we: ' ',
      raw24ro: ' ',
      rawmv7z: ' ',
      rawhjqf: ' ',
      rawoqx2: ' ',
      raw8rpn: ' ',
      rawy18n: ' ',
      rawggm7: ' ',
      rawp5us: ' ',
      rawelng: ' ',
      rawq45l: ' ',
      raws0n7: ' ',
    }
  },
  metaInfo: {
    title: 'Task-Template-Builder - Sarcastic Affectionate Gerbil',
    meta: [
      {
        property: 'og:title',
        content: 'Task-Template-Builder - Sarcastic Affectionate Gerbil',
      },
    ],
  },
}
</script>

<style scoped>
.task-template-builder-container10 {
  width: 100%;
  display: block;
  min-height: 100vh;
}
 
.task-template-builder-container11 {
  display: none;
}
 
.task-template-builder-container12 {
  display: contents;
}
 
.task-template-builder-text182 {
  font-weight: 700;
}
 
.task-template-builder-io-block2 {
  border: 1px dashed var(--color-border);
  padding: var(--spacing-sm);
  background: var(--color-surface);
  border-radius: var(--border-radius-sm);
}
 
.task-template-builder-action-row {
  gap: var(--spacing-sm);
  display: flex;
  flex-wrap: wrap;
}
 
.task-template-builder-rail-column {
  gap: var(--spacing-md);
  display: flex;
  flex-direction: column;
}
 
.task-template-builder-text208 {
  font-weight: 700;
}
 
.task-template-builder-text211 {
  font-weight: 700;
}
 
.task-template-builder-text218 {
  font-weight: 700;
}
 
.task-template-builder-container27 {
  display: none;
}
 
.task-template-builder-container28 {
  display: contents;
}
 
.task-template-builder-container29 {
  display: none;
}
 
.task-template-builder-container30 {
  display: contents;
}
 
.task-template-builder-container31 {
  right: 50px;
  border: 1px solid #ffffff5c;
  bottom: 30px;
  display: flex;
  z-index: 22;
  position: fixed;
  box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
  min-height: auto;
  align-items: center;
  padding-top: 8px;
  padding-left: 12px;
  border-radius: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  backdrop-filter: blur(6px);
  background-color: rgba(41, 41, 41, 0.41);
}
 
.task-template-builder-icon244 {
  width: 24px;
  margin-right: 4px;
}
 
.task-template-builder-text243 {
  color: white;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
 
@media(max-width: 479px) {
  .task-template-builder-action-row {
    flex-direction: column;
  }
}
</style>
