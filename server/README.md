# Exotic Coffee - Server

This folder contains a Node + Express backend scaffold using Sequelize (Postgres).

Simple local setup (no Docker)

1. Install Postgres locally (use the Postgres installer for Windows or your preferred method) and start the service.
2. Create a database and user (example using `psql`):

```bash
# create DB and user
psql -U postgres -c "CREATE DATABASE coffee_db;"
psql -U postgres -c "CREATE USER myuser WITH PASSWORD 'mypassword';"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE coffee_db TO myuser;"
```

3. Update `server/.env` with your credentials, e.g.:

```
PORT=3000
DATABASE_URL=postgres://myuser:mypassword@localhost:5432/coffee_db
NODE_ENV=development
```

4. Install dependencies and run the server:

```bash
cd server
npm install
npm run dev
```

Files of interest:
- `server.js` - entry point
- `config/database.js` - Sequelize connection
- `models/*` - Sequelize models
- `controllers/ProductController.js` - example controller
- `routes/productRoutes.js` - product routes

If you prefer Docker instead, tell me and I will re-add a docker-compose file.

