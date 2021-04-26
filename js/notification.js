const notificationBell = document.querySelector('.notification');
const notifyContainer = document.querySelector('.notify-container');

// show notification container
notificationBell.addEventListener('click', () => {
    if (notifyContainer.classList.contains('notify-container-show')) {
        notifyContainer.classList.remove('notify-container-show');
    } else {
        notifyContainer.classList.add('notify-container-show');
    }
})


// Intializes notification counter 
//Creates an element to display counter 
let notifyCounter = 0;
const notificationIconCount = document.createElement('span');
notificationIconCount.classList = 'notification-icon-count';


// Adds notification to notify 
// Counts new notifications and displays total on title and icon  
function newNotify (member, memberAction, siteContent, time) {


    notifyCounter++;

    if (notifyCounter >= 1) {
        // Updates title notification  with current counter
        document.title = `\(${notifyCounter}\) ${mainTitle}`;

        // Updates/Creates icon with current counter
        if (notificationBell.contains(notificationIconCount)) {
            notificationIconCount.textContent = notifyCounter;
        } else {
            notificationIconCount.textContent = notifyCounter;
            notificationBell.appendChild(notificationIconCount);
        }
    } 

    // Sets counter to zero
    // Remove notification icon count display 
    notificationBell.addEventListener('click', () => {
        notifyCounter = 0;
        document.title = mainTitle;
        notificationIconCount.remove();
    })

    const notify = document.createElement('div');
    notify.classList ='notify';
    notifyContainer.appendChild(notify);

    const img = document.createElement('img');
    img.classList = 'notify-member-photo';
    img.setAttribute('src', member.profilePhoto);
    img.setAttribute('alt', `${member.fullName} profile photo`)
    notify.appendChild(img);
    const msg = document.createElement('p');
    msg.classList = 'notify-msg';
    msg.innerHTML = `${member.fullName} ${memberAction} <strong>${siteContent}</strong>`;
    notify.appendChild(msg);
    const timeSince = document.createElement('p');
    timeSince.classList = 'notify-time';
    timeSince.textContent = `${time}`;
    notify.appendChild(timeSince);
}


// Alert Messages 
const alertMessages = [
    'Updates to our Terms of Service and Privacy Policy',
    'You have unread messages',
];

// X button SVG
const xBtn = '<svg class="closeBtn" height="365.696pt" viewBox="0 0 365.696 365.696" width="365.696pt" xmlns="http://www.w3.org/2000/svg"><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/></svg>'


// Adds alert banner 
function userAlert(alertMessages) {
    const pageTitleContainer = document.querySelector('.page-title-container');
    const alert = document.createElement('div');
    alert.classList = 'alert';
    pageTitleContainer.after(alert);

    const alertContainer = document.createElement('div');
    alertContainer.classList = 'alert-container';
    alert.appendChild(alertContainer)

    const alertMsg = document.createElement('p');
    alertMsg.classList = 'alertMsg';
    alertMsg.innerHTML = `<strong>Alert:</strong> ${alertMessages}`;

    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = xBtn;

    alertContainer.appendChild(alertMsg);
    alertContainer.appendChild(closeBtn);

    const close = document.querySelector('.closeBtn');
    close.addEventListener('click', () => {
        alert.remove();
    })
}