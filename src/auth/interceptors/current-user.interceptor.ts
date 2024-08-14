import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { UsersService } from '../../users/users.service';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private UserService: UsersService) {}

  async intercept(ctx: ExecutionContext, next: CallHandler<any>) {
    const request = ctx.switchToHttp().getRequest();
    const { userId } = request.session || {};
    if (userId) {
      const user = await this.UserService.findOneBy(userId);
      request.currentUser = user;
    }
    return next.handle();
  }
}
