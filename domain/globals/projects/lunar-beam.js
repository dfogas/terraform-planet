"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LunarBeam = {
    tags: ['earth', 'power'],
    requirements: [],
    effect: {},
    action: {},
    flavorText: 'Luna just reflects light, so if we plant an amplifier there...',
    cost: 13,
    immediate: [{
            target: {
                color: ''
            },
            change: {
                resource: 'energy',
                production: 2
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
            target: {
                color: ''
            },
            change: {
                resource: 'heat',
                production: 2
            }
        }],
    VPs: 0,
    VPper: []
};
