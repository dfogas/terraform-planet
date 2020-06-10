export const ItIsRainingMoonsOutside = {
    tags: ['space', 'event'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'because we need better puns',
    cost: 31,
    immediate: [{
        target: 'global',
        change: {
            temperature: 3
        }
    }, {
        target: {
            color: ''
        },
        change: {
            resource: 'steel',
            stock: 4
        }
    }, {
        target: {
            color: ''
        },
        change: {
            resource: 'plants',
            stock: -8
        }
    }],
    VPs: 0,
    VPper: []
};
