import { Injectable } from '@nestjs/common';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bike } from './entities/bike.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BikesService {
  constructor(
    @InjectRepository(Bike)
    private bikeRepository: Repository<Bike>,
  ) {}

  create(createBikeDto: CreateBikeDto) {
    return this.bikeRepository.save(createBikeDto);
  }

  findAll() {
    return this.bikeRepository.find();
  }

  findOne(id: string) {
    return this.bikeRepository.findOne({where: {id}});
  }

  update(id: string, updateBikeDto: UpdateBikeDto) {
    return this.bikeRepository.update(id, updateBikeDto);
  }

  remove(id: string) {
    return this.bikeRepository.delete(id);
  }
}
