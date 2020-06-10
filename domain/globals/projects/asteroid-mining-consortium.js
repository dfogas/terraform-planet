"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsteroidMiningConsortium = {
    tags: ['jovian'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'Interest of ours is nothing but to provide the sufficient supply of rare metals to your colonists.',
    cost: 13,
    immediate: [{
            target: {
                color: ''
            },
            change: {
                resource: 'titanium',
                production: -1
            }
        }, {
            target: {
                color: ''
            },
            change: {
                resource: 'titanium',
                production: 1
            }
        }],
    VPs: 1,
    VPper: []
};
