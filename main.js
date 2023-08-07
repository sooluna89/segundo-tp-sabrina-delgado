class Cliente {
    constructor(nombre, apellido, fechaNacimiento, paisOrigen, tipoImpositivo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.paisOrigen = paisOrigen;
        this.tipoImpositivo = tipoImpositivo;
    }
}

const clientesRegistrados = [];

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    const edad = hoy.getFullYear() - nacimiento.getFullYear();
    if (hoy < new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())) {
        return edad - 1;
    }
    return edad;
}

while (true) {
    const nombre = prompt("Ingrese el nombre del cliente (o 'salir' para terminar):");
    if (nombre.toLowerCase() === "salir") {
        break;
    }

    const apellido = prompt("Ingrese el apellido del cliente:");
    const fechaNacimiento = prompt("Ingrese la fecha de nacimiento del cliente (YYYY-MM-DD):");
    const paisOrigen = prompt("Ingrese el país de origen del cliente:");
    const tipoImpositivo = prompt("Ingrese el tipo impositivo del cliente (monotributista o responsable inscripto):");

    const nuevoCliente = new Cliente(nombre, apellido, fechaNacimiento, paisOrigen, tipoImpositivo);
    clientesRegistrados.push(nuevoCliente);
}

console.log("Clientes registrados:", clientesRegistrados);

const filtroPorPais = (pais) => clientesRegistrados.filter(cliente => cliente.paisOrigen === pais);
const filtroPorTipoImpositivo = (tipo) => clientesRegistrados.filter(cliente => cliente.tipoImpositivo === tipo);

const clientesArgentinos = filtroPorPais("Argentina");
const clientesMonotributistas = filtroPorTipoImpositivo("monotributista");

// Mostrar resultados filtrados en alerts
if (clientesArgentinos.length > 0) {
    const mensajeArgentinos = clientesArgentinos.map(cliente => `${cliente.nombre} ${cliente.apellido}`).join('\n');
    alert(`Clientes argentinos:\n${mensajeArgentinos}`);
} else {
    alert("No hay clientes argentinos.");
}

if (clientesMonotributistas.length > 0) {
    const mensajeMonotributistas = clientesMonotributistas.map(cliente => `${cliente.nombre} ${cliente.apellido}`).join('\n');
    alert(`Clientes monotributistas:\n${mensajeMonotributistas}`);
} else {
    alert("No hay clientes monotributistas.");
}

