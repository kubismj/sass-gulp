$.getJSON('../package.json', function(data){
    var autor = data.author;
});

function wstaw(autor) {
    $('span').append(autor);
}