import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { PagubaObiectComponent } from './paguba-obiect.component';
describe('PagubaObiectComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [PagubaObiectComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PagubaObiectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=paguba-obiect.component.spec.js.map