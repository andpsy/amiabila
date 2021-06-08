import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { DisplayErrorsComponent } from './display-errors.component';
describe('DisplayErrorsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [DisplayErrorsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DisplayErrorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=display-errors.component.spec.js.map