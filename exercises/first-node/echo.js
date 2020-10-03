// use the ability to read command line arguments and environment variables to create
// a command line utility that prints the value of an environment variable to the screen
const args = process.argv.slice(2);

// viewing single environment variable
const envVariableValue = process.env[args[0]];
console.log(envVariableValue);

// viewing multiple environment variables
args.forEach((arg) => {
	const envVar = process.env[arg];

	// handling undefined input
	if (envVar === undefined) {
		console.error(`couldn't find ${envVar} in environment`);
	} else {
		console.log(envVar);
	}
});
