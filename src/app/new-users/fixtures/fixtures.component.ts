import {Component, OnInit} from '@angular/core';
import {MyserviceService} from '../../myservice.service';
import Swal from 'sweetalert2';

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
    gettingTotal: any;
    error;

    ngOnInit() {
        this.gettingData();
    }
// ---------------------For getting page number---------------
    pageChanged(event) {
        this.page = event;
        console.log(event);
    }

    // ----------Subscribing observable for getting data----
    gettingData() {
        this.gettingTotal = 0;
        this.service.getLiveScore().subscribe(res => {
                this.data = res;
                console.log('Displaying complete array', this.data);
                this.results = this.data.results;
                this.current = this.data.current;
                this.upcoming = this.data.upcoming;
                console.log(this.results);
                if (this.data.current.length == 0) {
                    this.current = 'No data Found';
                }
            }
            ,
            error => {
                this.error = error;
                console.log(this.error);
                if (this.error.Message) {
                    this.errorHandling('Message', this.error.Message);
                } else {
                    this.errorHandling('Error', this.error.Error);
                }
            }// -----------Error Handling
        );
    }

    // ----Handling error swal pop up for displaying error or message-----------//
    errorHandling(value, Error) {
        Swal.fire({
            title: value,
            text: Error,
            allowEscapeKey : false,
            allowOutsideClick: false,
            // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
        }).then(function(value) {
        location.reload();
        });
    }

}
