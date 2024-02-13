# Changelog

Este documento serve como um registro das alterações realizadas na aplicação ao longo do tempo.

## Novas funcionalidades

### (fev/24) [Exibir erro ao obter avaliações](https://github.com/ThiagoSzz/Uni-Food/pull/18)
- O usuário é informado de que houve um erro ao obter as avaliações do Back-End
### (fev/24) [Realçar o resultado da pesquisa](https://github.com/ThiagoSzz/Uni-Food/pull/18)
- O resultado da pesquisa feita na barra de pesquisa é ilustrado nos cards de avaliações e médias
### (fev/24) [Visualizar mais contexto sobre a avaliação](https://github.com/ThiagoSzz/Uni-Food/pull/18)
- Foi adicionado um botão com tooltip para visualizar informações relativas ao nome do curso do avaliador (caso seja estudante), preferência alimentar do avaliador e período da refeição em que o avaliador criou a avaliação
### (fev/24) [Enviar criação de avaliação ao Back-End](https://github.com/ThiagoSzz/Uni-Food/pull/16)
### (fev/24) [Obter avaliações do Back-End](https://github.com/ThiagoSzz/Uni-Food/pull/16)
### (fev/24) [Feedback visual das ações do usuário](https://github.com/ThiagoSzz/Uni-Food/pull/16)
- Foram adicionadas MessageStrips para indicar ao usuário o resultado de ações relevantes feitas por ele: criação de avaliação (criada com sucesso, erro ao criar ou informação de avaliação sendo criada), validação dos campos da avaliação (erro), pesquisa não filtrou avaliações ou médias (informação)
- Foi adicionado um Dialog de confirmação caso o usuário tente sair da página de criação de avaliação tendo preenchido algum campo
### (fev/24) [Criar a base do Back-End](https://github.com/ThiagoSzz/Uni-Food/pull/8)
### (jan/24) [Filtragem de avaliações](https://github.com/ThiagoSzz/Uni-Food/pull/13)
- É possível filtrar avaliações pelo nome de um curso, preferência alimentar (onívoro, vegetariano e vegano) e período da refeição (café da manhã, almoço e jantar)
### (jan/24) [Pesquisa de avaliações e médias](https://github.com/ThiagoSzz/Uni-Food/pull/13)
- É possível pesquisar avaliações e médias por código do RU, sigla da universidade, cidade, comentário e tags
### (jan/24) [Adicionar página de criação de avaliações](https://github.com/ThiagoSzz/Uni-Food/pull/13)
### (jan/24) [Adicionar página de visualização de avaliações e médias](https://github.com/ThiagoSzz/Uni-Food/pull/13)
### (jan/24) [Rework da UI](https://github.com/ThiagoSzz/Uni-Food/pull/10)
- O rework levou em conta os feedbacks advindos dos testes de usabilidade feitos com usuários reais a partir dos mockups iniciais
- A página principal ficou mais objetiva
- Algumas tags foram modificadas e outras foram removidas
### (nov/23) [Criar a base do Front-End](https://github.com/ThiagoSzz/Uni-Food/pull/7)

## Melhorias e correções

### (fev/24) [Melhorar o ReadMe](https://github.com/ThiagoSzz/Uni-Food/pull/19)
### (fev/24) [Scrollbar invisível em alguns navegadores](https://github.com/ThiagoSzz/Uni-Food/pull/18)
### (fev/24) [Adicionar tooltips nos botões da Shellbar](https://github.com/ThiagoSzz/Uni-Food/pull/18)
- Foram adicionadas tooltips para exibir a ação que é feita ao clicar nos botões da Shellbar
### (fev/24) [Alteração do componente de seleção de tags](https://github.com/ThiagoSzz/Uni-Food/pull/18)
- O componente de seleção de tags (Dialog) foi substituído por um MultiComboBox
- Algumas tags foram modificadas e outras foram removidas
### (fev/24) [Caching da lista de avaliações](https://github.com/ThiagoSzz/Uni-Food/pull/17)
- Foi adicionado caching da request de obter a lista de avaliações no Back-End
### (jan/24) [Exibir carregamento das avaliações](https://github.com/ThiagoSzz/Uni-Food/pull/13)
- Um BusyIndicator é exibido enquanto a lista de avaliações não é carregada do Back-End