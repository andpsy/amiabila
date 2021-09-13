import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { DocumenteNecesareComponent } from './documente-necesare.component';
describe('DocumenteNecesareComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [DocumenteNecesareComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DocumenteNecesareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=documente-necesare.component.spec.js.map