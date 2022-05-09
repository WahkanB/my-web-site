$(document).ready(function(){
    const clicknav = $('#clicknav');
    const togglenav = $('#togglenav');

    clicknav.click(function(){
        togglenav.slideToggle('slow')
    })
});