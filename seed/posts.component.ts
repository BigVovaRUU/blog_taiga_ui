import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

// Taiga UI (standalone entities)
import {TuiRoot} from '@taiga-ui/core';
import {TuiButton, TuiLink, TuiTextfield} from '@taiga-ui/core';
import {TuiTag} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';
import {FormsModule} from '@angular/forms';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  tags: string[];
}

@Component({
  standalone: true,
  selector: 'app-posts',
  imports: [
    CommonModule,
    FormsModule,
    // Taiga UI
    TuiButton,
    TuiLink,
    TuiTextfield,
    TuiTag,
    TuiCardMedium,
  ],
  templateUrl: './posts.component.html',
})
export class PostsComponent {
  query = '';
  posts: Post[] = [
    { id: 1, title: 'Hello Taiga UI', excerpt: 'Почему нам нравится Taiga UI и чем он отличается.', tags: ['ui', 'angular'] },
    { id: 2, title: 'Standalone компоненты', excerpt: 'Как Taiga UI использует standalone API, без NgModule.', tags: ['standalone'] },
    { id: 3, title: 'Маленький блог', excerpt: 'Мини‑пример блога на Angular + Taiga UI + Docker.', tags: ['demo', 'docker'] },
  ];

  get filtered(): Post[] {
    const q = this.query.trim().toLowerCase();
    return q ? this.posts.filter(p => (p.title + ' ' + p.excerpt + ' ' + p.tags.join(' ')).toLowerCase().includes(q)) : this.posts;
  }
}