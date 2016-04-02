// $(function()
// {
//      $("#right_arrow").click(function()
//      {
//          $("#div_featured_box").slideToggle();
//          return false;
//      }); 
// });

$('.nav li a').click(function(e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
});