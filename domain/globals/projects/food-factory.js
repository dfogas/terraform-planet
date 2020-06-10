"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodFactory = {
    tags: ['building'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'Homer would be happy to work heeere.',
    cost: 12,
    immediate: [{
            target: {
                color: ''
            },
            change: {
                resource: 'plant',
                production: -1
            }
        }, {
            target: {
                color: ''
            },
            change: {
                resource: 'megaCredits',
                production: 4
            }
        }],
    VPs: 1,
    VPper: []
};
