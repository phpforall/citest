jQuery(document).ready( function () {
    jQuery('#corona_tracker').DataTable();
 jQuery('table#corona_tracker tr td').css('color', 'black');

 jQuery("#areas").DataTable({
    "paging": false,
    "select": true
  }).column("1")
    .order("desc")
    .draw();;
} );
