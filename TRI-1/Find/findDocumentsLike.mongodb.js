const database = "BD3-AURORA-AULA"

const collection = "LIVRARIA"

use(database)

// "/" é necessário para a usabilidade do "like", o "i" para definir como case Insensitive

db[collection].find(
    {"descricao": /robô/i}
);