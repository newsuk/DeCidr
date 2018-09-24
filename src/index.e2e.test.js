import util from 'util';

const exec = util.promisify(require('child_process').exec);

describe('index e2e tests', function () {

    this.slow(5000);
    this.timeout(10000);

    it('should generate a free CIDR block', async () => {
        const command = 'node ./lib/index.js -b 24 -s 10.180.0.0 -e 10.200.0.0 -n FAKE-TAG-NAME -x FAKE-TAG-VALUE';

        const { stdout, stderr } = await exec(command);

        stderr.should.equal('');
        stdout.should.equal('10.180.0.0/24\n');
    });

    it('should return an error when provided incorrect details', async () => {
        const command = 'node ./lib/index.js ';

        let expectedError;

        try{
            await exec(command);
        }
        catch(error) {
            expectedError = error;
        }

        expectedError.should.exist;
        expectedError.code.should.equal(1);
        expectedError.stderr.should.equal('Please provide all arguments (blockSize,rangeStart,rangeEnd,tagName,tagValue)\n');
    });

    it('should return an error when there are no free CIDR blocks left', async () => {
        const command = 'node ./lib/index.js -b 16 -s 10.180.0.0 -e 10.180.0.0 -n FAKE-TAG-NAME -x FAKE-TAG-VALUE';

        let expectedError;

        try{
            await exec(command);
        }
        catch(error) {
            expectedError = error;
        }

        expectedError.should.exist;
        expectedError.code.should.equal(1);
        expectedError.stderr.should.equal('No availability in the range provided\n');
    });
});
