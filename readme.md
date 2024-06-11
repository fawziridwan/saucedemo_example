Example Webdriver.IO

- Spesification : 
  - Webdriver.io
  - Cucumber
  - Allure Reports
  - Page Object Model

Folder Structure : 
.
├── features                # cucumber feature files
├─── page objects           # files" contains page file, variables xpath elements, etc. 
├─── step-definitions       # all files steps definitions
├── package.json            # list of dependencies
├── wdio.conf.js            # configuration default from webdriver.io
└── README.md

How to run : 
- run npm install/yarn
- run "npm run test"
- run "npm run generate" to generatec allure reports
- run "npm run open" to open this reports previous generate 