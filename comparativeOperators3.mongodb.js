const database = "BD3-AURORA-AULA"
const collection = "LIVRARIA"

use(database)

db[collection].find(
    {$and: [
        {valor: {$lte: 100}},
        {categoria: "Fantasia Heroica"}
    ]}
)