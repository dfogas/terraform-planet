"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndergroundCity = {
    tags: ['city', 'building'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'Until this time it was only upwards that habitat made sense.',
    cost: 18,
    immediate: [{
            target: {
                color: ''
            },
            change: {
                resource: 'energy',
                production: -2
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
