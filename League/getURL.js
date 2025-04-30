

export function get_puuidURL(gameName, tagLine, region) {
    return `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;
}



export function getChampionMasteryURL(puuid, champion){
    return `https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/by-champion/${getChampionID(champion)}`;
}

function getChampionID(champion){
    // list of champion ID's 
    if(champion === 'Rengar'){
        return 107;
    }else if(champion === 'Kayn'){
        return 141;
    }else if(champion === "Kha'Zix"){
        return 121;
    }else if(champion === 'Ekko'){
        return 245;
    }
}