// Decir al usuario si es mayor o menor de edad al ingresar su edad
let edad = prompt("Ingrese su edad",0);
if (edad>=18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Determinar si hay en stock un artículo en una tienda
let articulo = prompt("Ingrese el nombre del artículo");
switch(articulo) {
	case "Pan":
		console.log("El artículo está disponible en la tienda");
		break;
	case "Galletas":
		console.log("El artículo está disponible en la tienda");
		break;
    case "Leche":
		console.log("El artículo está disponible en la tienda");
		break;
    case "Agua":
		console.log("El artículo está disponible en la tienda");
		break;
    case "Tortillas":
        console.log("El artículo está disponible en la tienda");
        break;
    case "Refresco":
        console.log("El artículo está disponible en la tienda");
        break;
	default:
		console.log("Este artículo no se encuentra disponible en la tienda");
}
