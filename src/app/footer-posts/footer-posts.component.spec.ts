import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPostsComponent } from './footer-posts.component';

describe('FooterPostsComponent', () => {
  let component: FooterPostsComponent;
  let fixture: ComponentFixture<FooterPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
