// Classe ServicoPlanos
// Gerencia uma coleção de planos de voo, incluindo a validação e submissão de novos planos, além de recuperar planos existentes por identificador.
export class ServicoPlanos {
  #planos;

  constructor() {
    this.#planos = [];
  }

  consiste(plano) {
    console.log('Verificando plano de voo:', {
      id: plano.id,
      matricPiloto: plano.matricPiloto,
      idAerovia: plano.idAerovia,
      data: plano.data,
      horario: plano.horario,
      altitude: plano.altitude,
      slots: plano.slots
    });
    
    if (!plano.matricPiloto || !plano.idAerovia || !plano.data || !plano.horario || !plano.altitude || !plano.slots.length) {
      throw new Error('Plano de voo incompleto');
    }
  }
  

  submeter(plano) {
    this.consiste(plano);
    this.#planos.push(plano);
    return plano.id;
  }

  recupera(id) {
    return this.#planos.find(plano => plano.id === id);
  }
}
