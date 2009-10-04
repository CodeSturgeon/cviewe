var html = '';
var chunks = vendor.cviewe.pretty.split('<!--split-->');
if(head){
    html = chunks[0];
    var json = JSON.stringify(head,'','  ');
    html += template(chunks[1],{json:json});
} else if (row) {
    var json = JSON.stringify(row,'','  ');
    html = template(chunks[1],{json:json});
} else {
    html = chunks[2];
}
return html
