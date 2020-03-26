const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const userData = require('../data/single-user');
// console.log('user data', userData)

describe('User', function() {

  let user;
  let userInfo;

  beforeEach(function() {
    userInfo = userData.usersData[0];
    user = new User(userInfo);

  });

    it('should be a function', function() {
        expect(User).to.be.a('function');
      });

      it('should be an instance of User', function() {
        expect(user).to.be.an.instanceof(User);
      });

      it('should have an id', function() {
        expect(user.id).to.eq(1);
      });

      it('should have a name', function() {
        expect(user.name).to.eq("Saige O'Kon")
      });

      it('should have a pantry', function() {
        expect(user.pantry).to.deep.eq([
          {
            "ingredient": 11477,
            "amount": 4
          },
          {
            "ingredient": 11297,
            "amount": 4
          }
        ])
      })

});
