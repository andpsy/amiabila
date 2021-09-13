import { __decorate, __param } from "tslib";
import { Component, Input, Output, Inject, ViewChild, EventEmitter } from '@angular/core';
import { CommonFunctions, USE_FORM, UPLOAD_FILE_THUMB_SIZE } from '../entities';
import { HttpHeaders, HttpEventType } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
let FileUploadComponent = class FileUploadComponent {
    constructor(http, document) {
        this.http = http;
        this.document = document;
        this.filesUploaded = new EventEmitter();
        this.zoneCompleted = new EventEmitter();
        this.files = [];
        this.CommonFunctions = CommonFunctions;
        //public tipPoza = CommonFunctions.TipPoze[0];
        this.tipPoza = null;
        this.indexPoza = null;
        //public contor:number = 0;
        this.use_form = USE_FORM;
        this.ufts = UPLOAD_FILE_THUMB_SIZE;
        this.zonashow = null;
        this.icon = null;
    }
    ngOnInit() {
        this.zonashow = this.step == 25 ? true : false;
        this.icon = this.step == 25 ? 'expand_less' : 'expand_more';
        //this.tipPoza = this.TipFisiere[0];
        this.getSelectedTip();
    }
    ngOnDestroy() {
    }
    getSelectedTip() {
        for (var i = 0; i < this.ZonaFisiere.Fisiere.length; i++) {
            if (this.ZonaFisiere.Fisiere[i].Tip.selected) {
                this.tipPoza = this.ZonaFisiere.Fisiere[i].Tip;
                this.indexPoza = i;
                return;
            }
        }
    }
    changeSelectedTip(dosar) {
        this.files = [];
        var idx = this.ZonaFisiere.Fisiere.indexOf(dosar);
        for (var i = 0; i < this.ZonaFisiere.Fisiere.length; i++) {
            if (i == idx)
                this.ZonaFisiere.Fisiere[i].Tip.selected = true;
            else
                this.ZonaFisiere.Fisiere[i].Tip.selected = false;
        }
        this.getSelectedTip();
    }
    onFileDropped($event) {
        //this.prepareFilesList($event);
        //this.tipPoza = CommonFunctions.TipPoze[this.contor];
        //this.contor++;
        this.prepareFilesList($event); /*.subscribe((response) => {
          //this.uploadSubs.forEach((subscription) => subscription.unsubscribe());
          if(this.ZonaFisiere.hasError() == null){
            this.ZonaFisiere.StepCompleted = true;
          }
          this.filesUploaded.emit(this.ZonaFisiere);
        });*/
    }
    fileBrowseHandler(event) {
        //this.prepareFilesList(event.target.files);
        //this.tipPoza = CommonFunctions.TipPoze[this.contor];
        //this.contor++;
        this.prepareFilesList(event.target.files); /*.subscribe((response) => {
          //this.uploadSubs.forEach((subscription) => subscription.unsubscribe());
          if(this.ZonaFisiere.hasError() == null){
            this.ZonaFisiere.StepCompleted = true;
          }
          this.filesUploaded.emit(this.ZonaFisiere);
        });*/
    }
    deleteFile(dosar, i) {
        var url = this.CommonFunctions.SRV_URL + 'Upload/Delete/' + this.Id + '/' + dosar.Fisiere[i].DenumireServer;
        var delete$ = this.http.get(url, { headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }) }); // as Observable<any>;
        delete$.subscribe(response => {
            this.files.splice(i, 1);
            dosar.Fisiere.splice(i, 1);
            this.ZonaFisiere.StepCompleted = false;
            if (this.ZonaFisiere.hasError() == null) {
                this.ZonaFisiere.StepCompleted = true;
            }
            this.filesUploaded.emit(this.ZonaFisiere);
        }, error => { console.warn(error); });
    }
    prepareFilesList(files) {
        var c = 0;
        for (const file of files) {
            if ((this.tipPoza.max_allowed == null && c < 1) || (this.tipPoza.max_allowed != null && c < this.tipPoza.max_allowed)) { //maxim 5 fisiere
                this.files.push(file);
                const formData = new FormData();
                formData.append("id", this.Id);
                formData.append("file", file);
                var url = this.CommonFunctions.SRV_URL + 'Upload/Upload';
                var upload = this.http.post(url, formData, { headers: new HttpHeaders({
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    }),
                    reportProgress: true,
                    observe: 'events' }); // as Observable<any>;
                /*
                upload.pipe(
                    finalize(() => this.reset())
                );
                */
                var uploadSubscription$ = upload.subscribe(event => {
                    if (event.type == HttpEventType.UploadProgress) {
                        var progres = Math.round(100 * (event.loaded / event.total));
                        this.files[this.files.indexOf(file)].progress = progres;
                        if (progres == 100) {
                            var f = "file_" + this.files.indexOf(file);
                            try {
                                setTimeout(() => {
                                    try {
                                        this.document.getElementById(f).style.display = "none";
                                    }
                                    catch (e) {
                                        ;
                                    }
                                }, 2000);
                            }
                            catch (e) {
                                ;
                            }
                        }
                    }
                    else if (event.type === HttpEventType.Response) { //s-a incarcat fisierul
                        //var fisier = {'Tip':this.tipPoza.name, 'DenumireClient':event.body["fileName"], 'DenumireServer':event.body["fileName"]};
                        var fisier = { 'DenumireClient': event.body["fileName"], 'DenumireServer': event.body["fileName"] };
                        //this.ZonaFisiere.Fisiere.push(fisier);
                        this.ZonaFisiere.Fisiere[this.indexPoza].Fisiere.push(fisier);
                        this.refresh();
                    }
                }, error => { this.files[this.files.indexOf(file)].error = true; });
                //this.uploadSubs.push(upload); //uploadSubscription$);    
            }
            c++;
        }
        /*
        Promise.all(this.uploadSubs).then(result => {
          //this.reset();
          if(this.ZonaFisiere.hasError() == null){
            this.ZonaFisiere.StepCompleted = true;
          }
          this.filesUploaded.emit(this.ZonaFisiere);
        });
        */
        //return forkJoin(this.uploadSubs);
    }
    /*
      cancelUpload() {
        this.uploadSub.unsubscribe();
        this.reset();
      }
    */
    refresh() {
        if (this.ZonaFisiere.hasError() == null) {
            this.ZonaFisiere.StepCompleted = true;
        }
        this.filesUploaded.emit(this.ZonaFisiere);
    }
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
    showDiv(step, visibility) {
        if (this.ZonaFisiere.hasError() == null) {
            this.ZonaFisiere.StepCompleted = true;
            //this.zoneCompleted.emit(true);
            if (step === this.CommonFunctions.step)
                this.zoneCompleted.emit(this.ZonaFisiere);
        }
        CommonFunctions.showDiv(step, visibility);
    }
    changeZona() {
        this.zonashow = !this.zonashow;
        this.icon = !this.zonashow ? 'expand_more' : 'expand_less';
    }
    calculateThumbWH(dosar) {
        return dosar.Fisiere.length == 1 ? ((this.ufts - 4) + 'px') : dosar.Fisiere.length / 2 <= 2 ? ((Math.round(this.ufts / 2) - 4) + 'px') : ((Math.round(this.ufts / 3) - 4) + 'px');
    }
};
__decorate([
    ViewChild("fileDropRef", { static: false })
], FileUploadComponent.prototype, "fileDropEl", void 0);
__decorate([
    ViewChild("uploadZone", { static: false })
], FileUploadComponent.prototype, "uploadZone", void 0);
__decorate([
    Input()
], FileUploadComponent.prototype, "ZonaFisiere", void 0);
__decorate([
    Input()
], FileUploadComponent.prototype, "Id", void 0);
__decorate([
    Input()
], FileUploadComponent.prototype, "step", void 0);
__decorate([
    Output()
], FileUploadComponent.prototype, "filesUploaded", void 0);
__decorate([
    Output()
], FileUploadComponent.prototype, "zoneCompleted", void 0);
FileUploadComponent = __decorate([
    Component({
        selector: 'app-file-upload',
        templateUrl: './file-upload.component.html',
        styleUrls: ['./file-upload.component.css']
    }),
    __param(1, Inject(DOCUMENT))
], FileUploadComponent);
export { FileUploadComponent };
//# sourceMappingURL=file-upload.component.js.map