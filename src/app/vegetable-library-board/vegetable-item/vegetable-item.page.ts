import { Component, OnInit } from '@angular/core';
import { VegetableService } from '../vegetable.service';
import { Subscription } from 'rxjs';
import { Vegetable } from '../vegetable.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vegetable-item',
  templateUrl: './vegetable-item.page.html',
  styleUrls: ['./vegetable-item.page.scss'],
})
export class VegetableItemPage implements OnInit {

  public vegetableSub: Subscription;
  public vegetableLoaded: Vegetable;

  constructor(private vegetableService: VegetableService,
              private route: ActivatedRoute,
              private router: Router)   {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('vegetableId')) {
        this.router.navigateByUrl('/vegetable-library-board');
      }
      this.vegetableSub = this.vegetableService.getVegetable(paramMap.get('vegetableId')).subscribe(vegetable => 
      this.vegetableLoaded = vegetable
      );
    });
    console.log(this.vegetableLoaded);
  }

  onImagePicked(imageData: string) {

  }

}
