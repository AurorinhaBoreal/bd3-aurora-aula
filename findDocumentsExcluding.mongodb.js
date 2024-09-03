const database = "BD3-AURORA-AULA"

const collection = "LIVRARIA"

use(database)

db[collection].find(
    {},
    {"_id": 0,"codigo": 0,"imagem": 0});