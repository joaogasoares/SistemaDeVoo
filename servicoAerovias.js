// Classe ServicoAerovias
// Gerencia uma coleção de aerovias, permitindo adicionar novas aerovias e recuperar aerovias existentes por identificador ou por origem e destino.
export class ServicoAerovias {
    #aerovias;
  
    constructor() {
      this.#aerovias = [];
    }
  
    adiciona(aerovia) {
      this.#aerovias.push(aerovia);
    }
  
    recupera(id) {
      return this.#aerovias.find(aerovia => aerovia.id === id);
    }
  
    recuperaPorOrigemDestino(origem, destino) {
      return this.#aerovias.filter(aerovia => aerovia.origem === origem && aerovia.destino === destino);
    }
  }
  