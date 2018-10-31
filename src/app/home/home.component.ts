import {Component, Inject, OnInit, AfterViewInit, AfterViewChecked} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

export interface DialogData {
  value: string;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    window.setTimeout(this.aha.bind(this), this.randomIntFromInterval(1000, 10000));
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  aha(): void {
    const dialogRef = this.dialog.open(HomeDialogComponent, {
      width: '250px',
      data: {
        value: 'Marre d\'attendre ?',
        text: ' Ca sert a rien...'
      }
    });
  }
}

@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog.html'
})
export class HomeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<HomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onContinue(): void {
    console.log('home');
    this.onNoClick();
  }
}
