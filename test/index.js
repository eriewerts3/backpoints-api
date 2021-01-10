const assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('../index');
let server = require('../index');
let expect = chai.expect;
chai.use(chaiHttp);

describe('basic http tests', () => {
    it('should call hello world', async() => {
        // let response = 'hello john';

        let response = await chai.request(server)
            .get('/hello/world');


        expect(response.text).to.equal('hello world');
    });

    it('should call backpoints api correctly', async () => {
        let res = await chai.request(server)
            .get('/api/v1/back-points');

        let resArray = res.body;

        expect(resArray[0].rest).to.exist;
        expect(resArray[0].rest).to.be.greaterThan(999);
        expect(resArray[0].rest).to.be.lessThan(2501);

    })
});


