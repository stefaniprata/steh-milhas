import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogContent, MatDialogActions } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})

export class DialogAnimationsExampleDialog {
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
}
