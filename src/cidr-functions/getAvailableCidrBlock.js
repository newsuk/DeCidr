import isCidrInRange from './isCidrInRange';
import sortCidrAscending from './sortCidrAscending';
import getNextAddress from './getNextAddress';
import getEndAddress from './getEndAddress';
import cidrsAreOverlapping from './cidrsAreOverlapping';
import IpRange from './IpRange';

export default function getAvailableCidrBlock(
    newCidrBlockSize,
    rangeStart, rangeEnd,
    occupiedCidrBlocks
) {
    const reservedIpRange = new IpRange(rangeStart, rangeEnd);
    let newCidrStartAddress = reservedIpRange.startAddress;
    const sortedOccupiedCidrBlocks = sortCidrAscending(occupiedCidrBlocks);

    sortedOccupiedCidrBlocks.forEach(block => {
        const isInRange = isCidrInRange(reservedIpRange, block);

        if (isInRange) {
            if (cidrsAreOverlapping([block, newCidrStartAddress]))
                newCidrStartAddress = getNextAddress(block);

            if (
                !isCidrInRange(
                    reservedIpRange,
                    getEndAddress(`${newCidrStartAddress}/${newCidrBlockSize}`)
                )
            )
                throw new Error('No availability in the range provided');
        }
    });
    return `${newCidrStartAddress}/${newCidrBlockSize}`;
}
