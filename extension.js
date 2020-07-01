const vscode = require('vscode');
const build = require('./run');

let statusBar = null;
let dist = '/dist/';
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "ui-check" is now active!');

	let disposable = vscode.commands.registerCommand('ui-check.build', function () {
		vscode.window.showInputBox({ // 这个对象中所有参数都是可选参数
			password:false, // 输入内容是否是密码
			placeHolder:'输入目录', // 在输入框内的提示信息
			// ignoreFocusOut:true,
			value: dist,
			prompt:'需要检测的目录(默认为/dist/)', // 在输入框下方的提示信息
			validateInput: function(value){
				if(!value){
					return '目录不能为空'
				}
			}
		}).then((value) => {
			if(value){
				dist = value;
				build(value, (filename) => {
					statusBar.text = `$(loading) 正在生成${filename}...`;
					this.timer && clearTimeout(this.timer);
					this.timer = setTimeout(() => {
						statusBar.text = '$(symbol-keyword) ui-check';
						vscode.window.showInformationMessage('目录test生成完成！')
					},300)
				})
			}
		});
		
	});

	context.subscriptions.push(disposable);

	if(!statusBar) {
		statusBar  = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
	}
	statusBar.text = '$(symbol-keyword) ui-check';
	statusBar.show();
	statusBar.command = 'ui-check.build';
}


// this method is called when your extension is deactivated
function deactivate() {
	statusBar.dispose();
}

module.exports = {
	activate,
	deactivate
}
