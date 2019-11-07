// const { toMatchImageSnapshot } = require('jest-image-snapshot');
// expect.extend({ toMatchImageSnapshot });

describe('Button', () => {
  it('visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=button--text');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });
});