import getEndAddress from './getEndAddress';

describe('getEndAddress', () => {
    it('should return the end address of a given cidr block', () => {
        const block = '10.180.0.0/16';
        const expectedEndAddress = '10.180.255.255';

        const endAddress = getEndAddress(block);

        endAddress.should.equal(expectedEndAddress);
    });
});
