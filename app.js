function getValue(e) {
    var a = document.getElementById('show')
    a.value +=e

}
function calculate() {
    var a = document.getElementById('show')
    var val = a.value
    var final = eval(val)
    a.value = final
   
}
function clearValue() {
    var a = document.getElementById('show')
    a.value = ''
}