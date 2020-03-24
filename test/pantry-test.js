const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');

describe('Pantry', function() {

    it('should be a function', function() {
        const pantry = new Pantry();
        expect(Pantry).to.be.a('function');
        });

    it('should be an instance of Pantry', function() {
        const pantry = new Pantry();
        expect(user).to.be.an.instanceof(Pantry);
        });

});