function calc() {
    var type_pie = document.getElementById("type_pie");
    var count = document.getElementById("count").value;
    if (isNaN(count)) {alert("Некорректное значение");return false;}
    let chek = document.querySelector('#glaze');
    const form = document.getElementById("radios");
    if(count==""){alert("Вы не указали количество");}
    else if(count<0){alert("Количество не может быть отрицательным");}
    else{
        var price = 0;
        if (form.elements["toward"].value=="125"){
            price += parseInt(form.elements["toward"].value);
            price = parseInt(count) * price;
            document.getElementById('result').innerHTML = "Стоимость равна: "+ price +" р.";}
        else if(form.elements["toward"].value=="45"){
            price += parseInt(form.elements["toward"].value);
            price += parseInt(type_pie.options[type_pie.selectedIndex].value);
            price = parseInt(count) * price;
            document.getElementById('result').innerHTML = "Стоимость равна: "+ price +" р.";
        }
        else if(form.elements["toward"].value=="100"){
            price += parseInt(form.elements["toward"].value);
            price = parseInt(count) * price;
            if(chek.checked){price+=25;}
            document.getElementById('result').innerHTML = "Стоимость равна: "+ price +" р.";}
    }
}

function view(event){
    var type_pie = document.getElementById("type_pie");
    let chek = document.querySelector('#glaze');
    const form = document.getElementById("radios");
    if (form.elements["toward"].value=="125"){
        document.getElementById("selection").style.display="none";
        document.getElementById("chec").style.display="none";
    }
    else if(form.elements["toward"].value=="45"){
        document.getElementById("selection").style.display="block";
        document.getElementById("chec").style.display="none";
    }
    else if(form.elements["toward"].value=="100"){
        document.getElementById("selection").style.display="none";
        document.getElementById("chec").style.display="block";
    }
}

radios.addEventListener('change', view)
    
but.addEventListener('click', calc);
