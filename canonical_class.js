#!/usr/bin/env node

const fs = require("fs");

// process.argv

if (process.argv.length < 3 || process.argv.length > 3) {
	console.error("Bad number of arguments.");
	return ;
}

const className = process.argv[2];

if (typeof className !== "string") {
	console.error("Argument is not a string.");
	return ;
}

const headerFile = `#ifndef ${className.toUpperCase()}_H
#define ${className.toUpperCase()}_H

class ${className}
{
private:
	/* data */
public:
	${className}();
	${className}(const ${className}& obj);
	~${className}();
	${className}& operator=(const ${className}& obj);
};

#endif`;

const cppFile = `#include "${className}.hpp"

${className}::${className}()
{
}
${className}::${className}(const ${className}& obj)
{
}

${className}::~${className}()
{
}

${className}& ${className}::operator=(const ${className}& obj)
{
}
`;

fs.writeFile(`${className}.hpp`, headerFile, (err) => {
	if (err) throw err;
	console.log(`${className}.hpp created`);
});

fs.writeFile(`${className}.cpp`, cppFile, (err) => {
	if (err) throw err;
	console.log(`${className}.cpp created`);
});