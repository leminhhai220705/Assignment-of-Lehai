

function isPrime(num) {
    if (num <= 1){ alert('vui long kiem tra lai') };
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {alert('Vui long kiem tra lai')} ;
    }
    return true;
}

function calculateSum() {
    const numberA = parseInt(document.getElementById('numberA').value);
    const numberB = parseInt(document.getElementById('numberB').value);

    if (isNaN(numberA) || isNaN(numberB) || numberA >= numberB) {
        alert('Vui long thu lai');
        return;
    }

    let primeSum = 0;
    for (let i = numberA; i <= numberB; i++) {
        if (isPrime(i)) {
            primeSum += i;
        }
    }

    document.getElementById('calculate').innerHTML = ''; // Xóa nội dung cũ

if (primeSum === 0) {
    alert(`Khong co so nao thoa man giua ${numberA} va ${numberB}.`);
} else {
    alert(`Tong cua hai so ${numberA} va ${numberB}: ${primeSum}`);
}
}

//Bai 2:
function numberOneTriangle (x){

if (x<1 || x>10){
    alert("Khong thoa man dieu kien");
    return;
}

    for (i=1; i<=x; i++){
        x='';
        for (g=1; g<=i; g++){
            x += '1';
        }
        console.log(x);
    }

}




