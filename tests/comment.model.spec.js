const chai = require('chai');
const chaiProperties = require('chai-properties'); // partially compare object attributes and values
const chaiThings = require('chai-things'); // adds support to Chai for assertions on array elements
const expect = chai.expect;
chai.use(chaiProperties);
chai.use(chaiThings);
const db = require('../server/db');
const Comment = db.model('comment');

describe('Comment model', () => {

  beforeEach(() => {
    return db.sync({ force: true })
      .then(() => {
        return Comment.create({
          text: 'this is a test comment 123456789'
        })
      })
  })
    describe('definition', () => {
      it('has a text field that is a string', () => {
        return Comment.findOne()
          .then(photo => {
            expect(photo.text).to.be.a('string');
          });
        });
      });
    describe('validation', () => {
    it('requires a text field', () => {
      const photo = Comment.build();
      return photo.validate()
        .then(err => {
          expect(err).to.be.an('object');
          expect(err.errors).to.contain.a.thing.with.properties({
            path: 'text',
            type: 'notNull Violation'
          })
        })
    });
  });
})
