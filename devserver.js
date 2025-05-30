require("babel/register")({
	stage: 0,
	plugins: ["typecheck"]
});

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ 		= true;

if (process.env.NODE_ENV !== "production") {
	global.__DEV__  == false;
	if (!require("piping")({hook: true})) {
		return;
	}
}

require("./src/server");
