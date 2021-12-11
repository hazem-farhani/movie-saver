import { HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WebRequestService } from '../web-request.service';

@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.scss'],
})
export class ImgUploaderComponent implements OnInit {
  @ViewChild('filename') filename: ElementRef;
  @ViewChild('inputField') inputField: ElementRef;
  selectedFile: File = null;

  constructor(private webService: WebRequestService) { }

  ngOnInit(): void { }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    // change displayed file name
    if (event.target.files.length > 0) {
      this.filename.nativeElement.innerHTML = event.target.files[0].name;
    }
  }

  onUpload() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.webService.upload(fd).subscribe(event => {
      if (event.type === HttpEventType.Sent) {
        // reset the input field
        this.inputField.nativeElement.value = '';
        this.filename.nativeElement.innerHTML = "No file uploaded";
        this.selectedFile = null;
      }
    });
  }

}
