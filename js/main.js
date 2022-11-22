
document.getElementById('mobile_menu_btn').addEventListener('click', () => {
  const mobileMenuBack = document.querySelector('#mobile_menu_back');
  mobileMenuBack.height = document.querySelector('body').height;
  mobileMenuBack.classList.toggle('hide');
});

document.getElementById('close_mobile_menu').addEventListener('click', () => {
  document.getElementById('mobile_menu_back').classList.toggle('hide');
});
