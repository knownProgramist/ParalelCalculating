$(document).ready(function(){
    $('button').on('click', function(){
        let titleValue = $('input').val();
        let contentValue = $('textarea').val();

        $.ajax({
            method: "POST",
            url: "main.php",
            data: { title: titleValue, content: contentValue }
        })
        .done(function(){
            $('input').val('');
            $('textarea').val('');   
            alert('Data sent!'); 
        });
    })
});

