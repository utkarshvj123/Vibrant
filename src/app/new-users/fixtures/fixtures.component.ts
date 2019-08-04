import {Component, OnInit} from '@angular/core';
import {MyserviceService} from '../../myservice.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  constructor(private service: MyserviceService) {
  }

  data: any;
  results: any;
  current: any;
  upcoming: any;
  page = 0;
  newObjectKey = {};
  newObjectValue = {};
  newPage = 0;
  gettingTotal: any;

  ngOnInit() {
    this.gettingTotal = 0;

    this.service.getLiveScore().subscribe(res => {
      this.data = res;
      console.log('Displaying complete array', this.data);
      this.results = this.data.results;
      this.current = this.data.current;
      this.upcoming = this.data.upcoming;
      console.log('Upcomming Match.....', this.upcoming);
//       for (const a of this.results) {
//   console.log(a);
//   console.log(Object.keys(a));
//   this.newObjectKey = {
//     key: Object.keys(a),
//   };
//   this.newObjectValue = {
//           key: Object.values(a),
//         };
//   console.log(Object.values(a));
// }
//       console.log(this.newObjectKey);

      console.log(this.results);
    });
  }

  pageChanged(event) {
    this.page = event;
    console.log(event);
    // this.getSearchQuery(event);
  }

  pageChangedInternalArray(event) {
    this.newPage = event;
    console.log(event);
  }
}
