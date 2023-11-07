"use strict";
class VehiculoTerrestre {
    acelerar() {
        console.log('Acelerando...');
    }
    frenar() {
        console.log('Frenando...');
    }
}
class Camion extends VehiculoTerrestre {
    constructor(capacidadCarga) {
        super();
        this.capacidadCarga = capacidadCarga;
    }
    cargar(cantidad) {
        console.log(`Camion: Cargando ${cantidad} toneladas...`);
    }
    descargar(cantidad) {
        console.log(`Camion: Descargando ${cantidad} toneladas...`);
    }
}
class Camioneta extends VehiculoTerrestre {
    constructor(capacidadPasajeros) {
        super();
        this.capacidadPasajeros = capacidadPasajeros;
    }
    llevarPasajeros(capacidad) {
        console.log(`Camioneta: Llevando ${capacidad} pasajeros...`);
    }
    bajarPasajeros(capacidad) {
        console.log(`Camioneta: Bajando ${capacidad} pasajeros...`);
    }
}
class Automovil extends VehiculoTerrestre {
   constructor(matricula) {
      super();
      this.matricula = matricula;
    }

    encender(marca) {
      console.log(`Automovil: Encendiendo el automóvil de marca ${marca}...`);
    }
    
    apagar() {
        console.log('Automovil: Apagando el automóvil...');
    }
}
class VehiculoMaritimo {
    navegar() {
        console.log('Navegando...');
    }
    zarpar() {
        console.log('Zarpando...');
    }
}
class Barco extends VehiculoMaritimo {
    constructor(capitan) {
        super();
        this.capitan = capitan;
    }
    navegarAltaMar() {
        console.log('Barco: Navegando en alta mar...');
    }
    regresarAPuerto() {
        console.log('Barco: Regresando al puerto...');
    }
}
class Yate extends VehiculoMaritimo {
    constructor(suite) {
        super();
        this.suite = suite;
    }
    paseoYate() {
        console.log('Yate: Iniciando paseo en el yate...');
    }
    finalizarPaseo() {
        console.log('Yate: Finalizando paseo en el yate...');
    }
}
class VehiculoAereo {
    despegar() {
        console.log('Despegando...');
    }
    aterrizar() {
        console.log('terrizando...');
    }
}
class Avion extends VehiculoAereo {
    constructor(altura) {
        super();
        this.altura = altura;
    }
    volarAlto() {
        console.log('Avion: Volando a gran altura...');
    }
    descender() {
        console.log('Avion: Descendiendo...');
    }
}
class Avioneta extends VehiculoAereo {
    constructor(pasajeros) {
        super();
        this.pasajeros = pasajeros;
    }
    iniciandoTour() {
        console.log('Avioneta: Iniciando un tour...');
    }
    finalizandoTour() {
        console.log('Avioneta: Finalizando un Tour...');
    }
}

const miCamion = new Camion(1);
miCamion.acelerar();
miCamion.frenar();
miCamion.cargar(5);
miCamion.descargar(5); 

const miCamioneta = new Camioneta(2);
miCamion.acelerar();
miCamion.frenar();
miCamioneta.llevarPasajeros(5);
miCamioneta.bajarPasajeros(4);

const miAutomovil = new Automovil(123);
miAutomovil.acelerar();
miAutomovil.frenar();
miAutomovil.encender('Audi');
miAutomovil.apagar();

const miBarco = new Barco(4);
miBarco.navegar();
miBarco.zarpar();
miBarco.navegarAltaMar();
miBarco.regresarAPuerto();

const miYate = new Yate(5);
miYate.navegar();
miYate.zarpar();
miYate.paseoYate();
miYate.finalizarPaseo();

const miAvion=new Avion(6);
miAvion.despegar();
miAvion.aterrizar();
miAvion.volarAlto();
miAvion.descender();

const miAvioneta = new Avioneta(7);
miAvioneta.despegar();
miAvioneta.aterrizar();
miAvioneta.iniciandoTour();
miAvioneta.finalizandoTour();
