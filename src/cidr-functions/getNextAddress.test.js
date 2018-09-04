import getNextAddress from './getNextAddress';

describe('getNextAddress', () => {
    it('should return the next address after a given cidr block', () => {
        const block = '10.180.0.0/24';
        const expectedNextAddress = '10.180.1.0';

        const nextAddress = getNextAddress(block);

        nextAddress.should.equal(expectedNextAddress);
    });
});
