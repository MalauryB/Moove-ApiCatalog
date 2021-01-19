import { Injectable } from '@nestjs/common';
import { ShopService } from './shop.service';
import { OfferService } from './offer.service';
import { CatalogDto } from 'src/dto/CatalogDto';

@Injectable()
export class CatalogService {

  constructor(private shopService: ShopService, private offerService: OfferService) {}
  

  async getAll(): Promise<CatalogDto> {
  
    let catalog = new CatalogDto;

    let shopsFound =  await this.shopService.getAll();

    for (const shop of shopsFound){
      shop.offers = await this.offerService.findByIdShop(shop.id);
    }

    catalog.shops = shopsFound;
    return catalog;
  }
}
