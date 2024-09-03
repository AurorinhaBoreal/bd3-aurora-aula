const database = "BD3-AURORA-AULA"
const collection = "LIVRARIA"

use(database)

const identifier = {autor: "Isaac Asimov"}

const update = {$set: {autor: "Isaak Yudovick Ozimov"}}


db[collection].updateMany(
    identifier,
    update
)