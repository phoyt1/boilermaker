const chai = require('chai');
const chaiProperties = require('chai-properties'); // partially compare object attributes and values
const chaiThings = require('chai-things'); // adds support to Chai for assertions on array elements
const expect = chai.expect;
chai.use(chaiProperties);
chai.use(chaiThings);
const db = require('../server/db');
const Photo = db.model('photo');

describe('Photo model', () => {

  beforeEach(() => {
    return db.sync({ force: true })
      .then(()=> {
        return Photo.create({
          link: 'http://www.google.com',
          title: 'test photo',
          description: 'this is a test'
        })
      })
  })
    describe('definition', () => {
      it('has a link field that is a string', () => {
        return Photo.findOne()
          .then(photo => {
            expect(photo.link).to.be.a('string');
          });
      });
      it('has a title field that is a string', () => {
        return Photo.findOne()
          .then(photo => {
            expect(photo.link).to.be.a('string');
          });
      });
      it('has a description field that is a string', () => {
        return Photo.findOne()
          .then(photo => {
            expect(photo.link).to.be.a('string');
          });
      });
    });
    describe('validation', () => {
      it('requires a link field', () => {
        const photo = Photo.build();
        return photo.validate()
          .then(err => {
            expect(err).to.be.an('object');
            expect(err.errors).to.contain.a.thing.with.properties({
              path: 'link',
              type: 'notNull Violation'
            })
          })
      });
    });
})
