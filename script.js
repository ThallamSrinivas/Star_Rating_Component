const stars =document.getElementById('stars')
const star_container = document.querySelectorAll('.star')
const rating = document.getElementById('rating')

window.addEventListener('load',function(){
    let value = localStorage.getItem('rating')
    if(value){
        render(value)

    }
})

function resetfill(){
    star_container.forEach(star=>{star.classList.remove('fill_red','fill_yellow','fill_green')})
}

function render(value){
    if (value<=2){
        for (let i=0;i<value;i++){
            stars.children[i].classList.add('fill_red');
        } 
    }
    else if (value==3){
        for (let i=0;i<value;i++){
            stars.children[i].classList.add('fill_yellow');
        }
    }
    else{
        for (let i=0;i<value;i++){
            stars.children[i].classList.add('fill_green');
        }
    }
}
stars.addEventListener('click',function(e){
    resetfill();
    let value=e.target.getAttribute('data-value');
    render(value)
    rating.innerHTML=`${value}/5`
    localStorage.setItem('rating',value)
    e.stopPropagation();
})

stars.addEventListener('mouseover',function(e){
    resetfill();
    let value=e.target.getAttribute('data-value');
    render(value)
    e.stopPropagation();
})

