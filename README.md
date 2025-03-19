# Digimon API

## Overview
Digimon API is a simple Node.js-based REST API that interacts with an AWS DynamoDB database. It provides endpoints to fetch, add, update, and delete Digimon data. This project is designed to help the developer get accustomed to working with DynamoDB while building a lightweight API.

## Features
- Retrieve a list of Digimons from DynamoDB
- Fetch a single Digimon by ID
- Add new Digimons to the database
- Update existing Digimon data
- Delete a Digimon entry

## Setup Instructions
### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (latest LTS version recommended)
- npm or yarn
- AWS credentials configured with access to DynamoDB

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd digimon-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add the following environment variables:
   ```sh
   AWS_REGION=<your-aws-region>
   AWS_ACCESS_KEY_ID=<your-access-key>
   AWS_SECRET_ACCESS_KEY=<your-secret-key>
   PORT=3000
   ```

### Running the Application
Start the server using:
```sh
node app.js
```
The API will be accessible at `http://localhost:3000`.

## API Endpoints
### Base URL
```
http://localhost:3000
```

### Endpoints
#### 1. Get all Digimons
- **GET** `/digimons`
- **Response:** List of Digimons stored in DynamoDB

#### 2. Get a Digimon by ID
- **GET** `/digimons/:id`
- **Response:** A single Digimon object

#### 3. Add a new Digimon
- **POST** `/digimons`
- **Body:** JSON object with Digimon details
- **Response:** Added Digimon entry

#### 4. Update an existing Digimon
- **PUT** `/digimons/:id`
- **Body:** JSON object with updated Digimon details
- **Response:** Updated Digimon entry

#### 5. Delete a Digimon
- **DELETE** `/digimons/:id`
- **Response:** Confirmation of deletion

## Seeding Data
To populate DynamoDB with Digimon data from an external API, run:
```sh
node seed.js
```
This fetches data from `https://digi-api.com/api/v1/digimon` and inserts it into the database.

## Technologies Used
- **Node.js** - Backend framework
- **Express.js** - Web framework for handling API requests
- **AWS SDK** - For interacting with DynamoDB
- **Axios** - HTTP client for making API requests
- **dotenv** - Manages environment variables

## Author
Nico Diaz 

