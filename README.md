# greentubeAssessment
automation task 

Output logs:
  Triet tests
Test begin
------------------------------------------------
    ✓ Open and login GameTwist (18070ms)
    ✓ Go to Slots (16073ms)
    ✓ Go to Bingo (2315ms)
    ✓ Go to Casino (2158ms)
    ✓ Go to Poker (2363ms)
    ✓ Search for Slots (8300ms)
    ✓ Change language (6667ms)
    ✓ logout (6459ms)
------------------------------------------------
Test finished


1. Required modules:
chromedriver 2.29
mocha 3.3
selenium-webdriver 3.4

*modules installed locally --save

2. For running test with Visual Studio Code, please add this launch.json settings

{
    // Use IntelliSense to learn about possible Node.js debug attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [

        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceRoot}/./test.js"
        },
        {
            "type": "node",
            "request": "attach",
            "name": "Attach to Port",
            "address": "localhost",
            "port": 5858
        },
		{
            "request": "launch",
			// Name of configuration; appears in the launch configuration drop down menu.
			"name": "Run mocha test",
			// Type of configuration. Possible values: "node", "mono".
			"type": "node",
			// Workspace relative or absolute path to the program.
			"program": "${workspaceRoot}/node_modules/mocha/bin/_mocha",
			// Automatically stop program after launch.
			"stopOnEntry": false,
			// Command line arguments passed to the program.
			"args": ["test.js"],
			// Workspace relative or absolute path to the working directory of the program being debugged. Default is the current workspace.
			"cwd": "${workspaceRoot}",
			// Workspace relative or absolute path to the runtime executable to be used. Default is the runtime executable on the PATH.
			"runtimeExecutable": null,
			// Environment variables passed to the program.
			"env": { "NODE_ENV": "production"}
		}
    ]
}
