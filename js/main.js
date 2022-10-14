var dollar = document.querySelector('.dollar');
var som = document.querySelector('.som');
var form = document.querySelector('.form');
var titled = document.querySelector('.dtitle');
var titles = document.querySelector('.stitle');
var form1 = document.querySelector('.form1');

form.addEventListener('submit', function(evnt){
    evnt.preventDefault();
    titles.textContent = dollar.value + ' $ ' + '= ' + dollar.value * 11100 + ' So`m' ;
    titled.textContent = 'Dollar';
    dollar.value = '';
});

form1.addEventListener('submit', function(evnt){
    evnt.preventDefault();
    titled.textContent = som.value + ' So`m ' + '= ' + Number.parseFloat(som.value / 11100).toFixed(3) + ' $';
    titles.textContent = 'So`m';
    som.value = '';
});