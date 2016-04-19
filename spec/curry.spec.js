var expect = chai.expect;

describe('Testem setup', function () {

  it('should verify the tess are passing', function () {
    // expect(1).to.eq(1);
    var add = function () {
      
    };
    expect(makeCurry(add)).to.be.a('function');
  });

  it('should throw an error if there is no valid function provided as argument', function () {
    expect(function () {
      makeCurry();
    }).to.throw('No function provided');
  });

});

describe('Curry function', function () {
  var add;

  beforeEach(function () {
    add = function (a, b, c) {
      return a + b + c;
    };
  });

  it('should return the proper result if called with original number of arguments', function () {
    var curriedAdd = makeCurry(add);
    expect(curriedAdd(1,2,3)).to.eq(6);
  });
});
