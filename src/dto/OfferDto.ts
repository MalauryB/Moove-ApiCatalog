import { Expose, Type } from 'class-transformer';
import { ProgramDto } from './ProgramDto';

export class OfferDto {

    @Expose({name: 'idOffer'})
    id : number;

    name: number;

    price : number;
    
    description : number;

    picture : string;

    @Type(() => ProgramDto)
    program : ProgramDto[];
}