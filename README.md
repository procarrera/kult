### PROJETO KULT

https://kult-web.vercel.br

*Requisitos*

[x] Uma página com uma caixa de texto onde você pode publicar coisas e há uma lista de publicações que você fez. Junto junto com sua foto e nome. Como no Facebook ou Reddit ou Chans.

[x] Uma segunda página onde você pode alterar seu nome e foto de perfil. Essas informações também devem ser atualizadas nos posts que foram feitos antes da alteração.

*Estrategia Global*
- Estrutura performatica e escalavel tanto para Backend quanto para Frontend

*STACK*
- NextJS, NodeJS, Express, MongoDb

*Backend*
[x] No Backend feito com NodeJS, Express e outros modulos. Foram criados os Endpoints da API permitindo criacao e listagem de usuario e posts.
[x] Banco de dados MongoDB, permite escalonamento com performace. Mesmo sendo nao relacional, ainda e possivel fazer relacionamento.
Neste projeto foi feito relacionamento entre Posts e Usuarios.
[x] Os arquivos sao salvos na AWS S3 atraves do Multer-S3. Tecnologia mais moderna no armazenamento e transmissao de arquivos, fornecendo performace e escalonabilidade.

*Frontend*
[x] React + NextJS, poderosas ferramentas utilizando o que ha de melhor do Client Side e SSR.
[x] useSWR para chamadas de API com o melhor desempenho possivel: stale-while-revalidate (mais detalhes em https://swr.vercel.app/)
[x] TailWindCSS para construcao rapida e padronizada de Design (mais detalhes em https://tailwindcss.com/)
[x] Design responsivo e intuitivo


