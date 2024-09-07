// Classe Aerovia
// Representa uma rota aérea entre dois pontos (origem e destino), com um identificador, tamanho, e uma lista de altitudes ocupadas.
// Contém métodos para verificar a disponibilidade de altitudes e marcar altitudes como ocupadas.
export class Aerovia {
    #id;
    #origem;
    #destino;
    #tamanho;
    #altitudesOcupadas;
  
    constructor(id, origem, destino, tamanho) {
      this.#id = id;
      this.#origem = origem;
      this.#destino = destino;
      this.#tamanho = tamanho;
      this.#altitudesOcupadas = {};
    }
  
    get id() {
      return this.#id;
    }
  
    get origem() {
      return this.#origem;
    }
  
    get destino() {
      return this.#destino;
    }
  
    get tamanho() {
      return this.#tamanho;
    }
  
    isOcupado(data, altitude) {
      return this.#altitudesOcupadas[data] && this.#altitudesOcupadas[data].includes(altitude);
    }
  
    ocupa(data, altitude) {
      if (!this.#altitudesOcupadas[data]) {
        this.#altitudesOcupadas[data] = [];
      }
      this.#altitudesOcupadas[data].push(altitude);
    }
  
    altitudesLivres(data) {
      const altitudes = [];
      for (let altitude = 25000; altitude <= 35000; altitude += 1000) {
        if (!this.isOcupado(data, altitude)) {
          altitudes.push(altitude);
        }
      }
      return altitudes;
    }
  
    toString() {
      return `Aerovia { id: ${this.#id}, origem: ${this.#origem}, destino: ${this.#destino}, tamanho: ${this.#tamanho} }`;
    }
  }
  