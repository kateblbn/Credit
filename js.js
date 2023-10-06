const dol = document.getElementById('dol');
const showDol = document.querySelector('.show__dol');
const showValue = document.querySelector('.show__value');
const month = document.querySelector('#month');
const result = document.querySelector('.amount__result');
const amountProcent = document.querySelector('.amount__procent');
let procent = 10;

dol.addEventListener('input', auto);

function auto() {
showDol.innerHTML = dol.value;
let num = Number(dol.value)
let sum =( ( (num * procent) / 100 ) + num ).toFixed(2);
result.innerHTML = sum;
}
auto();

month.addEventListener('input', showMonth);

function showMonth() {
    showValue.innerHTML = month.value;
    let month_date = Number(month.value)
if (month_date < 6) {
    procent = 10;
} else if (month_date >= 6 && month_date <= 12 ) {
    procent = 9.5;
} else if ( month_date > 12 && month_date <24) {
    procent = 9;
} else {
    procent = 8.5;}
amountProcent.innerHTML = procent;
auto();

}
showMonth();


