describe('My First Test', () => {
    it('Search for specific Apple video on YouTube', () => {
    cy.visit('www.youtube.com').get('#loading').should('not.exist')
    // Wait until the search bar is visible
    cy.get('input#search').should('be.visible')
    //Input the text into the search & to slow down text entry so we get results back
    cy.get('input#search').type('The whole working-from-home thing — ').wait(1000).get('input#search').type('Apple').wait(1000)
    //click the first result from the results returned.
    cy.get('li').first().click()
    // wait until loading spinner no longer exists
    cy.get('#loading').should('not.exist')
    //assertions to validate what I searched for, and the uploader is Apple.  
    cy.get('a[title*="The whole working-from-home thing — Apple"]').get('a[href*="/user/Apple"]')
    //Click on the first hyperlink that matches the id of the video that I searched.
    cy.get('a[href*="6_pru8U2RmM"]').eq(0).click()
    })
  })
