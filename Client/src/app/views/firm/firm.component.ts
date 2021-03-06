import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';

@Component({
  selector: 'app-firm',
  templateUrl: './firm.component.html',
  styleUrls: ['./firm.component.scss']
})
export class FirmComponent implements OnInit {

  selectedFile!: File[];
  firm:any={};
  image:any;
  file:any; 
  banks:any=[];

  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
    this.getAllBanks();
  }
  onFileSelected(event:any)
  {
    console.log("firm",event);
    // this.selectedFile = <File> event.target.files[0]
    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=()=>{
      this.image=reader.result;
    }
  }

  upload()
  {
    alert("submit");
    this.service.Upload(this.firm).subscribe(res=>{
      console.log("fiem",res)
    })
  }

  getAllBanks()
  {
    this.service.AllBank().subscribe(res=>{
      console.log("banks",res);
      this.banks=res;
    })
  }
  // UploadImage()
  // {
  //   const fd= new FormData();
  //   for(var i=0 ; i<this.selectedFile.length;i++)
  //   {
  //     fd.append("file",this.selectedFile[i],this.firm.firmName)

  //   }
  //  this.service.UploadImage(fd).subscribe(res=>{
  //     alert("uploaded")
  //  })
  // }

  // UploadImage(firmName:any , image:any)
  // {
  //  this.image=image;
  // }
}
