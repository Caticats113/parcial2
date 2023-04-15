class Card extends HTMLElement {
    value:string =""
    
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }
    
    static get observedAttributes(){
        return ["value"];
    }

    attributeChangedCallback(value:string, _:unknown,newValue:string ){
        this.value = newValue;
        this.render()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('div');

        const joke = document.createElement("p");
        joke.innerText = this.value; 

        const cn = document.createElement("p");
        cn.innerText = "Chuck Norris"

        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('my-card', Card)