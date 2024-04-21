# Text Analyzer Tool

This is a Text Analyzer Tool repository using NestJS, PostgreSQL, Prisma and Docker.

## Run the App using Script Command

Prerequisites: You have to have installed Postgres in your machine.
- I used in the the below version of project run
- npm version 10.2.5
- node version 20.10.0
- nestjs version 10.1.10

- Create a `.env` file at the root and add essential environment variables from `.env.example` file
- Run `npm install` or `yarn`
- Now to run the app in the Dev Environment run `npm run start:dev` or `yarn start:dev`
- For production, first build using `npm run build` or `yarn build` and then run `npm start` or `yarn start`
- Now the server should listen on `http://localhost:8000` based on the port number you set in `.env`

## Run the App using Docker


Prerequisites: You have to have installed Docker and Docker-compose in your computer

- Create a `.env` file at the project root and add essential environment variables from `.env.example` file
- Open any command line tool in your computer like for Windows `Git Bash`, for Linux `Terminal` or `Terminator`, and for Mac `iTerm2`, and so on.
- Change directory to this project in which location you have for example `cd ~/www/text-analyzer-tool`
- Now run `docker compose up` or `docker-compose up` if you installed docker compose separately
- Now the server should listen on `http://localhost:8000` based on the port number you set in `.env`

## How to remove Docker Containers, Images, Volumes and Networks

- To delete all the Containers, Images and Volumes: `docker system prune --volumes -af`
- To delete all the Networks: `docker network prune -f`
- To delete all containers including its volumes: `docker rm -vf $(docker ps -aq)`
- To delete all the images: `docker rmi -f $(docker images -aq)`
- To delete specific Container: `docker rm container_id1, container_id2...`
- To delete specific Images: `docker rmi image_id1, image_id2...`
- To delete specific Networks: `docker network rm network_id1, network_id2...`
- To delete specific Volumes: `docker volume rm volume_id1, volume_id2...`


## List of Modules
- Text Analyzer From txt File
- Text Analyzer From Databse 

### Demo Data Insert
- npm run insert-json-data


### Run the tests

# unit tests
- npm run test

 ### Request methods

The request method is the way we distinguish what kind of action our endpoint is being "asked" to perform. For example, `GET` pretty much gives itself. But we also have a few other methods that we use quite often.

| Method   | Description                              |
| -------- | ---------------------------------------- |
| `GET`    | Used to retrieve a single item or a collection of items. |
| `POST`   | Used when creating new items e.g. a new user, post, comment etc. |
| `PATCH`  | Used to update one or more fields on an item e.g. update e-mail of user. |
| `PUT`    | Used to replace a whole item (all fields) with new data. |
| `DELETE` | Used to delete an item.                  |

### From txt File

See the below URL link for endpoints:

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
`GET`    | `http://localhost:8000/api/text-analyzer/words`                             | Retrieve number of words.                      |
`GET`    | `http://localhost:8000/api/text-analyzer/characters`                             | Retrieve number of charecter.                      |
`GET`    | `http://localhost:8000/api/text-analyzer/sentences`                             | Retrieve number of sentences.                      |
`GET`    | `http://localhost:8000/api/text-analyzer/paragraph`                             | Retrieve number of paragraph.                      |
`GET`    | `http://localhost:8000/api/text-analyzer/long-words`                             | Retrieve number of longest words.                      |


### From Database

See the below URL link for endpoints:

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
`GET`    | `http://localhost:8000/api/database-text-analyzer/database-get-total-words`                             | Retrieve number of words.                      |
`GET`    | `http://localhost:8000/api/database-text-analyzer/database-get-total-charecter`                             | Retrieve number of charecter.                      |
`GET`    | `http://localhost:8000/api/database-text-analyzer/database-get-total-sentances`                             | Retrieve number of sentences.                      |
`GET`    | `http://localhost:8000/api/database-text-analyzer/database-get-total-paragraph`                             | Retrieve number of worparagraphds.                      |
`GET`    | `http://localhost:8000/api/database-text-analyzer/database-get-longest-words`                             | Retrieve number of longest words.                      |



 **N.B**: Please keep in mind, before running `docker compose up` first the value of the `POSTGRES_HOST` env variable should be `postgres` because, inside docker, services communicate with each other with their container name as the hostname like when we'll run `docker compose up`, our `nest-app` service will be connected with `postgres` service through `http://postgres:5433`.