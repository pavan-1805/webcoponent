const template = document.createElement('template');
template.innerHTML = `
        <style>
            h1{
                color : blue;
            }
        </style>
        <div class="custom-tag">
            <img />
            <div>
            <h1></h1>
            </div>
        </div>
        
    `
class customTag extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('image');        
    }

}

window.customElements.define('custom-tag',customTag);