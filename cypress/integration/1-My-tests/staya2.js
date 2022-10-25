describe('Регистрация_негативный', function () {
    it('Вводим неправильный пароль и получаем ошибку', function () {
         cy.visit('https://staya.dog');
         cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
         cy.get('input[name="email"]').eq(0).type('calmarz@rambler.ru');
         cy.get('input[name="password"]').eq(0).type('123458Hh');
         cy.get('button[type="submit"]').contains('Войти').click();
         cy.contains('Невозможно войти с предоставленными учетными данными');
        })
 })
