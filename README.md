# Simple NodeJS App for Demonstrating Kubernetes Deployment

NodeJS application that uses MongoDB as a database.

#### Running the application

Export environment variables

```
> export NODE_ENV=development \
    PORT=3000 \
    MONGO_HOST=127.0.0.1
    MONGO_PORT=27017
```

Start a MongoDB Docker container

```
> mkdir -p ~/tmp/mongo
> docker run \
    -d \
    -p 27017:27017 \
    -v ~/tmp/mongo:/data/db \
    --name cvcc-mongo \
    --rm \
    mongo
```

Try and build dependencies (🤞 npm isn't down)

```
> npm i
```

Start the application

```
> npm start
```


Build the Docker Image

```
> docker build -t cvcc-node .
```

Run the Docker Image

```
> docker \
    run \
    -d \
    -p 8080:3000 \
    -e NODE_ENV=${NODE_ENV} \
    -e PORT=${PORT} \
    -e MONGO_HOST=mongo \
    -e MONGO_PORT=${MONGO_PORT} \
    --name cvcc-node \
    --link cvcc-mongo:mongo \
    --rm \
    cvcc-node
```

Profit

```
> open http://localhost:8080
```