export const Capital = {
    tags: ['city', 'building'],
    requirements: [{
        type: 'min',
        name: 'ocean',
        quantity: 4
    }],
    effect: {},
    action: {},
    flavorText: 'Capital city calls for capital celebration.',
    cost: 26,
    immediate: [{
        target: {
            color: ''
        },
        change: {
            resource: 'energy',
            production: -2
        }
    }, {
        target: {
            color: ''
        },
        change: {
            resource: 'megaCredits',
            production: 5
        }
    }],
    VPs: 0,
    VPper: [{
        type: 'global',
        name: 'ocean',
        quantity: 1
    }]
};
