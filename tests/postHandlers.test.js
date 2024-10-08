// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "productsList": [
		{
        "id": 5,
		"quantity": 1
		}
    ]
}
  
// Status Code Test
test('Should return 200 OK', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status; 
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(201);
});

// Response Body test
test('Response Body Should...', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json(); 
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.courierService).toBe("Order and Go");
});
