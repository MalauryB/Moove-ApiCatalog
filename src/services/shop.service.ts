import { HttpService, Injectable } from '@nestjs/common';
import { ShopDto } from 'src/dto/ShopDto';
import { ShopEntity} from 'src/entity/ShopEntity';

@Injectable()
export class ShopService {

  constructor(private readonly httpService : HttpService){};

  async getAll(): Promise<Array<ShopDto>> {
    let response = await this.httpService.get<ShopEntity>('http://localhost:3002/shop/shops').toPromise();
    return response.data.shops;
    }
}