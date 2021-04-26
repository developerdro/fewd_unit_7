// Displays main title 
const mainTitle = 'Pied Piper';
document.title = mainTitle;

// Loads user profile photo and name 
userProfile(member5);


// Adds notification to notify 
newNotify(member6, memberActions[3], siteContent[2], activityTime[3]);
newNotify(member7, memberActions[4], siteContent[3], activityTime[4]);
newNotify(member8, memberActions[3], siteContent[4], activityTime[5]);


// Displays Alert Banner 
userAlert(alertMessages[1]);
userAlert(alertMessages[0]);


// Displays New Members widget 
newMembers(member1);
newMembers(member2);
newMembers(member3);
newMembers(member4);


// Displays Members recent activity 
// recentActivity (member, memberActions, siteContent, activityTime)
recentActivity(member1, memberActions[0], siteContent[0], activityTime[0]);
recentActivity(member2, memberActions[1], siteContent[1], activityTime[1]);
recentActivity(member3, memberActions[0], siteContent[1], activityTime[1]);
recentActivity(member4, memberActions[2], siteContent[0], activityTime[2]);


// Autocomplete function, members array from members.js
autocomplete(document.getElementById("msgUser-input"), members); 

// Settings 
settingSAVE.addEventListener('click', saveSetting);
settingCANCEL.addEventListener('click', cancelSettings);
setSettings();