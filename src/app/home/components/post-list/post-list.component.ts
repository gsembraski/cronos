import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { PostService } from 'src/app/@api/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  private readonly destroy$: Subject<void> = new Subject();
  public posts: any;

  constructor(private postService: PostService) {}

  loadPosts(): void {
    this.postService
      .getPostsHome()
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.posts = response || [];
        },
      });
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
