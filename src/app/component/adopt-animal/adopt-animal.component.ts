import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { AdopterserviceService } from '../../services/adopterservice.service';
import { adopter } from '../../model/adopter.model';




@Component({
  selector: 'app-adopt-animal',
  templateUrl: './adopt-animal.component.html',
  styleUrls: ['./adopt-animal.component.css']
})
export class AdoptAnimalComponent implements OnInit {

  @Input() animalid: string;
  @Input() isNew: boolean;
  @Output() onSave = new EventEmitter<object>();

  adopter: adopter= new adopter();

  constructor(
    private adopterService:AdopterserviceService
  ) { }

  ngOnInit() {
  }

  handleNewAdopter() {
    
        if (this.isNew) {
          this.adopter.animalid = this.animalid;
            this.adopterService.postadopter(this.adopter).subscribe((res) => {
              console.log('SAVED');
              this.onSave.emit(res);
            });
      }
    }
}

