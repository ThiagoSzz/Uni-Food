# Uni-Food: Back-End

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

1. Certifique-se de ter o arquivo `.env` na raiz do diretório `back-end`. O arquivo deve possuir os campos assim como descrito no arquivo `env-template`.

2. Navegue até o diretório do back-end:

    ```bash
    cd Uni-Food/back-end
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento:

    ```bash
    npm run start
    ```

O back-end estará disponível em `http://localhost:{PORT}`, onde PORT é o valor da porta que foi definido no arquivo `.env`.

### Executar os testes - Jest

1. Navegue até o diretório do back-end:

    ```bash
    cd Uni-Food/back-end
    ```

2. Para executar os testes do Jest, utilize o seguinte comando:

    ```bash
    npm run test
    ```

### Executar o formatador de código - Prettier

1. Navegue até o diretório do back-end:

    ```bash
    cd Uni-Food/back-end
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
