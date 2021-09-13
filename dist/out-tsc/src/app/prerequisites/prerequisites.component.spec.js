import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { PrerequisitesComponent } from './prerequisites.component';
describe('PrerequisitesComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [PrerequisitesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PrerequisitesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=prerequisites.component.spec.js.map