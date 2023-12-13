# Tipos de testes

Unitários = Testam um componente/funcionalidade de forma isolada.
Integração = Testa como um ou mais componentes/funcionalidades de comportam juntos(as).
E2E = Simula o que um usuário vai fazer na nossa aplicação diariamente.

# Banco de dados

Unitários = Não
Integração = Talvez
E2E = Sim (não só Banco de Dados, QUALQUER CONEXÃO EXTERNA INCLUSIVE APIs)

# Ex.: E-commerce

- Realizar compra

1. Cadastra usuário no banco
2. Cadastra endereço no banco
3. Se comunica com **gateway de pagamento** para enviar a transação
    - Cielo <=> gateway <=> APP
4. Cadastra a compra no banco

Unitário: Não tem banco de dados e nem API do Gateway
E2E: Não é aconselhável ter mocks ou dados fakes

Gateway de pagamento: Conta de teste (API Key de Teste)

# Repository Pattern / Data Mapper Pattern
    - Abstração da camada de comunicação com o banco de dados em repositórios

# Command/Query Segregation
Escrita/Update/Delete SEM RETORNO (Comandos)
Query trás o retorno

# Como rodar o programa

1. Instale as dependências (ver seção de dependências)
2. Comandos:
    - ```npx tsc --init``` (inicializar o typescript)
    - ```npx jest --init``` (inicializar o jest)
3. Altere o target, em "tsconfig.json" para 2018 ou 2020
4. Copie o "transform" da [documentação do Jest](https://swc.rs/docs/usage/jest), vá em "jest.config.ts", procure o "transform", descomente e cole o:
    ```
    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest",
    },
    ```
5. Inicie o prisma com 
    - ```npx prisma init ```