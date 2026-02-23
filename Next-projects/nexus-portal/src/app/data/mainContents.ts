

export const mainContexts = [
  {
    id: 1,
    FactionType: 'IDE',
    description: 'Среда разработки — редактор, отладчик и набор инструментов в одном окне.',
    items: [
      { id: 1, title: 'VS Code', description: 'Лёгкий и расширяемый редактор с отличной поддержкой TypeScript и плагинов.' },
      { id: 2, title: 'Visual Studio', description: 'Мощная IDE от Microsoft для .NET и C++ проектов.' },
      { id: 3, title: 'PyCharm', description: 'IDE для Python с инструментами для отладки и работы с виртуальными окружениями.' },
      { id: 4, title: 'Sublime Text', description: 'Быстрый и минималистичный редактор для небольших проектов.' },
    ],
  },

  {
    id: 2,
    FactionType: 'Frontend',
    description: 'Клиентская часть — интерфейс и взаимодействие с пользователем.',
    items: [
      { id: 100, title: 'React', description: 'Библиотека для создания динамических интерфейсов.' },
      { id: 101, title: 'Vue.js', description: 'Фреймворк для быстрых прототипов и гибких интерфейсов.' },
      { id: 102, title: 'HTML', description: 'Структура веб-страниц — основа фронтенда.' },
      { id: 103, title: 'Tailwind CSS', description: 'Утилитарный CSS-фреймворк для быстрой стилизации.' },
      { id: 104, title: 'JavaScript', description: 'Язык, который оживляет страницы и работает с API.' },
    ],
  },

  {
    id: 3,
    FactionType: 'Backend',
    description: 'Серверная логика, API и работа с базами данных.',
    items: [
      { id: 1002, title: 'Python', description: 'Подходит для API, анализа данных и rapid prototyping (Django, Flask).' },
      { id: 1003, title: 'Go', description: 'Эффективный язык для высоконагруженных сервисов.' },
      { id: 1004, title: 'Java', description: 'Выбор для корпоративных систем и Надёжных сервисов.' },
      { id: 1005, title: 'Kotlin', description: 'Современная альтернатива Java, удобна и для Android, и для бэкенда.' },
      { id: 1006, title: 'Node.js', description: 'Серверная среда для JavaScript — удобна для isomorphic приложений.' },
      { id: 1007, title: 'TypeScript', description: 'Строгая типизация для масштабируемых проектов.' },
    ],
  },

  {
    id: 4,
    FactionType: 'GameDev',
    description: 'Инструменты и языки для разработки игр.',
    items: [
      { id: 2000, title: 'Unity', description: 'Популярный движок с поддержкой C#.' },
      { id: 2001, title: 'Unreal Engine', description: 'Мощный движок для AAA-проектов.' },
      { id: 2002, title: 'Godot', description: 'Открытый движок, удобный для инди-разработки.' },
      { id: 2003, title: 'C++', description: 'Язык для высокопроизводительной логики и движков.' },
      { id: 2004, title: 'C#', description: 'Широко используется в Unity для игровой логики.' },
    ],
  },

  {
    id: 5,
    FactionType: 'Front + Back',
    description: 'Комбинация фронта и бэка — универсальные стек технологии.',
    items: [
      { id: 3001, title: 'Next.js', description: 'Фреймворк для React с SSR и удобной структурой приложений.' },
      { id: 3002, title: 'Node.js + React', description: 'Популярный стек для универсальных приложений.' },
    ],
  },

  {
    id: 6,
    FactionType: 'Tools',
    description: 'Утилиты для разработки и командной работы.',
    items: [
      { id: 4000, title: 'GitHub', description: 'Платформа для хранения кода, обзора и CI/CD.' },
    ],
  },
]
