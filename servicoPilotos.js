// Classe ServicoPilotos
// Gerencia uma coleção de pilotos, permitindo adicionar novos pilotos e recuperar pilotos existentes pelo número de matrícula.
export class ServicoPilotos {
    #pilotos;
  
    constructor() {
      this.#pilotos = [];
    }
  
    adiciona(piloto) {
      this.#pilotos.push(piloto);
    }
  
    recupera(matricula) {
      return this.#pilotos.find(piloto => piloto.matricula === matricula);
    }
  }
  