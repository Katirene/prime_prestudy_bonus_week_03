$(document).ready(function() {

    $('#submit-button').on('click', postData);


});

function postData() {
    event.preventDefault();

    var values = {};
    $.each($('#sql-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    console.log(values);

    $.ajax({
        type: 'POST',
        url: '/people',
        data: values,
        success: function(data) {
            if(data) {
                // everything went ok
                console.log('from server:', data);
                getData();
            } else {
                console.log('error');
            }
        }
    });

}

function getData() {
    $.ajax({
        type: 'GET',
        url: '/people',
        success: function(data) {
            for(var i=0; i < data.length; i++){
                $('.peoplecontainer').append('<span><p>' +'  '+ data[i].name +'  '+ '</p></span>');
                $('.peoplecontainer').append('<p>' +'  '+ data[i].address +'  '+ '</p>');
                $('.peoplecontainer').append('<p>' +'  '+ data[i].city +'  '+ '</p>');
                $('.peoplecontainer').append('<p>' +'  '+ data[i].state +'  '+ '</p>');
                $('.peoplecontainer').append('<p>' +'  '+ data[i].zip_code +'  '+ '</p>');
                }
            console.log(data.name);
        }
    });
}