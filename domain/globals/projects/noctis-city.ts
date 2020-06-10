export const NoctisCity = {
    tags: ['city', 'building'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'City that would not exist.',
    cost: 18,
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
    VPper: [],
    placement: ['reserved']
};
