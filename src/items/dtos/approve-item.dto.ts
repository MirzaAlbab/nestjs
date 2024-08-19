import { IsBoolean } from 'class-validator';

export class ApproveItemDto {
  @IsBoolean()
  isActive: boolean;
}
