export const BuildingIndustries = {
    tags: ['building'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'Lesser known but older than your usual bacteria.',
    cost: 6,
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
            resource: 'steel',
            production: 2
        }
    }],
    VPs: 0,
    VPper: []
};
