# Simple NodeJS App for Demonstrating Kubernetes Deployment

NodeJS application that uses MongoDB as a database.

#### Running the application



Start a MongoDB Kubernetes Assets

```
> kubectl create -f mongo.deployment.json
> kubectl create -f mongo.service.json
```

Build the Docker Image

```
> docker build -t cvcc-node:production .
```

Start the Kubernetes services for our application:

```
> kubectl create -f app.deployment.json
> kubectl create -f app.service.json
```


Profit at Scale

```
> open http://localhost:8080
```