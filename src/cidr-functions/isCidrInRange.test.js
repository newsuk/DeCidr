import IpRange from './IpRange';
import isCidrInRange from './isCidrInRange';

describe('isCidrInRange', () => {
    it('should return true when the cidr block is within the range', () => {
        const reservedIpRange = new IpRange('10.180.0.0', '10.200.0.0');

        const availableCidrBlock = isCidrInRange(reservedIpRange, '10.180.0.0/24');

        availableCidrBlock.should.equal(true);
    });

    it('should return true when the cidr block is just within the range', () => {
        const reservedIpRange = new IpRange('10.180.0.0', '10.200.0.0');

        const availableCidrBlock = isCidrInRange(reservedIpRange, '10.200.0.0/32');

        availableCidrBlock.should.equal(true);
    });

    it('should return false when the cidr block is before the range', () => {
        const reservedIpRange = new IpRange('10.180.0.0', '10.200.0.0');

        const availableCidrBlock = isCidrInRange(
            reservedIpRange,
            '10.179.255.255/24'
        );

        availableCidrBlock.should.equal(false);
    });

    it('should return false when the cidr block is after the range', () => {
        const reservedIpRange = new IpRange('10.180.0.0', '10.200.0.0');

        const availableCidrBlock = isCidrInRange(reservedIpRange, '10.200.0.0/24');

        availableCidrBlock.should.equal(false);
    });

    it('should return false when the cidr block is way after the range', () => {
        const reservedIpRange = new IpRange('10.180.0.0', '10.200.0.0');

        const availableCidrBlock = isCidrInRange(reservedIpRange, '10.210.0.0/24');

        availableCidrBlock.should.equal(false);
    });
});
