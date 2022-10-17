
describe('Автотест на проверку логики восстановления пароля', function () {
    it('Проверка, что получили нужный текст и есть кнопка крестика', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('nobody@inbox.com').type('{enter}');
         cy.contains('Успешно');
         cy.get('#exitMessageButton > img');
        })
 })
