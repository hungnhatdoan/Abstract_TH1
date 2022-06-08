import { Circle } from "./Circle";
import { Comparable } from "./Comparable";
export class ComparableCircle extends Circle implements Comparable {
    constructor (radius: number) {
        super (radius);
    }
    compareTo(o: Object): number {
        let circle: ComparableCircle = <ComparableCircle>o;
        if (this.getRadius() < circle.getRadius()) {
            return -1;
        } else if (this.getRadius() > circle.getRadius()) {
            return 1;
        } else {
            return 0;
        }
        
    }
}
