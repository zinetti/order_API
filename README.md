# 🚀 API de Pedidos com Node.js, Express e MongoDB

---

## 📋 Descrição

Esta API gerencia **clientes**, **pratos** e **pedidos** de um sistema de restaurante.  
Permite criar, ler, atualizar e deletar (CRUD) esses recursos, além de aplicar filtros avançados para buscas específicas.  

---

## 🛠️ Passo a Passo do Desenvolvimento

| Passo | Descrição | Duração Estimada |
|-------|-----------|------------------|
| 1     | Configuração inicial do projeto com Express, Mongoose e MongoDB | 30 min |
| 2     | CRUD básico para Clientes e Pratos (GET, POST, PUT, DELETE) | 30 min |
| 3     | CRUD para Pedidos com cálculo automático de total e populate() | 1h |
| 4     | Filtros avançados por status, faixa de total e categoria | 30 min |
| 5     | Criação de middlewares personalizados para tratamento centralizado de erros. Foram implementadas classes de erro customizadas (`ErroBase`, `BadRequest`, `InvalidData`, `NotFound`), que padronizam as respostas de erro da API. O middleware `errorHandler` foi configurado para interceptar erros de validação do Mongoose (`ValidationError`, `CastError`) e transformar em mensagens claras e estruturadas, com status HTTP apropriado e detalhes úteis para o cliente da API. | 1h               |
| 6     | Implementação de validações detalhadas nos Schemas do Mongoose para garantir integridade dos dados: campos obrigatórios, limites de tamanho, formatos de email, enumerações para status e categorias, validações numéricas para preços, quantidades e totais, além de mensagens de erro personalizadas para cada regra. | 30 min               |


---

## 🔧 Tecnologias Utilizadas

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
- ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat)
- ![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat&logo=nodemon&logoColor=white)

---

## 🚀 Como Rodar o Projeto

1. Clone o repositório:  
   ```bash
   git clone https://github.com/seuusuario/api-pedidos.git](https://github.com/zinetti/order_API.git
2. Instale as dependências:
   ```bash
   npm install
3. Configure as variáveis de ambiente no arquivo `.env`:
   ```bash
   PORT=3000
   DB_CONNECTION=sua_string_de_conexao_mongodb
4. Execute o servidor em modo desenvolvimento:
    ```bash
    npm run dev
5. Teste os endpoints usando Postman, Insomnia ou similar.
## 📡 Endpoints Principais
### Clientes
| Método | Rota            | Descrição             |
| ------ | --------------- | --------------------- |
| GET    | `/clientes`     | Listar todos clientes |
| GET    | `/clientes/:id` | Buscar cliente por ID |
| POST   | `/clientes`     | Criar novo cliente    |
| PUT    | `/clientes/:id` | Atualizar cliente     |
| DELETE | `/clientes/:id` | Deletar cliente       |

### Pratos
| Método | Rota                             | Descrição                   |
| ------ | -------------------------------- | --------------------------- |
| GET    | `/pratos`                        | Listar todos pratos         |
| GET    | `/pratos/busca`                  | Buscar pratos por categoria |
| GET    | `/pratos/:id`                    | Buscar prato por ID         |
| POST   | `/pratos`                        | Criar novo prato            |
| PUT    | `/pratos/:id`                    | Atualizar prato             |
| DELETE | `/pratos/:id`                    | Deletar prato               |

### Pedidos
| Método | Rota                                                      | Descrição                         |
| ------ | --------------------------------------------------------- | --------------------------------- |
| GET    | `/pedidos`                                                | Listar todos pedidos              |
| GET    | `/pedidos/busca`                                          | Buscar pedidos com filtros        |
| GET    | `/pedidos/:id`                                            | Buscar pedido por ID              |
| POST   | `/pedidos`                                                | Criar novo pedido (calcula total) |
| PUT    | `/pedidos/:id`                                            | Atualizar pedido (calcula total)  |
| DELETE | `/pedidos/:id`                                            | Deletar pedido                    |

---

## 🔍 Exemplos de Consulta com Filtros
| Método | Rota                                                      |
| ------ | --------------------------------------------------------- | 
| GET    | `/pedidos/busca?status=pendente&totalMin=50&totalMax=200` | 
| GET    | `/pratos/busca?categoria=Bebida` | 






 
