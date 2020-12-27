document.getElementById('submit').addEventListener('click', function () {

    document.querySelector('.resultField').style.display = "block"; //Click ResultField Show;
    document.querySelector('#nameField').style.display = "none"; //Click NameField Not Show;

    var getVal = document.getElementById('name').value;
    document.getElementById('showName').innerText = getVal;
    var txtVal = Math.random() * 10;
    var txtCeil = Math.ceil(txtVal);
    var showTxt = "";

    if (getVal == "") {
        document.getElementById('showName').innerText = "";
        showTxt = "দয়া করে আপনার নাম লিখুন";
    } else if (!isNaN(getVal)) {
        document.getElementById('showName').innerText = "";
        showTxt = "দয়া করে অক্ষর লিখুন";
    } else if (txtCeil == 1) {
        showTxt = "খুব ভালো ছেলে";
    } else if (txtCeil == 2) {
        showTxt = "সবসময় প্রেম নিয়ে ভাবে";
    } else if (txtCeil == 3) {
        showTxt = "সবসময় হতাশায় ভোগে";
    } else if (txtCeil == 4) {
        showTxt = "কোনো কাজের সঠিক সিদ্ধান্তে আসতে পারে না";
    } else if (txtCeil == 5) {
        showTxt = "প্রেমে হাবু ডুবু খাচ্ছে";
    } else if (txtCeil == 6) {
        showTxt = "অন্যায়ের প্রতিবাদে ঝাপিয়ে পড়ে";
    } else if (txtCeil == 7) {
        showTxt = "সবসময় লাইফ নিয়ে চিন্তা করে";
    } else if (txtCeil == 8) {
        showTxt = "সর্বদা সত্য কথা বলে";
    } else if (txtCeil == 9) {
        showTxt = "শুধু বিয়ে নিয়ে চিন্তা করে";
    } else if (txtCeil == 10) {
        showTxt = "খারাপ চিন্তা মাথায় নিয়ে ঘুরে বেড়ায়";
    }

    document.getElementById('show').innerHTML = showTxt;
    var getVal = document.getElementById('name').value = ""; // Click Name Field Refresh;
    document.getElementById('showErrMsg').innerHTML = errorMessage;

    // Only One Click System;

    // oneClickButton.target.removeEventListener(oneClickButton.type, arguments.callee);

});


// Back To Home Page

document.getElementById('backHome').addEventListener('click', function () {

    document.querySelector('.resultField').style.display = "none"; //Click ResultField Not Show;
    document.querySelector('#nameField').style.display = "block"; //Click NameField Show;

});