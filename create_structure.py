import os

# Caminho base do projeto
base_path = r"cypressAmbevTech"

# Estrutura de pastas e arquivos
structure = {
    "cypress": {
        "fixtures": {},  # Pasta vazia
        "integration": {
            "login": {
                "CT001-loginSucesso.spec.js": "// Arquivo de teste de login"
            },
            "produto": {
                "CT002-cadastrarProduto.spec.js": "// Arquivo de teste de produto"
            },
            "relatorios": {
                "CT005-gerarRelatorios.spec.js": "// Arquivo de teste de relatórios"
            },
        },
        "plugins": {
            "index.js": "// Configurações e extensões do Cypress"
        },
        "support": {
            "commands.js": "// Definição de comandos customizados",
            "index.js": "// Configurações globais"
        },
    },
    "cypress.config.js": "// Configuração do Cypress",
    "package.json": "{\n  \"name\": \"cypressAmbevTech\",\n  \"version\": \"1.0.0\"\n}",
    "README.md": "# Cypress AmbevTech\n\nEste projeto contém testes automatizados utilizando o Cypress."
}

# Função para criar a estrutura
def create_structure(base, structure):
    for name, content in structure.items():
        path = os.path.join(base, name)
        if isinstance(content, dict):  # É uma pasta
            os.makedirs(path, exist_ok=True)
            create_structure(path, content)
        else:  # É um arquivo
            with open(path, "w", encoding="utf-8") as f:
                f.write(content)

# Criar a estrutura
create_structure(base_path, structure)

print(f"Estrutura criada em: {os.path.abspath(base_path)}")