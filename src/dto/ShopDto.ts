import { Expose, Type } from 'class-transformer';
import { OfferDto } from './OfferDto';
import { OpenShopDto } from './OpenShopDto';
import { PictureDto } from './PictureDto';

export class ShopDto{

    @Expose({name: 'shopId'})
    id : number;

    name : string;

    address : string;

    description : string;

    email : string;

    phone : string;

    localisation : {

        lat: number;

        long: number;

    }

    videoLink: string;

    @Type(() => OfferDto)
    offers : OfferDto[];

    @Type(() => PictureDto)
    pictures : PictureDto[];

    @Type(() => OpenShopDto)
    openShop : OpenShopDto[];
}