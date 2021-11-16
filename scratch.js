// const axios = require('axios').default;
const BP = require('./models/back-points');


async function main() {
    // let response = await axios.get('https://mdb.myacxiom.com/api/v1/healthcheck/version')

    // console.log(response.data.version);
    const bp = new BP();

    let response = await bp.getEntries();
    console.dir(response);
}


(async () => {
    main();
})();
