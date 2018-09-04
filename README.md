# DeCidr

## Overview

DeCidr is a Node.js application that generates a non-clashing CIDR block to be used with a peering connection.

## Use case

Let's say you have a VPC called 'Backend' and you would like to peer many 'Front End' VPCs to it. To do this you can use 'Peering Connections' from AWS, which require non-clashing CIDR blocks. For each peering connection you will need to ensure the CIDR block does not clash with the backend CIDR block, or any of the other peerings.

Before creating your new VPC, DeCidr will read your 'Backend' VPC's Route Table(s) to determine what CIDR ranges are taken. It will then provide you with a valid, non-clashing CIDR range, to use on your new front end VPC.

## Installation

Run `yarn add -g DeCidr` to install the application globally.

## Use

To use the tool you will need to provide all of the below required values. When specifying the tag value, you can use wild cards to match multiple route tables. This will ensure that the CIDR range does not clash with any of the matching route tables.

Verbose: 

`DeCidr --blockSize 24 --rangeStart 10.180.0.0 --rangeEnd 10.200.0.0 --tagName Name --tagValue private*-rtb`

Minimal:

 `DeCidr -b 24 -s 10.180.0.0 -e 10.200.0.0 -t Name -x private*-rtb`

Output: 

`10.180.0.0/24`

### Extra

`-v --version` - Prints the version of DeCidr

`-h --help` - Provides tool help information

## Development

`yarn` to get the dependencies

`yarn build` to build the project (must be done when making changes)

`npm link` to create the symbolic link for running the binary from your terminal e.g. `DeCidr -v`

### Test

`yarn test` to run all tests with coverage

`yarn test:unit` to run the unit tests

`yarn test:e2e` to run the end-to-end tests
