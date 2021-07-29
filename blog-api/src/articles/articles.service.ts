import { Injectable } from '@nestjs/common';
import { Article, articles } from './dummy';

@Injectable()
export class ArticlesService {
  getArticles() {
    return articles;
  }

  getArticle(id: number) {
    return articles.find((article) => article.id === id);
  }

  addArticle(article: Article) {
    const id = articles.length + 2;
    const thumbnail = `https://source.unsplash.com/random/400x400?sig=${id}`;
    articles.push({ ...article, id, thumbnail });
  }
}
