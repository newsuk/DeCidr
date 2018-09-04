import cidrsAreOverlapping from './cidrsAreOverlapping';

describe('cidrsAreOverlapping', () => {
    it('should return the true if cidrs are overlapping', () => {
        const cidrs = ['10.180.0.0/16', '10.180.0.0'];

        const areOverlapping = cidrsAreOverlapping(cidrs);

        areOverlapping.should.be.true;
    });

    it('should return the false if cidrs are not overlapping', () => {
        const cidrs = ['10.180.0.0/16', '10.181.0.0'];

        const areOverlapping = cidrsAreOverlapping(cidrs);

        areOverlapping.should.be.false;
    });
});
