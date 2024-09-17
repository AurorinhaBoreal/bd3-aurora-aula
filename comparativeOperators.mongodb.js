const database = "BD3-AURORA-AULA"
const collection = "LIVRARIA"

use(database)

// Busca livros com valores maior que 125
db[collection].find(
    {valor: {$gt:125}}
)

// Busca liros com valores menores que 100
db[collection].find(
    {valor: {$lt:100}}
)

// Busca livro com valor igual a 100
db[collection].find(
    {valor: {$eq:100}}
)