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
        parser.addArgument(['-n', '--tagName'], {
            help: 'The tag name for the route table(s)'
        });
        parser.addArgument(['-x', '--tagValue'], {
            help: 'The tag value for the route table(s)'
        });

        resolve(validateArguments(parser.parseArgs()));
    });

}

function validateArguments(args) {
    const errors = [];

    if (args.blockSize == null) errors.push('blockSize');
    if (args.rangeStart == null) errors.push('rangeStart');
    if (args.rangeEnd == null) errors.push('rangeEnd');
    if (args.tagName == null) errors.push('tagName');
    if (args.tagValue == null) errors.push('tagValue');

    if (errors.length > 0) throw new Error(`Please provide all arguments (${errors})`);

    return args;
}
