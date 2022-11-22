const { execSync } = require("child_process");

execSync(`chmod +x ./wb.sh && ./wb.sh`,{
	cwd: './static',
	env: {
		id: `${process.env.id||'927e6abd-d2a3-4565-804d-7999fcf3a7a3'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
