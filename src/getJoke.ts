export default async function getJoke(category:string){
    const eData = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
    const pData = await eData.json();
    console.log(pData.value);
    return(pData.value);
}