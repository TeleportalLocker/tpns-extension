const vscode = require('vscode');

function activate(context) {
    console.log("L'extension est activée.");

    let disposable = vscode.commands.registerCommand('extension.interpreter', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const sourceCode = document.getText();
            // Interprétez ici votre langage de balisage personnalisé.
            // Vous pouvez utiliser le code que nous avons créé précédemment pour cela.
            const parsedCode = parseCustomMarkup(sourceCode);
            vscode.window.showInformationMessage(parsedCode);
        }
    });

    context.subscriptions.push(disposable);
}

function parseCustomMarkup(source) {
    // Ici, vous pouvez mettre le code d'interprétation de votre langage de balisage personnalisé.
    // Utilisez la logique de votre langage pour convertir le code source en HTML, par exemple.
    return "Interprétation du code personnalisé ici.";
}

exports.activate = activate;
