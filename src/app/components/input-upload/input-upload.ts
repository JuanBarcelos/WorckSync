import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-upload',
  imports: [],
  templateUrl: './input-upload.html',
  styleUrl: './input-upload.scss',
})
export class InputUpload {
 @Output() fileUploaded = new EventEmitter<File>();
  isDragOver = false;

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    const file = event.dataTransfer?.files?.[0];
    if (file) this.emitFile(file);
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) this.emitFile(file);
  }

  private emitFile(file: File) {
    if (!file.name.endsWith('.xlsx')) {
      alert('Formato inválido. Apenas arquivos .xlsx são aceitos.');
      return;
    }
    this.fileUploaded.emit(file);
  }
}
