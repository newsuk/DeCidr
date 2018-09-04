export default function sortCidrAscending(cidrs) {
    return cidrs.sort((blockA, blockB) => {
        blockA = blockA.split('.');
        blockB = blockB.split('.');

        for (var i = 0; i < blockA.length; i++) {
            if (asInt(blockA[i]) < asInt(blockB[i])) return -1;
            else if (asInt(blockA[i]) > asInt(blockB[i])) return 1;
        }
        return 0;
    });
}

function asInt(string) {
    return parseInt(string);
}
