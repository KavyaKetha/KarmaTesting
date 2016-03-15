describe('Controller testing', function() {
beforeEach(module('testApp'));
  var testAppController;
  var scope = {};
  beforeEach(inject(function($controller){
        // assign the original controller to the created instance
        testAppController = $controller('testAppController',{$scope:scope});
  }));
  it('test Scope Variables',function(){
      expect(scope.user).toBeDefined();
      expect(scope.greet).toBe("Hello");//this will fail as the value in the controller is Hai
  });
  it('test Functions',function(){
      scope.simpleAddition(3,4);
      expect(scope.result).toEqual(7);
      scope.simpleAddition(-1,-2);
      expect(scope.result).toEqual(-3);
      scope.simpleAddition(-2);
      expect(scope.result).toEqual('');
  });
});