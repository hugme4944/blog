import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
  ) {}

  getArticles() {
    return this.articlesRepository.find();
  }

  getArticle(id: number) {
    return this.articlesRepository.findOne(id);
  }

  addArticle(article: Article) {
    return this.articlesRepository.save({
      ...article,
      thumbnail: `https://source.unsplash.com/random/400x400?sig=${new Date().getMilliseconds()}`,
    });
  }

  async deleteArticle(id: number) {
    await this.articlesRepository.delete(id);
  }
}
