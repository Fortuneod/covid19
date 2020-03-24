const welcome = require('cli-welcome');
const pkgJSON = require('./../package.json');
const updateNotifier = require('update-notifier');

module.exports = async () => {
	welcome(`covid19-cli`, `by Fortuneod\n${pkgJSON.description}`, {
		bgColor: `#007C91`,
		color: `#FFFFFF`,
		bold: true,
		clear: true,
		version: `v${pkgJSON.version}`
	});
	updateNotifier({
		pkg: pkgJSON,
		shouldNotifyInNpmScript: true
	}).notify({ isGlobal: true });
};
