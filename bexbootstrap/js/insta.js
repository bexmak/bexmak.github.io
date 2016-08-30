
jQuery.fn.spectragram.accessData = {
    accessToken: '[your-instagram-access-token]',
    clientID: '49feb347a44649aba8a9bf3b6efc7a4c'
};

$('#instafeed').spectragram('getRecentTagged',{
    query: 'converse'
});