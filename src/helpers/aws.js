import AWS from 'aws-sdk';

export function EC2(){
    return new AWS.EC2();
}
