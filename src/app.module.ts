import { HttpModule, Module } from '@nestjs/common';
import { catalogController } from './catalog.controller';
import { CatalogService } from './services/catalog.service';
import { OfferService } from './services/offer.service';
import { ShopService } from './services/shop.service';

@Module({
  imports: [HttpModule],
  controllers: [catalogController],
  providers: [CatalogService, ShopService, OfferService],
})
export class AppModule {}
