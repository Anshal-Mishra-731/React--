function costumRender(reactElem, container){
    let appendix = document.createElement(reactElem.type)
    appendix.innerHTML = reactElem.children; 
    appendix.setAttribute('href', reactElem.props.href); 

    container.appendChild(appendix);  
}
//This is close to how a real react element looks like. it has children, which may have their own children, and their own, this is why it's called a tree.
//When we feed an HTML retrurning fucntion to the .render() in react, it beasically uses bundlers to convert our HTML into something like this below, and then it gets rendered onto our page using a function that looks something like the one above.
const reactElem = {
    type: 'a',
    props: {
        href: 'https://google.com'
    },
    children: 'click me to visit goo-ga(o)l'
}

const container = document.querySelector('#root'); 

costumRender(reactElem, container); 