import { Aeronave } from './aeronave.js';
import { Aerovia} from './aerovia.js';
import { Piloto } from './piloto.js';
import { Sistema } from './sistema.js';
import { ServicoPilotos } from './servicoPilotos.js';
import { ServicoAerovias } from './servicoAerovias.js';
import { ServicoPlanos } from './servicoPlanos.js';

// Exemplo de memoization para evitar recalcular altitudes livres
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
};

// Currying aplicado para criar pilotos de maneira flexível
const criaPiloto = nome => matricula => habilitacaoAtiva => new Piloto(matricula, nome, habilitacaoAtiva);

// Teste com Jest
describe('Sistema de Gestão de Planos de Voo', () => {
  let servicoPilotos;
  let servicoAerovias;
  let servicoPlanos;
  let sistema;

  beforeEach(() => {
    servicoPilotos = new ServicoPilotos();
    servicoAerovias = new ServicoAerovias();
    servicoPlanos = new ServicoPlanos();
    sistema = new Sistema(servicoPilotos, servicoAerovias, servicoPlanos);
  });

  test('Deve aprovar um plano de voo', async () => {
    const piloto = criaPiloto('João')('P123')(true);
    servicoPilotos.adiciona(piloto);

    const aerovia = { id: 'A1', origem: 'POA', destino: 'SP', tamanho: 500 };
    servicoAerovias.adiciona(aerovia);

    const plano = {
      id: 'V001',
      matricPiloto: 'P123',
      idAerovia: 'A1',
      data: '2024-09-01',
      horario: '12:00',
      altitude: 30000,
      slots: [12, 13],
    };

    const resultado = await sistema.aprovarPlanoDeVoo(plano);
    expect(resultado).toBe('Plano de voo aprovado com o ID: V001');
  });

sistema = new Sistema();

test('Deve listar altitudes livres', () => {
  // Adicione a aerovia 'A1' ao sistema usando o serviço de aerovias
  const aeroviaA1 = new Aerovia('A1', [25000, 26000, 27000]);
  sistema.servicoAerovias.adiciona(aeroviaA1);

  // Chama o método listarAltitudesLivres
  const altitudes = sistema.listarAltitudesLivres('A1', '2024-09-01');

  // Faz a asserção
  expect(altitudes).toEqual([25000, 26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000]);
});
  

  test('Deve listar aeronaves disponíveis usando currying e reduce', () => {
    const aeronaves = [
      new Aeronave('A1', 850, 5000),
      new Aeronave('A2', 900, 4500),
    ];

    const aeronaveNomes = aeronaves.map(aeronave => aeronave.prefixo).reduce((acc, nome) => acc ? `${acc}, ${nome}` : nome, '');
    expect(aeronaveNomes).toBe('A1, A2');
  });

  test('Deve tratar erro ao aprovar plano de voo incompleto', async () => {
    const planoIncompleto = {
      id: 'V002',
      matricPiloto: '',
      idAerovia: 'A1',
      data: '',
      horario: '',
      altitude: 0,
    };

    const resultado = await sistema.aprovarPlanoDeVoo(planoIncompleto);
    expect(resultado).toBe('Erro ao aprovar o plano de voo: Plano de voo incompleto');
  });

  test('Deve testar plano de voo com Promise e async/await', async () => {
    const piloto = criaPiloto('Maria')('P124')(true);
    servicoPilotos.adiciona(piloto);

    const aerovia = { id: 'A2', origem: 'RJ', destino: 'SP', tamanho: 1000 };
    servicoAerovias.adiciona(aerovia);

    const plano = {
      id: 'V003',
      matricPiloto: 'P124',
      idAerovia: 'A2',
      data: '2024-09-01',
      horario: '14:00',
      altitude: 28000,
      slots: [14, 15],
    };

    const resultado = await sistema.aprovarPlanoDeVoo(plano);
    expect(resultado).toBe('Plano de voo aprovado com o ID: V003');
  });

  test('Deve aplicar currying para criar pilotos', () => {
    const piloto = criaPiloto('Pedro')('P125')(true);
    expect(piloto.nome).toBe('Pedro');
    expect(piloto.matricula).toBe('P125');
    expect(piloto.habilitacaoAtiva).toBe(true);
  });

  test('Deve lidar com métodos assíncronos via async/await', async () => {
    const planoAssincrono = async () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve('Plano aprovado'), 1000);
      });
    };

    const resultado = await planoAssincrono();
    expect(resultado).toBe('Plano aprovado');
  });

  test('Deve listar pilotos usando iteradores síncronos', () => {
    const pilotos = [
      criaPiloto('João')('P123')(true),
      criaPiloto('Maria')('P124')(true),
    ];

    function* pilotoIterator(pilotos) {
      for (let i = 0; i < pilotos.length; i++) {
        yield pilotos[i];
      }
    }

    const iterator = pilotoIterator(pilotos);
    expect(iterator.next().value.nome).toBe('João');
    expect(iterator.next().value.nome).toBe('Maria');
  });

  test('Deve listar pilotos usando iteradores assíncronos', async () => {
    const pilotos = [
      criaPiloto('João')('P123')(true),
      criaPiloto('Maria')('P124')(true),
    ];

    async function* pilotoAsyncIterator(pilotos) {
      for (let i = 0; i < pilotos.length; i++) {
        yield new Promise((resolve) => setTimeout(() => resolve(pilotos[i]), 500));
      }
    }

    const iterator = pilotoAsyncIterator(pilotos);
    const first = await iterator.next();
    const second = await iterator.next();

    expect(first.value.nome).toBe('João');
    expect(second.value.nome).toBe('Maria');
  });
});
 