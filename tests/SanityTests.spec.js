import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.js'
import {InventoryPage} from '../pages/InventoryPage.js'
import {STANDARD_USER, VALID_PASSWORD} from '../data/LoginData.js'

test.describe('Sanity- Purchasing products', () => {
  test('Full purchase flow with standard_user', async ({page}) => {
  const loginPage = new LoginPage(page)
  const inventory = new InventoryPage(page)

  await loginPage.open()
  await loginPage.login(STANDARD_USER, VALID_PASSWORD)
  await inventory.assertInventoryPage()
  await inventory.addTwoProducts()
  await inventory.goToCart()
  await inventory.checkoutStepOne()
  await inventory.checkoutStepTwo()
  await inventory.assertCheckoutComplete()
  })

})
