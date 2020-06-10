export const ElectroCatapult = {
    tags: ['building'],
    requirements: [
        {
            type: 'max',
            name: 'oxygen',
            quantity: 6
        }
    ],
    effect: {},
    action: {
        pay: {
            resources: ['steel', 'plant'],
            quantity: 1
        },
        receive: {
            resources: ['megaCredits'],
            quantity: 7
        }
    },
    flavorText: 'A 200km long acceleration',
    cost: 17,
    immediate: [{
        target: {
            color: ''
        },
        change: {
            resource: 'energy',
            production: -1
        }
    }],
    VPs: 1,
    VPper: []
};
