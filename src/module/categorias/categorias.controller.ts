import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './interface/categoria.interface';
import { ParseObjectIdPipe } from 'src/common/pipes/id-valicao-paramentros.pipe';

@Controller('api/v1/categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarCategoria(
    @Body() createCategoriaDto: CreateCategoriaDto,
  ): Promise<Categoria> {
    return await this.categoriasService.criarCategoria(createCategoriaDto);
  }

  @Get('/')
  async consultarCategorias(): Promise<Array<Categoria>> {
    return await this.categoriasService.consultarTodasCategorias();
  }

  @Get(':categoria')
  async consultarCategoriaPeloId(
    @Param('categoria') categoria: string,
  ): Promise<Categoria> {
    return await this.categoriasService.consultarCategoriaPeloId(categoria);
  }

  @Put(':categoria')
  @UsePipes(ValidationPipe)
  async atualizarCategoria(
    @Param('categoria') categoria: string,
    @Body() updateCategoriaDto: UpdateCategoriaDto,
  ): Promise<void> {
    return await this.categoriasService.atualizarCategoria(
      categoria,
      updateCategoriaDto,
    );
  }

  @Post('/:categoria/jogadores/:idJogador')
  async atribuirCategoriaJogador(@Param() params: string[]): Promise<void> {
    return await this.categoriasService.atribuirCategoriaJogador(params);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.categoriasService.remove(+id);
  // }
}
