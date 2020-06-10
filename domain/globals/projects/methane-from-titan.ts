export const MethaneFromTitan = {
    tags: ['jovian', 'space'],
    requirements: [
        {
            type: 'min',
            name: 'oxygen',
            quantity: 2
        }
    ],
    effect: {},
    action: {},
    flavorText: 'My name is Kentan and I am from Montargee.',
    cost: 28,
    immediate: [{
        target: {
            color: ''
        },
        change: {
            resource: 'heat',
            stock: 2
        }
    }, {
        target: {
            color: ''
        },
        change: {
            resource: 'plants',
            stock: 2
        }
    }],
    VPs: 2,
    VPper: []
};