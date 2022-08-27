import { validTokens } from '../utils/tokens'
import { dataReturned } from '../utils/dataReturned'
import {
  BUTTON_LOGOUT,
  BUTTON_POST_CREATION,
  BUTTON_SIGN_IN_NAVIGATE,
  HOME_ROUTE,
  INPUT_POST_CREATION,
  POST,
  POSTS_ENDPOINT,
  TOKEN_ENDPOINT,
  WALL_ROUTE
} from '../utils/constants'

describe('Test Home page', () => {
  it('is possible to create a post if logged', () => {
    window.localStorage.setItem('authTokens', JSON.stringify(validTokens))
    cy.intercept(TOKEN_ENDPOINT, dataReturned(200, 'successTokens')).as(
      'updateTokens'
    )
    cy.intercept(POSTS_ENDPOINT, dataReturned(200, 'posts')).as('getPosts')

    cy.visit(WALL_ROUTE)
    cy.wait(['@updateTokens', '@getPosts'])
    cy.get(INPUT_POST_CREATION).should('exist')
    cy.get(BUTTON_POST_CREATION).should('exist')
    cy.get(BUTTON_SIGN_IN_NAVIGATE).should('not.exist')
    cy.location('pathname').should('eq', WALL_ROUTE)
  })

  it('unable to create a post if not logged', () => {
    cy.intercept(POSTS_ENDPOINT, dataReturned(200, 'posts')).as('getPosts')

    cy.visit(WALL_ROUTE)
    cy.wait('@getPosts')
    cy.get(INPUT_POST_CREATION).should('not.exist')
    cy.get(BUTTON_POST_CREATION).should('not.exist')
    cy.get(BUTTON_SIGN_IN_NAVIGATE).should('exist')
    cy.location('pathname').should('eq', WALL_ROUTE)
  })

  it('navigate from Wall page to Home on Sign In click', () => {
    cy.intercept(POSTS_ENDPOINT, dataReturned(200, 'posts')).as('getPosts')

    cy.visit(WALL_ROUTE)
    cy.wait('@getPosts')
    cy.get(BUTTON_SIGN_IN_NAVIGATE).click()
    cy.location('pathname').should('eq', HOME_ROUTE)
  })

  it('is possible to logout', () => {
    window.localStorage.setItem('authTokens', JSON.stringify(validTokens))
    cy.intercept(TOKEN_ENDPOINT, dataReturned(200, 'successTokens')).as(
      'updateTokens'
    )
    cy.intercept(POSTS_ENDPOINT, dataReturned(200, 'posts')).as('getPosts')

    cy.visit(WALL_ROUTE)
    cy.wait(['@updateTokens', '@getPosts'])
    cy.get(BUTTON_LOGOUT).click()
    cy.location('pathname').should('eq', HOME_ROUTE)
  })

  it('has username on Wall Post Header', () => {
    window.localStorage.setItem('authTokens', JSON.stringify(validTokens))
    cy.intercept(TOKEN_ENDPOINT, dataReturned(200, 'successTokens')).as(
      'updateTokens'
    )
    cy.intercept(POSTS_ENDPOINT, dataReturned(200, 'posts')).as('getPosts')

    cy.visit(WALL_ROUTE)
    cy.wait(['@updateTokens', '@getPosts'])
    cy.get('p:contains("userTest")').should('exist')
  })

  it('has username on Wall Post Header', () => {
    cy.intercept(POSTS_ENDPOINT, dataReturned(200, 'posts')).as('getPosts')

    cy.visit(WALL_ROUTE)
    cy.wait('@getPosts')
    cy.get(POST).its('length').should('eq', 10)
  })
})
