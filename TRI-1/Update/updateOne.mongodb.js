const database = "BD3-AURORA-AULA"
const collection = "LIVRARIA"

use(database)

const identifier = {titulo: "As Cavernas de Aço Maneiras"}

const update = {$set: {titulo: "As Cavernas de Aço"}}


db[collection].updateOne(
    identifier,
    update
)