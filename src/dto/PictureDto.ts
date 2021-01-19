import { Expose } from "class-transformer";

export class PictureDto{

    @Expose({name: 'shopId'})
    id : number;

    link : string;
    
}