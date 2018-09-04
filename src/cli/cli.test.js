import {
    ArgumentParser
} from 'argparse';
import sinon from 'sinon';
import cli from './cli';

describe('cli', () => {
    let sandbox;

    beforeEach(() => sandbox = sinon.createSandbox());

    afterEach(() => sandbox.restore());

    it('should return the user provided arguments as an object', async () => {
        // Setup.
        const expectedArgs = {
            blockSize: 24,
            rangeStart: '10.180.0.0',
            rangeEnd: '10.200.0.0',
            tagName: 'Name',
            tagValue: 'Value'
        };

        sandbox.stub(ArgumentParser.prototype, 'parseArgs').returns(expectedArgs);

        // Exercise.
        const actualArgs = await cli({});

        // Verify.
        actualArgs.should.deep.equal(expectedArgs);
    });

    it('should return an error when the user has not provided all required arguments', async () => {
        // Setup.
        const expectedArgs = {};

        sandbox.stub(ArgumentParser.prototype, 'parseArgs').returns(expectedArgs);

        // Exercise.
        let expectedError;

        try {
            await cli({});
        } catch (error) {
            expectedError = error;
        }

        // Verify.
        expectedError.message.should.equal('Please provide all arguments (blockSize,rangeStart,rangeEnd,tagName,tagValue)');
    });
});
