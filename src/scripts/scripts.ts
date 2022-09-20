function cacheData(key:string, value:any):void{
    localStorage.setItem(key, JSON.stringify(value));
}

function isCached(key:string):boolean{
    return key in localStorage;
}

function getValueFromKey(key:string):object{
    if (!isCached(key)) return {};
    return JSON.parse(localStorage.getItem(key) as string)
}

export async function getList(type:string, off: number = 0, limit: number = 20){
    
    if (isCached(`${type}List${off}to${limit}`)) {
        return getValueFromKey(`${type}List${off}to${limit}`);
    }
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/${type}/?offset=${off}&limit=${limit}`);
        const data = await response.json();
        cacheData(`${type}List${off}to${limit}`, await data.results);
        return await data.results;
    } catch (error) {
        console.log(error);
    }
}