function calc() {
    var type_pie = document.getElementById("type_pie");
    var count = document.getElementById("count").value;
    let chek = document.querySelector('#glaze');
    const form = document.getElementById("radios");
    if(count==""){alert("Вы не указали количество");}
    else if(count<0){alert("Количество не может быть отрицательным");}
    else{
        var price = 1;
        if (form.elements["toward"].value=="125"){
            document.getElementById("selection").style.display="none";
            document.getElementById("chec").style.display="none";
            price = parseInt(count) * parseInt(form.elements["toward"].value);
            price += parseInt(form.elements["toward"].value);
            document.getElementById('result').innerHTML = "Стоимость равна: "+ price +" р.";}
        else if(form.elements["toward"].value=="45"){
            document.getElementById("selection").style.display="block";
            document.getElementById("chec").style.display="none";
            price = parseInt(count) * parseInt(form.elements["toward"].value);
             price += parseInt(type_pie.options[type_pie.selectedIndex].value);
            document.getElementById('result').innerHTML = "Стоимость равна: "+ price +" р.";
        }
        else if(form.elements["toward"].value=="100"){
            document.getElementById("selection").style.display="none";
            document.getElementById("chec").style.display="block";
            price = parseInt(count) * parseInt(form.elements["toward"].value);
            if(chek.checked){price+=25;}
            document.getElementById('result').innerHTML = "Стоимость равна: "+ price +" р.";}
    }
}
