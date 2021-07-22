class Persona{
    constructor(nombre,edad,ciudad){
        this._nombre = nombre;
        this._edad = edad;
        this._ciudad = ciudad;
    }

    get nombre(){
        return this._nombre;
    }

    get edad(){
        return this._edad;
    }
     get ciudad(){
         return this._ciudad;
     }
     info(){
         return `Me llamo ${this._nombre}, tengo ${this._edad} años y soy de ${this._ciudad}`;
     }

}
const Persona1 = new Persona('Kevin',18,'Bogota');
console.log(Persona1.info());