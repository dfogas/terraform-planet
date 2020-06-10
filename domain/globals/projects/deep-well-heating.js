"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepWellHeating = {
    type: 'automated',
    tags: ['power', 'building'],
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
                production: 1
            }
        }, {
            target: 'global',
            change: {
                temperature: 1
            }
        }],
    VPs: 0,
    VPper: []
};
