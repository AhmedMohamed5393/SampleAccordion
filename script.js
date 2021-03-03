var first       = document.getElementById('first'),
    second      = document.getElementById('second'),
    collapseOne = document.getElementById('collapseOne'),
    collapseTwo = document.getElementById('collapseTwo');
first.addEventListener('click', () => {
    first.setAttribute('data-toggle', 'collapse');
    collapseTwo.style.display = 'none';
    if(collapseOne.style.display == 'block'){
        collapseOne.style.display = 'none';
    }else if(collapseOne.style.display == 'none'){
        collapseOne.style.display = 'block';
    }
});
second.addEventListener('click', () => {
    second.setAttribute('data-toggle', 'collapse');
    collapseOne.style.display = 'none';
    if(collapseTwo.style.display == 'block'){
        collapseTwo.style.display = 'none';
    }else if(collapseTwo.style.display == 'none'){
        collapseTwo.style.display = 'block';
    }
});