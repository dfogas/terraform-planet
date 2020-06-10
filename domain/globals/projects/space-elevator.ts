export const SpaceElevator = {
    tags: ['space', 'building'],
    requirements: [],
    effect: {},
    action: {
        pay: {
            resources: ['steel'],
            quantity: 1
        },
        receive: {
            resources: ['megaCredits'],
            quantity: 5
        }
    },
    flavorText: 'Spacy... stuff...',
    cost: 27,
    immediate: [{
        target: {
            color: ''
        },
        change: {
            resource: 'titanium',
            production: 1
        }
    }],
    VPs: 2,
    VPper: []
};
