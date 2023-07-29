## How to start the application

### 1. Building the application
The below command you need to paste in your terminal, which will build container and here we are explicitly using Buildkit, 
it will make the building process faster.
Note - You just need to write this command once.
```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
```
or 
```bash
docker-compose build

```

### 2. Run the application 
The below command you need to run your application. Once it is done, you can access it on [http://localhost:3000](http://localhost:3000)
```bash
docker-compose up
```
