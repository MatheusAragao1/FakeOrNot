const puppeteer = require('puppeteer');

const delay = ms => new Promise(res => setTimeout(res, ms));

const statesValues = {
    text: ['Acre','Amapá','Alagoas','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul'
    ,'Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo'
    ,'Sergipe','Tocantins'],
    value: ['ac','ap','al','am','ba','ce','df','es','go','ma','mt','ms','mg','pa','pb','pr','pe','pi','rj','rn','rs','ro','rr',
    'sc','sp','se','to']
}

const AutomacaoVacinacaoExecute = async (req) => {
    const stateValue = statesValues.value[statesValues.text.indexOf(req.state)]

    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto('https://quandovouservacinado.vacinacao-covid19.com/', {waitUntil: 'networkidle2'});    

    await page.select('#age', req.age)
    await page.select('#state', stateValue)
     
    await page.click('button[type="submit"]');
    await page.waitForSelector('.d-inline-block');
    await delay(3000)
    const text = await page.evaluate(() => document.querySelector('h3 strong').textContent);

    await browser.close();
    return {result: "Você será vacinado em: " + text}
 };

module.exports = AutomacaoVacinacaoExecute
