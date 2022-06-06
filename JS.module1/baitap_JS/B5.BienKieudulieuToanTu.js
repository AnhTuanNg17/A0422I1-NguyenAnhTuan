function convert() {
    let giatrivao = document.getElementById('dauvao').value;
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    let result;
    if (select1 == select2) {
        result = (giatrivao)
    }
    if (select1 == "a" && select2 == "b") {
        result = (giatrivao/24000)
    }
    if (select1 == "b" && select2 == "a") {
        result = (24000*giatrivao)
    }
    document.getElementById('result').innerText = "Result = " + result;
}