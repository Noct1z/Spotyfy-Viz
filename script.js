import {songList} from './spotify_top_hits_clean_json.js'

document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.result-button');
    const resultCard = document.getElementById('result-card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if(buttonText == 'Most Common Genre'){
                createGenreChart();
            }
            else if(buttonText == 'Year Song Released'){
                createYearChart();
            }
            else if(buttonText === 'Loudest Song'){
                createLoudestSongChart();
            }
        });
    });

    function createGenreChart(){
        const genreCounts = {};

        for(const song of songList){
            const genre = song.genre.split(',').map(g => g.trim());
        }

        for(const genre of genres){
            genreCounts[genre] = (genreCounts[genre] || 0) + 1;
        }
    

        const labels = Object.keys(genreCounts);
        const data = Object.values(genreCounts);

        const canvas = document.createElement('canvas');
        canvas.id = 'genreChart';
        resultCard.innerHTML = '';
        resultCard.appendChild(canvas);
    
        const ctx = canvas.getContext('2d'); 

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                    datasets: [{
                    data: data,
                    backgroundColor: 'rgba(35, 255, 64, 0.8)',
                    borderColor: 'rgb(0,0,0)',
                    borderWidth: 1,
                }]
            },
            options:{
                scales:{
                    y: {
                    beginsAtZero: true
                    }
                }
            }
        })
     } 

})