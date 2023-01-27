const progressElement = document.getElementById('progress');
const prevElement = document.getElementById('prev');
const nextElement = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

prevElement.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    update();
});

nextElement.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
});

const update = () => {
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    // console.log(((actives.length - 1) / (circles.length - 1)) * 100)
    progressElement.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if(currentActive === 1){
        prevElement.disabled = true;
    }else if(currentActive === circles.length){
        nextElement.disabled = true;
    }else{
        prevElement.disabled = false;
        nextElement.disabled = false;
    }

}

