class Coche{
    //Atributos
    
    
    //constructor
    constructor(marca,color,motor){
        this.marca = marca;
        this.color = color;
        this.motor = motor;
        this._velocidad = 0;
    }

    //metodos
    get velocidad(){
        return this._velocidad;
    }
    set cambiaColor(color){
        this.color = color;
    }

    get viewdatos(){
        return `El coche ${this.marca} es de color ${this.color}`;//para el return siempre con comillas invertidad Alt+96
    }
    //metodos sin funcion
    arrancar(){
        console.log("Arrancando...");
    }
    parar(){
        console.log("Parando... ");
    }
    acelerar(){
        this._velocidad = this.velocidad + 10;
        console.log(`Velocidad actual = ${this._velocidad}`)
    }

    frenar(){
        if(this._velocidad > 0){
            this._velocidad = this._velocidad -10;
            console.log(`Velocidad actual = ${this._velocidad}`);
        }else{
            this._velocidad = 0;
            console.log(`Velocidad actual = ${this._velocidad}`)
        }
    }
}
const miCoche = new Coche('Ford','Verde','Electrico');
console.log(miCoche.viewdatos);
miCoche.arrancar();
miCoche.acelerar();
miCoche.acelerar();
miCoche.frenar();
miCoche.parar();