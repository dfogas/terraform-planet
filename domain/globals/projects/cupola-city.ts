export const CupolaCity = {
    tags: ['city', 'building'],
    requirements: [{
        type: 'max',
        name: 'oxygen',
        quantity: 9
    }],
    effect: {},
    action: {},
    flavorText: 'Simpsons in the movie.',
    cost: 16,
    immediate: [{
        target: {
            color: ''
        },
        change: {
            resource: 'energy',
            production: -1
        }
    }, {
        target: {
            color: ''
        },
        change: {
            resource: 'megaCredits',
            production: 3
        }
    }],
    VPs: 0,
    VPper: []
};
