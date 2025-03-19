// Array para almacenar los nombres
let nombres = [];

// Elementos del DOM
const nombreInput = document.getElementById('nombreInput');
const agregarBtn = document.getElementById('agregarBtn');
const sortearBtn = document.getElementById('sortearBtn');
const nombresContainer = document.getElementById('nombresContainer');
const contador = document.getElementById('contador');
const resultado = document.getElementById('resultado');
const ganador = document.getElementById('ganador');

// Función para agregar un nombre
function agregarNombre() {
    const nombre = nombreInput.value.trim();
    
    if (nombre !== '') {
        // Agregar el nombre al array
        nombres.push(nombre);
        
        // Crear elemento HTML para el nombre
        const nameItem = document.createElement('div');
        nameItem.className = 'name-item';
        
        // Agregar el texto del nombre
        const nameText = document.createElement('span');
        nameText.textContent = nombre;
        nameItem.appendChild(nameText);
        
        // Botón para eliminar
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'X';
        deleteBtn.onclick = function() {
            // Eliminar del array
            const index = nombres.indexOf(nombre);
            if (index > -1) {
                nombres.splice(index, 1);
            }
            
            // Eliminar del DOM
            nombresContainer.removeChild(nameItem);
            
            // Actualizar contador
            actualizarContador();
        };
        
        nameItem.appendChild(deleteBtn);
        
        // Agregar al contenedor
        nombresContainer.appendChild(nameItem);
        
        // Limpiar el input
        nombreInput.value = '';
        
        // Actualizar contador
        actualizarContador();
        
        // Dar foco al input
        nombreInput.focus();
    }
}

// Actualizar el contador de participantes
function actualizarContador() {
    contador.textContent = nombres.length;
}

// Función para realizar el sorteo
function realizarSorteo() {
    if (nombres.length > 0) {
        // Ocultar resultado anterior
        resultado.style.display = 'none';
        
        // Generar número aleatorio
        const randomIndex = Math.floor(Math.random() * nombres.length);
        
        // Obtener el nombre ganador
        const nombreGanador = nombres[randomIndex];
        
        // Mostrar el resultado
        ganador.textContent = nombreGanador;
        resultado.style.display = 'block';
        
        // Aplicar animación
        resultado.classList.remove('highlight');
        setTimeout(() => {
            resultado.classList.add('highlight');
        }, 10);
    } else {
        alert('Debes agregar al menos un nombre para realizar el sorteo');
    }
}

// Event listeners
agregarBtn.addEventListener('click', agregarNombre);

nombreInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarNombre();
    }
});

sortearBtn.addEventListener('click', realizarSorteo);