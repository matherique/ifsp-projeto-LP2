# API dotnet

Formato das respostas da API
```json
{
  "dados": "dados retornados pela api",
  "mensagem": "mensagem de retorno",
}
```

## Lista de todas as tarefas
**Definição**

`GET /tarefa`

**Retorno**

- `200 OK` sucesso

```json
[
  {
    "id": 1,
    "titulo": "tarefa 1",
    "data": "2020-10-03T01:37:17.842Z",
    "status": false,
    "createdAt": "2020-10-03T02:37:17.842Z",
    "updateAt": "2020-10-03T02:37:17.842Z",
    "tags": [
      {
        "id": 1,
        "nome": "tag 1",
      },
      {
        "id": 2,
        "nome": "tag 2",
      }
    ]
  },
  {
    "id": 2,
    "titulo": "tarefa 2",
    "data": "2020-10-03T02:37:17.842Z",
    "status": false,
    "createdAt": "2020-10-03T02:37:17.842Z",
    "updateAt": "2020-10-03T02:37:17.842Z",
    "tags": [
      {
        "id": 1,
        "nome": "tag 1",
      },
      {
        "id": 3,
        "nome": "tag 2",
      }
    ]
  },
]
```

## Detalhes de uma tarefa
**Definição**

`GET /tarefa/:id`

**Retorno**

- `200 OK` sucesso
- `404 Not found` tarefa não encontrada

```json
{
  "id": 1,
  "titulo": "tarefa 1",
  "data": "2020-10-03T01:37:17.842Z",
  "status": false,
  "tags": [
    {
      "id": 1,
      "nome": "tag 1",
    },
    {
      "id": 2,
      "nome": "tag 2",
    }
  ],
  "createdAt": "2020-10-03T02:37:17.842Z",
  "updateAt": "2020-10-03T02:37:17.842Z",
}
```

## Cria uma tarefa
**Definição**

`POST /tarefa`

**Retorno**

- `201 Created` sucesso

**Argumentos**
 - `"titulo": string` titulo da tarefa
 - `"tags": int[]` lista de id das tarefas
 

## Atualizar uma tarefa
**Definição**

`PUT /tarefa/:id`

**Retorno**
- `200 Ok` sucesso

**Argumentos**
 - `"titulo": string` titulo da tarefa
 - `"tags": int[]` lista de id das tarefas

## Deletar uma tarefa
**Definição**

`DELETE /tarefa/:id`

**Retorno**
- `404 Not Found` tarefa não existe
- `204 No Content` sucesso

