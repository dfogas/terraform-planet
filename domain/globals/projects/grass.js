"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grass = {
    tags: ['plant'],
    requirements: [{
            type: 'min',
            name: 'temperature',
            quantity: -16
        }],
    effect: {},
    action: {},
    flavorText: 'Are we home now?',
    cost: 11,
    immediate: [{
            target: {
                color: ''
            },
            change: {
                resource: 'plant',
                production: 1
            }
        }, {
            target: {
                color: ''
            },
            change: {
                resource: 'plant',
                stock: 3
            }
        }],
    VPs: 0,
    VPper: []
};
