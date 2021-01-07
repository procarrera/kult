### KULT PROJECT

Available: https://kult-web.vercel.app

*What is the chalange?*
- Create a new posts
- Homepage with all posts (Feed)
- Possibility to change Avatar picture and update it for all posts

*Global Strategy*
- Performative, Light and Scalable structure for both Backend and Frontend.
- Hybrid stack with NextJS (static for first load) and ReactJS (mutable after user actions)

*STACK*
- NextJS, NodeJS, Express, MongoDb

*Backend*
[x] Made with NodeJS, Express and other modules.

[x] REST API Endpoints were created allowing to create, update, delete and list both users and posts.

[x] MongoDB database, allows scaling with performance. Even though it is not relational, it is still possible to make a relationship. In this project, a relationship was established between Posts and Users.

[x] Files are saved to S3 AWS service via Multer-S3. Most modern technology for storage and transmission of files, providing performance and scalability at a low cost.

*Frontend*
[x] React + NextJS it's a Hybrid combination that takes the full advantage of these powerful tools by using the best of Client Side and SSR. The Homepage is loaded using Server Side Rendering (#getStaticProps) and ReactJS assumes after user's action (Client Side Rendering).

[x] useSWR for API calls with the best possible performance: stale-while-revalidate (more details at https://swr.vercel.app/)

[x] TailWindCSS for fast and standardized Design construction (more details at https : //tailwindcss.com/)

[x] Responsive and intuitive design




