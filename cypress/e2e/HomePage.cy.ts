import { validTokens } from '../utils/tokens'
import { dataReturned } from '../utils/dataReturned'
import {
  BUTTON_SIGN_IN,
  BUTTON_SIGN_UP_NAVIGATE,
  BUTTON_VISITOR_NAVIGATE,
  HOME_ROUTE,
  INPUT_PASSWORD_SIGN_IN,
  INPUT_USERNAME_SIGN_IN,
  INVALID_PASSWORD,
  INVALID_USERNAME,
  POSTS_ENDPOINT,
  TOKEN_ENDPOINT,
  SIGN_UP_ROUTE,
  VALID_PASSWORD,
  VALID_USERNAME,
  WALL_ROUTE
} from '../utils/constants'

describe('Test Home page', () => {
  it('is possible to sign in with valid credentials', () => {
    cy.intercept(TOKEN_ENDPOINT, dataReturned(200, 'successTokens')).as(
      'signIn'
    )
    cy.intercept(POSTS_ENDPOINT, dataReturned(200, 'posts')).as('getPosts')

    cy.visit(HOME_ROUTE)
    cy.get(INPUT_USERNAME_SIGN_IN).type(VALID_USERNAME)
    cy.get(INPUT_PASSWORD_SIGN_IN).type(VALID_PASSWORD)
    cy.get(BUTTON_SIGN_IN).click()
    cy.wait(['@signIn', '@getPosts'])
    cy.location('pathname').should('eq', WALL_ROUTE)
  })

  it('unable to sign in with invalid credentials', () => {
    cy.intercept(TOKEN_ENDPOINT, dataReturned(401, 'failTokens')).as('signIn')

    cy.visit(HOME_ROUTE)
    cy.get(INPUT_USERNAME_SIGN_IN).type(INVALID_USERNAME)
    cy.get(INPUT_PASSWORD_SIGN_IN).type(INVALID_PASSWORD)
    cy.get(BUTTON_SIGN_IN).click()
    cy.wait('@signIn')
    cy.get('div:contains("Incorrect username or password")').should('exist')
    cy.location('pathname').should('eq', HOME_ROUTE)
  })

  it('is possible to navigate to Sign Up page', () => {
    cy.visit(HOME_ROUTE)
    cy.get(BUTTON_SIGN_UP_NAVIGATE).click()
    cy.location('pathname').should('eq', SIGN_UP_ROUTE)
  })

  it('is possible to enter as a visitor', () => {
    cy.intercept(POSTS_ENDPOINT, dataReturned(200, 'posts')).as('getPosts')

    cy.visit(HOME_ROUTE)
    cy.get(BUTTON_VISITOR_NAVIGATE).click()
    cy.wait('@getPosts')
    cy.location('pathname').should('eq', WALL_ROUTE)
  })

  it('is redirected to Wall page if enter logged in Home', () => {
    window.localStorage.setItem('authTokens', JSON.stringify(validTokens))
    cy.intercept(TOKEN_ENDPOINT, dataReturned(200, 'successTokens')).as(
      'updateToken'
    )
    cy.intercept(POSTS_ENDPOINT, dataReturned(200, 'posts')).as('getPosts')

    cy.visit(HOME_ROUTE)
    cy.wait(['@getPosts', '@updateToken'])
    cy.location('pathname').should('eq', WALL_ROUTE)
  })
})
