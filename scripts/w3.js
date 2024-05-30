document.addEventListener('DOMContentLoaded', () => {
    const inputMin = document.getElementById('minInput');
    const inputMax = document.getElementById('maxInput');
    const inputFizz = document.getElementById('fizzInput');
    const inputBuzz = document.getElementById('buzzInput');
    const container = document.getElementById('container');
    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');

    // Define the URL for the Buzz image
    const buzzImageUrl = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d7f10a8-159b-4916-9ab4-fae3a5fefb62/de3u5o5-09ccf2e7-bf98-4f60-94f0-39fc1b2d02a1.jpg/v1/fill/w_894,h_894,q_70,strp/buzz_lightyear__toy_story__square_by_alittlecuriousfan99_de3u5o5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzBkN2YxMGE4LTE1OWItNDkxNi05YWI0LWZhZTNhNWZlZmI2MlwvZGUzdTVvNS0wOWNjZjJlNy1iZjk4LTRmNjAtOTRmMC0zOWZjMWIyZDAyYTEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lg8UNnoYcrxpsqGQrWggWeH_WiVbrMe_LtkhkDxtWaM';
    const fizzImageUrl = 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ec972080-ce09-4114-86ba-0a7ecc151dcd/width=450/00055-1884010075.jpeg'

    const createDivs = () => {
    
        container.innerHTML = '';
    

        const min = parseInt(inputMin.value, 10) || 1;
        const max = parseInt(inputMax.value, 10) || 100;
        const fizzValue = parseInt(inputFizz.value, 10) || 3;
        const buzzValue = parseInt(inputBuzz.value, 10) || 5;

        for (let i = min; i <= max; i++) {
            const div = document.createElement('div');
            div.id = `div_${i}`;

            const hoverText = document.createElement('div');
            hoverText.className = 'hover-text';

            if (i % fizzValue === 0 && i % buzzValue === 0) {
                div.className = 'fizzbuzz';
                div.innerText = 'FizzBuzz';

                

            } else if (i % fizzValue === 0) {
                div.className = 'fizz';
                const img = document.createElement('img');
                img.src = fizzImageUrl; // use URL
                img.alt = 'Fizz'
                // div.innerText = 'Fizz';
                div.appendChild(img);

                hoverText.innerText = 'Fizz';

            } else if (i % buzzValue === 0) {
                div.className = 'buzz';
                const img = document.createElement('img');
                img.src = buzzImageUrl; // use URL
                img.alt = 'Buzz';
                div.appendChild(img);

                hoverText.innerText = 'Buzz';

            } else {
                div.className = 'num';
                div.innerText = i;

                
            }
            
            div.appendChild(hoverText);
            
            container.appendChild(div);
        }
    };

    generateBtn.addEventListener('click', createDivs);
    clearBtn.addEventListener('click', () => {
        container.innerHTML = '';
    });

    // Set default values and generate divs on page load
    inputMin.value = 1;
    inputMax.value = 100;
    createDivs();
});
