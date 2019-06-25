const axios = require('axios');
var util = require('util');

module.exports = nodecg => {

	const capiReplicant = nodecg.Replicant('capi-results');

	nodecg.listenFor('capiGetInfo', async url => {
		nodecg.log.info(`Extension received the value ${url}!`);
		
		try {
			const apiResponse = await axios.get(url);

			nodecg.log.info(`Found ` + util.inspect(apiResponse.data.length) + ` participants.`);

			capiReplicant.value = apiResponse.data;
		} catch (error) {
			nodecg.log.error(error);
		}
	});

}
