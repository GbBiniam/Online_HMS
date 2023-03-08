import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  public propId: number | undefined;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  property = new Property();
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit() {
    this.propId = this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data:Property)=>{
        this.property = data['prp'];
      }
    )
    // this.route.params.subscribe((params) => {
    //   this.housingService
    //     .getProperty(this.propId)
    //     .subscribe((data: Property) => {
    //       this.property = data;
    //     });
    // });

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },

    ];

    this.galleryImages = [
      {
        small: 'assets/images/in-1.jpg',
        medium: 'assets/images/in-1.jpg',
        big: 'assets/images/in-1.jpg',
      },
      {
        small: 'assets/images/in-1.jpg',
        medium: 'assets/images/in-1.jpg',
        big: 'assets/images/in-1.jpg',
      },
      {
        small: 'assets/images/in-2.jpg',
        medium: 'assets/images/in-2.jpg',
        big: 'assets/images/in-2.jpg'
      },{
        small: 'assets/images/in-3.jpg',
        medium: 'assets/images/in-3.jpg',
        big: 'assets/images/in-3.jpg'
      },
      {
        small: 'assets/images/in-4.jpeg',
        medium: 'assets/images/in-4.jpeg',
        big: 'assets/images/in-4.jpeg'
      }
    ];
  }
}
