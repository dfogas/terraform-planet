export interface Track {
    upper: number;
    lower: number;
    step: number;
    start: number;
}

export class Tracker {
    private value: number;

    public constructor(private upper: number, private lower: number, private step: number) {

    }

    public init(start: number) {
        this.value = start;

        this.normalize();
    }

    public up() {
        this.value += this.step;

        this.normalize();
    }

    public down() {
        this.value -= this.step;

        this.normalize();
    }

    public get() {
        return this.value;
    }

    private normalize() {
        if (this.value > this.upper) {
            this.value = this.upper;
        }
        if (this.value < this.lower) {
            this.value = this.lower;
        }
    }
}
