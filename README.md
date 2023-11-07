# CI/CD com Github Actions

Este é um repositório que foi criado para aprender a implementar CI/CD utilizando Github Actions. 

## Sobre o Projeto

O projeto contém um template do Vite, um botão que conta cliques desenvolvido com HTML, CSS e JavaScript, além de testes implementados com Vite para validar o funcionamento da aplicação e serem utilizados nas actions.

## Github Actions

O repositório tem duas actions: `development.yaml` e `production.yaml`. Ambas executam os testes automatizados(CI) e, em caso de sucesso, fazem o deploy da aplicação (CD), seja o deploy de preview ou o deploy de produção.

- **Deploy de Produção**: [https://github-actions-ci-cd-one.vercel.app](https://github-actions-ci-cd-one.vercel.app)
- **Deploy de Preview**: [https://github-actions-ci-cd-santanajoao.vercel.app](https://github-actions-ci-cd-santanajoao.vercel.app)

## Branches

- A branch `main` é protegida e não permite pushs diretos, apenas pull requests, rodando a action a cada pull request.
- A branch `development` permite pushs e roda a action a cada push, mas só pode ser mergeada na `main` com um pull request.

## Autenticação

Para fazer o deploy autenticado, foi definido um secret do repositório que armazena o token.

## Como Testar

### Obtenha o código do projeto

1. Faça um fork do projeto.

### Conectando com sua conta Vercel

2. Crie sua conta ou entre em sua conta da Vercel
3. Navege para esse link: [https://vercel.com/account/tokens](https://vercel.com/account/tokens)
4. Crie um token e copie

### Conectando com o GitHub

5. Nas configurações do repositório > Secrets and Variables > Actions e crie uma secret com o nome VERCEL_TOKEN e adicione seu token

### Acionando a action de desenvolvimento

6. Vá para a branch de desenvolvimento: `git checkout development`.
7. Faça modificações e envie as alterações para o repositório `git add..., git commit..., git push...`.
8. Automaticamente a action de desenvolvimento será executada.

### Acionando a action de produção

9. Crie um pull request para a branch main
10. Automaticamente a action será executada e em caso de sucesso você poderá fazer o merge

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.