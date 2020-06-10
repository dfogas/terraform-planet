export const ChaosEsmaNationalPark = {
    tags: ['plant', 'building'],
    requirements: [{
        type: 'min',
        name: 'temperature',
        quantity: -12
    }],
    effect: {},
    action: {},
    flavorText: 'For your weekend family trip! Or rather stay and home and watch it on Discovery channel.',
    cost: 16,
    immediate: [{
        target: {
            color: ''
        },
        change: {
            resource: 'megaCredits',
            production: 2
        }
    }, {
        target: {
            color: ''
        },
        change: {
            resource: 'plants',
            stock: 3
        }
    }, {
        target: {
            project: {
                tags: ['animal'],
                resourceCubes: []
            }
        },
        change: {
            resourceCubes: 1
        }
    }],
    VPs: 1,
    VPper: [],
    resourceCubes: []
};
