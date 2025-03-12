const nombres = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido para el sorteo.");
        return;
    }
    
    nombres.push(nombre);
    
    // Crear un nuevo elemento de lista
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
    
    input.value = ""; // Limpiar el campo de entrada
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}
