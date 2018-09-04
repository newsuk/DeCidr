import getAvailableCidrBlock from './getAvailableCidrBlock';

describe('getAvailableCidrBlock', () => {
    it('should return an available cidr block when the reserved range is free', () => {
        const newCidrBlockSize = 24;
        const rangeStart = '10.180.0.0';
        const rangeEnd = '10.200.0.0';
        const occupiedCidrBlocks = [
            '10.210.0.0/16',
            '10.180.0.0/16',
            '0.0.0.0/0'
        ];

        const availableCidrBlock = getAvailableCidrBlock(
            newCidrBlockSize,
            rangeStart, rangeEnd,
            occupiedCidrBlocks
        );

        availableCidrBlock.should.equal('10.181.0.0/24');
    });

    it('should return an available cidr block when there is space within the range', () => {
        const newCidrBlockSize = 24;
        const rangeStart = '10.180.0.0';
        const rangeEnd = '10.200.0.0';
        const occupiedCidrBlocks = [
            '10.210.0.0/16',
            '10.190.0.0/16',
            '0.0.0.0/0'
        ];

        const availableCidrBlock = getAvailableCidrBlock(
            newCidrBlockSize,
            rangeStart, rangeEnd,
            occupiedCidrBlocks
        );

        availableCidrBlock.should.equal('10.180.0.0/24');
    });

    it('should return an error when there are no free CIDR blocks left', () => {
        const newCidrBlockSize = 24;
        const rangeStart = '10.180.0.0';
        const rangeEnd = '10.181.0.0';
        const occupiedCidrBlocks = ['10.180.0.0/16'];
        let expectedError;

        try {
            getAvailableCidrBlock(
                newCidrBlockSize,
                rangeStart, rangeEnd,
                occupiedCidrBlocks
            );
        } catch (error) {
            expectedError = error;
        }

        expectedError.should.exist;
    });
});
