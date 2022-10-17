
describe('Регистрация работает', function () {
    it('Проверить, что на странице есть слово Мои заказы', function () {
         cy.visit('https://staya.dog');
         cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
         cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('calmarz@rambler.ru');
         cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('123456Hh');
         cy.get('#__layout > div > main > div > div > div > section > div > form > button > span').click();
         cy.contains('Мои заказы');
        })
 })
