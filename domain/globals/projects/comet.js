"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comet = {
    tags: ['space', 'event'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'first jet fighter',
    cost: 21,
    immediate: [{
            target: 'global',
            change: {
                temperature: 1
            }
        }, {
            target: 'global',
            change: {
                ocean: 1
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
