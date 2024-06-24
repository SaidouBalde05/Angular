import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, UpperCasePipe, DatePipe, CurrencyPipe } from '@angular/common';
import { FaceSnapsService } from '../service/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
 @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;

  myPercentNumber: number = 336.54 ;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService:FaceSnapsService){

  }

  ngOnInit(): void {

    this.title = 'Archibald';
      this.description = 'Mon meilleur ami depuis toujours !';
      this.createdAt = new Date();
      this.snaps = 5;
      this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';

      this.snapButtonText = 'Liker';
    
  }
 
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

      unSnap() {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
        this.snapButtonText = 'Liker';
        this.userHasSnapped = false;
      }
    
    snap() {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
        this.snapButtonText = 'deja Liker';
        this.userHasSnapped = true;
    }
 
} 