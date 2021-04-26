// Create New Member (fullName, email, signUpDate, profilePhoto)
class Member {
    constructor(fullName, email, signUpDate, profilePhoto) {
        this.fullName = fullName;
        this.email = email;
        this.signUpDate = signUpDate;
        this.profilePhoto = profilePhoto;
    }
}


// Members 
const member1 = new Member('Victoria Chambers', 'victoria.chambers80example.com', '10/15/20', 'images/member-1.jpg');
const member2 = new Member('Dale Byrd', 'dale.byrd52@example.com', '10/15/20', 'images/member-2.jpg');
const member3 = new Member('Dawn Wood','dawn.wood16@example.com','10/15/20', 'images/member-3.jpg');
const member4 = new Member('Dan Oliver', 'dan.oliver82@example.com', '10/15/20', 'images/member-4.jpg');
const member5 = new Member('Richard Hendricks', 'richard.hendricks@example.com', '10/10/20', 'images/member-richard.jpg');
const member6 = new Member('Jian-Yang', 'jyang@example.com', '10/10/20', 'images/member-jian.jpg');
const member7 = new Member('Gavin Belson', 'g.belson@hooli.com', '10/12/20', 'images/member-gavin.jpg');
const member8 = new Member('Monica Hall', 'monica@breamhall.com', '10/10/20', 'images/member-monica.jpg');

const members = [];


// Loads user profile photo and name 
function userProfile(member) {
    const profilePhoto = member.profilePhoto;
    const fullName = member.fullName;
    const userPhoto = document.querySelector('.user-photo');
    const userName = document.querySelector('.user-name'); 
    userPhoto.setAttribute('src', profilePhoto);
    userPhoto.setAttribute('alt', `${fullName} profile photo`);
    userName.textContent = fullName;
}


// Creates a new member, Displays New Members widget, adds member to 'members' array  
function newMembers(member) {
    const memberDiv = document.createElement('div');
    memberDiv.classList = 'member';
    const newMembers = document.querySelector('.new-members-container');
    newMembers.appendChild(memberDiv);
    const memberContainer = document.createElement('div');
    memberContainer.classList = 'member-container';
    memberDiv.appendChild(memberContainer);
    const memberProfilePhoto = document.createElement('div');
    memberProfilePhoto.classList = 'member-profile-photo';
    memberContainer.appendChild(memberProfilePhoto);
    const memberPhoto = document.createElement('img');
    memberPhoto.classList = 'member-photo'
    memberPhoto.setAttribute('src', member.profilePhoto);
    memberPhoto.setAttribute('alt', `${member.fullName} profile photo`)
    memberProfilePhoto.appendChild(memberPhoto);
    const memberInfo = document.createElement('div');
    memberInfo.classList = 'member-info';
    const memberName = document.createElement('p');
    memberName.classList = 'member-name';
    memberName.textContent = member.fullName;
    const memberEmail = document.createElement('p');
    memberEmail.classList = 'member-email';
    memberEmail.textContent = member.email;
    memberContainer.appendChild(memberInfo);
    memberInfo.appendChild(memberName);
    memberInfo.appendChild(memberEmail);
    const memberSignupDate = document.createElement('div');
    memberSignupDate.classList = 'member-signup-date';
    memberDiv.appendChild(memberSignupDate);
    const signUpDate = document.createElement('p');
    signUpDate.classList = 'signup-date';
    signUpDate.textContent = member.signUpDate;
    memberSignupDate.appendChild(signUpDate);

    // Adds memeber fullname to 'members' array
    members.push(member.fullName);
};

// Adds members fullname to 'members' array
function pushMemember (member) {
    members.push(member.fullName);
}

pushMemember(member6);
pushMemember(member8);

// Right arrow for recent activity on screens 769px and higher
const rightArrowIcon = ` <svg class="right-arrow-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                            <g>
                                <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                                    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                                    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                                    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                            </g>
                        </svg>`;


// Members actions, site content, and activity time. 
const memberActions = [
    'commented on',
    'liked the post',
    'posted', 
    'invited you to like', 
    'sent you a',
];

const siteContent = [
    "WebApp's SEO Tips",
    "Facebook's Changes for 2021",
    'NEW FACEBOOK',
    'Friend Request',
    'Bream Hall Venture Capital',
];

const activityTime = [
    '4 hours ago',
    '5 hours ago',
    '1 day ago',
    '2 hour ago',
    '30 minutes ago',
    '10 minutes ago',
];

// Displays Members recent activity 
function recentActivity (member, memberActions, siteContent, activityTime) {
    const recentActivityDiv = document.createElement('div');
    recentActivityDiv.classList = 'recent-activity';
    const recentActivityContainer = document.querySelector('.recent-activity-container');
    recentActivityContainer.appendChild(recentActivityDiv);
    const memberContainer = document.createElement('div');
    memberContainer.classList = 'member-container';
    recentActivityDiv.appendChild(memberContainer);
    const memberProfilePhoto = document.createElement('div');
    memberProfilePhoto.classList = 'member-profile-photo';
    memberContainer.appendChild(memberProfilePhoto);
    const memberPhoto = document.createElement('img');
    memberPhoto.classList = 'member-photo'
    memberPhoto.setAttribute('src', member.profilePhoto);
    memberPhoto.setAttribute('alt', `${member.fullName} profile photo`)
    memberProfilePhoto.appendChild(memberPhoto);
    const recentActivityInfo = document.createElement('div');
    recentActivityInfo.classList = 'recent-activity-info'
    memberContainer.appendChild(recentActivityInfo);
    const memberRecentActivity = document.createElement('div');
    memberRecentActivity.classList = 'member-recent-activity';
    recentActivityInfo.appendChild(memberRecentActivity);
    memberRecentActivity.innerHTML = `<p>${member.fullName} ${memberActions} <strong>${siteContent}</strong></p>`;
    const recentActivityTime = document.createElement('div');
    recentActivityTime.classList = 'recent-activity-time';
    recentActivityInfo.appendChild(recentActivityTime);
    const time = document.createElement('p');
    time.textContent = `${activityTime}`;
    recentActivityTime.appendChild(time);
    const rightArrow = document.createElement('div');
    rightArrow.classList = 'right-arrow';
    recentActivityDiv.appendChild(rightArrow);
    rightArrow.innerHTML = rightArrowIcon;                       
};