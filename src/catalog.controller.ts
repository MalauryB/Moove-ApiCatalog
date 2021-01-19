import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { CatalogService } from './services/catalog.service';
import { Response } from 'express';
import { CatalogDto } from './dto/CatalogDto';

@Controller('catalog')
export class catalogController {

  constructor(private readonly catalogService: CatalogService) {}

  @Get('shops')
  async findAll(@Res() res : Response){

    let shops = new CatalogDto;

    await this.catalogService.getAll().then(shopsFound => shops = shopsFound);
    res.status(HttpStatus.OK).json(shops);
  }
}
