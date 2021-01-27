//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')) {
            count -= 1;
        }
        if(styles.contains('reset')) {
            count = 0;
        }
        if(styles.contains('increase')) {
            count += 1;
        }

        if(count > 0) {
            value.style.color = 'green';
        }
        else if(count == 0) {
            value.style.color = 'black';
        }
        else {
            value.style.color = 'red';
        }
        value.textContent = count;
    })
});