var unreadCount = 5;

window.onload= () => {
    'use strict';

    if('serviceWorker' in navigator){
        navigator.serviceWorker
        .register('./serviceWorker.js');
    }

    //badging
    navigator.setAppBadge(unreadCount).catch((error)=>{console.log(error);});
} 

// more info button of destination.html 
function displayNotification() {

    Notification.requestPermission(status => {
        console.log('notification permission status:', status);
    });

    if(Notification.permission === 'granted'){
        navigator.serviceWorker.getRegistration()
        .then(reg => {
            reg.showNotification('Travel Nepal', options);
            unreadCount++;
        });
        navigator.setAppBadge(unreadCount).catch((error)=>{console.log(error)});
    }
}

const options = {

    body: 'We have a new destination for you!',
    icon: 'images/travel-nepal-512.png',
    vibrate:   [100,40,100, 40,300],
    badge: 'https://vanarragon.ca/nimage/icon.png', 
    data: {primaryKey:1},
    actions: [
        {action:'go', title: 'Go to the destination', icon:'https://vanarragon.ca/nimage/icon.png'},
        {action:'close', title: 'No thanks', icon:'https://vanarragon.ca/nimage/icon.png'},
    ]
}