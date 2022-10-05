# Online Store API

API made with node-express, data is stored on docker-postgreSQL, sequelized ORM is used.
It is made for an online store that accepts users, products, categories and orders.

### Getting started

### System requirements

- NPM 8.11.0
- Express 4.17.1
- Cors 2.8.5
- Sequelize 6.23.0
- Dotenv 16.0.2
- @hapi/boom 9.1.4
- Faker 5.5.3
- Joi 17.4.2
- Pg 8.8.0
- Pg-hstore 2.3.4

1. Clone the respository.

   ```shell
   git clone https://github.com/ArmandoTech/Online-Store
   cd Online-Store
   ```

2. Install all dependencies with NPM.

   ```shell
   npm install
   ```

3. Open docker and start the container that contains PostgreSQL database

4. Execute development server

   ```shell
   npm run dev
   ```

5. If application is working, you can see the message "Server running on port: ${PORT}" on console.

6. Now you can use the API at:

## http://localhost:3000/users/ (POST, GET, UPDATE, DELETE)

## http://localhost:3000/products/ (POST, GET, UPDATE, DELETE)

## http://localhost:3000/orders/ (POST, GET, UPDATE, DELETE)

## http://localhost:3000/categories/ (POST, GET, UPDATE, DELETE)
