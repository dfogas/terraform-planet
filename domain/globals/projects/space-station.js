"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceStation = {
    tags: ['space'],
    requirements: [],
    effect: {
        trigger: 'build space project',
        change: {
            resource: 'megaCredits',
            stock: 2
        }
    },
    action: {},
    flavorText: 'ISS to the Earth - we are up and running',
    cost: 10,
    immediate: [],
    VPs: 1,
    VPper: []
};
