import {Component, OnInit} from '@angular/core';
import {FileUploadServiceService} from "../../services/file-upload-service.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit{
  shortLink: string = '';
  loading: boolean = false;
  file: File| null= null;

  constructor(private fileUploadService: FileUploadServiceService) {

  }
   ngOnInit(): void {

  }
  onChange(event: any){
    this.file = event.target.files[0];
  }

  onUpload(){
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) =>{
        if(typeof (event) === 'object'){
          this.shortLink = event.link;

          this.loading = false;
        }
      }
    )
  }


}
