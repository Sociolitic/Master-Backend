let mongoose = require("mongoose");
let data = require('../routes/data');
process.env.MODE = 'test'
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

const profileId = '615d489933252d31ce6856c1'

chai.use(chaiHttp);

describe('Data Container', () => {
  describe('/ner', () => {
      it('it should GET NER from data container', (done) => {
        chai.request(server)
            .get('/data/ner?q='+profileId)
            .end((err, res) => {
                  res.should.have.status(200);
              done();
            });
      });
  });
  after(()=>{
    // process.env.MODE='prod'
  })
});