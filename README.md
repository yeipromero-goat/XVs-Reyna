# Invitación Digital — XV Años de Reyna

Plantilla estática (HTML/CSS/JS, sin dependencias de build) para una invitación
de XV años tipo "sobre que se abre → scroll con secciones". Lista para subir
tal cual a GitHub Pages, Netlify o cualquier hosting estático.

## Estructura

```
index.html      contenido y textos
css/style.css   estilos (colores, tipografías, layout, cortes diagonales)
js/script.js    abrir sobre, cuenta regresiva, música, animaciones
img/            fotos reales (ver numeración abajo)
audio/          pista de fondo (opcional)
```

No hay sección de "Fotos & Video" (se quitó a petición). Si más adelante se
quiere agregar una galería o un video, dímelo y la regreso con el mismo
estilo del resto del sitio.

## Fotos: numeración y dónde va cada una

Mientras no había fotos reales se dejaron **placeholders con degradado y
etiqueta** (se ven solos, no rompen el diseño). En cuanto tengas las fotos
finales, solo tienes que colocarlas en `img/` con estos nombres exactos —
no hace falta tocar el código:

| Archivo                 | Sección                                          |
|-------------------------|---------------------------------------------------|
| `img/circulo-sobre.jpg` | Círculo del sobre de entrada (portada, antes de abrir) |
| `img/1.jpeg`            | Fondo del hero (con efecto parallax al hacer scroll) — **extensión `.jpeg`, no `.jpg`** |
| `img/img:2.jpg`         | Ubicación — Ceremonia Religiosa                     |
| `img/img:3.jpg`         | Ubicación — Recepción                               |
| `img/img:11.jpg`        | Hoteles                                            |

Importante: `img/img:2.jpg`, `img/img:3.jpg` e `img/img:11.jpg` llevan
literalmente "img:" pegado al nombre (con dos puntos) porque así quedaron
subidas esas fotos en tu repo la primera vez y decidiste que ajustara el
código a esos nombres en vez de renombrar los archivos. Si en algún momento
sí los renombras en GitHub (quitando el "img:"), avísame para actualizar el
código y que quede como nomenclatura normal (`img/2.jpg`, etc).

`img/circulo-sobre.jpg` es un archivo aparte de tu numeración 1–11 del shoot,
porque confirmaste que quieres una foto distinta ahí (no la misma del hero).
`img/1.jpeg` también es un archivo aparte — es la foto de fondo del hero con
el efecto parallax, pediste específicamente ese nombre con extensión
`.jpeg`.

Save the Date y la sección de agradecimiento ya no llevan foto (se quitó a
petición): ahora son fondo de color liso con el degradado vino/ámbar del
tema, no una foto placeholder.

No existen `img/4.jpg`, `img/5.jpg`, `img/6.jpg`, `img/7.jpg`, `img/8.jpg`,
`img/9.jpg` ni `img/10.jpg` a propósito: el 4 y el 6 porque se quitaron esas
fotos, el 5 porque así venía tu numeración original, y el 7–10 porque eran
los de la galería que también se quitó. Si esas fotos del shoot las quieres
usar en otro lado, dime dónde y las acomodo. Usa formato horizontal para 1,
2, 3 y 11.

## Efecto parallax (fondo del hero)

El fondo del hero (`img/1.jpeg`) se mueve más lento que el resto del
contenido al hacer scroll, dando sensación de profundidad. Se hizo con JS
(`js/script.js`, escucha el scroll y desplaza la imagen), no con
`background-attachment: fixed`, porque ese truco de puro CSS no funciona
bien en Safari de iPhone — y la mayoría de tus invitados van a abrir esto
desde el celular. Si algún día quieres quitar el efecto o cambiar qué tan
notorio es, el número a ajustar es el `0.15` en la función
`updateParallax()` de `js/script.js` (más alto = se nota más el movimiento).

## Video

No hay reproductor de video en la plantilla. Si quieres embeber uno (por
ejemplo el teaser de la sesión de fotos), dime el formato (archivo o liga de
YouTube/Vimeo) y lo agrego con el mismo estilo del resto del sitio.

## Música de fondo

`audio/musica.mp3` está referenciado pero no incluido. Agrega ahí tu pista
(idealmente un MP3 de un solo tema, con permisos/licencia para uso en el
evento) y el botón de la esquina superior izquierda la reproduce/pausa. Si
el archivo no existe, el botón simplemente no hace nada — no genera errores
visibles.

## Link personalizado por familia

No hace falta crear una página ni un repo por familia. El mismo `index.html`
lee un parámetro en la URL y muestra una línea extra "Para: Familia X" en el
sobre, el hero y la sección de agradecimiento. Si el link no trae el
parámetro, esa línea simplemente no aparece (el diseño queda igual que hoy).

Para armar el link de cada familia, toma la URL de tu sitio (la de GitHub
Pages) y agrégale `?para=` seguido del nombre, así:

```
https://TU-USUARIO.github.io/XVs-Reyna/?para=Familia%20L%C3%B3pez
https://TU-USUARIO.github.io/XVs-Reyna/?para=Familia%20Garc%C3%ADa
```

Los `%20` son espacios y `%C3%A1`/`%C3%AD` son acentos (á, í). Si no quieres
escribir el código a mano, escribe el nombre normal con acentos y espacios
directo en la barra de direcciones del navegador (`?para=Familia López`) y
copia el link resultante — el navegador lo codifica solo. Al pegarlo en
WhatsApp funciona igual.

Esto es solo personalización visual (nadie necesita clave para verla, y
cualquiera puede editar el link y ver otro nombre). No registra quién abrió
el link ni cuenta como confirmación de asistencia — si más adelante quieres
eso, es un cambio distinto (necesita guardar datos en algún lado, no solo
HTML).

## Quién invita a quién

El sobre, el hero y la sección de agradecimiento están firmados por
**Familia Badillo Ramírez** ("te invita a celebrar"), es decir, la familia de
Reyna es quien invita — no hay un campo por invitado/familia receptora. Si en
algún momento se necesita personalizar por invitado (por ejemplo, mandar una
liga distinta a cada familia con su nombre), avísame porque eso cambia la
estructura (implicaría parámetros en la URL o una página por invitado).

## Textos y datos a completar

Lo que sigue pendiente está marcado con `[corchetes]` o con el atributo
`data-editable` en `index.html`: código de descuento del hotel, número/liga
de mesa de regalos, y la hora de la Fiesta en el itinerario (no la puse a
tanteo). También falta confirmar si hay más padrinos aparte de los de
velación (tu mensaje se cortó ahí).

La cuenta regresiva usa una fecha fija definida en `js/script.js`:

```js
var EVENT_DATE = new Date("2026-10-30T18:00:00-06:00");
```

Es la fecha real del evento (30 de octubre de 2026, hora de la misa). Si la
hora de la misa cambia, ajusta esta línea.

## Personalizar colores y tipografías

Todo el tema vive en las variables al inicio de `css/style.css`
(`:root { --rose: …; --gold: …; }`). La paleta actual (vino/burdeos, ámbar y
piedra cálida) se ajustó a partir de la foto de portada que mandaste — no se
incluyó la foto en el repo (la agregas tú directo en GitHub), solo se usó
como referencia de color. Cambiando esas variables se actualiza toda la
paleta sin tocar el resto del CSS.
