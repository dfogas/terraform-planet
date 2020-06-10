"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asteroid = {
    tags: ['space', 'event'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'With Ode to Joy, entering our atmosphere, crashing down...',
    cost: 14,
    immediate: [{
            target: 'global',
            change: {
                temperature: 1
            }
        }, {
            target: {
                color: ''
            },
            change: {
                resource: 'titanium',
                stock: 2
            }
        }, {
            target: {
                color: ''
            },
            change: {
                resource: 'plants',
                stock: -3
            }
        }],
    VPs: 0,
    VPper: []
};
