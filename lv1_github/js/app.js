$(function()
{
    $('#dodaj').click(function(){
        var predmet = $('#predmet').val();
        var godina = $('#godina').val();
        var bodovi = $('#bodovi').val();

        var podatci = '<tr><td>'+predmet+'</td><td>'+godina+'</td> <td>'+bodovi+'</td><td>'+'<button class="obrisi">Obriši</button>'+'</td</tr>';
        $('tbody').append(podatci);

    });
    $(document).on('click', '.obrisi',function(){
        $(this).closest('tr').remove();
    });
});

