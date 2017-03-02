import { RoboticsGuiPage } from './app.po';

describe('robotics-gui App', function() {
  let page: RoboticsGuiPage;

  beforeEach(() => {
    page = new RoboticsGuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
