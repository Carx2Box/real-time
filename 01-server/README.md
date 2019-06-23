
# server 

# Generate distribution

tsc -w

# Up the project

nodemon dist/

# Debug execute

* inlline
  > cd 'd:\Desarrollo\sockets\01-server'; & 'nodemon' '--inspect-brk=49342' 'dist\index.js**'

* configuration (launch.json)

  {
    "type": "node",
    "request": "launch",
    "name": "nodemon",
    "runtimeExecutable": "nodemon",
    "program": "${workspaceFolder}/dist/index.js",
    "restart": true,
    "console": "integratedTerminal",
    "internalConsoleOptions": "neverOpen"
  }