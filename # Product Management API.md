# Product Management API

This project provides a simple API for managing products. It includes the following features:

1. Adding a new product
2. Deleting a product by its ID
3. Updating a product's quantity by its ID
4. Getting all products

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in the project directory.
3. Set up your MongoDB database and update the `MONGODB_URI` environment variable in the `.env` file with your MongoDB connection string.
4. Start the server by running `npm start`.

## API Endpoints

The API endpoints are as follows:

- `POST /api/products`: Add a new product.
- `DELETE /api/products/:id`: Delete a product by its ID.
- `PUT /api/products/:id`: Update a product's quantity by its ID.
- `GET /api/products`: Get all products.

## Code Structure

The project's code is organized as follows:

- `./product.model.js`: Defines the Product model.
- `./product.schema.js`: Defines the product schema.
- `./product.controller.js`: Contains the controller functions for interacting with the product data.
- `./product.route.js`: Defines the API routes for the product management API.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
