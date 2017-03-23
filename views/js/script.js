$(function () {
    $('#cocktailcreate').submit(function (e) {
        e.preventDefault();

        var _name = $('#name').val(),
            _ingredient = $('#ingredient').val();

        $.post('api/cocktail', {
            name: _name,
            ingredient: _ingredient
        }).done(function (me) {
            alert("data loaded: " + me.id);
            var _p = '<p>' + ' Votre id est: ' + me.id + '</p>';
            $('#ident').append(_p);
        });
    });


    $('#lacarte').click(function () {
        $.get('/api/lacarte', function (data) {

            for (var i = 0; i < data.length; i++) {
                var _li = ' <li> ' + data[i].id + ' - ' + data[i].cocktail + ' - ' + data[i].ingredient + ' - ' + data[i].price + ' </li> ';
                $('#cartelist').append(_li);
            }
        });
    });

    (function () {
        data[0].ingredient.split(',');
        data[0].ingredient.splice(2, 1);
        data[0].ingredient.join(',');
    });
});