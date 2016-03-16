'use strict';
// use command karma start karma.conf.js  to run the tests
describe('test matchers available', function() {
   //Matcher toBe and not.toBe
   //use xit to skip a sped and xdescribe to skip the suite
    it("The 'toBe' matcher compares with ===", function() {
      var a = 12;
      var b = a;

      expect(b).toBe(a);//success
      expect(b).toBe(12);//success
      expect(a).not.toBe(null);//success
      //expect(b).toBe(true);//fails

    });

  //Matcher toBeDefined , toVeUndefined, toBeNull and not.toBeDefined
  it("The 'toBeDefined' matcher compares against `undefined`", function() {
    var a = {
      foo: 'foo'
    };

    expect(a.foo).toBeDefined();//success
    expect(a.bar).not.toBeDefined();//success
    expect(a.bar).toBeUndefined();//success
  });

  it("works for simple literals and variables", function() {
      var a = 12;
      var b = a;
      expect(a).toEqual(12);//success
      expect(b).toEqual(12);//success
    });

  //Matcher toMatch and not.toMatch
  it("The 'toMatch' matcher is for regular expressions", function() {
    var message = 'foo bar baz';

    expect(message).toMatch(/bar/);
    expect(message).toMatch('bar');
    expect(message).not.toMatch(/quux/);
  });


  it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
    var a, foo = 'foo';
    expect(foo).toBeTruthy();
    expect(a).not.toBeTruthy();
    //expect(a).toBeTruthy();//fails
    //expect(foo).not.toBeTruthy();//fails
  });

  it("The 'toContain' matcher is for finding an item in an Array", function() {
    var a = ['foo', 'bar', 'baz'];

    expect(a).toContain('bar');
    expect(a).not.toContain('quux');
  });


   it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
    var foo = function() {
      return 1 + 2;
    };
    var bar = function() {
      return a + 1;
    };

    expect(foo).not.toThrow();
    expect(bar).toThrow();
  });

});

