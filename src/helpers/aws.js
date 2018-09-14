import AWS from 'aws-sdk';

export function EC2(){
    if(!process.env.AWS_REGION) process.env.AWS_SDK_LOAD_CONFIG = 1;

    return new AWS.EC2();
}
