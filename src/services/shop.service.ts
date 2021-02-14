import { HttpService, Injectable } from '@nestjs/common';
import { ShopDto } from 'src/dto/ShopDto';
import { ShopEntity} from 'src/entity/ShopEntity';

@Injectable()
export class ShopService {

  constructor(private readonly httpService : HttpService){};

  async getAll(): Promise<Array<ShopDto>> {
    let response = await this.httpService.get<ShopEntity>('http://apishop-env.eba-nx8fbca5.eu-west-1.elasticbeanstalk.com/shop/shops').toPromise();
    return response.data.shops;
    }
}