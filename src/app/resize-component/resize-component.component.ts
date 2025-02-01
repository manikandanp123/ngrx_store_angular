import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resize-component',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './resize-component.component.html',
  styleUrl: './resize-component.component.css'
})
export class ResizeComponentComponent {
  columns = [
    { name: 'Name', width: 150 },
    { name: 'Age', width: 100 },
    { name: 'Country', width: 200 }
  ];

  private resizingColumn: any;
  private startX: number = 0;
  private startWidth: number = 0;

  onResizeStart(event: MouseEvent, column: any) {
    
    console.log("event----",event);
    console.log("column----",column);

    this.resizingColumn = column;
    this.startX = event.clientX;
    this.startWidth = column.width;

    document.addEventListener('mousemove', this.onResizing);
    document.addEventListener('mouseup', this.onResizeEnd);
  }

  onResizing = (event: MouseEvent) => {
    if (this.resizingColumn) {
      const newWidth = this.startWidth + (event.clientX - this.startX);
      this.resizingColumn.width = newWidth > 50 ? newWidth : 50; // Min width
    }
  };

  onResizeEnd = () => {
    this.resizingColumn = null;
    document.removeEventListener('mousemove', this.onResizing);
    document.removeEventListener('mouseup', this.onResizeEnd);
  };
}
