import chai from 'chai';
import helloService from '../../../src/api/hello/hello.service';

describe('App:', () => {
  describe('helloWorld()', () => {
    it('should say hello!', () => {
      chai.expect(helloService.helloWorld()).to.equal('hello world');
    });
  });
});
