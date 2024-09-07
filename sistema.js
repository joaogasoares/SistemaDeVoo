// Classe principal do Sistema
// A classe Sistema integra e gerencia os serviços de Pilotos, Aerovias e Planos de Voo. 
// Ela fornece métodos para listar aerovias disponíveis, listar altitudes livres em uma aerovia específica,
// aprovar planos de voo e listar os detalhes dos planos aprovados.
// Essa classe funciona como o ponto central de integração dos diferentes componentes do sistema de gestão de planos de voo.

import { Piloto } from './piloto.js';
import { Aerovia } from './aerovia.js';
import { PlanoDeVoo } from './planoDeVoo.js';
import { ServicoPilotos } from './servicoPilotos.js';
import { ServicoAerovias } from './servicoAerovias.js';
import { ServicoPlanos } from './servicoPlanos.js';

export class Sistema {
  constructor() {
    // Inicializa os serviços que gerenciam pilotos, aerovias e planos de voo
    this.servicoPilotos = new ServicoPilotos();
    this.servicoAerovias = new ServicoAerovias();
    this.servicoPlanos = new ServicoPlanos();
  }

  // Lista as aerovias entre uma origem e um destino específicos
  listarAerovias(origem, destino) {
    const aerovias = this.servicoAerovias.recuperaPorOrigemDestino(origem, destino);
    if (aerovias.length > 0) {
      aerovias.forEach(aerovia => console.log(aerovia.toString()));
    } else {
        console.log('Nenhuma aerovia encontrada.');
    }
  }

  // Lista as altitudes livres para uma determinada aerovia em uma data específica
  listarAltitudesLivres(idAerovia, data) {
    const aerovia = this.servicoAerovias.recupera(idAerovia);
    if (aerovia) {
      const altitudes = aerovia.altitudesLivres(data);
      console.log(altitudes);
      return altitudes;
    } else {
      console.log('Aerovia não encontrada.');
      return [];
    }
  }
    

  // Aprova um plano de voo após validar suas informações
  aprovarPlanoDeVoo(plano) {
    try {
      if (!plano.matricPiloto || !plano.data || !plano.horario || plano.altitude === 0 || !plano.slots) {
        throw new Error('Plano de voo incompleto');
      }
      const idPlano = this.servicoPlanos.submeter(plano);
      console.log(`Plano de voo aprovado com o ID: ${idPlano}`);
      return `Plano de voo aprovado com o ID: ${idPlano}`;
    } catch (error) {
      console.error('Erro ao aprovar o plano de voo:', error.message);
      return `Erro ao aprovar o plano de voo: ${error.message}`;
    }
  }
  
  
  

  // Lista os detalhes de um plano de voo com base no ID
  listarPlano(id) {
    const plano = this.servicoPlanos.recupera(id);
    if (plano) {
      console.log(plano.toString());
    } else {
      console.log('Plano de voo não encontrado.');
    }
  }

  adicionarAerovia(aerovia) {
    this.servicoAerovias.adiciona(aerovia);
  }  

}



// Exemplo de uso do sistema
// Espera-se que ao adicionar pilotos e aerovias ao sistema, possamos:
// - Listar as aerovias entre as cidades informadas.
// - Listar altitudes livres disponíveis em uma aerovia para uma data específica.
// - Criar planos de voo válidos, aprová-los e listá-los com todos os detalhes após a aprovação.

// Criando uma instância do sistema
const sistema = new Sistema();

// Adicionando pilotos ao sistema
const piloto1 = new Piloto('P123', 'João Silva', true);
const piloto2 = new Piloto('P124', 'Maria Oliveira', true);
sistema.servicoPilotos.adiciona(piloto1);
sistema.servicoPilotos.adiciona(piloto2);


// Adicionando aerovias ao sistema
const aerovia1 = new Aerovia('A1', 'POA', 'RJ', 1000);
const aerovia2 = new Aerovia('A2', 'RJ', 'SP', 500);
sistema.servicoAerovias.adiciona(aerovia1);
sistema.servicoAerovias.adiciona(aerovia2);

// Listando aerovias entre POA e RJ
// Espera-se que o sistema liste as aerovias que conectam Porto Alegre (POA) ao Rio de Janeiro (RJ),
// exibindo os detalhes da aerovia, como origem, destino e tamanho.
sistema.listarAerovias('POA', 'RJ'); 

// Listando altitudes livres para uma aerovia em uma data específica
// Espera-se que o sistema liste as altitudes disponíveis na aerovia 'A1' em 30 de agosto de 2024.
sistema.listarAltitudesLivres('A1', '2024-08-30');

// Criando e aprovando planos de voo para diferentes aeronaves
// Ao criar os planos de voo, esperamos que o sistema valide e aprove os planos,
// atribuindo a eles um ID único e exibindo a confirmação de aprovação.
const plano1 = new PlanoDeVoo('V001', 'P123', 'A1', '2024-08-30', '15:00', 25000, [15, 16]);
const plano2 = new PlanoDeVoo('V002', 'P124', 'A2', '2024-08-30', '16:00', 28000, [16, 17]);

sistema.aprovarPlanoDeVoo(plano1);
sistema.aprovarPlanoDeVoo(plano2);

// Listando planos de voo
// Espera-se que o sistema liste os detalhes completos dos planos de voo aprovados,
// incluindo informações como matrícula do piloto, aerovia, data, horário e altitude.
sistema.listarPlano('V001');
sistema.listarPlano('V002');

// Criando e tentando aprovar um plano de voo com uma aeronave de carga fora do horário permitido
// Aqui esperamos que o sistema tente aprovar o plano de voo, e se for válido, ele será aprovado com sucesso.
const planoCarga = new PlanoDeVoo('V003', 'P124', 'A1', '2024-08-30', '15:00', 26000, [15, 16]);
sistema.aprovarPlanoDeVoo(planoCarga);

// Listando novamente as altitudes livres após aprovações
// Espera-se que o sistema liste as altitudes livres restantes na aerovia 'A1' em 30 de agosto de 2024.
sistema.listarAltitudesLivres('A1', '2024-08-30');
