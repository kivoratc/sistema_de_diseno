# Decisiones de diseño

Registro corto de decisiones tomadas para el sistema visual. Se marca como reemplazada una decisión cuando cambia; no se borra.

## 2026-11-08 · Página sin build, con CSS y JS separados

- **Contexto:** el sistema es una página de referencia sin compilación.
- **Decisión:** HTML en `index.html`, estilos en `css/styles.css` y comportamiento en `js/main.js`, sin dependencias de compilación.
- **Consecuencias:** cero configuración para GitHub Pages. Las reglas de `buenas-practicas-web` piden componentes pequeños; si la página crece, el CSS puede dividirse por componente.

## 2026-11-08 · Tipografía

- **Decisión:** Lilita One para titulares, Outfit para texto y Caveat solo para notas cortas.
- **Consecuencias:** tres familias cargadas desde Google Fonts.
