// eslint-disable-next-line no-undef
const config = require('../config');
// status code test
test('Should Return 200 Status Code', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}api/v1/couriers`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

// Working Hours Test for "Speedy"
test('The Closing Hour is Later than the Opening Hour', async () => {
	let response
	try {
		response = await fetch(`${config.API_URL}api/v1/couriers`);
	} catch (error) {
		console.error(error);
	}
	let data = await response.json();
	const startWorkingHours = data[1]["workingHours"]["start"];
	const endWorkingHours = data[1]["workingHours"]["end"];
	expect(startWorkingHours).toBeLessThan(endWorkingHours)
});

//Body Test for "Order and Go"
test('The First Courier Should be Order and go', async () => {
	let actualResponseBody;
	try {
		response = await fetch(`${config.API_URL}api/v1/couriers`);
	} catch (error) {
		console.error(error);
	}
	actualResponseBody = response;
	let data = await response.json();
	const name = data[0]["name"];
	expect(name).toBe("Order and Go");
});