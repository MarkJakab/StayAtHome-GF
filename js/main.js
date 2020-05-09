let data = {
    photo: 'img/photo1.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
  };
  
  $('#photo').attr('src', data.photo);
  console.log(data.photo);