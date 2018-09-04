import {cidr} from 'node-cidr';

export default function getNextAddress(block) {
    return cidr.next(block).split('/')[0];
}
