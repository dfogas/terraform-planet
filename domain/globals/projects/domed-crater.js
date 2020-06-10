"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomedCrater = {
    tags: ['city', 'building'],
    requirements: [{
            type: 'max',
            name: 'oxygen',
            quantity: 7
        }],
    effect: {},
    action: {},
    flavorText: 'Under the dome.',
    cost: 24,
    immediate: [{
            target: {
                color: ''
            },
            change: {
                resource: 'energy',
                production: -1
            }
        }, {
            target: {
                color: ''
            },
            change: {
                resource: 'megaCredits',
                production: 3
            }
        }, {
            target: {
                color: ''
            },
            change: {
                resource: 'plants',
                stock: 3
            }
        }],
    VPs: 1,
    VPper: []
};
