"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NuclearPower = {
    tags: ['plant', 'building'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'No GreenPeace terrorists in space. Good.',
    cost: 10,
    immediate: [{
            target: {
                color: ''
            },
            change: {
                resource: 'energy',
                production: 3
            }
        }, {
            target: {
                color: ''
            },
            change: {
                resource: 'megaCredits',
                production: -2
            }
        }],
    VPs: 0,
    VPper: []
};
