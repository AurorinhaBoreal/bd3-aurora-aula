const database = "BD3-AURORA-AULA"
const collection = "LIVRARIA"

use(database)

db[collection].deleteOne({
    titulo: "Os Robôs da Alvorada"
})