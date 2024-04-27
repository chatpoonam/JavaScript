let display = document.getElementById('inputBox');

let butttons = document.querySelectorAll('button');

let buttonsArray = Array.from(butttons);
let string = '';

// buttonsArray.forEach(function(btn){
    buttonsArray.forEach(btn => {

        // btn.addEventListener('click',function(event){
            btn.addEventListener('click',(e) => {


                if (e.target.innerHTML == 'DEL') {
                    string = string.substring(0, string.length-1);
                    display.value = string;
                }

                else if (e.target.innerHTML == 'AC') {
                    string = '';
                    display.value = string;
                }

                else if (e.target.innerHTML == '=') {
                    string = eval(string);
                    display.value = string;
                }

                else {
                string += e.target.innerHTML;
                display.value = string;
                }


            console.log(e.target.innerHTML);
        });

});


// console.log(buttonsArray);

