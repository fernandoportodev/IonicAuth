# IonicAuth

Um aplicativo de autenticação construído com Ionic e Angular. Este projeto permite aos usuários se registrarem, fazerem login e gerenciarem suas credenciais.

## Demonstração

Você pode ver o aplicativo em funcionamento [aqui](https://fernandoportodev.github.io/IonicAuth).

## Tecnologias Utilizadas

- **Ionic**: Framework para construção de aplicativos móveis.
- **Angular**: Plataforma para desenvolvimento de aplicações web.
- **Firebase**: Usado para autenticação e gerenciamento de usuários.
- **TypeScript**: Linguagem de programação utilizada.

## Funcionalidades

- **Registro de Usuário**: Os usuários podem se registrar usando um formulário.
- **Login**: Autenticação de usuários já registrados.
- **Redefinição de Senha**: Funcionalidade para redefinir a senha do usuário.
- **Landing Page**: Página inicial que apresenta o aplicativo.

## Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Ionic CLI](https://ionicframework.com/docs/intro/installation) (instale usando `npm install -g @ionic/cli`)
- [Angular CLI](https://angular.io/cli) (instale usando `npm install -g @angular/cli`)

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/fernandoportodev/IonicAuth.git
   cd IonicAuth

2. **Instale as dependências:**
   ```
   npm install
3. **Execute o aplicativo localmente:**
   ```
   ionic serve
## Estrutura do Projeto
```
IonicAuth/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   └── landing/
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
│   ├── assets/
│   └── index.html
├── docs/               # Build da aplicação para GitHub Pages
├── package.json
└── README.md
```
```markdown
## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
