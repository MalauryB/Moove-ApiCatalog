import { Injectable, HttpService } from '@nestjs/common';
import { OfferDto } from 'src/dto/OfferDto';
import { OfferEntity } from 'src/entity/OfferEntity';

@Injectable()
export class OfferService {

  constructor(private readonly httpService : HttpService){};

  async findByIdShop(id): Promise<Array<OfferDto>> {
    let response = await this.httpService.get<OfferEntity>(`http://localhost:3001/offer/shop/${id}`).toPromise();
    return response.data.offers;
  }
}