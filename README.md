# UniFood - Plataforma de Avaliação de Restaurantes Universitários

## Sobre
A plataforma UniFood é uma aplicação que permite aos estudantes avaliar restaurantes universitários, compartilhando suas experiências sobre a qualidade da comida, atendimento, ambiente e outras considerações relevantes. A plataforma busca incentivar melhorias nos estabelecimentos e auxiliar os estudantes na escolha de onde fazer suas refeições com base em avaliações escritas por outros usuários, bem como auxiliar os administradores de restaurantes universitários como métrica da qualidade de seus estabelecimentos.

## Tecnologias

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![Jest](https://img.shields.io/badge/-Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Cypress](https://img.shields.io/badge/-Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![React Query](https://img.shields.io/badge/React%20Query-FF4154.svg?style=for-the-badge&logo=React-Query&logoColor=white)
![UI5 Web Components](https://img.shields.io/badge/-UI5%20Web%20Components-0C77B6?style=for-the-badge&logo=sap&logoColor=white)
![HTML](https://img.shields.io/badge/-HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JSS](https://img.shields.io/badge/JSS-F7DF1E.svg?style=for-the-badge&logo=JSS&logoColor=black)

![Java](https://img.shields.io/badge/Java-blue.svg?style=for-the-badge&logo=coffeescript)
![JUnit](https://img.shields.io/badge/JUnit5-25A162.svg?style=for-the-badge&logo=JUnit5&logoColor=white)
![JBoss](https://img.shields.io/badge/JBoss-WildFly-red.svg?style=for-the-badge&logo=apache)

## Instalação e Execução

### Front-End
#### Rodar o projeto

Certifique-se de ter a versão 18.18.2 do [Node](https://nodejs.org/en/about/previous-releases) instalada.

1. Clone o repositório:

    ```bash
    git clone https://github.com/ThiagoSzz/Uni-Food.git
    ```

2. Navegue até o diretório do front-end:

    ```bash
    cd Uni-Food/front-end
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento:

    ```bash
    npm run start
    ```

O front-end estará disponível em http://localhost:3000.

#### Rodar os testes - Jest

1. Navegue até o diretório do front-end:

    ```bash
    cd Uni-Food/front-end
    ```

2. Para executar os testes do Jest, utilize o seguinte comando:

    ```bash
    npm run test
    ```

#### Rodar os testes - Cypress

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

#### Rodar o formatador de código - Prettier

1. Navegue até o diretório do front-end:

    ```bash
    cd Uni-Food/front-end
    ```
    
2. Para verificar se a formatação está correta, execute o comando:

    ```bash
    npx prettier {src,cypress} -c
    ```

3. Caso a formatação de algum arquivo esteja incorreta, execute o comando:

    ```bash
    npx prettier {src,cypress} -w
    ```

Após a execução do Prettier, deve ser exibida uma mensagem indicando que a formatação foi concluída.

### Back-End

TBD

## Créditos

O projeto foi desenvolvido originalmente por:

- Thiago Haab
- Laura Speggiorin
- Rui Cardozo
