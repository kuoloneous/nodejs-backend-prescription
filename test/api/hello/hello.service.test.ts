import chai from 'chai';
import HelloService from '../../../build/api/hello/hello.service';

describe('App:', () => {
  describe('helloWorld()', () => {
    it('should say hello!', () => {
      chai.expect(HelloService.helloWorld()).to.equal('hello world');
    });
  });
});
