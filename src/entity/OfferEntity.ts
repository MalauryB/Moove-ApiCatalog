import { OfferDto } from "src/dto/OfferDto";
import { Type } from 'class-transformer';

export class OfferEntity{

    shopId : number;

    @Type(() => OfferDto)
    offers : OfferDto[];
}