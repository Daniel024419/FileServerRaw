
//main
var home=document.getElementById('home');
var emails=document.getElementById('emails');
var uploads=document.getElementById('uploads');
var downloads=document.getElementById('downloads');
var logout=document.getElementById('logout');
var users=document.getElementById('users');


//stats
var home=document.getElementById('home');
var stats_emails=document.getElementById('stats_emails');
var stats_uploads=document.getElementById('stats_uploads');
var stats_=document.getElementById('stats_downloads');
var stats_users=document.getElementById('stats_users');


//routes

//home
home.addEventListener('click',(e)=>{
e.preventDefault();
window.location.href='./index.html';
home.removeEventListener('click');
});
 
//emails
emails.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href='./partials/email.html';
    emails.removeEventListener('click');
    });
 
    //uploads
    uploads.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href='./partials/uploads.html';
    uploads.removeEventListener('click');
    });

    //downloads
    downloads.addEventListener('click',(e)=>{
        e.preventDefault();
        window.location.href='./partials/downloads.html';
        downloads.removeEventListener('click');
        });
 //users
 users.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href='./partials/users.html';
    users.removeEventListener('click');
    });

    //logout
    logout.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href='./logoutl';
    logout.removeEventListener('click');
    });


    //stats
    
    //emails
    stats_emails.addEventListener('click',(e)=>{
        e.preventDefault();
        window.location.href='./partials/email.html';
        stats_emails.removeEventListener('click');
        });
     
        //uploads
        stats_uploads.addEventListener('click',(e)=>{
        e.preventDefault();
        window.location.href='./partials/uploads.html';
        stats_uploads.removeEventListener('click');
        });
    
        //downloads
        stats_downloads.addEventListener('click',(e)=>{
            e.preventDefault();
            window.location.href='./partials/downloads.html';
            stats_downloads.removeEventListener('click');
            });
     //users
     stats_users.addEventListener('click',(e)=>{
        e.preventDefault();
        window.location.href='./partials/users.html';
        stats_users.removeEventListener('click');
        });
