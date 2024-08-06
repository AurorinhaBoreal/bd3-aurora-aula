/* NOME DO BANCO DE DADOS */

const database = "BD3-AURORA-AULA"

/* NOME DO BANCO DA COLLECTION */
const collection = "LIVRARIA"

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database)

/* CRIAR UMA COLEÇÃO DE DADOS */
db.createCollection(collection)