"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarbonateProcesing = {
    tags: ['building'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'How would you process this shit, cadet?',
    cost: 16,
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
                resource: 'heat',
                production: 3
            }
        }],
    VPs: 0,
    VPper: []
};
