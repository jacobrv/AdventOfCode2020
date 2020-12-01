// https://adventofcode.com/2020/day/1/input
let vals = document.querySelector('pre').innerText.split('\n');
for(let i = 0; i < vals.length; i++){
    for(let j = i + 1; j < vals.length; j++){
        for(let k = j + 1; k < vals.length; k++){
            if(parseInt(vals[i]) + parseInt(vals[j]) + parseInt(vals[k]) == 2020){
                console.log(parseInt(vals[i]) * parseInt(vals[j]) * parseInt(vals[k]));
            }
        }
    }
}