const menuToggle = document.querySelector('.menuToggle')
const navigation = document.querySelectorAll('navigation')

menuToggle.onclick = function() {
    navigation.classList.toggle('open')
}