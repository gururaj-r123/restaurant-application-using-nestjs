
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant.schema';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  async create(@Body() createRestaurantDto: Partial<Restaurant>): Promise<Restaurant> {
    return this.restaurantService.create(createRestaurantDto);
  }

  @Get()
  async findAll(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRestaurantDto: Partial<Restaurant>): Promise<Restaurant> {
    return this.restaurantService.update(id, updateRestaurantDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.remove(id);
  }
}
