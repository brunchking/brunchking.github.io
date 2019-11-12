var BMI = {};
BMI.getBMI = function (a, b) {
    var bmi = (b / ((a / 100) * (a / 100))).toFixed(1);
    return bmi;
};
BMI.idealweight = function (a) {
    var x = (a - 100) * 0.9;
    return x;
};
function Cal(form) {
    var a = eval(form.height.value);
    var b = eval(form.weight.value);
    var bmi = eval(form.BMI.value);
    var bmiValue = BMI.getBMI(a, b);
    BMI.disp_alert(bmiValue);
    form.BMI.value = bmiValue;
}
BMI.disp_alert = function (bmi) {
    if (bmi < 18.5) {
        alert("您的體重過瘦!");
    }
    else if (bmi >= 18.5 && bmi < 25) {
        alert("你的體重正常,請繼續保持!");
    }
    else if (bmi >= 25 && bmi < 30) {
        alert("您的體重過重");
    }
    else {
        alert("超重");
    }
}

function goBack() {
    window.history.back();
}