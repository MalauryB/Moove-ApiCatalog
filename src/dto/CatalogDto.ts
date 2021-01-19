import { ShopDto } from "./ShopDto";

import { Type } from 'class-transformer';

export class CatalogDto{

    @Type(() => ShopDto)
    shops : Array<ShopDto>;
}