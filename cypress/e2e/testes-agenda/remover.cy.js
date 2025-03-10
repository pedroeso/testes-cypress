/// <reference types="cypress" />

describe('Testes para a página de agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve fazer a remoção de um contato', () => {
        cy.get('.delete').first().click();

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Deletado com sucesso!')
        })

        cy.screenshot('tela-inscricao-remocao-preenchido')
    })
})