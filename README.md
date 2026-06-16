# Portafolio profesional — Daniel Rodriguez

Portafolio profesional desarrollado como **aplicación web con React + Vite**. Es
una página única (single-page) con navegación por scroll suave que presenta mi
perfil, habilidades, proyectos y contacto. Renderiza la información desde
estructuras de datos, consume proyectos con `fetch` y ofrece modo claro/oscuro.

## 🔗 Demo en vivo

**https://portafolio-censa.vercel.app**

## 🛠️ Stack

- **React 19** + **Vite 8**
- **JavaScript** (sin TypeScript)
- **CSS Modules** + variables CSS (tema oscuro/claro con acento oni-rojo)
- Datos servidos desde un **JSON estático** (`public/data/projects.json`)
- Sin dependencias de UI externas

## ✨ Funcionalidades

- **Página única** con navegación por scroll suave; el nav resalta la sección activa (scrollspy con `IntersectionObserver`).
- **Hero** con nombre, rol, propuesta de valor y llamadas a la acción.
- **Sobre mí** con foto y descripción del perfil.
- **Habilidades** renderizadas desde un arreglo de datos, agrupadas por tipo.
- **Proyectos** cargados con `fetch` desde un JSON, con estados de **carga, error y vacío**.
- **Filtro** por categoría y tecnología, y **ordenamiento** de proyectos.
- **Formulario de contacto** controlado, con validación de campos y formato de correo, estado de carga y mensaje de éxito.
- **Modo claro/oscuro** con persistencia en `localStorage` y respeto a la preferencia del sistema.
- **Diseño responsive** (móvil, tablet y escritorio) y accesibilidad básica.

## 📋 Requisitos

- **Node.js 18 o superior**
- **npm** (incluido con Node)

## 🚀 Instalación y ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/Daniel-Rodriguez15/Portafolio-censa.git
cd Portafolio-censa

# 2. Instalar dependencias
npm install

# 3. Levantar el entorno de desarrollo
npm run dev
```

Abrí la URL que muestra la terminal (por defecto http://localhost:5173).

### Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Entorno de desarrollo con recarga en caliente |
| `npm run build` | Genera la versión de producción en `/dist` |
| `npm run preview` | Sirve localmente el build de producción |
| `npm run lint` | Analiza el código con ESLint |

## 📁 Estructura del proyecto

```
Portafolio-censa/
├── public/
│   ├── data/projects.json   # datos de los proyectos (consumidos con fetch)
│   ├── avatar.jpg
│   └── favicon.svg
├── src/
│   ├── components/          # componentes de la interfaz (+ CSS Modules)
│   │   ├── Header.jsx        # nav con scroll suave + sección activa
│   │   ├── Hero.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillList.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ProjectCard.jsx   # tarjeta reutilizable de proyecto
│   │   ├── ProjectFilters.jsx
│   │   ├── ContactForm.jsx
│   │   ├── RequestState.jsx  # loading / error / empty
│   │   ├── ThemeToggle.jsx   # modo claro/oscuro
│   │   ├── EmailLink.jsx
│   │   ├── NinjaIcon.jsx
│   │   ├── ScrollNinja.jsx   # ninja que baja con el scroll
│   │   └── Footer.jsx
│   ├── hooks/               # hooks personalizados
│   │   ├── useProjects.js        # carga de datos + estados de petición
│   │   ├── useFilteredProjects.js # filtro y orden (inmutable)
│   │   ├── useContactForm.js      # formulario controlado + validación
│   │   ├── useTheme.js            # tema claro/oscuro
│   │   ├── useActiveSection.js    # scrollspy
│   │   └── useScrollProgress.js   # progreso de scroll
│   ├── services/
│   │   └── projects.service.js   # acceso a datos (fetch)
│   ├── data/                # perfil y habilidades
│   ├── App.jsx              # composición de las secciones
│   ├── main.jsx             # punto de entrada
│   └── index.css            # tokens del tema + estilos base
├── package.json
└── README.md
```

## 🏗️ Decisiones de arquitectura

- **Separación por capas**: el `fetch` vive en `services/`, la lógica y el estado
  en `hooks/`, y la presentación en `components/`. Ningún componente accede a
  datos directamente.
- **Container / Presentational**: `ProjectsSection` orquesta (datos + estados) y
  `ProjectCard` solo presenta lo que recibe por props.
- **Hooks de responsabilidad única**: cada hook resuelve una sola cosa.
- **Inmutabilidad**: las actualizaciones de estado se hacen sobre copias, sin
  mutar el original.
- **Single-page sin router**: al ser un portafolio de scroll continuo, se usa
  navegación por anclas en lugar de React Router (evita complejidad innecesaria).

## ✉️ Nota sobre el formulario de contacto

El formulario **no envía correos reales**: valida los campos, simula el envío con
un estado de carga y muestra un mensaje de éxito. Es una demostración de manejo
de estado, validación y renderizado condicional en el frontend (el navegador no
puede enviar correos por sí solo, requeriría un backend o un servicio externo).

## ☁️ Despliegue

Desplegado en **Vercel** con integración continua: cada push a la rama principal
genera un nuevo despliegue automático. Vercel detecta Vite, ejecuta
`npm run build` y publica el contenido de `/dist`.

## 👤 Autor

**Daniel Rodriguez** — Desarrollador Backend

- GitHub: [@Daniel-Rodriguez15](https://github.com/Daniel-Rodriguez15)
- Email: daniel.dfra61@gmail.com
