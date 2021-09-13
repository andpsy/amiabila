import { __decorate } from "tslib";
import { Directive, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
let DndDirective = class DndDirective {
    constructor() {
        this.fileDropped = new EventEmitter();
    }
    // Dragover listener
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = true;
    }
    // Dragleave listener
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
    }
    // Drop listener
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
        let files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    }
};
__decorate([
    HostBinding('class.fileover')
], DndDirective.prototype, "fileOver", void 0);
__decorate([
    Output()
], DndDirective.prototype, "fileDropped", void 0);
__decorate([
    HostListener('dragover', ['$event'])
], DndDirective.prototype, "onDragOver", null);
__decorate([
    HostListener('dragleave', ['$event'])
], DndDirective.prototype, "onDragLeave", null);
__decorate([
    HostListener('drop', ['$event'])
], DndDirective.prototype, "ondrop", null);
DndDirective = __decorate([
    Directive({
        selector: '[appDnd]'
    })
], DndDirective);
export { DndDirective };
//# sourceMappingURL=dnd.directive.js.map