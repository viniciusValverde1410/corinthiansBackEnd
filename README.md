# ⚽ Corinthians BackEnd API

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma">
  <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite">
</div>

<br>

<div align="center">
  <h3>🏆 API RESTful do Sport Club Corinthians Paulista 🦅</h3>
  <p>Backend completo para gerenciamento de informações do Timão!</p>
</div>

---

## 📋 Sobre o Projeto

API desenvolvida para gerenciar informações sobre o **Sport Club Corinthians Paulista**, incluindo:

- 🏆 **Títulos** - Conquistas históricas do clube
- 👤 **Jogadores** - Elenco atual com informações detalhadas
- ⭐ **Lendas** - Ídolos e jogadores históricos

---

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web minimalista e flexível
- **Prisma ORM** - ORM moderno para Node.js e TypeScript
- **SQLite** - Banco de dados relacional leve
- **Nodemon** - Reinicialização automática do servidor
- **dotenv** - Gerenciamento de variáveis de ambiente

---

## 📁 Estrutura do Projeto

```
corinthiansBackEnd/
├── prisma/
│   ├── banco.db              # Banco de dados SQLite
│   ├── schema.prisma         # Schema do Prisma
│   ├── prisma.js             # Configuração do Prisma Client
│   └── migrations/           # Histórico de migrações
├── src/
│   ├── controllers/          # Lógica de controle
│   │   ├── legendController.js
│   │   ├── playerController.js
│   │   └── titleController.js
│   ├── models/               # Modelos de dados
│   │   ├── legendModel.js
│   │   ├── playerModel.js
│   │   └── titleModel.js
│   ├── routes/               # Definição de rotas
│   │   ├── index.routes.js
│   │   ├── legendRoutes.js
│   │   ├── playerRoutes.js
│   │   └── titleRoutes.js
│   └── server.js             # Arquivo principal do servidor
├── package.json
└── README.md
```

---

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/)
- Um editor de código (recomendamos o [VS Code](https://code.visualstudio.com/))

---

## 🔧 Instalação e Configuração

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/viniciusValverde1410/corinthiansBackEnd.git
cd corinthiansBackEnd
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Porta do servidor
PORT=4000

# URL do banco de dados
DATABASE_URL="file:./banco.db"

```

### 4️⃣ Execute as migrações do banco de dados

```bash
npx prisma migrate dev
```

---

## 🎮 Como Executar

### Modo Desenvolvimento (com auto-reload)

```bash
npm run dev
```

O servidor estará rodando em: **http://localhost:4000** 🦅

---

## 📡 Endpoints da API

### 🏆 Títulos

| Método | Endpoint      | Descrição                  |
| ------ | ------------- | -------------------------- |
| GET    | `/titles`     | Lista todos os títulos     |
| GET    | `/titles/:id` | Busca um título específico |
| POST   | `/titles`     | Cria um novo título        |
| PUT    | `/titles/:id` | Atualiza um título         |
| DELETE | `/titles/:id` | Remove um título           |

### 👤 Jogadores

| Método | Endpoint       | Descrição                   |
| ------ | -------------- | --------------------------- |
| GET    | `/players`     | Lista todos os jogadores    |
| GET    | `/players/:id` | Busca um jogador específico |
| POST   | `/players`     | Adiciona um novo jogador    |
| PUT    | `/players/:id` | Atualiza um jogador         |
| DELETE | `/players/:id` | Remove um jogador           |

### ⭐ Lendas

| Método | Endpoint       | Descrição                  |
| ------ | -------------- | -------------------------- |
| GET    | `/legends`     | Lista todas as lendas      |
| GET    | `/legends/:id` | Busca uma lenda específica |
| POST   | `/legends`     | Adiciona uma nova lenda    |
| PUT    | `/legends/:id` | Atualiza uma lenda         |
| DELETE | `/legends/:id` | Remove uma lenda           |

---

## 🗄️ Modelo de Dados

### Title (Títulos)

```json
{
  "id": 1,
  "name": "Campeonato Brasileiro",
  "imageUrl": "https://...",
  "description": "Descrição do título",
  "wonYear": "2011,2015,2017",
  "category": "Nacional"
}
```

### Player (Jogadores)

```json
{
  "id": 1,
  "name": "Nome do Jogador",
  "imageUrl": "https://...",
  "position": "Atacante",
  "number": 9,
  "nationality": "Brasileiro",
  "height": "1.85m",
  "age": 25,
  "birthDate": "1999-01-01"
}
```

### Legend (Lendas)

```json
{
  "id": 1,
  "name": "Nome da Lenda",
  "number": 9,
  "position": "Atacante",
  "imageUrl": "https://...",
  "shortText": "Breve descrição",
  "year": 2012
}
```

---

## 🛠️ Scripts Disponíveis

```bash
# Inicia o servidor em modo desenvolvimento
npm run dev

# Gera o Prisma Client
npx prisma generate

# Cria uma nova migration
npx prisma migrate dev --name nome_da_migration

# Reseta o banco de dados
npx prisma migrate reset
```

---

## 🧪 Testando a API

### Com cURL

```bash
# Listar todos os títulos
 http://localhost:4001/titles

# Buscar um jogador específico
curl http://localhost:4001/players/1
```

### Com ferramentas gráficas

Recomendamos usar:

- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/) (extensão do VS Code)

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## ⭐ Gostou do Projeto?

Se este projeto foi útil para você, considere dar uma **estrela** ⭐ no repositório!

Isso ajuda o projeto a ganhar visibilidade e incentiva o desenvolvimento contínuo.

---

## 👨‍💻 Autor

Desenvolvido com 🖤🤍 por **[Vinicius Valverde](https://github.com/viniciusValverde1410)**

---

<div align="center">
  <h3>🦅 Vai Corinthians! 🏆</h3>
  <p><i>"O Corinthians é do povo!"</i></p>
</div>
