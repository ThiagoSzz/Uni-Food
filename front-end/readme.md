# Uni-Food: Front-End

## Instalação e Execução

1. Certifique-se de ter a versão 18.x do [Node](https://nodejs.org/en/about/previous-releases) instalada.

    ```bash
    node -v
    ```

2. Clone o repositório:

    ```bash
    git clone https://github.com/ThiagoSzz/Uni-Food.git
    ```

### Executar o projeto

1. Navegue até o diretório do front-end:

    ```bash
    cd Uni-Food/front-end
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm run start
    ```

O front-end estará disponível em `http://localhost:3000`.

### Executar os testes - Jest

1. Navegue até o diretório do front-end:

    ```bash
    cd Uni-Food/front-end
    ```

2. Para executar os testes do Jest, utilize o seguinte comando:

    ```bash
    npm run test
    ```

### Executar os testes - Cypress

1. Verifique se o servidor local de desenvolvimento está rodando em localhost:3000.

2. Navegue até o diretório do front-end:

    ```bash
    cd Uni-Food/front-end
    ```

3. Utilize o seguinte comando:

    ```bash
    npx cypress run
    ```

Caso queira executar os testes do Cypress utilizando a interface do Cypress, siga os passos:

1. Verifique se o servidor local de desenvolvimento está rodando em localhost:3000.

2. Navegue até o diretório do front-end:

    ```bash
    cd Uni-Food/front-end
    ```

3. Utilize o seguinte comando:

    ```bash
    npx cypress open
    ```

4. Selecione o navegador `Electron` (ou `Google Chrome`, caso haja a opção) e navegue até a área de execução dos testes.

5. Selecione a spec que deseja testar.

6. Execute os testes.

### Executar o formatador de código - Prettier

1. Navegue até o diretório do front-end:

    ```bash
    cd Uni-Food/front-end
    ```
    
2. Para verificar se a formatação está correta, execute o comando:

    ```bash
    npm run format:check
    ```

3. Caso a formatação de algum arquivo esteja incorreta, execute o comando:

    ```bash
    npm run format
    ```

Após a execução do Prettier, deve ser exibida uma mensagem indicando que a formatação foi concluída.
