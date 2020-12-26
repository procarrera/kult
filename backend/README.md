### _KULT TEST BACKEND_

_NODEJS, EXPRESS, MONGODB, MONGOOSE, AWS-S3 STORAGE, YUP VALIDATION_

#### INSTALL:

```
yarn
```

#### RUN:

```
yarn dev
```

LOCAL ENV:

```
PORT=4444

MONGO_URL=mongodb+srv://<USERNAME>:<PASSWORD>@pedro.ikaui.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority

AWS_SECRET_ACCESS_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
AWS_ACCESS_KEY_ID=XXXXXXXXXXXXXXXXX
AWS_REGION=eg: sa-east-1
AWS_BUCKET_NAME=eg: kult-test
```

```
.
├── .env
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── src
│   ├── config
│   │   └── s3_storage.ts
│   ├── controllers
│   │   ├── FeedController.ts
│   │   ├── PostController.ts
│   │   └── UserController.ts
│   ├── database
│   │   ├── Connection.ts
│   │   └── Models
│   │       ├── Feed.ts
│   │       ├── Post.ts
│   │       └── User.ts
│   ├── routes.ts
│   ├── server.ts
│   └── utils
│       └── Log.ts
├── tsconfig.json
└── yarn.lock

```
