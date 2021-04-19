const dataset = require('../data/dataset.json')
const natural = require('natural');
const cliSpinners = require('cli-spinners');

const classifier = new natural.BayesClassifier();

function iniciarAI(){

    console.log("::: Adicionando dataset para treinamento do model")

    dataset.forEach(el => {
        classifier.addDocument(el.preprocessed_news,el.label)
    });

    console.log("::: Treinando a model")

    classifier.train();

    console.log("AI pronta para uso \u2713")

}

module.exports = { iniciarAI, classifier }