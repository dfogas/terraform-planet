"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archae = {
    name: 'Archae',
    tags: ['microbe'],
    requirements: [{
            type: 'max',
            name: 'temperature',
            quantity: -18
        }],
    effect: {},
    action: {},
    flavorText: 'Lesser known but older than your usual bacteria.',
    cost: 6,
    immediate: [{
            target: {
                color: ''
            },
            change: {
                resource: 'plant',
                production: 1
            }
        }],
    VPs: 0,
    VPper: []
};
