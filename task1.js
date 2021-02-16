let add = 'Ask me aboUT earTh'
function repl(params) {
    let res = params.split('').map(item => item.toLowerCase()).join('')
    return res;
}
console.log(repl(add))