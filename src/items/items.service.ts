import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dtos/create-item.dto';
import { User } from '../users/user.entity';
import { QueryItemDto } from './dtos/query-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  getAllItems(queryItemDto: QueryItemDto) {
    return this.itemRepository
      .createQueryBuilder()
      .select('*')
      .where('isActive = :isActive', { isActive: true })
      .getRawMany();
  }

  create(item: CreateItemDto, user: User) {
    const newItem = this.itemRepository.create(item);
    newItem.user = user;
    return this.itemRepository.save(newItem);
  }

  async approveItem(id: number, approve: boolean) {
    const item = await this.itemRepository.findOneBy({ id });
    if (!item) {
      throw new NotFoundException('Item not found');
    }
    item.isActive = approve;
    return this.itemRepository.save(item);
  }
}
