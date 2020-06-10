export const SolarWindPower = {
    tags: ['science', 'plant', 'space'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'yeah, yeah, I hear you man, sun is the god.',
    cost: 11,
    immediate: [{
        target: {
            color: ''
        },
        change: {
            resource: 'energy',
            production: 1
        }
    }, {
        target: {
            color: ''
        },
        change: {
            resource: 'titanium',
            stock: 2
        }
    }],
    VPs: 0,
    VPper: []
};
