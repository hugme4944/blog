import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './dummy';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getArticles() {
    return this.articlesService.getArticles();
  }

  @Get(':id')
  getArticle(@Param('id', ParseIntPipe) id: number) {
    return this.articlesService.getArticle(id);
  }

  @Post()
  addArticle(@Body() article: Article) {
    return this.articlesService.addArticle(article);
  }

  @Delete(':id')
  async deleteArticle(@Param('id', ParseIntPipe) id: number) {
    await this.articlesService.deleteArticle(id);
  }
}
