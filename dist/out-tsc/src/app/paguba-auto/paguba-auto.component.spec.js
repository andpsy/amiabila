import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { PagubaAutoComponent } from './paguba-auto.component';
describe('PagubaAutoComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [PagubaAutoComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PagubaAutoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=paguba-auto.component.spec.js.map