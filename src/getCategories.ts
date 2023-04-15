export default async function getCategories(){
    const eData = await fetch("https://api.chucknorris.io/jokes/categories");
    const pData = await eData.json();
    console.log(pData);
    return(pData);
}