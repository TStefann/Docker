describe('template spec', () => {
  it('first test', () => {
    cy.visit('http://localhost:3000/')

    cy.get('button').contains("Add Goal")
  })
})

it('second test', () => {
  cy.visit('http://localhost:3000/')

  cy.get('label').contains("New Goal")
})


it('third test', () => {
  cy.visit('http://localhost:3000/')

  expect(2).eql(2)
  
})

