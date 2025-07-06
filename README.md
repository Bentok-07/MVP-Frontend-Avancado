# MVP – Frontend Avançado (PUC-Rio)

Esta aplicação foi desenvolvida como entrega final da disciplina Desenvolvimento Frontend Avançado do curso de pós-graduação em Full Stack Development – PUC-Rio.

## Objetivo

Simular uma loja virtual de variedades, com foco em uma jornada de compra completa:

- Explorar produtos por categoria
- Visualizar detalhes
- Adicionar ao carrinho
- Finalizar a compra com um formulário validado

A aplicação foi construída com React, utilizando componentização, consumo de API pública, localStorage, React Router, feedbacks visuais e layout responsivo.

## Componentes Reutilizáveis

A aplicação utiliza diversos componentes reutilizáveis, entre eles:

- CardComponente: utilizado em múltiplas páginas
- Breadcrumb: navegação contextual
- CustomButton: botão estilizado
- Loader, ModalConfirmacao, Header, Footer, etc.

## Páginas Principais

1. Componentes (página inicial de produtos)
2. Carrinho
3. Finalizar Compra (com formulário validado, uso de localStorage e exibição dos dados)

## API Externa

- Nome: DummyJSON (https://dummyjson.com)
- Licença: Pública e gratuita
- API Key: Não requerida
- Rotas utilizadas:
  - /products
  - /products/search?q=
  - /products/{id}

Os dados são exibidos diretamente na interface, com mensagens amigáveis em caso de erro ou ausência de resultados.

## Tecnologias Utilizadas

- React
- React Router
- JavaScript (ES6+)
- Hooks: useState, useEffect, useNavigate, useParams, useLocation
- Fetch API
- localStorage
- CSS Modules + Bootstrap
- Layout responsivo

## Funcionalidades Extras de Usabilidade

- Feedbacks visuais: mensagens de sucesso, erro, loaders
- Mensagens condicionais (ex: “nenhum item encontrado”)
- Modal de confirmação de ação
- Interface adaptada para diferentes tamanhos de tela (responsiva)

## Demonstração em Vídeo

Link do vídeo de entrega:  
https://youtu.be/Mc5ufd2dxk0

## Repositório do Projeto

https://github.com/Bentok-07/MVP-Frontend-Avancado

## Como executar localmente

1. Clone o repositório:

git clone https://github.com/Bentok-07/MVP-Frontend-Avancado.git
cd MVP-Frontend-Avancado

2. Instale as dependências:

npm install

3. Inicie a aplicação:

npm run dev

Abra o navegador em: http://localhost:5173

## Desenvolvedor

Karsten Bento  
Pós-graduação em Full Stack Development – PUC-Rio  
Professores: Dieinison Braga e Marisa Silva
