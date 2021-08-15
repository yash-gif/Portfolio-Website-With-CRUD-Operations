import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myportfolio',
  templateUrl: './myportfolio.component.html',
  styleUrls: ['./myportfolio.component.scss']
})
export class MyportfolioComponent implements OnInit {

  banner = "/assets/images/others.jpg";
  banner1 = "/assets/images/banner2.jpeg";
  banner2 = "/assets/images/banner3.jpeg";
  project1 = "/assets/images/movies.png";
  dashboard1 = "/assets/images/dashboard1.png";
  dashboard2 = "/assets/images/dashboard2.png";
  dashboard3 = "/assets/images/dashboard3.png";
  Travel = "/assets/images/Travel.png";
  footer = "/assets/images/footer.png";
  college = "/assets/images/college.jpeg";

  constructor() { }

  ngOnInit() {
  }

}
