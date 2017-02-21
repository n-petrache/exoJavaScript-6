function validation() {
    var num1 = document.getElementById("premier_nombre").value;
    var num2 = document.getElementById("deuxieme_nombre").value;

    alert(parseInt(num1) % parseFloat(num2));
};
