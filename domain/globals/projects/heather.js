"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heather = {
    tags: ['plant'],
    requirements: [{
            type: 'min',
            name: 'temperature',
            quantity: -14
        }],
    effect: {},
    action: {},
    flavorText: 'Heather, .., Heather?, .., Heather??, Heather!!',
    cost: 6,
    immediate: [{
            target: {
                color: ''
            },
            change: {
                resource: 'plant',
                production: 1
            }
        }, {
            target: {
                color: ''
            },
            change: {
                resource: 'plant',
                stock: 1
            }
        }],
    VPs: 0,
    VPper: []
};
