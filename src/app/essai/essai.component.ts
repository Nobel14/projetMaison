import { Component, OnInit } from '@angular/core';
import{ EssaiService} from '../services/essai.service';
import { Essai } from '../services/essai.service';
@Component({
  selector: 'app-essai',
  templateUrl: './essai.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class EssaiComponent implements OnInit {
essais: Essai[];
  constructor(private essaiService: EssaiService) { }

  ngOnInit() {
    this.essaiService.getEssai().subscribe(essais=>{
      this.essais= essais;
    });
    console.log('ngOnInit ran');
  }

}
