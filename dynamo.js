const AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({
	region: process.env.AWS_REGION,
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamodbClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "digimon-api";

const getDigimons = async () => {
	// Scan params
	const params = {
		TableName: TABLE_NAME,
	};

	const digimons = await dynamodbClient.scan(params).promise();
	console.log(digimons);
	return digimons;
};

const addOrUpdateDigimon = async (digimon) => {
	const params = {
		TableName: TABLE_NAME,
		Item: digimon,
	};
	return await dynamodbClient.put(params).promise();
};

const getDigimonById = async (id) => {
	const params = {
		TableName: TABLE_NAME,
		Key: {
			id: id,
		},
	};
	return await dynamodbClient.get(params).promise();
};

const deleteDigimon = async (id) => {
	const params = {
		TableName: TABLE_NAME,
		Key: {
			id: id,
		},
	};
	return await dynamodbClient.delete(params).promise();
};

module.exports = {
	dynamodbClient,
	getDigimons,
	addOrUpdateDigimon,
	getDigimonById,
	deleteDigimon,
};
