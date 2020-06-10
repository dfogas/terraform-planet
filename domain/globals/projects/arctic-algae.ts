export const ArcticAlgae = {
    tags: ['plant'],
    requirements: [{
        type: 'max',
        name: 'temperature',
        quantity: -12
    }],
    effect: {
        trigger: 'ocean placement',
        change: {
            resource: 'plant',
            stock: 2
        }
    },
    action: {},
    flavorText: 'Some life just loves cold weather.',
    cost: 12,
    immediate: [{
        target: {
            color: ''
        },
        change: {
            resource: 'plant',
            production: 2
        }
    }],
    VPs: 0,
    VPper: []
};
