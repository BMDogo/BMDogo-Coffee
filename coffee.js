const buttons = document.querySelectorAll('.btn');
buttons.forEach(activebtn => {
 activebtn.addEventListener('click', () => {
    buttons.forEach(inactivebtn => inactivebtn.classList.remove('active'));
    activebtn.classList.add('active');
 });
});

// show fevourite list function

let allButtons = document.querySelectorAll('.menu-list');
allButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    let items = event.target;
    let mainList = items.closest('li');
    if (mainList) {
      subList = mainList.querySelector('ul');
      if (subList) {
        subList.classList.toggle('hide');
      };
    };
  });
});