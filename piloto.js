// Classe Piloto
// Representa um piloto no sistema, contendo informações sobre matrícula, nome e se a habilitação está ativa.
// Possui métodos para acessar essas informações de forma segura através de getters.
export class Piloto {
    #matricula;
    #nome;
    #habilitacaoAtiva;
  
    constructor(matricula, nome, habilitacaoAtiva) {
        this.#matricula = matricula;
        this.#nome = nome;
        this.#habilitacaoAtiva = habilitacaoAtiva;
    }
  
    get matricula() {
        return this.#matricula;
    }
  
    get nome() {
        return this.#nome;
    }
  
    get habilitacaoAtiva() {
        return this.#habilitacaoAtiva;
    }
  }
  