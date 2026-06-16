# Portafolio profesional — Daniel Rodriguez

Portafolio profesional desarrollado como aplicación web con **React + Vite**.
Es una página única (single-page) con navegación por scroll suave que presenta
perfil, habilidades, proyectos y contacto. Los proyectos se cargan dinámicamente
desde un archivo de datos y la interfaz incluye modo claro/oscuro.

## Requisitos

- **Node.js 18 o superior**
- **npm** (viene con Node)

## Instalación y ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el entorno de desarrollo
npm run dev
```

Luego abrí la URL que muestra la terminal (por defecto http://localhost:5173).

Otros scripts disponibles:

```bash
npm run build     # genera la versión de producción en /dist
npm run preview   # sirve localmente el build de producción
npm run lint      # revisa el código con ESLint
```

## Funcionalidades

- Página única con navegación por scroll suave entre secciones.
- Sección de proyectos cargada con `fetch` desde un JSON, con estados de carga,
  error y vacío.
- Filtro y ordenamiento de proyectos.
- Habilidades renderizadas desde datos.
- Formulario de contacto con validación de campos y formato de correo.
- Modo claro/oscuro con preferencia guardada.
- Diseño responsive (móvil, tablet y escritorio).

## Estructura

```
src/
├── components/   # componentes de la interfaz
├── hooks/        # hooks personalizados (datos, formulario, tema, scroll)
├── services/     # acceso a datos (fetch)
├── data/         # perfil y habilidades
├── App.jsx       # composición de las secciones
└── main.jsx      # punto de entrada
public/data/projects.json   # datos de los proyectos
```

## Nota sobre el formulario de contacto

El formulario **no envía correos reales**: valida los campos, simula el envío con
un estado de carga y muestra un mensaje de éxito. Es una demostración de manejo
de estado, validación y renderizado condicional en el frontend, sin backend
(el navegador no puede enviar correos por sí solo).
