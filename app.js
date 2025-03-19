const express = require("express");
const { getDigimons, getDigimonById, addOrUpdateDigimon, deleteDigimon } = require("./dynamo");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome to the Digimon API");
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

app.get("/digimons/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const digimon = await getDigimonById(id);
		res.json(digimon);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Something went wrong: " + error.message,
		});
	}
});

app.post("/digimons", async (req, res) => {
	const digimon = req.body;
	try {
		const newDigimon = await addOrUpdateDigimon(digimon);
		res.json(newDigimon);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Something went wrong: " + error.message,
		});
	}
});

app.put("/digimons/:id", async (req, res) => {
	const digimon = req.body;
	const id = req.params.id;

	digimon.id = id;

	try {
		const updatedDigimon = await addOrUpdateDigimon(digimon);
		res.json(updatedDigimon);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Something went wrong: " + error.message,
		});
	}
});

app.delete("/digimons/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedDigimon = await deleteDigimon(id);
        res.json(deletedDigimon);
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
