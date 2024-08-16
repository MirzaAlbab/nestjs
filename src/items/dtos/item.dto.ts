import { Expose, Transform } from 'class-transformer';

export class ItemDto {
  @Expose()
  id: number;
  @Expose()
  name: string;
  @Expose()
  description: string;
  @Expose()
  price: number;
  @Expose()
  location: string;
  @Expose()
  category: string;

  isActive: boolean;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  UserId: number;
}
