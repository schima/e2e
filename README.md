# e2e Cypress Automation Test to launch specific video from YouTube.

### Setup & Configuration on Windows platform. Some of these steps are windows specific and not required if Cypress IDE is already setup.

### Installations.
* installed node.js from [here](https://phoenixnap.com/kb/install-node-js-npm-on-windows).
* installed various dependencies that were part of the routine.
* installed visual Studio code for Windows. 

### Configuration Issues
* Could not run the scripts on Windows as policy was set to Restricted. Changed the policy to Unrestricted. See details how to do [here](https://docs.microsoft.com/en-ca/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.1).
* Modified the Windows firewall to allow cypress.exe thru. Check your Windows firewall on how to allow an app to go thru.
* When I ran the test first time, I got the error "EEXIST: file already exists - cannot start server on Windows".
  * Error is reported [here](https://github.com/cypress-io/cypress/issues/1099)
  * Added "test": "cypress open" under scripts
  * Run the following in the cli `npm run test`


### Steps to run the test suite. 
* Make sure you have Cypress compatible browser installed on your computer. Browsers listed [here](https://docs.cypress.io/guides/guides/launching-browsers#Browsers).
* Backup your existing `json` files in the project folder, and then clone the [repo](https://github.com/schima/e2e) to the same location as your `node_modules` folder of Cypress framework.
* In the CLI, navigate to root of the project folder and run the following command to start the Cypress Server.
*   `./node_modules/.bin/cypress open`
*   This should invoke Cypress application to the frontend, and you will see file called `youtube.spec.js` file.
*   click on this `youtube.spec.js` file so Cypress can invoke the browser to run this test.
*   Once the test suite is invoked, it will run and then finish successfully. 
