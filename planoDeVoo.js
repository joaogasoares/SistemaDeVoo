// Classe PlanoDeVoo
// Representa um plano de voo que inclui informações como piloto, aerovia, data, horário, altitude, slots de tempo, e se foi cancelado.
// Possui métodos para acessar essas informações e formatar a exibição dos dados do plano de voo.
export class PlanoDeVoo {
  #id;
  #matricPiloto;
  #idAerovia;
  #data;
  #horario;
  #altitude;
  #slots;
  #cancelado;

  constructor(id, matricPiloto, idAerovia, data, horario, altitude, slots) {
    console.log('Criando PlanoDeVoo com:', id, matricPiloto, idAerovia, data, horario, altitude, slots);
    this.#id = id;
    this.#matricPiloto = matricPiloto;
    this.#idAerovia = idAerovia;
    this.#data = data;
    this.#horario = horario;
    this.#altitude = altitude;
    this.#slots = slots;
    this.#cancelado = false;
  }

    // Getters para acessar as propriedades privadas
    get id() {
      return this.#id;
    }
  
    get matricPiloto() {
      return this.#matricPiloto;
    }
  
    get idAerovia() {
      return this.#idAerovia;
    }
  
    get data() {
      return this.#data;
    }
  
    get horario() {
      return this.#horario;
    }
  
    get altitude() {
      return this.#altitude;
    }
  
    get slots() {
      return this.#slots;
    }

  toString() {
    return `Plano de Voo ID: ${this.#id}\n` +
           `Piloto Matrícula: ${this.#matricPiloto}\n` +
           `Aerovia ID: ${this.#idAerovia}\n` +
           `Data: ${this.#data}\n` +
           `Horário: ${this.#horario}\n` +
           `Altitude: ${this.#altitude}\n` +
           `Slots: ${this.#slots.join(', ')}\n` +
           `Cancelado: ${this.#cancelado ? 'Sim' : 'Não'}`;
  }
}
