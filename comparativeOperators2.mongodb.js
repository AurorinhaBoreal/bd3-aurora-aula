const database = "BD3-AURORA-AULA"
const collection = "LIVRARIA"

use(database)

db[collection].find(
    {valor: {$gte:100, $lt:150}}
)