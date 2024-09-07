// Classe Aeronave
// Representa uma aeronave com atributos básicos como prefixo, velocidade de cruzeiro e autonomia.
// Esta classe serve como base para diferentes tipos de aeronaves.
export class Aeronave {
    #prefixo;
    #velocidadeCruzeiro;
    #autonomia;
  
    constructor(prefixo, velocidadeCruzeiro, autonomia) {
      this.#prefixo = prefixo;
      this.#velocidadeCruzeiro = velocidadeCruzeiro;
      this.#autonomia = autonomia;
    }
  
    get prefixo() {
      return this.#prefixo;
    }
  
    get velocidadeCruzeiro() {
      return this.#velocidadeCruzeiro;
    }
  
    get autonomia() {
      return this.#autonomia;
    }
  }
  
  export class AeronaveParticular extends Aeronave {
    #respManutencao;
  
    constructor(prefixo, velocidadeCruzeiro, autonomia, respManutencao) {
      super(prefixo, velocidadeCruzeiro, autonomia);
      this.#respManutencao = respManutencao;
    }
  
    get respManutencao() {
      return this.#respManutencao;
    }
  }
  
  export class AeronaveComercial extends Aeronave {
    #nomeCia;
  
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCia) {
      super(prefixo, velocidadeCruzeiro, autonomia);
      this.#nomeCia = nomeCia;
    }
  
    get nomeCia() {
      return this.#nomeCia;
    }
  }
  
  export class AeronavePassageiros extends AeronaveComercial {
    #maxPassageiros;
  
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCia, maxPassageiros) {
      super(prefixo, velocidadeCruzeiro, autonomia, nomeCia);
      this.#maxPassageiros = maxPassageiros;
    }
  
    get maxPassageiros() {
      return this.#maxPassageiros;
    }
  }
  
  export class AeronaveCarga extends AeronaveComercial {
    #pesoMax;
  
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCia, pesoMax) {
      super(prefixo, velocidadeCruzeiro, autonomia, nomeCia);
      this.#pesoMax = pesoMax;
    }
  
    get pesoMax() {
      return this.#pesoMax;
    }
  }
  