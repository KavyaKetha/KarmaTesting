'use strict';
describe('test the reverse string filter',function(){
      
  var customFilter;
  beforeEach(module('testApp'));
    beforeEach(inject(function($filter){
        customFilter = $filter('reversing');
    }));
    it('passing  a word to filter',function(){
        expect(customFilter('HELLO')).toBe('OLLEH');
        expect(customFilter('')).toBe('');
    });
    it('passing a sentence to filter',function(){
        expect(customFilter('this is a test')).toBe('tset a si siht');
    });
});