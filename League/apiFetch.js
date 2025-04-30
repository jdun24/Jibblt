import { get_puuidURL , getChampionMasteryURL} from './getURL.js';

const gameName = 'Jibolt'; 
const tagLine = '6940'; 
const region = 'americas';
//!!! API key will need to be secured prior to deployment  !!!
const apiKey = 'RGAPI-fcde7b58-3da4-4c0a-92fc-e8be5429b119'; 

//volatile variables
var puuid = '';
var data;

async function getSummonerData() {

    try {
        data = await makeCall(get_puuidURL(gameName, tagLine, region));
        updateOutput(JSON.stringify(data, null, 2));
    } catch (error) {
        updateOutput(error.message);
    }
    set_puuid(data);

    try {
        const champMastery = await makeCall(getChampionMasteryURL(puuid, 'Rengar'));
        updateOutput(JSON.stringify(champMastery, null, 2));
    } catch (error) {
        updateOutput(error.message);
    }
}

async function makeCall(url){
    try {
        const response = await fetch(url, 
            { headers: {'X-Riot-Token': apiKey }
        });

        if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
 
        return await response.json();
    } catch (error) {
        updateOutput(error.message);
    }
}

function set_puuid(data) {
    puuid = data.puuid;
}

// displays data or error
function updateOutput(content) {
    document.getElementById('output').textContent = content;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('get_puuidButton').addEventListener('click', getSummonerData);
});