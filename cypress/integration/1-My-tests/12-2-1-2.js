
describe('Автотест на позитивный кейс авторизации', function () {
    it('Проверить нужный текст и наличие кнопки крестик', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('успешно').get('#exitMessageButton > img');
        })
 })
