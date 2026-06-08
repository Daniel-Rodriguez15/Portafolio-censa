# Bitácora de decisiones — Portafolio React

Documento vivo. Acá se anota CADA decisión importante y su porqué, para poder
defenderla oralmente (ver sección 16 del taller: guion de defensa).

---

## Stack y alcance

- **React + Vite.** Requisito obligatorio del taller (sección 6).
- **Alcance: avanzado completo.** Incluye React Router, hooks personalizados,
  ordenamiento de proyectos, deploy y pruebas manuales documentadas. Apunta a
  "Excelente" en la rúbrica (sección 15).
- **Estilos: CSS plano / CSS Modules.** Sin dependencias de framework de estilos.
  Demuestra dominio real de CSS (layout, responsive, variables) en lugar de
  delegarlo a utilidades. CSS Modules da scope por componente y evita choques de
  clases.

---

## Fuente de datos (RF-09) — JSON estático local

**Decisión:** los datos (proyectos) se sirven desde un archivo estático en
`public/data/projects.json`, consumido con `fetch` + `useEffect`.

**Por qué NO JSON Server ni mock API pública:**

Hubo una confusión inicial: se pensó que "JSON local" obligaba a tener algo
"prendido 24/7 sirviendo". Es al revés:

- **JSON estático en `public/` (elegido):** al hacer `npm run build`, Vite copia
  el archivo a `dist/`. Se sirve desde el MISMO host del portafolio
  (Vercel/Netlify). `fetch('/data/projects.json')` pega contra el propio dominio.
  Cero infraestructura extra, cero proceso aparte. Es la opción MÁS confiable y la
  que mejor se despliega.
- **JSON Server:** ESTE sí necesita un proceso Node corriendo 24/7 en un servidor
  aparte (Render/Railway). En free tier se duerme y el portafolio mostraría error.
- **Mock API pública (ej. mockapi.io):** dependencia de un tercero que puede
  caerse y tiene límites de uso.

**Conclusión:** el JSON estático cumple RF-09 (fetch + useEffect + loading/error/
success) sin agregar puntos de falla. Para la defensa: "elegí datos estáticos
servidos junto a la app porque eliminan dependencias externas y se despliegan con
el mismo build".

---

## Proyectos seleccionados

Perfil objetivo: **desarrollador backend**. Se priorizó criterio de arquitectura y
manejo de datos, con algo de frontend para balancear.

1. **anai** ⭐ — Profesional. NestJS + Next.js. Proyecto laboral actual.
   Demo: https://app.anaiapp.ai/es/ (sin repo público, es de la empresa).
2. **Prueba-tecnica-OMC** — Backend. FastAPI + PostgreSQL + JWT + Docker,
   Clean Architecture + SOLID. El showcase backend más fuerte.
3. **Biblipteca-django** — Backend. Django con lógica de negocio real
   (préstamos, multas, roles) y 25 tests.
4. **AgendApp** — Mobile. React Native + TypeScript, clean architecture,
   offline-first con SQLite.
5. **Poke-Dashboard** — Frontend. Next.js + React + Zustand + PokéAPI, responsive.

**Descartados:** Pruebas, test-api-grok, Taller-MySQL, The-farmer-was-replace
(ejercicios sueltos, no aportan a la narrativa profesional).

**Filtro de proyectos (RF-05):** por categoría (Backend / Frontend / Mobile /
Profesional) y por tecnología.

---

## Identidad visual

- **Tema: japonés tradicional con máscaras Oni.** Paleta sobria (negros, rojo
  oni, beige/papel washi, dorado tenue). Tipografía con peso. Acentos gráficos
  inspirados en máscaras Oni sin saturar la legibilidad (requisito de contraste,
  sección 11).

---

## Datos personales

- Nombre: Daniel Rodriguez
- Rol: Desarrollador Backend
- Contexto: estudiante universitario + trabaja actualmente como backend dev
- Stack fuerte: Python (especialmente), además todos los lenguajes del repo
- GitHub: https://github.com/Daniel-Rodriguez15
- Email: daniel.dfra61@gmail.com
- Foto/avatar: PENDIENTE (la agrega Daniel)
- LinkedIn: PENDIENTE

---

## Pendientes

- [ ] Foto/avatar
- [ ] LinkedIn (opcional)
- [ ] Definir destino de deploy (Vercel/Netlify/GitHub Pages)
- [ ] Frase de propuesta de valor del Hero
