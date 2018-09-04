import AWS from 'aws-sdk';
import {EC2} from './aws';

describe('aws', () => {
    it('should return an instance of the AWS EC2 sdk', () => EC2().should.be.an.instanceOf(AWS.EC2));
});
