import {sessionTemplate as template, errorMessage} from './sessionTemplate.js'
import getSessions from './getSessions.js'

function render() {
    var list = document.querySelector('#sessions');
    if (!list) return;
    list.innerHTML = template(data.listItems);
};

var data = {
    listItems: []
};

getSessions()
.then((sessions)=>{
    console.log('promises!')
    data.listItems = sessions;
    render();
});

