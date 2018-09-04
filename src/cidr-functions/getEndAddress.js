import {cidr} from 'node-cidr';

export default function getEndAddress(block) {
    return cidr.broadcast(block);
}
