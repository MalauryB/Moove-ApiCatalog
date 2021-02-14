import { Injectable, HttpService } from '@nestjs/common';
import { OfferDto } from 'src/dto/OfferDto';
import { OfferEntity } from 'src/entity/OfferEntity';

@Injectable()
export class OfferService {

  constructor(private readonly httpService : HttpService){};

  async findByIdShop(id): Promise<Array<OfferDto>> {
    let response = await this.httpService.get<OfferEntity>(`http://apioffer-env.eba-a92bh3tp.eu-west-1.elasticbeanstalk.com/offer/shop/${id}`).toPromise();
    return response.data.offers;
  }
}