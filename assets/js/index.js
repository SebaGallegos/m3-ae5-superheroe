/**
 * Ejercicio de crear un superheroe mediante un objeto
 * 
 * @author Sebastián Gallegos Frías
 */


/**
 * Función que obtiene una edad aleatoria entre 20 y 40 años.
 * 
 * @returns un número entre 20 y 40 inclusive.
 */
function getRandomAge() {
    return Math.floor(Math.random() * (40 - 20 + 1)) + 20;
}

/**
 * Objeto superheroe, con todos sus atributos
 * y método requeridos
 */
const superheroe = {
    nombre: "superhombre",
    edad: getRandomAge(),
    habilidades: ["Volar", "Fuerza"],
    activo: true,
    nivelMin: 10,
    nivelMax: 50,
    saludo: function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

superheroe.saludo();
console.log(`Mis habilidades son: ${superheroe.habilidades.join(", ")}`);
console.log(`Mi edad fue asignada aleatoriamente: ${superheroe.edad}`);
const nivelMaximo = Math.max(superheroe.nivelMin, superheroe.nivelMax);
console.log(`El máximo de mis niveles de energía es: ${nivelMaximo}`);
console.log(`Primera letra de mi nombre: ${superheroe.nombre[0].toUpperCase()}`);
// TODO: añadir "nombre como objeto" y "nombre primitivo" con respecto al nombre.
