import { PartialType } from '@nestjs/mapped-types';
import { CriarJogadorDto } from './criar-jogador.dto';

export class AtualizarJogadorDto extends PartialType(CriarJogadorDto) {}
