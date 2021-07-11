import { Component, Input, Output, Inject, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { CommonFunctions, ZonaFisiere, Fisier, Formular } from '../entities';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { catchError, map, tap, finalize } from 'rxjs/operators';
import { Subscription, Observable, forkJoin } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
  @Input() ZonaFisiere: ZonaFisiere;  
  @Input() Id: string;
  @Input() step: number;  
  @Output() filesUploaded = new EventEmitter();  
  @Output() zoneCompleted = new EventEmitter();
  public files: any[] = [];
  //uploadSubs: Subscription[] = [];
  uploadSubs: Observable<any>[] = [];
  public CommonFunctions = CommonFunctions;  
  public tipPoza = CommonFunctions.TipPoze[0];
  public contor:number = 0;

  constructor(private http:HttpClient, @Inject(DOCUMENT) private document: any, ) { }

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
    this.tipPoza = CommonFunctions.TipPoze[this.contor];
    this.contor++;
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(event) {
    this.prepareFilesList(event.target.files);
    this.tipPoza = CommonFunctions.TipPoze[this.contor];
    this.contor++;
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.files.splice(index, 1);
  }

  prepareFilesList(files: Array<any>) {  
    var c=0;
    for (const file of files) {
      if(c<5){ //maxim 5 fisiere
        this.files.push(file);
        const formData = new FormData();
        formData.append("id", this.Id);
        formData.append("file", file);
        var url = this.CommonFunctions.SRV_URL + 'Upload/Upload';

        var upload$ = this.http.post(url, formData, { headers: new HttpHeaders({ 
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' }), 
          reportProgress: true,
          observe: 'events'}); // as Observable<any>;
        upload$.pipe(
            finalize(() => this.reset())
        );
        upload$.subscribe(event => {
          if (event.type == HttpEventType.UploadProgress) {
            var progres = Math.round(100 * (event.loaded / event.total));
            this.files[this.files.indexOf(file)].progress = progres;
            if(progres == 100){
              var f = "file_" + this.files.indexOf(file);
              setTimeout (() => {
                   this.document.getElementById(f).style.display = "none";
                }, 2000);                                            
            }
          }else if (event.type === HttpEventType.Response) {
            var fisier = {'Tip':this.tipPoza.name, 'DenumireClient':event.body["fileName"], 'DenumireServer':event.body["fileName"]};
            this.ZonaFisiere.Fisiere.push(fisier);
          }
        }, error => { this.files[this.files.indexOf(file)].error = true; })
        this.uploadSubs.push(upload$);    
      }
      c++;
    }

    Promise.all(this.uploadSubs).then(result => {
      //this.reset();
      //this.filesUploaded.emit(this.files);
    });
  }
/*
  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }
*/
  reset() {
    //this.uploadProgress = null;
    //this.contor++;
    //console.log(this.contor);
    //this.tipPoza = CommonFunctions.TipPoze[CommonFunctions.TipPoze.indexOf(this.tipPoza)+1];
    //this.uploadSubs = [];
  }  

  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  showDiv(step:number, visibility:boolean):void{
    if(this.ZonaFisiere.hasError() == null){
      this.ZonaFisiere.StepCompleted = true;
      //this.zoneCompleted.emit(true);
      if(step === this.CommonFunctions.step)
        this.zoneCompleted.emit(this.ZonaFisiere);
    }
    CommonFunctions.showDiv(step, visibility);
  }  
}
