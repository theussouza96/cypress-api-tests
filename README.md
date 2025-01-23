# Testes de API com Cypress

Este repositório contém testes de API automatizados usando [Cypress](https://www.cypress.io/). A API que estamos testando é a [**ServeRest**](https://serverest.dev/), que é uma API REST gratuita que simula uma loja virtual.

## Estrutura do Repositório

```plaintext
.
├── cypress/
│   ├── fixtures/             # Arquivos de dados de exemplo para os testes
│   ├── tests/                # Testes de integração da API
│   │   ├── utils/            # Reúne funções reutilizáveis
│   ├── support/              # Comandos e configurações auxiliares
├── cypress.json              # Configurações do Cypress
└── README.md                 # Este arquivo
```
## Pré-requisitos
Antes de executar os testes, é necessário ter o seguinte instalado em sua máquina:
- Node.js (versão 20 ou superior)
- NPM ou Yarn
- Cypress instalado

## Instalação
Siga os passos abaixo para configurar o ambiente e executar os testes:

1. Clone este repositório:
```bash
git clone https://github.com/theussouza96/cypress-api-test-master.git
``` 
2. Instale as dependências do projeto:
```bash
npm install
```

## Executando os Testes
Para rodar os testes de API, execute o seguinte comando:

Usando o cypress no modo visual:
```bash
npx cypress open
```
Usando o cypress no modo headless:
```bash
npx cypress run
```
O Cypress será aberto automaticamente, e os testes de API serão executados.
