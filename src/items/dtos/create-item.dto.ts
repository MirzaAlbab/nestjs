import { IsString, IsNumber, Min, Max } from 'class-validator';
export class CreateItemDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  price: number;
  @IsString()
  location: string;
  @IsString()
  category: string;
  @IsNumber()
  isActive: boolean;
}
