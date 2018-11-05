import {
    EC2
} from '../helpers/aws';

function getRouteTables(tagName, tagValue) {
    const params = {
        Filters: [{
            Name: `tag:${tagName}`,
            Values: [tagValue]
        }]
    };

    return EC2()
        .describeRouteTables(params)
        .promise()
        .then(result => result.RouteTables);
}

function getRoutes(routeTables) {
    const uniqueRoutes = new Set();

    routeTables.forEach(routeTable => {
        routeTable.Routes.forEach(route => {
            uniqueRoutes.add(route.DestinationCidrBlock);
        });
    });

    return Array.from(uniqueRoutes);
}

export default function getOccupiedCidrBlocks(tagNames, tagValues) {
    const tagNamesArr = tagNames.split(',');
    const tagValuesArr = tagValues.split(',');
    const routeTablePromises = [];

    tagValuesArr.forEach((value, index) => {
        routeTablePromises.push(getRouteTables(tagNamesArr[index], value))
    })

    return Promise.all(routeTablePromises)
        .then(results => results.reduce((routeTableA,routeTableB) => routeTableA.concat(routeTableB), []))
        .then(getRoutes)
}
