# Meu Projeto Laravel

Este projeto é desenvolvido com o framework Laravel.

## 🚀 Como Iniciar o Projeto

Siga os passos abaixo para configurar e rodar o projeto localmente:

### 1. Configuração do Ambiente

1. Copie o arquivo `.env.example` e renomeie para `.env`:
   ```sh
   cp .env.example .env
   ```
2. Gere a chave da aplicação:
   ```sh
   php artisan key:generate
   ```
3. Configure a conexão com o banco de dados no arquivo `.env`.

### 2. Instalação das Dependências

Execute os seguintes comandos para instalar as dependências do projeto:

```sh
composer install
npm install
```

### 3. Executando o Projeto

Para iniciar o servidor backend:
```sh
php artisan serve
```

Para iniciar o build do frontend:
```sh
npm run dev
```

Agora o projeto estará rodando e acessível no navegador! 🎉

