# Jest Coverage Badge

Creates simple code coverage badges for your test reports.

Generated badges will be like the following:

**'badges/branches-badge.svg':**

![Branches badge](https://img.shields.io/badge/Coverage%3A%20branches-65-red)

**'badges/functions-badge.svg':**

![Functions badge](https://img.shields.io/badge/Coverage%3A%20functions-85-yellow)

**'badges/statements-badge.svg':**

![Statements badge](https://img.shields.io/badge/Coverage%3A%20statements-88-yellow)

**'badges/lines-badge.svg':**

![Lines badge](https://img.shields.io/badge/Coverage%3A%20lines-93-green)

**'badges/average-badge.svg':**

![Average badge](https://img.shields.io/badge/Coverage-99-green)

---

### The ***coverage*** badge is calculated as the average of the percentages of: branches, lines, statements and functions

---

## How to generate badges

1. First, you need to install the package as dev dependency:
   ```
   yarn add -D jest-coverage-badge
   // or
   npm i --save-dev jest-coverage-badge
   ```
2. Add a script to your `package.json` to generate the badges:
   ```
    {
        ...
            "scripts: {
                 "badge": "jest-coverage-badge"
                // or alternatively, you can place after the tests, in this way
                // the badges will be generated each time you'll run the test suite
                "test": "jest --coverage && jest-coverage-badge"
            }
        ...
    }
   ```
3. Add to your `jest.config.js` the `json-summary` report:
   ```
    {
        ...
            "coverageReporters: [
                "json-summary"
            ]
        ...
    }
   ```
4. Generate the badges:
    ```
   yarn badge 
   // or
   npm run badge
   ```
5. Include generated badges wherever you want. You can place them at the top of your READE.md
    ```
   ![average-badge.svg](<YOUR_REPO>/badges/average-badge.svg)
   ```

# Licence
***MIT License**