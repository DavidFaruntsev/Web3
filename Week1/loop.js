const main = document.querySelector('main');

for(var i=0; i < 36; i++){
    var newDiv = document.createElement('div');
    newDiv.id = 'r'+i;
    newDiv.className = 'slot';
    main.appendChild(newDiv);
}


