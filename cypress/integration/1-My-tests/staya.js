
describe('Регистрация работает', function () {
    it('Проверить, что на странице есть слово Мои заказы', function () {
         cy.visit('https://staya.dog');
         cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
         cy.get('input[name="email"]').eq(0).type('calmarz@rambler.ru');
         cy.get('input[name="password"]').eq(0).type('123456Hh');
         cy.get('button[type="submit"]').contains('Войти').click();
         cy.contains('Мои заказы');
        })
 })
