import { ColorgiverDirective } from './colorgiver.directive';
//wee create a Mock here to remove the errors
let elRefMock = {
    nativeElement: document.createElement('div')
  };
  
//   let serviceMock = {
//     setTitle: (title: string) => null
//   };
describe('ColorgiverDirective', () => {
  it('should create an instance', () => {
    const directive = new ColorgiverDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
