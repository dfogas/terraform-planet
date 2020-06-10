export const Fish = {
    tags: ['animal'],
    requirements: [{
        type: 'min',
        name: 'temperature',
        quantity: 2
    }],
    effect: {},
    action: {
        receive: {
            resourceCube: {
                value: 1
            },
            project: {
                name: 'Fish'
            }
        }
    },
    flavorText: 'Yay... fishee, fishee, fishee, fish.',
    cost: 9,
    immediate: [{
        target: {
            color: ''
        },
        change: {
            resource: 'plant',
            production: -1
        }
    }],
    VPs: 0,
    VPper: []
};
