function addBinary() {
    let bin1 = document.getElementById("binary1").value.trim();
    let bin2 = document.getElementById("binary2").value.trim();
 
   
    if (!/^[01]+$/.test(bin1) || !/^[01]+$/.test(bin2)) {
        alert("Zadejte prosím platná binární čísla (pouze 0 a 1).");
        return;
    }
 
    let result = binaryAddition(bin1, bin2);
    document.getElementById("result").innerText = result;
}
 
function binaryAddition(bin1, bin2) {
    let max_length = Math.max(bin1.length, bin2.length);
    let result = Array(max_length + 1).fill(0);
 
    bin1 = bin1.padStart(max_length, '0');
    bin2 = bin2.padStart(max_length, '0');
 
    let carry = 0;
 
    for (let i = max_length - 1; i >= 0; i--) {
        let val = carry;
        val += parseInt(bin1[i]) + parseInt(bin2[i]);
        result[i + 1] = val % 2;
        carry = Math.floor(val / 2);
    }
 
    if (carry) {
        result[0] = 1;
    } else {
        result.shift();
    }
 
    return result.join('');
}