# greentubeAssessment
automation task 
For running test with Visual Studio Code, please add this launch.json settings

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
