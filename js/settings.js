const emailNotifications = document.getElementById('emailNotifications');
const profilePublic = document.getElementById('profilePublic');
const timeZone = document.getElementById('time_zone');
const settingSAVE = document.getElementById('settingSAVE');
const settingCANCEL = document.getElementById('settingCANCEL');


function saveSetting () {
    localStorage.setItem('emailNotification', JSON.stringify(emailNotifications.checked));
    localStorage.setItem('publicProfile', JSON.stringify(profilePublic.checked));
    localStorage.setItem('timezone', timeZone.value);
}


function setSettings () {
    if (localStorage.hasOwnProperty('emailNotification')) {
        emailNotifications.checked = JSON.parse(localStorage.emailNotification);
    }
    if (localStorage.hasOwnProperty('publicProfile')) {
        profilePublic.checked = JSON.parse(localStorage.publicProfile);
    }
    if (localStorage.hasOwnProperty('timezone')) {
        timeZone.value = localStorage.timezone;
    }
}


function cancelSettings () {
    localStorage.removeItem('emailNotification');
    localStorage.removeItem('publicProfile');
    localStorage.removeItem('timezone');
    emailNotifications.checked = '';
    profilePublic.checked = '';
    timeZone.value = "";
}