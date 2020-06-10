"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackPolarDust = {
    tags: [],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'Bears are white and dust is black, I lost my sight and this is a kek.',
    cost: 24,
    immediate: [{
            target: {
                color: ''
            },
            change: {
                resource: 'heat',
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
        }, {
            global: {
                type: 'ocean',
                quantity: 1
            }
        }],
    VPs: 0,
    VPper: []
};
