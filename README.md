# App Loco Framework Rust with Nuxt
## App build with Rust Lang and Nuxt.js. Api Rust with Loco.rs and frontend with nuxt.js using vue.js.

### [Loco.rs](https://loco.rs/) It’s Like [Ruby on Rails](https://rubyonrails.org/), but for [Rust Lang](https://www.rust-lang.org/). 

### Skill

- [Rust Lang](https://www.rust-lang.org/)
- [Loco - Rust](https://loco.rs/)
- [PostgreSQL](https://www.postgresql.org/)
- [Vue.js](https://vuejs.org/)
- [Nuxt.js](https://nuxt.com/)
- [Vuetify](https://vuetifyjs.com/)

### Run app-loco

```shell
cd app_loco/
cargo loco start
# run localhost:5150

```

### Run app-nuxt

```shell
cd app-nuxt/
yarn dev --open
# run localhost:3000

```

### Docker and Docker Compose

```shell

docker-compose build
docker-compose up # run app-loco http://localhost:5150 app-nuxt http://localhost:3000

docker-compose up --build # run app-loco http://localhost:5150 app-nuxt http://localhost:3000

# Run diesel migration for create all tables migrations on database
docker-compose run --rm app ./diesel migration run  # Or

docker-compose run --rm app /bin/bash
./diesel migration run

# Run db:seed For populate data faker on database
docker-compose run --rm app ./seed # Or

docker-compose run --rm app /bin/bash
./seed

# App Loco Rust individual
docker-compose build app-loco
docker-compose run --rm app-loco
# run http://0.0.0.0:5150

# App Nuxt individual
docker-compose build app-nuxt
docker-compose run --rm app-nuxt
# run http://0.0.0.0:3000

# Optional
docker-compose ps
docker-compose stop
docker-compose down
docker-compose run --rm app bash
docker network create rustnet

# sudo docker rmi --force $(docker images -f "dangling=true" -q)

```


https://gilcierweb.com.br
