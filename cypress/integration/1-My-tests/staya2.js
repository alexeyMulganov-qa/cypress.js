describe('Дополнительное задание', function () {
    it('Вводим неправильный пароль и получаем ошибку', function () {
         cy.visit('https://staya.dog');
         cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
         cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('calmarz@rambler.ru');
         cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('123456Ha');
         cy.get('#__layout > div > main > div > div > div > section > div > form > button > span').click();
         cy.contains('Невозможно войти с предоставленными учетными данными');
        })
 })
