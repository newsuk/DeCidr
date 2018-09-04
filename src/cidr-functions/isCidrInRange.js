import IpCidr from 'ip-cidr';

export default function isInRange(reservedRange, block) {
    return (startAddressIsInRange(reservedRange, block) && endAddressIsInRange(reservedRange, block));
}

function startAddressIsInRange(reservedRange, block) {
    const blockStartOctets = new IpCidr(block).start().split('.');
    const reservedStartOctets = reservedRange.startAddress.split('.');

    for (let i = 0; i < blockStartOctets.length; i++) {
        if (blockStartOctets[i] < reservedStartOctets[i]) return false;
        if (blockStartOctets[i] > reservedStartOctets[i]) return true;
        if (i === blockStartOctets.length - 1) return true;
    }
}

function endAddressIsInRange(reservedRange, block) {
    const blockEndOctets = new IpCidr(block).end().split('.');
    const reservedEndOctets = reservedRange.endAddress.split('.');

    for (let i = 0; i < blockEndOctets.length; i++) {
        if (blockEndOctets[i] > reservedEndOctets[i]) return false;
        if (blockEndOctets[i] < reservedEndOctets[i]) return true;
        if (i === blockEndOctets.length - 1) return true;
    }
}
