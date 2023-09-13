import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-gau-home',
  templateUrl: './gau-home.component.html',
  styleUrls: ['./gau-home.component.css'],
})
export class GauHomeComponent {
  data!: any;

  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  
}
