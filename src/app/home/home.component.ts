import {Component, Inject, OnInit} from '@angular/core';
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
    console.log(this.dialog);
    window.setTimeout(this.aha.bind(this), 10000);
  }

  aha(): void {
    const dialogRef = this.dialog.open(HomeDialogComponent, {
      width: '250px',
      data: {
        value: 'Marre d\'attendre ?',
        text: 'Ca ne s\'arretera pas.'
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
}
