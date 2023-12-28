# Cuentos infantiles

Trabajo entregable de DIW segundo trimestre:
Cuentos infantiles.

Consta de un proyeycto realizado en Vite con React y Sass. 
El proyecto consta de varios componentes, cada uno con su scss:
    - Header
    - Footer
    - Tale
    - Catalogue
    - Background

Animaciones:
    - Logo - animación de movimiento como una campanita.
    - Tarjetas - tarjetas giratorias con la partada y información sobre el cuento
    - Iconos de medias sociales ampliables al pasar el raton por encima
    - Modo dia - pinchando sobre el sol se aplica un fondo de pantalla diferente
                y aparecen mariposas con movimiento lineal y giratorio.
    - Modo noche - pinchando sobre la lluna se aplica un fondo de pantalla diferente
                y aparecen puntos que estan simulando estrellas.
    - Botones - al entrar en un cuento los botones se desplazan al abrir y al cerrar
                el libro.

Las paginas del libro se generan dinamicamente con el contenido del libro. Consta de 
dos paginas una con el texto y otra con la ilustración del cuento.

Los cuentos estan ubicado en un archivo JSON en la carpeta talesBD. 
Cada cuento consta de ID, nombre, portada, paginas (cada pagina lleva texto e imagen) 
y pagina final.

En el cabecero se encuentran el nombre de la pagina "El mundo de cuentos", el logo, un 
desplegable que se carga con todos los titulos de los cuentos y un enlace al catalogo.
Tambien se encuentran los iconos de la luna y del sol que se utilizan para cambiar la
tema. Por defecto la tema es una y al hacer click sobre uno de los iconos se cambia.

El Catalogue consta de tantas tarjetas giratorias como cuentos hay en la base de datos.
Cada tarjeta tiene por delante la portada del libro y pro detras información con el 
nombre del cuento y los autores.

La parte Tale consta del libro elegido por el usuario. Se muestra la portada del libro
con botones para siguiente y anterior pagina. Tanto los botones como las paginas son 
clickables para pasar a la siguiente o la anterior pagina. Al "abrir" el libro los botones
se separan del el y se muestra el contenido del libro. En la hoja izquierda (atras) se 
muestra el texto y en la hoja derecha (delante) se muestra la ilustración. Al terminar
el libro se muestra la ultima pagina (endPage) que muestra el autor del cuento.

En el pie tenemos varios enlaces que no tinen asignado ninguna función como "Politica de 
Privacidad", "Terminos de Uso" y "Mapa del Sitio". En el medio tenemos los iconos de las
medias sociales. Hemos incluido la fecha y la hora actual, que se actualizan cada segundo.