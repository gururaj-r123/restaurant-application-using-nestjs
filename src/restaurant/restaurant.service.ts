


import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from './restaurant.schema';

@Injectable()
export class RestaurantService {
  constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>) {}

  async create(createRestaurantDto: Partial<Restaurant>): Promise<Restaurant> {
    const createdRestaurant = new this.restaurantModel(createRestaurantDto);
    return createdRestaurant.save();
  }

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find().exec();
  }

  async findOne(id: string): Promise<Restaurant> {
    return this.restaurantModel.findById(id).exec();
  }

  async update(id: string, updateRestaurantDto: Partial<Restaurant>): Promise<Restaurant> {
    return this.restaurantModel.findByIdAndUpdate(id, updateRestaurantDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Restaurant> {
    return this.restaurantModel.findByIdAndDelete(id).exec();
  }
}
