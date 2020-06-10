"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigAsteroid = {
    tags: ['space', 'event'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'because bigger is always better',
    cost: 27,
    immediate: [{
            target: 'global',
            change: {
                temperature: 2
            }
        }, {
            target: {
                color: ''
            },
            change: {
                resource: 'titanium',
                stock: 4
            }
        }, {
            target: {
                color: ''
            },
            change: {
                resource: 'plants',
                stock: -4
            }
        }],
    VPs: 0,
    VPper: []
};
