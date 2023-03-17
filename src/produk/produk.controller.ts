import { Controller, Get, Param } from '@nestjs/common';
import { ProdukService } from './produk.service';

@Controller('/produk')
export class ProdukController {
  constructor(private Services: ProdukService) {}

  @Get('/:id')
  public async getOneCategory(@Param('id') id: number) {
    return await this.Services.getProductById(id);
  }
}
