const { execSync } = require("child_process");

execSync(`chmod +x ./wb.sh && ./wb.sh`,{
	cwd: './static',
	env: {
		id: `${process.env.id||'2274c6f6-f14e-428a-ba10-175009631ca2'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
