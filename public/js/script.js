$(document).ready(() => {
  console.log('script loaded');

$('.new-people-form').on('submit', e => {
  // prevents page from reloading when submitting the form
  e.preventDefault();
  // .val grabs the value out of the element
  const name = $('.people-name-input').val(),
        favoriteCity = $('.people-favoriteCity-input').val();

   const newPersonData = {
    name: name,
   favoriteCity : favoriteCity
  };

 $.ajax({
    url: '/api/people/',
    type: 'POST',
    // this will be the req.body
    data: newPersonData,
    success: response =>{
      console.log(response);
      // will send us to the pokemon id page
      window.location.replace('/people/' + response.id);
    }, error: msg => {
      console.log(msg);
    }

  });
});

$('.edit-people-form').on('submit', e => {
  e.preventDefault();
    const favoriteCity = $('.people-favoriteCity-input').val(),
        id = $('.people-id-input').val();

    const modifiedPeopleData = {
        name,
        favoriteCity,
        id
    };

$.ajax({
     type: 'PUT',
    url: '/api/people/' + id,
    // this will be the req.body
    data: modifiedPeopleData,
    success: response =>{
      console.log(response);
      // will send us to the pokemon id page
      window.location.replace('/people/' + response.id);
    }, error: msg => {
      console.log(msg);
    }

  });
});

 $('.delete-person1').click(function () {
        id = $('.person-id').attr('data-id')
        if (confirm('Are you sure you want to delete this person?')) {
            $.ajax({
                url: '/api/people/' + id ,
                  type: 'DELETE'
                , success: function (data) {
                  // console.log(data);
                    window.location.replace('/people');
                }
                , error: function (error) {
                    console.log('error! ', error);
                }
            });
        };
    });



















}); // ends document.ready
