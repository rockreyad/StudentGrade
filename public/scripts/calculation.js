const calcy = () => {
    let web = document.getElementById('web');
    let math = document.getElementById('math');
    let computer = document.getElementById('computer');
    let phy = document.getElementById('phy');
    let output = document.getElementById('show_result');

    let result = (parseFloat(web.value) + parseFloat(math.value) + parseFloat(computer.value) + parseFloat(phy.value));

    let percentage = ((result / (4 * 100)) * 100).toFixed(2);
    console.log('Clicked!');

    function bg_color(source) {
        source.classList.add('bg-red-500');
    };

    function rounded(source) {
        source.classList.add('rounded');
    };

    function bg_color_fix(source) {
        source.classList.replace('bg-red-500', 'bg-gray-700');
    };


    console.log(result);
    console.log(percentage);
    if (web.value != '') {
        if (math.value != '') {
            bg_color_fix(math);
            if (computer.value != '') {
                if (phy.value != '') {
                    bg_color_fix(phy);
                    let grade, pass;
                    if (percentage <= 100 && percentage >= 80) {
                        grade = 'A';
                        pass = 'Pass';
                    } else if (percentage <= 79 && percentage >= 70) {
                        grade = 'B';
                        pass = 'Pass';
                    } else if (percentage <= 69 && percentage >= 60) {
                        grade = 'C';
                        pass = 'Pass';
                    } else {
                        grade = 'F';
                        pass = 'Fail';
                    }
                    output.textContent = `Out of 400 your total is ${result} and percentage is ${percentage}%.Your grade is ${grade}.You are ${pass}`;
                } else {
                    bg_color(phy);
                    rounded(phy);
                    alert('Physics Filed is Empty!')
                }
                bg_color_fix(computer);
            } else {
                bg_color(computer);
                rounded(computer);
                alert('Computer Filed is Empty!')
            }
            bg_color_fix(math);
        } else {
            bg_color(math);
            rounded(math);
            alert('Math Filed is Empty!')
        }
        bg_color_fix(web);
    } else {
        bg_color(web);
        rounded(web);
        alert('Web Programming Filed is Empty!')
    }

}


let calculate_percentage = document.getElementById('calculate_percentage');
calculate_percentage.addEventListener('click', calcy);