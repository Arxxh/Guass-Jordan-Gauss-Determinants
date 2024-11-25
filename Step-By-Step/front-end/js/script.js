

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item'); // Todos los enlaces del menú
    const content = document.getElementById('content'); // Contenedor del contenido dinámico

    // Contenidos dinámicos para cada sección
    const sections = {
        overview: `<main class="main-content">
            <header class="header">
                <h1>Dashboard de Métodos Numéricos</h1>
                <p>Bienvenido al sistema Step-By-Step.</p>
                <button id="darkModeToggle" class="dark-mode-btn">🌙 Modo Noche</button>
            </header>
            <section id="overview">
                <h2>Vista General</h2>
                <p>Selecciona un método en el menú para empezar.</p>
            </section>
            <div class="separacion">
                <p></p>
                <br>
                <hr>
            </div>
            <div class="Noticias">
                <h1>Gauss</h1>
                <p>El método de Gauss, también conocido como eliminación de Gauss,
                    es un procedimiento matemático utilizado para resolver sistemas de ecuaciones lineales.
                    Consiste en transformar el sistema original en uno equivalente más sencillo mediante operaciones
                    elementales con las filas de la matriz asociada al sistema.
                    Estas operaciones permiten reducir la matriz a su forma escalonada o forma escalonada reducida.
                </p>
                <h2>Pasos principales de metodo:</h2>
                <ol>
                    <li>Formar la matriz aumentada:
                        Combina la matriz de coeficientes del sistema con el vector de términos independientes.</li>
                    <br>
                    <li>Transformación a forma escalonada: Se utiliza el pivoteo, es decir, elegir un elemento principal
                        (o pivote)
                        en cada columna y hacer que los elementos debajo de este en su columna se conviertan en ceros
                        mediante operaciones
                        elementales entre filas (como restas o multiplicaciones por un escalar).</li>
                    <br>
                    <li>Sustitución regresiva (opcional, si no se lleva a forma reducida):
                        Una vez que la matriz está en forma escalonada, se resuelve el sistema
                        comenzando por la última ecuación
                        (de una sola incógnita) y retrocediendo hacia las primeras.</li>
                </ol>
                <h2>Diferencia</h2>
                <p>La diferencia principal entre Gauss y Gauss-Jordan es que en Gauss solo
                    se hacen ceros debajo de los pivotes para obtener una forma escalonada y
                    luego se realiza sustitución regresiva, mientras que en Gauss-Jordan también
                    se hacen ceros arriba de los pivotes, llevando
                    la matriz a una forma escalonada reducida que da las soluciones directamente.</p>
                <br>
                <hr>
                <h1>Gauss-Jordan</h1>
                <p>El método de Gauss-Jordan es una extensión del método de Gauss que lleva la
                    matriz de un sistema de ecuaciones lineales a su forma escalonada reducida,
                    facilitando directamente la solución del sistema. A diferencia de Gauss, que
                    generalmente requiere sustitución regresiva para encontrar
                    las soluciones, Gauss-Jordan elimina la necesidad de este paso adicional.
                </p>
                <h2>Pasos principales del metodo:</h2>
                <ol>
                    <li>
                        Formar la matriz aumentada: Igual que en Gauss, se combina la matriz de
                        coeficientes del sistema con el vector de términos independientes.
                    </li>
                    <br>
                    <li>Reducción a forma escalonada reducida:
                        <ul>
                            <li>Se selecciona un pivote en cada fila (un elemento no nulo que
                                idealmente sea 1, si no, se escala la fila para que lo sea).</li>
                            <li>Se utiliza este pivote para convertir en ceros todos los elementos tanto por
                                debajo como
                                por encima de él en su columna, mediante operaciones elementales entre filas.</li>
                            <li>Este proceso se repite para cada fila hasta obtener una matriz donde cada pivote
                                sea el único valor distinto de cero en su columna.</li>
                        </ul>
                    </li>
                    <li>
                        Solución directa: Una vez en forma escalonada reducida,
                        la matriz directamente muestra las soluciones del sistema,
                        ya que cada fila representa una ecuación donde una variable tiene un único valor.
                    </li>
                </ol>
                <hr>
                <h1>Método de Cramer</h1>
                <p>
                    es una técnica para resolver sistemas de ecuaciones lineales utilizando determinantes
                    de matrices asociadas para encontrar los valores de las incógnitas.
                </p>
            </div>
        </main>`,
        'gauss-jordan': `
            <h2>Gauss-Jordan</h2>
            <p>Aquí puedes resolver matrices paso a paso usando Gauss-Jordan.</p>
        `,
        gauss: `
            <h2>Gauss</h2>
            <p>Resuelve sistemas lineales utilizando el método de Gauss.</p>
        `,
        determinants: `
            <h2>Determinantes</h2>
            <p>Calcula determinantes de matrices aquí.</p>
        `,
        settings: `
            <h2>Configuración</h2>
            <p>Ajusta las preferencias de la aplicación.</p>
        `
    };

    // Configurar clics en los enlaces del menú
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir comportamiento por defecto (navegación)
            const section = item.getAttribute('data-section'); // Obtener sección asociada
            content.innerHTML = sections[section]; // Actualizar contenido dinámico

            // Actualizar estilo activo del menú
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Mantener "Vista General" como sección predeterminada al cargar
    content.innerHTML = sections['overview'];
});


