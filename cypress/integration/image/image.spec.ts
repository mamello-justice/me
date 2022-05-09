describe('loading images', () => {
  it('shows images', () => {
    cy.visit('/')

    // Wait for github logo
    cy.waitForResources('/github.png?w=64&q=75')
  })

  it('preserves image dimensions', () => {
    cy.visit('/')

    cy.get('[alt="Github Logo"]')
      .should('be.visible')
      .and(($img: JQuery<HTMLImageElement>) => {
        expect($img[0].naturalWidth, 'image has natural width').to.be.greaterThan(0)
      })
  })
})
