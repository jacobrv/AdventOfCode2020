// https://adventofcode.com/2020/day/1/input
let vals = document.querySelector('pre').innerText.split('\n');
for(let i = 0; i < vals.length; i++){
    for(let j = i + 1; j < vals.length; j++){
        if(parseInt(vals[i]) + parseInt(vals[j]) == 2020){
            console.log(parseInt(vals[i]) * parseInt(vals[j]));
        }
    }
}