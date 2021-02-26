// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question('whats u name ?', name => {
//     console.log(`hello ${name}`);
//     readline.close()
// })



const inquirer = require('inquirer');
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'whats u name ?'
    }
]

inquirer.prompt(questions).then(answers => {
    console.log(`hello ${answers['name']}`)
})