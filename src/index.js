#!/usr/bin/env node

import cli from './cli/cli';
import getAvailableCidrBlock from './cidr-functions/getAvailableCidrBlock';
import getOccupiedCidrBlocks from './cidr-functions/getOccupiedCidrBlocks';
import { version, description } from '../package.json';

cli({
    version,
    addHelp: true,
    description
})
    .then(args =>
        getOccupiedCidrBlocks(args.tagName, args.tagValue)
            .then(occupiedBlocks => getAvailableCidrBlock(args.blockSize, args.rangeStart, args.rangeEnd, occupiedBlocks)))
    .then(console.log)
    .catch(error => console.error(error.message));
