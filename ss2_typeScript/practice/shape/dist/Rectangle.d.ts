import { Shape } from "./Shape";
export declare class Rectangle extends Shape implements IArea {
    private _width;
    private _height;
    constructor(x: number, y: number, width: number, height: number);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    area(): number;
}
