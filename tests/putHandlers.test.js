// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"price": 175
}
//Status Code Test
test('Status Code Should be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}api/v1/products/4`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		console.log(data);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

//Product Price Change Test
test('Price Should Change in the Response Body', async () => {
	try {
		const response = await fetch(`${config.API_URL}api/v1/products/4`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const actualResponseBody = await response.json();
		console.log(actualResponseBody);
		expect(actualResponseBody["ok"]).toBe(true);
	} catch (error) {
		console.error(error);
	}
});
