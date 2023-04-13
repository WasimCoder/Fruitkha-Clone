import { Component } from '@angular/core';
interface newsList{
newsImg: string,
newsTopic: string,
newsAuthor: string,
newsDate: string,
newsContent: string,
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newsDetails: newsList[]=[
    {
    newsImg: '/assets/images/news1.jpg',
    newsTopic: 'You will vainly look for fruit on it in autumn.',
    newsAuthor: 'Admin',
    newsDate: '10/02/2022',
    newsContent: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
    },
    {
      newsImg: '/assets/images/news2.jpg',
      newsTopic: "A man's worth has its season, like tomato.",
      newsAuthor: 'Admin',
      newsDate: '10/02/2022',
      newsContent: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
      },
      {
        newsImg: '/assets/images/news3.jpg',
        newsTopic: 'Good thoughts bear good fresh juicy fruit.',
        newsAuthor: 'Admin',
        newsDate: '10/02/2022',
        newsContent: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
        }
  ]

}
