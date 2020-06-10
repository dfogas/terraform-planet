"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trees = {
    tags: ['plant'],
    requirements: [{
            type: 'min',
            name: 'temperature',
            quantity: -4
        }],
    effect: {},
    action: {},
    flavorText: 'I am sitting on the branch, feeling good.',
    cost: 13,
    immediate: [{
            target: {
                color: ''
            },
            change: {
                resource: 'plant',
                production: 3
            }
        }, {
            target: {
                color: ''
            },
            change: {
                resource: 'plant',
                stock: 1
            }
        }],
    VPs: 1,
    VPper: []
};
