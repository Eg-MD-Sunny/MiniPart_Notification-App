console.log('Hellow')

let button = document.querySelector('button');
button.addEventListener('click', () => {

    if(!window.Notification) return;

    // console.log(Notification.permission);
    Notification
    .requestPermission()
    .then(showNotification)
});
function showNotification(permission){
    if(permission !== 'granted') return;
    let notification = new Notification('My Title',{
        body:"Hi how are you today",
        icon:"icon.png"
    })
}