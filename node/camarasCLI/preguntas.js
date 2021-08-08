module.exports = function (args, callback) {
    this.prompt([
        {
            type: 'input',
            message: 'Introduce tu nombre ',
            name: 'nombre',
            default: 'Mario Girón'
        },
        {
            type: 'confirm',
            message: '¿Eres un robore?',
            name: 'robot'
        },
        {
            type: 'list',
            message: '¿Qué materia del bootcamp te ha gustado más?',
            name: 'materia',
            choices: ['HTML+CSS', 'Javascript', 'Bootstrap', 'NodeJS']
        },
        {
            type: 'password',
            message: '¿Cuál es tu clave del banco?',
            name: 'clave'
        },
        {
            type: 'list',
            message: 'Elige tu país',
            name: 'pais',
            choices: [
                { name: 'España 🇪🇸', value: 'es' },
                { name: 'Italia 🇮🇹', value: 'it' },
                { name: 'Francia 🇫🇷', value: 'fr' },
                { name: 'Alemania 🇩🇪', value: 'ge' }
            ]
        }
    ], function (answers) {
        console.log(answers);
        callback();
    });

}