class PageViewModel {
  randomNumber$ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  color$ = ko.observable('')

  renderColor(){
    console.log(111)
    this.color$ = '';
    for(let i = 0; i  < 6; i++){
      this.color$ += this.randomNumber$[Math.floor(Math.random() * this.randomNumber$.length)]
    }
    document.querySelector('.color').textContent = '#' + this.color$;
    document.body.style.backgroundColor = '#' + this.color$;
  }
}

ko.applyBindings(new PageViewModel())
