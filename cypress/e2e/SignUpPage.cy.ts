import { dataReturned } from '../utils/dataReturned'
import {
  BUTTON_SIGN_IN_NAVIGATE,
  BUTTON_SIGN_UP,
  HOME_ROUTE,
  INPUT_EMAIL_SIGN_UP,
  INPUT_PASSWORD_SIGN_UP,
  INPUT_USERNAME_SIGN_UP,
  INVALID_EMAIL,
  SIGN_UP_ENDPOINT,
  SIGN_UP_ROUTE,
  VALID_EMAIL,
  VALID_PASSWORD,
  VALID_USERNAME
} from '../utils/constants'

describe('Test Sign Up page', () => {
  it('is possible to sign up with valid credentials', () => {
    cy.intercept(SIGN_UP_ENDPOINT, dataReturned(200, 'signUpSuccess')).as(
      'signUp'
    )

    cy.visit(SIGN_UP_ROUTE)
    cy.get(INPUT_USERNAME_SIGN_UP).type(VALID_USERNAME)
    cy.get(INPUT_EMAIL_SIGN_UP).type(VALID_EMAIL)
    cy.get(INPUT_PASSWORD_SIGN_UP).type(VALID_PASSWORD)
    cy.get(BUTTON_SIGN_UP).click()
    cy.wait('@signUp')
    cy.get('div:contains("User created, you will be redirected")').should(
      'exist'
    )
    cy.wait(2600)
    cy.location('pathname').should('eq', HOME_ROUTE)
  })

  it('unable to sign up with invalid credentials', () => {
    cy.intercept(SIGN_UP_ENDPOINT, dataReturned(400, 'signUpFail')).as('signUp')

    cy.visit(SIGN_UP_ROUTE)
    cy.get(INPUT_USERNAME_SIGN_UP).type(VALID_USERNAME)
    cy.get(INPUT_EMAIL_SIGN_UP).type(INVALID_EMAIL)
    cy.get(INPUT_PASSWORD_SIGN_UP).type(VALID_PASSWORD)
    cy.get(BUTTON_SIGN_UP).click()
    cy.wait('@signUp')
    cy.get('div:contains("email: Enter a valid email address.")').should(
      'exist'
    )
    cy.location('pathname').should('eq', SIGN_UP_ROUTE)
  })

  it('is possible navigate to Home page from SignUp page', () => {
    cy.visit(SIGN_UP_ROUTE)
    cy.get(BUTTON_SIGN_IN_NAVIGATE).click()
    cy.location('pathname').should('eq', HOME_ROUTE)
  })
})
