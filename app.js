const express = require("express");
const { getDigimons } = require("./dynamo");
const app = express();
app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/digimons", async (req, res) => {
	try {
		const digimons = await getDigimons();
		res.json(digimons);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Something went wrong: " + error.message,
		});
	}
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
