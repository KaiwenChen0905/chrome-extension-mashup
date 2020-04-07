
var everything = document.getElementsByTagName("body");
console.log('word redactor extension running');

for (var i = 0; i < everything.length; i++) {

  var txt = everything[i].innerHTML;

  var tokens = txt.split(/(<.*?>)/);
  for (var j = 0; j < tokens.length; j++) {

    if (tokens[j].charAt(0) !== '<') {
      tokens[j] = tokens[j].replace(/\bcorona\b/gi,'<span class="redact">trump</span>');
      tokens[j] = tokens[j].replace(/\bchina-virus\b/gi,'<span class="redact">trump-virus</span>');
      tokens[j] = tokens[j].replace(/\bchinavirus\b/gi,'<span class="redact">trumpvirus</span>');
      tokens[j] = tokens[j].replace(/\bcoronavirus\b/gi,'<span class="redact">trumpvirus</span>');
    }
  }

  everything[i].innerHTML = tokens.join('');
}
