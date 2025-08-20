function costumRender(reactElem, container){
    let appendix = document.createElement(reactElem.type)
    appendix.innerHTML = reactElem.children; 
    appendix.setAttribute('href', reactElem.props.href); 

    container.appendChild(appendix);  
}
//This is close to how a real react element looks like. it has children, which may have their own children, and their own, this is why it's called a tree
const reactElem = {
    type: 'a',
    props: {
        href: 'https://google.com'
    },
    children: 'click me to visit goo-ga(o)l'
}

const container = document.querySelector('#root'); 

costumRender(reactElem, container); 