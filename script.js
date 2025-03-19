// Lista para guardar los nombres
var nombres = [];

// Cuando la página carga
window.onload = function() {
    // Obtener elementos del HTML
    var nombreInput = document.getElementById("nombreInput");
    var agregarBtn = document.getElementById("agregarBtn");
    var sortearBtn = document.getElementById("sortearBtn");
    var listaNombres = document.getElementById("listaNombres");
    var contador = document.getElementById("contador");
    var resultado = document.getElementById("resultado");
    var ganador = document.getElementById("ganador");
    
    // Función para agregar un nombre
    function agregarNombre() {
        var nombre = nombreInput.value.trim();
        
        if (nombre !== "") {
            // Agregar a la lista
            nombres.push(nombre);
            
            // Crear elemento para mostrar
            var div = document.createElement("div");
            div.className = "nombreItem";
            
            // Texto del nombre
            var textoNombre = document.createElement("span");
            textoNombre.textContent = nombre;
            div.appendChild(textoNombre);
            
            // Botón para eliminar
            var botonEliminar = document.createElement("button");
            botonEliminar.className = "botonEliminar";
            botonEliminar.textContent = "X";
            
            // Al hacer clic en eliminar
            botonEliminar.onclick = function() {
                // Buscar posición en el array
                var indice = nombres.indexOf(nombre);
                if (indice > -1) {
                    nombres.splice(indice, 1);
                }
                
                // Quitar de la lista visual
                listaNombres.removeChild(div);
                
                // Actualizar contador
                contador.textContent = nombres.length;
            };
            
            div.appendChild(botonEliminar);
            
            // Agregar a la lista visual
            listaNombres.appendChild(div);
            
            // Limpiar input
            nombreInput.value = "";
            
            // Actualizar contador
            contador.textContent = nombres.length;
        }
    }
    
    // Función para sortear
    function realizarSorteo() {
        if (nombres.length > 0) {
            // Elegir un número al azar
            var indiceGanador = Math.floor(Math.random() * nombres.length);
            
            // Obtener el nombre ganador
            var nombreGanador = nombres[indiceGanador];
            
            // Mostrar resultado
            ganador.textContent = nombreGanador;
            resultado.style.display = "block";
        } else {
            alert("Debes agregar al menos un nombre para sortear");
        }
    }
    
    // Botón agregar
    agregarBtn.addEventListener("click", agregarNombre);
    
    // Presionar Enter en el input
    nombreInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            agregarNombre();
        }
    });
    
    // Botón sortear
    sortearBtn.addEventListener("click", realizarSorteo);
};