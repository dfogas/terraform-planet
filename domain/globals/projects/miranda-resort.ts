export const MirandaResort = {
    tags: ['city', 'building'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'Unlike Miranda rights, this is actually enjoyable.',
    cost: 16,
    immediate: [{
        target: {
            color: ''
        },
        change: {
            resource: 'megaCredits',
            productionPerTag: ['earth']
        }
    }],
    VPs: 0,
    VPper: []
};
