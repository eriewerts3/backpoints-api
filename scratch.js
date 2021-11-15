const axios = require('axios').default;

async function main() {
    let response = await axios.get('https://mdb.myacxiom.com/api/v1/healthcheck/version')

    console.log(response.data.version);
}

(async () => {
    main();
})();
