describe('e-commerce website test suite', () => {
    beforeEach(() => {
      cy.viewport(1536, 754)
      cy.visit('https://www.decathlon.pl/');
      cy.get('#didomi-notice-agree-button').click();
      
    })

    afterEach(() => {
      cy.clearCookies()
    })

    it('home page test', () => {
     
      cy.get('.navbar__section > .navbar-zone > .menu-button > .svg-icon > use').click();
      cy.get('#main-menu > .main > .svelte-10z05qh > .close > .svg-icon').click();
      cy.get('main > .hp-container > .opeco-slider > .svelte-1v7mii > .dot:nth-child(2)').click();
      cy.get('#app > main > .hp-container > .opeco-slider > .svelte-1v7mii').click();
      cy.get('main > .hp-container > .opeco-slider > .svelte-1v7mii > .dot:nth-child(1)').click();
      cy.get('main > .hp-container > .opeco-slider > .svelte-1v7mii > .dot:nth-child(5)').click();
      cy.visit('https://www.decathlon.pl/');
      cy.get('.hp-container > .opeco-slider > .svelte-mr5tdd > .svelte-mr5tdd > .svg-icon').click();
   })

    it('find an item', () => {
      
        cy.get('h3.svelte-gpatt1').should('have.text', 'Pobierz aplikację Decathlon');
        cy.get('input.svelte-1hxq01r').type('Rakiety do squasha{enter}');
        cy.get('.title--hero').should('have.text', 'Rakiety do squasha');
    })
    it('add an item to the cart', () => {
      
        cy.get('h3.svelte-gpatt1').should('have.text', 'Pobierz aplikację Decathlon');
        cy.get('input.svelte-1hxq01r').type('Rakiety do squasha{enter}');
        cy.get('.title--hero').should('have.text', 'Rakiety do squasha');
        cy.get('[data-supermodelid="158093"] > .dpb-informations > .dpb-product-link > span').click();   
        cy.get('.title').should('have.text', 'Zestaw do squasha Perfly Wallbreaker 165 Club');
        cy.get('#fitAnalytics-pdp-add-to-cart').click();
        cy.get('.precart-header').should('have.text', ' Produkt dodany do koszyka! ');
        cy.get('.cta-section > .cta--primary').click();
        cy.get('.current-step').should('have.text', '1 Koszyk');
        cy.get('.product-name').should('have.text', 'Zestaw do squasha Perfly Wallbreaker 165 Club');
    })  
    it('add and delete items', () => {
      cy.get('.navbar > .navbar__section > .nav-tabs > .nav-tabs__list > .svelte-1h83edz:nth-child(5)').click();
      cy.get('.navbar-tab-container > .categories-block-container > .categories-block > .categories-block__link:nth-child(3) > .svelte-16jbv0n').click();
      cy.visit('https://www.decathlon.pl/browse/c0-butiki/c1-bestsellery-decathlon/_/N-g91t5y?Nf=sku.modelLowestPrice%257CBTWN%252B4%252B100');
      cy.get('.title--hero.svelte-viz8qm').should('have.text', 'Bestsellery');
      cy.get('.product-list > .dpb-holder:nth-child(6) > .dpb-informations > .dpb-product-link > .svelte-pbo8nu').click();
      cy.visit('https://www.decathlon.pl/p/rower-gorski-mtb-rockrider-st-120-27-5/_/R-p-305496');
      cy.get('.title.svelte-1i7tvft').should('have.text', 'Rower górski MTB Rockrider ST 120 27,5"');
      cy.get('.product-main-infos > .product-summary > .conversion-zone > .cta-zone > #fitAnalytics-pdp-add-to-cart').click();
   })
   it('add and compare', () => {
    cy.get('h3.svelte-gpatt1').should('have.text', 'Pobierz aplikację Decathlon');
    cy.get('input.svelte-1hxq01r').type('Piłki do koszykówki{enter}');
    cy.get('.title--hero.svelte-viz8qm').should('have.text', 'Piłki do koszykówki');
    
    cy.get('[data-supermodelid="306440"] > .comparator-checkbox > .checkbox').click();
    cy.get('[data-supermodelid="306399"] > .comparator-checkbox > .checkbox').click();
    
    cy.get('.vtmn-btn').click();
    cy.get('.vtmn-typo_title-4').should('have.text', 'Porównaj produkty');
    cy.visit('https://www.decathlon.pl/browse/c0-sporty/c1-koszykowka/c2-pilki-do-koszykowki/_/N-7dekt0?comparison=8616153%2C8547127%2C8618595')
    cy.get('main > .comparator-btn > .comparator-btn__toggle > .vtmn-btn > .headline').click()
    cy.get('.comparator-products > .comparator-product:nth-child(1) > .comparator-product__top-container > .text-block > .display-name').click()
    cy.get('.product-main-infos > .product-summary > .conversion-zone > .cta-zone > #fitAnalytics-pdp-add-to-cart').click()
    cy.get('body > .sidebar-container > .sidebar > .cta-section > .cta:nth-child(2)').click()
    cy.visit('https://www.decathlon.pl/checkout/cart')
 })    
})