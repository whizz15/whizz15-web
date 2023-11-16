document.addEventListener('DOMContentLoaded', function(){
    const flakesContainer=document.createElement('div');
    flakesContainer.className='snowfall';
    document.body.appendChild(flakesContainer);
    for(let line=0; line<5; line++){
        const lineContainer=document.createElement('div');
        lineContainer.className='line';
        flakesContainer.appendChild(flakesContainer);
    
    for(let i=0; i<150; i++){
        const flake=document.createElement('div');
        flake.className='flake';
        flake.style.animationDuration=(Math.random()*2+1)+'s';
        flake.style.animationDelay=Math.random()+'s';
        flakesContainer.appendChild(flake);
        lineContainer.appendChild(flake);
    }
    }
});