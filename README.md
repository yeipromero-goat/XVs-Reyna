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

| Archivo               | Sección                                          |
|-----------------------|---------------------------------------------------|
| `img/circulo-sobre.jpg` | Círculo del sobre de entrada (portada, antes de abrir) |
| `img/1.jpg`            | Retrato principal — fondo del hero y círculo pequeño junto al "15" |
| `img/2.jpg`            | Ubicación — Ceremonia Religiosa                     |
| `img/3.jpg`            | Ubicación — Recepción                               |
| `img/11.jpg`           | Hoteles                                            |

`img/circulo-sobre.jpg` es un archivo nuevo, aparte de tu numeración 1–11 del
shoot, porque me confirmaste que quieres una foto distinta ahí (no la misma
del hero). Le puse nombre en vez de número para que no se confunda con las
fotos numeradas.

Save the Date y la sección de agradecimiento ya no llevan foto (se quitó a
petición): ahora son fondo de color liso con el degradado vino/ámbar del
tema, no una foto placeholder.

No existen `img/4.jpg`, `img/5.jpg`, `img/6.jpg`, `img/7.jpg`, `img/8.jpg`,
`img/9.jpg` ni `img/10.jpg` a propósito: el 4 y el 6 porque se quitaron esas
fotos, el 5 porque así venía tu numeración original, y el 7–10 porque eran
los de la galería que también se quitó. Si esas fotos del shoot las quieres
usar en otro lado, dime dónde y las acomodo. Usa formato horizontal para 1,
2, 3 y 11.

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
