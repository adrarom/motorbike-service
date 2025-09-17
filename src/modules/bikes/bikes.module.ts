import { Module } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { BikesController } from './bikes.controller';
import { Bike } from './entities/bike.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BikesController],
  providers: [BikesService],
  imports: [TypeOrmModule.forFeature([Bike])],
  exports: [BikesService],
})
export class BikesModule {}
