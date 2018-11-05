# DeCidr [![npm version](https://badge.fury.io/js/decidr.svg)](https://badge.fury.io/js/decidr)[![Build Status](https://app.bitrise.io/app/33bd995fc810085b/status.svg?token=ingp6Eo62-kDbYprYQYybQ&branch=master)](https://app.bitrise.io/app/33bd995fc810085b)

### Brought to you by The Times Tooling team  🛠

### Overview

DeCidr is a Node.js application that generates a non-clashing CIDR block to be used with a peering connection.

### Use case

Let's say you have a VPC called 'Backend' and you would like to peer many 'Front End' VPCs to it. To do this you can use 'Peering Connections' from AWS, which require non-clashing CIDR blocks. For each peering connection you will need to ensure the CIDR block does not clash with the backend CIDR block, or any of the other peerings.

Before creating your new VPC, DeCidr will read your 'Backend' VPC's Route Table(s) to determine what CIDR ranges are taken. It will then provide you with a valid, non-clashing CIDR range, to use on your new front end VPC.

### Installation

Run `yarn global add decidr` to install the application globally.

### Use

To use the tool you will need to provide all of the below required values. When specifying the tag value, you can use wild cards to match multiple route tables. This will ensure that the CIDR range does not clash with any of the matching route tables.

Verbose: 

`DeCidr --blockSize 24 --rangeStart 10.180.0.0 --rangeEnd 10.200.0.0 --tagNames Name --tagValues private*-rtb`

Minimal:

 `DeCidr -b 24 -s 10.180.0.0 -e 10.200.0.0 -n Name -x private*-rtb`

Output: 

`10.180.0.0/24`

You can also provide multiple route tables, separated with a comma, in the following way (note the multiple tagNames):

`DeCidr --blockSize 24 --rangeStart 10.180.0.0 --rangeEnd 10.200.0.0 --tagNames Name,Name --tagValues private*-rtb,public*-rtb`

#### Extra

`-v --version` - Prints the version of DeCidr

`-h --help` - Provides tool help information

#### Exit Codes
Exit Code 1: Not all arguments have been provided

Exit Code 2: No availability in the range provided

### Development

`yarn` to get the dependencies

`yarn build` to build the project (must be done when making changes)

`npm link` to create the symbolic link for running the binary from your terminal e.g. `DeCidr -v`

#### Test

`yarn test` to run all tests with coverage

`yarn test:unit` to run the unit tests

`yarn test:e2e` to run the end-to-end tests
