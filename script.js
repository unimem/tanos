let cookie = document.getElementsByClassName('cookie');
let score = document.getElementsByClassName('score');
let click = 0;
let boost = 1;
let arr = [20, 30, 40];

let booster = document.getElementsByClassName('booster');

cookie[0].addEventListener("click", function(){
    click = click + boost;
    score[0].innerHTML = "Score: " + click;
})

for(let i = 0; i < 3; i++){
    booster[i].addEventListener("click", function(){
        if(click >= arr[i]){
            click -= arr[i];
            score[0].innerHTML = "Score: " + click;
            boost += (2 + i);
            arr[i] += 20 * (i+1); 
            booster[i].innerHTML = "+ " + (2 + i) + " (" + arr[i] + ")";
        }
    })
}