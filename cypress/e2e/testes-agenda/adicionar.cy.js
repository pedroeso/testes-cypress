/// <reference types="cypress" />

describe('Testes para a página de agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher os campos de inclusão', () => {
        cy.get('input[type="text"]').type('Pedro Ribeiro')
        cy.get('input[type="email"]').type('pedroesorocha@teste.com')
        cy.get('input[type="tel"]').type('21 12345678')
        cy.get('.adicionar').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pelo novo contato!')
        })

        cy.screenshot('tela-inscricao-preenchido')
    })
})