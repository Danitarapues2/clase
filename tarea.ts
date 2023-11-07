interface IVehiculoTerrestre {
  acelerar(): void;
  frenar(): void;
}

interface IVehiculoMaritimo {
  navegar(): void;
  zarpar(): void;
}

interface IVehiculoAereo {
  despegar(): void; 
  aterrizar(): void;
}

class VehiculoTerrestre implements IVehiculoTerrestre {
  acelerar() {
    console.log('Acelerando...');
  }
  
  frenar() {
    console.log('Frenando...');
  }
}

class Camion extends VehiculoTerrestre {
  capacidadCarga: number;

  constructor(capacidadCarga: number) {
    super();
    this.capacidadCarga = capacidadCarga;
  }

  cargar(cantidad: number) {
    console.log(`Cargando ${cantidad} toneladas de carga...`); 
  }
  
  descargar(cantidad: number) {
    console.log(`Descargando ${cantidad} toneladas de carga...`);
  }
}

class Camioneta extends VehiculoTerrestre {
  capacidadPasajeros: number;

  constructor(capacidadPasajeros: number) {
    super();
    this.capacidadPasajeros = capacidadPasajeros;
  }

  llevarPasajeros(capacidad: number) {
    console.log(`Llevando ${capacidad} pasajeros...`);
  }
  
  bajarPasajeros(capacidad: number) {
    console.log(`Bajando ${capacidad} pasajeros...`); 
  }
}

class Automovil extends VehiculoTerrestre {
  matricula: number;

  constructor(matricula: number) {
    super();
    this.matricula = matricula;
  }

  encender(marca:string) {
    console.log(`Automovil: Encendiendo el automóvil de marca ${marca}...`);
  }
  apagar() {
    console.log('Automóvil: Apagando el automóvil ...');
  }
}

class VehiculoMaritimo implements IVehiculoMaritimo {
  navegar() {
    console.log('Navegando...');
  }

  zarpar() {
    console.log('Zarpando...');
  }
}

class Barco extends VehiculoMaritimo {
  capitan: number;

  constructor(capitan: number) {
    super();
    this.capitan = capitan;
  }

  navegarAltaMar() {
    console.log('Navegando en alta mar...');
  }
  
  regresarAPuerto() {
    console.log('Regresando al puerto...');
  }
}

class Yate extends VehiculoMaritimo {
  suite: number;

  constructor(suite: number) {
    super();
    this.suite = suite;
  }

  paseoYate() {
    console.log('Iniciando paseo en el yate...');
  }
  
  finalizarPaseo() {
    console.log('Finalizando paseo en el yate...');
  }
}

class VehiculoAereo implements IVehiculoAereo {
  despegar() {
    console.log('Despegando...');
  }

  aterrizar() {
    console.log('Aterrizando...'); 
  }
}

class Avion extends VehiculoAereo {
  altura: number;

  constructor(altura: number) {
    super();
    this.altura = altura;
  }

  volarAlto() {
    console.log('Volando a gran altura...');
  }
  
  descender() {
    console.log('Descendiendo...');
  }
}

class Avioneta extends VehiculoAereo {
  pasajeros: number;

  constructor(pasajeros: number) {
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