const database = "BD3-AURORA-AULA"

const collection = "LIVRARIA"

use(database)

db[collection].find(
    {"titulo": "As Cavernas de Aço"}
);
