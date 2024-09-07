
# Sistema de Gestão de Planos de Voo

Este projeto é um sistema de gestão de planos de voo desenvolvido em JavaScript. Ele inclui testes automatizados para garantir a funcionalidade do sistema.

## Requisitos

- Node.js (incluindo npm)

## Instruções de Instalação

### Para Windows:

1. **Baixar o Node.js:**
   - Acesse o site oficial do Node.js em [nodejs.org](https://nodejs.org/).

2. **Instalar o Node.js:**
   - Execute o instalador e siga as instruções na tela. Certifique-se de marcar a opção para instalar as ferramentas necessárias.

3. **Verificar Instalação:**
   - Abra o Prompt de Comando e execute:
     ```bash
     node -v
     npm -v
     ```
   - Isso exibirá a versão instalada do Node.js e do npm.

### Para Linux (Ubuntu, Debian, etc.):

1. **Adicionar o Repositório NodeSource:**
   - No terminal, execute:
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
     ```

2. **Instalar o Node.js:**
   - Execute:
     ```bash
     sudo apt-get install -y nodejs
     ```

3. **Verificar Instalação:**
   - Execute:
     ```bash
     node -v
     npm -v
     ```

## Preparação do Ambiente

1. **Clonar o Repositório ou Copiar os Arquivos:**
   - Garanta que os arquivos do projeto estão na pasta do sistema.

2. **Instalar Dependências:**
   - No terminal ou prompt de comando, navegue até a pasta do projeto e execute:
     ```bash
     npm install
     ```

## Executando o Sistema

1. **Navegar até a Pasta do Projeto:**
   - No terminal, navegue até a pasta do projeto:
     ```bash
     cd SistemaDeVoo
     ```

2. **Executar o Script Principal:**
   - Execute o sistema com o comando:
     ```bash
     node sistema.js
     ```

## Rodando os Testes

Este projeto inclui testes automatizados para garantir que todos os componentes funcionem corretamente.

1. **Executar os Testes:**
   - Use o seguinte comando para rodar os testes:
     ```bash
     npm test
     ```

2. **Verificar os Resultados:**
   - Os resultados dos testes aparecerão no terminal, detalhando quais testes passaram ou falharam.

## Estrutura do Projeto

- `sistema.js`: Contém a lógica principal do sistema.
- `sistema.test.js`: Contém os testes unitários.
- `node_modules/`: Diretório de dependências.
- `package.json`: Contém as informações e dependências do projeto.
