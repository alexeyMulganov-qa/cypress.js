
describe('Автотест на негативный кейс авторизации', function () {
    it('Проверить нужный текст и наличие кнопки крестик', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio2');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет').get('#exitMessageButton > img');
        })
 })
