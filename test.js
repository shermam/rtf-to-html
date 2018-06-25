const rtfToHTML = require('./index.js');
const rtfText = "{\\rtf1\\ansi\\ansicpg1252\\deff0\\nouicompat\\deflang1046{\\fonttbl{\\f0\\fnil\\fcharset0 Times New Roman;}}\r\n{\\*\\generator Riched20 10.0.10586}\\viewkind4\\uc1 \r\n\\pard\\ul\\f0\\fs20 Solu\\'e7\\'e3o de Auditoria:\\ulnone\\par\r\n\\par\r\nFoi definida com a equipe de Arquitetura a cria\\'e7\\'e3o da funcionalidade de logs de auditoria para transa\\'e7\\'f5es executadas no sistema.\\par\r\nSer\\'e1 utilizado o Log4net gravando em um banco n\\'e3o relacional na nuvem, possivelmente em estruturas separadas para log de eventos de sistema e logs de eventos de usu\\'e1rio.\\par\r\n}\r\n";

rtfToHTML.fromString(rtfText, (err, html) => {
    console.log(html);
})