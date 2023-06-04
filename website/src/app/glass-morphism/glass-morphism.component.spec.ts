import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassMorphismComponent } from './glass-morphism.component';

describe('GlassMorphismComponent', () => {
  let component: GlassMorphismComponent;
  let fixture: ComponentFixture<GlassMorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GlassMorphismComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassMorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
