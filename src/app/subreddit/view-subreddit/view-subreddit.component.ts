import { Component, OnInit } from '@angular/core';
import { SubredditModel } from '../subreddit-response';
import { SubredditService } from '../subreddit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-view-subreddit',
  templateUrl: './view-subreddit.component.html',
  styleUrls: ['./view-subreddit.component.css']
})
export class ViewSubredditComponent implements OnInit {

  subredditId: number;
  subreddit: SubredditModel;

  constructor(private subredditService: SubredditService, private activateRoute: ActivatedRoute,private router: Router) { 
    this.subredditId = this.activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getSubredditById();
  }

  private getSubredditById() {
    this.subredditService.getSubreddit(this.subredditId).subscribe(data => {
      this.subreddit = data;
    }, error => {
      throwError(error);
    });
  }

}
