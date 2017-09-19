// Komodo Edit, version 10.1.3, build 17451, platform win32-x86.
// Built on Thu Dec 01 21:36:05 2016.
komodo.assertMacroVersion(3);
if (komodo.view) { komodo.view.setFocus(); }

var formatter;
var language = komodo.view.language;
switch (language) {
    case 'Perl':
        formatter = 'perltidy -i=2 -pt=2 -l=0';
        break;
    case 'XML':
        formatter = 'tidy -q -xml -i -w 80 --output-encoding utf8';
        break;
    case 'XUL':
    case 'XLST':
        formatter = 'tidy -q -xml -i -w 500';
        break;
    case 'HTML':
        formatter = 'tidy -q -asxhtml -i -w 120';
        break;
  //case 'JavaScript':
  //    ko.views.manager.currentView.scimoz.selectAll();
  //    ko.views.manager.currentView.scimoz.replaceSel(js_beautify(ko.views.manager.currentView.scimoz.text, {indent_size: 2}));
  //    return null;
  default:
        alert("I don't know how to tidy " + language);
        return null;
}

//save current cursor position
var currentPos = komodo.editor.currentPos;

try {
    // Save the file.  After the operation you can check what changes where made by
    // File -> Show Unsaved Changes
    komodo.doCommand('cmd_save');

    // Group operations into a single undo
    komodo.editor.beginUndoAction();

    // Select entire buffer & pipe it into formatter.
    komodo.doCommand('cmd_selectAll');
    ko.run.runEncodedCommand(window, formatter + " {'insertOutput': True, 'operateOnSelection': True}");

     // Restore cursor.  It will be close to the where it started depending on how the text was modified.
     komodo.editor.gotoPos(currentPos);

    // On windows, when the output of a command is inserted into an edit buffer it has unix line ends.
    komodo.doCommand('cmd_cleanLineEndings');
}
catch (e) {
    alert(e);
}
finally {
    // Must end undo action or may corrupt edit buffer
    komodo.editor.endUndoAction();
}