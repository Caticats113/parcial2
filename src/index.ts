import "./components/export"
import getCategories from "./getCategories"
import getJoke from "./getJoke"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    async render() {
        const something = this.ownerDocument.createElement('div');
        
        const categories:string[] =await getCategories();
        console.log(categories)
        const container = document.createElement("div")
        this.buttonAsignment(categories, container)
        something.appendChild(container)
        this.shadowRoot?.appendChild(something);
    }

    buttonAsignment(x:string[], container:HTMLElement){
        x.map((i:string)=>{
            const but = document.createElement("button");
            but.innerHTML = i;
            container.appendChild(but);
        this.querySelector("button").addEventListener("click", this.crateCard())
        })
        return(container)
    }

    crateCard(){
    const card = document.createElement("myCard");
        
    }
}

customElements.define('app-container', AppContainer)

getJoke("animal")