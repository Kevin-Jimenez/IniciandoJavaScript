class Trabajador extends Persona{
    constructor(nombre,edad,ciudad){
        super(nombre,edad,ciudad);
        this.trabaja = "SI";
    }

    info(){
        return `Me llamo ${this._nombre}, tengo ${this._edad} años y soy de ${this._ciudad} y ${this.trabaja} trabajo`;
    }
}
const persona2 = new Trabajador("Santi",19,"Medellin");
console.log(persona2.info());