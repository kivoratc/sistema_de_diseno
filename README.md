# Kivora TC · Sistema de diseño

Página de referencia del sistema visual de Kivora TC: marca, color, tipografía, componentes, plataformas y voz.

Sitio publicado con GitHub Pages desde la rama `main`, carpeta raíz.

## Estructura

```
sistema_de_diseno/
├── index.html          Página del sistema de diseño (estructura)
├── css/
│   └── styles.css      Tokens y estilos
├── js/
│   └── main.js         Interacciones (tema, interruptor, pestañas, copiar)
├── assets/
│   ├── logos/          Logos SVG (claro, oscuro, invertido, favicon)
│   └── banners/        Banners SVG (Facebook, Instagram, LinkedIn, X)
├── docs/               Documentación adicional
├── LICENSE             Todos los derechos reservados
├── .nojekyll           Evita que GitHub Pages procese el sitio con Jekyll
└── .gitignore
```

## Uso local

No requiere instalación. Abre `index.html` en el navegador.

Las fuentes se cargan desde Google Fonts (Lilita One, Outfit y Caveat), así que hace falta conexión a internet la primera vez.

## Publicación en GitHub Pages

1. En GitHub, ve a **Settings → Pages**.
2. En **Build and deployment**, elige **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. El sitio queda disponible en `https://<usuario>.github.io/<repositorio>/`.

## Tokens

Los colores, tipografías y radios se definen como variables CSS en `:root` dentro de `css/styles.css`. Para cambiar la marca, edita esas variables; el resto de la página las usa.

## Licencia

Todos los derechos reservados. Ver [LICENSE](LICENSE).
