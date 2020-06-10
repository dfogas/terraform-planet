export interface Project {
    name?: string;
    tags?: Array<string>;
    requirements?: Array<any>;
    effect?: {};
    action?: {};
    flavorText?: string;
    cost: number;
    immediate?: Array<any>;
    VPs?: number | string;
    VPper?: Array<number | string>;
}