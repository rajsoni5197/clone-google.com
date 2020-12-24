let language = {
    'हिन्दी': {
        'name': 'हिन्दी',
        'offeredIn': 'का इस्तेमाल इन भाषाओं में किया जा सकता है',
        'feeling': 'आज मेरी किस्मत अच्छी है'
    },
    "English":{
        'name': 'english',
        'offeredIn': 'offered in',
        'feeling': `I'm feeling luckey`
    }

}
let feeling = document.querySelector('#first')
let languageEle = document.querySelectorAll('.lang-link');
for (let ele of languageEle) {
    ele.addEventListener('click', changeLang);

}

function changeLang(event) {
    event.preventDefault();
    let a = event.target.innerHTML;
    document.querySelector('.language span').innerHTML=language[a].offeredIn;
    document.querySelector('.first:nth-child(2)').innerHTML=language[a].feeling;


}