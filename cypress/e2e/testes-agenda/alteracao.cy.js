/// <reference types="cypress" />

describe('Testes para a página de agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve alterar as informações dos contatos', () => {
        cy.get('.edit').first().click();
        cy.get('input[type="text"]').type(' alteração')
        cy.get('input[type="email"]').type('.br')
        cy.get('input[type="tel"]').type('{selectall}{backspace}219999999')
        cy.get('.alterar').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Alteração com sucesso!')
        })

        cy.screenshot('tela-inscricao-alteracao-preenchido')
    })
})