# # Simulador de Compra de Imóvel aMORA Front-End

Esse projeto se trata de um teste técnico de nivel junior. Você precisa construir um layout para a simulação de compra de imóvel, conforme o modelo aMORA.

### Acesse o backend do projeto clicando [aqui](https://github.com/Renchs/simulador-web-amora-backend)

## Funcionalidades

Simular os valores de uma compra de imóvel.

## Stack utilizada

**Front-end:** React, Tailwind, Typescript

## Screenshots

![Image](https://github.com/user-attachments/assets/224faa11-42f0-4642-bcfe-d7e1d2324513)

# Rodando localmente

#### Observação Este projeto possui duas branches principais:
- **master**: Consome uma API externa. Para rodar localmente essa branch, é necessário fornecer a URL da API do back-end.

- **deploy**: Funciona de forma independente, sem depender de uma API externa.


Antes de iniciar o projeto na master, retire o 'example' do arquivo .env na raiz e adicione a variável:

```bash
  VITE_API_URL= 
```

Clone o projeto

```bash
  git clone https://github.com/Renchs/simulador-web-amora-frontend.git
```

Entre no diretório do projeto
```bash
  cd https://github.com/Renchs/simulador-web-amora-frontend.git
```

Instale as dependências

```bash
  npm install
```



Inicie o projeto

```bash
  npm run dev
```
