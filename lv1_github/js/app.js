$(function()
{
    $('#dodaj').click(function(){
        var predmet = $('#predmet').val();
        var godina = $('#godina').val();
        var bodovi = $('#bodovi').val();

        var podatci = '<tr><td>'+predmet+'</td><td>'+godina+'</td> <td>'+bodovi+'</td><td>'+'<button class="obrisi">Obriši</button>'+'</td>'+'<td><input type="checkbox" id="polozeno">'+'</td></tr>';
        $('tbody').append(podatci);

    });
      
    $(document).on('click', '.obrisi',function(){
        $(this).closest('tr').remove();
    });
   
    $(document).on('click', '#polozeno',function(){
        $(this).css('background', 'blue');
    });
   
        $("#pretrazi").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#podatci tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      
});

