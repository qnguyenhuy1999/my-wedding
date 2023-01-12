(() => {
  const fullName = document.getElementById('fullName');
  const responseItems = document.getElementsByClassName('response-item');
  const typeOfGuests = document.getElementsByClassName('type-of-guest-box');
  const attendees = document.getElementById('attendees');

  fullName.addEventListener('change', (e) => {
    fullName.setAttribute('value', e.target.value);
  });

  attendees.addEventListener('change', (e) => {
    attendees.value = e.target.value;
  });

  Array.prototype.forEach.call(responseItems, (responseItem) => {
    responseItem.addEventListener('click', (e) => {
      Array.prototype.forEach.call(responseItems, (responseItem) => {
        if (responseItem.classList.contains('active')) {
          responseItem.classList.remove('active');
        }
      });
      responseItem.classList.add('active');
    });
  });

  Array.prototype.forEach.call(typeOfGuests, (typeOfGuest) => {
    typeOfGuest.addEventListener('click', (e) => {
      Array.prototype.forEach.call(typeOfGuests, (typeOfGuest) => {
        if (typeOfGuest.classList.contains('active')) {
          typeOfGuest.classList.remove('active');
        }
      });
      typeOfGuest.classList.add('active');
    });
  });
})();
