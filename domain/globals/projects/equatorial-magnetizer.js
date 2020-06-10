"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquatorialMagnetizer = {
    tags: ['building'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'Hotndeep',
    cost: 13,
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
                resource: 'terraformRating',
                stock: 1
            }
        }],
    VPs: 0,
    VPper: []
};
