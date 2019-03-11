const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}
async function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    
    await robots.text(content)

    function askAndReturnSearchTerm(){
        return readline.question("Digite um termo do Wikipedia: ")
    }
    function askAndReturnPrefix(){
        const prefixs = ['O que e','A historia de','Quem e']
        const selectedPrefixIndex = readline.keyInSelect(prefixs, 'Escolha uma opcao: ')
        const selectedPrefixText = prefixs[selectedPrefixIndex]
        return selectedPrefixText
    }
    console.log(content)
}
start()