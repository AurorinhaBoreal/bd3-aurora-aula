const database = "BD3-AURORA-AULA"
const collection = "LIVRARIA"

use(database)

db[collection].find(
    {$or: [
        {categoria: "J.R.R Tolkien"},
        {valor: {$lte: 100}}
    ]}
).sort({valor: 1})