import {
    ArgumentParser
} from 'argparse';

export default function cli(cliMeta) {
    return new Promise((resolve) => {
        const parser = new ArgumentParser(cliMeta);

        parser.addArgument(['-b', '--blockSize'], {
            help: 'The anticipated CIDR block size'
        });
        parser.addArgument(['-s', '--rangeStart'], {
            help: 'The start of the desired range for the new CIDR block'
        });
        parser.addArgument(['-e', '--rangeEnd'], {
            help: 'The end of the desired range for the new CIDR block'
        });
        parser.addArgument(['-n', '--tagNames'], {
            help: 'The tag name(s) for the route table(s), seperated by a comma'
        });
        parser.addArgument(['-x', '--tagValues'], {
            help: 'The tag value(s) for the route table(s), seperated by a comma'
        });

        resolve(validateArguments(parser.parseArgs()));
    });

}

function validateArguments(args) {
    const errors = [];

    if (args.blockSize == null) errors.push('blockSize');
    if (args.rangeStart == null) errors.push('rangeStart');
    if (args.rangeEnd == null) errors.push('rangeEnd');
    if (args.tagNames == null) errors.push('tagNames');
    if (args.tagValues == null) errors.push('tagValues');

    if (errors.length > 0) {
        process.exitCode = 1;
        throw new Error(`Please provide all arguments (${errors})`);
    };

    return args;
}
