export default class Navigation {
  constructor() {
    this.mainPage = document.querySelector('.bookDisplay');
    this.addPage = document.querySelector('.bookAdding');
    this.contactPage = document.querySelector('.contact');
    this.first = document.querySelector('.first');
    this.second = document.querySelector('.second');
    this.third = document.querySelector('.third');
  }

  navigationPage() {
    this.first.addEventListener('click', () => {
      this.addPage.style.display = 'none';
      this.contactPage.style.display = 'none';
      this.mainPage.style.display = 'flex';
    });

    this.second.addEventListener('click', () => {
      this.addPage.style.display = 'flex';
      this.contactPage.style.display = 'none';
      this.mainPage.style.display = 'none';
    });

    this.third.addEventListener('click', () => {
      this.addPage.style.display = 'none';
      this.contactPage.style.display = 'flex';
      this.mainPage.style.display = 'none';
    });
  }
}
