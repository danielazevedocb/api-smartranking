import { Module } from '@nestjs/common';
import { JogadoresModule } from './module/jogadores/jogadores.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasModule } from './module/categorias/categorias.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    JogadoresModule,
    CategoriasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
