const mongoose = require('mongoose');
const request = require('supertest-as-promised');
const httpStatus = require('http-status');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const expect = chai.expect;
const app = require('../../index');

chai.config.includeStack = true;

/**
 * root level hooks
 */
after((done) => {
    // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
    mongoose.models = {};
    mongoose.modelSchemas = {};
    mongoose.connection.close();
    done();
});


describe('## Book APIs', () => {
    let book = {
      title: 'title1',
      description: 'description title 1',
      year: 2020
    };
  
    describe('# POST /api/books', () => {
      it('should create a new book', (done) => {
        request(app)
          .post('/api/books')
          .send(book)
          .expect(httpStatus.CREATED)
          .then((res) => {
            expect(res.body.title).to.equal(book.title);
            expect(res.body.description).to.equal(book.description);
            expect(res.body.year).to.equal(book.year);
            book = res.body;
            done();
          })
          .catch(done);
      });
    });
    
    describe('# GET /api/books/:bookId', () => {
        it('should get book details', (done) => {
          request(app)
            .get(`/api/books/${book._id}`)
            .expect(httpStatus.OK)
            .then((res) => {
                expect(res.body.title).to.equal(book.title);
                expect(res.body.description).to.equal(book.description);
                expect(res.body.year).to.equal(book.year);
                done();
            })
            .catch(done);
        });
    
        it('should report error with message - Not found, when book does not exists', (done) => {
          request(app)
            .get('/api/books/56c787ccc67fc16ccc1a5e92')
            .expect(httpStatus.NOT_FOUND)
            .then((res) => {
              expect(res.body.message).to.equal('Not Found');
              done();
            })
            .catch(done);
        });
    });

    describe('# GET /api/books/', () => {
        it('should get all books', (done) => {
          request(app)
            .get('/api/books')
            .expect(httpStatus.OK)
            .then((res) => {
              expect(res.body).to.be.an('array');
              done();
            })
            .catch(done);
        });
    });
    
});
