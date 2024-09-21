import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FriendModule } from './friend/friend.module';
import { InviteModule } from './invite/invite.module';

@Module({
  imports: [PrismaModule, InviteModule, FriendModule],
})
export class AppModule {}
