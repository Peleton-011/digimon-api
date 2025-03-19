const axios = require("axios");
const { addOrUpdateDigimon, getDigimons } = require("./dynamo");

/* 
    Following this response structure:
        Endpoint: digi-api.com/api/v1/digimon
        This will return a paged list of digimons in this API. So page is one of the relevant query params

        Response: {
	content: [
		{
			id: 1,
			name: "Agumon",
			href: "https://digi-api.com/api/v1/digimon/1",
			image: "https://digi-api.com/images/digimon/w/Agumon.png",
		},
		{
			id: 2,
			name: "Airdramon",
			href: "https://digi-api.com/api/v1/digimon/2",
			image: "https://digi-api.com/images/digimon/w/Airdramon.png",
		},
		{
			id: 3,
			name: "Angemon",
			href: "https://digi-api.com/api/v1/digimon/3",
			image: "https://digi-api.com/images/digimon/w/Angemon.png",
		},
		{
			id: 4,
			name: "Betamon",
			href: "https://digi-api.com/api/v1/digimon/4",
			image: "https://digi-api.com/images/digimon/w/Betamon.png",
		},
		{
			id: 5,
			name: "Birdramon",
			href: "https://digi-api.com/api/v1/digimon/5",
			image: "https://digi-api.com/images/digimon/w/Birdramon.png",
		},
	],
	pageable: {
		currentPage: 0,
		elementsOnPage: 5,
		totalElements: 1460,
		totalPages: 291,
		previousPage: "",
		nextPage: "https://digi-api.com/api/v1/digimon?page=1",
	},
}

*/

const seedData = async () => {
	const url = "https://digi-api.com/api/v1/digimon";

	try {
		const { data } = await axios.get(url);
		const digimons = data.content;

		const digimonPromises = digimons.map(async (digimon) => {
			console.log(digimon);
			return addOrUpdateDigimon({
				...digimon,
				id: digimon.id.toString(),
			});
		});

		await Promise.all(digimonPromises);
	} catch (error) {
		console.log(error);
	}
};

seedData();

console.log(getDigimons())
