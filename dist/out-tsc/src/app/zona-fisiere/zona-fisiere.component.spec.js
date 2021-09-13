import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ZonaFisiereComponent } from './zona-fisiere.component';
describe('ZonaFisiereComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ZonaFisiereComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ZonaFisiereComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=zona-fisiere.component.spec.js.map