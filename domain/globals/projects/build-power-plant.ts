export const BuildPowerPlant = {
    tags: ['standard'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'Standard project - power plant.',
    cost: 11,
    immediate: [{
        target: {
            color: ''
        },
        change: {
            resource: 'energy',
            production: 1
        }
    }],
    VPs: 0,
    VPper: []
};
