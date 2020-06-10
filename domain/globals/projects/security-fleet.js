"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFleet = {
    tags: ['space'],
    requirements: [],
    effect: {},
    action: {
        pay: {
            resources: ['titan'],
            quantity: 1
        },
        receive: {
            resourceCube: {
                value: 1
            },
            project: {
                name: 'Security Fleet'
            }
        }
    },
    flavorText: 'Forearmed is forewarned. Or something similar to that.',
    cost: 12,
    immediate: [],
    VPs: 0,
    VPper: ['resourceCubes'],
    resourceCubes: []
};
