// eslint-disable-next-line no-undef
const config = require('../config');
// Status Code Check
test('Should Return Status 200 OK', async () => {
	let actualStatusCode = null;
    try {
		const response = await fetch(`${config.API_URL}api/v1/kits/6`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toEqual(200);
});


//Verifying a Kit Is Deleted
test('Verify Kit is Deleted', async () => {
    try {
		const response = await fetch(`${config.API_URL}api/v1/kits/6`, {
			method: 'DELETE',
		});
		const actualResponseBody = await response.json();
		expect(actualResponseBody).toEqual({ ok: true});
	} catch (error) {
		console.error(error);
	}
});