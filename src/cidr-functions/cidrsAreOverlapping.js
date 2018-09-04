import cidrOverlap from 'cidr-overlap';

export default function cidrsAreOverlapping(cidrs) {
    return cidrOverlap(cidrs).length > 0;
}
