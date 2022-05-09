/// <reference types="cypress" />

const waitForResources = (...args: any[]) => {
  let names: Array<string> = []
  let options: Record<string, any> = {}

  if (isPlainObject(last(args))) {
    names = args.slice(0, args.length - 1)
    options = last(args)
  } else {
    names = args
    options = {}
  }

  const log = false // let's not log inner commands
  const timeout = options.timeout || Cypress.config('defaultCommandTimeout')

  cy.log(`Waiting for resources ${names.join(', ')}`)

  cy.window({ log }).then(
    // note that ".then" method has options first, callback second
    // https://on.cypress.io/then
    { timeout },
    (win) => {
      return new Cypress.Promise((resolve, reject) => {
        // flag set when we find all names
        let foundResources = false

        // control how long we should try finding the resource
        // and if it is still not found. An explicit "reject"
        // allows us to show nice informative message
        setTimeout(() => {
          if (foundResources) {
            // nothing needs to be done, successfully found the resource
            return
          }

          clearInterval(interval)
          reject(new Error(`Timed out waiting for resources ${names.join(', ')}`))
        }, timeout)

        const interval = setInterval(() => {
          foundResources = names.every((name) => {
            return win.performance.getEntriesByType('resource').find((item) => item.name.endsWith(name))
          })

          if (!foundResources) {
            // some resource not found, will try again
            return
          }

          cy.log('Found all resources')
          clearInterval(interval)
          resolve()
        }, 100)
      })
    }
  )
}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      waitForResources: typeof waitForResources
    }
  }
}

const { isPlainObject, last } = Cypress._

Cypress.Commands.add('waitForResources', waitForResources)

export {}
