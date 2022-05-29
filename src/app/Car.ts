import { Color } from "./Color";
import { Make } from "./Make";
import { Model } from "./Model";
import { Body } from "./Body";

export interface Car{
    id: Number;
    type: String;
    year: Number;
    transmission: String;
    mileage: Number;
    vinNumber: String;
    mrspPrice: Number;
    salePrice: Number;
    description: String;
    image: String;
    make: Make;
    featued: boolean;
    sold: boolean;
    bodyColor: Color;
    interiorColor: Color;
    body: Body;
    model:Model;

    
}