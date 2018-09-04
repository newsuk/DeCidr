import IpRange from './IpRange';

describe('IpRange', () => {
    it('should return the IP Range provided', () => {
        const startAddress = '10.180.0.0';
        const endAddress = '10.200.0.0';

        const ipRange = new IpRange(startAddress, endAddress);

        ipRange.startAddress.should.equal(startAddress);
        ipRange.endAddress.should.equal(endAddress);
    });
});
