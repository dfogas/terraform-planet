"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aquifier = {
    name: 'Aquifier',
    tags: ['standard'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'Standard project - melt ice caps for ocean.',
    cost: 18,
    immediate: [{
            target: 'global',
            change: {
                ocean: 1
            }
        }],
    VPs: 0,
    VPper: []
};
