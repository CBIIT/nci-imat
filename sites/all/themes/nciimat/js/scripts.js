//(function ($, Drupal) {
//
//  Drupal.behaviors.STARTER = {
//    attach: function(context, settings) {
//      // Get your Yeti started.
//	  
//	  $( " | " ).insertAfter( ".leaf a" );
//	  
//    }
//  };
//})(jQuery, Drupal);

jQuery(document).ready(function ($) {
	
	$('.footer .menu li.leaf:not(:last)').after('<li class="footer-divider">|</li>');
	
	// Linkify links
	$('.field-name-field-external-link .field-item').each(function(){
		// Get the content
		var str = $(this).html();
		// Set the regex string
		var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig
		// Replace plain text links by hyperlinks
		var replaced_text = str.replace(regex, "<a href='$1' target='_blank' class='ext'>$1</a>");
		// Echo link
		$(this).html(replaced_text);
	});
	
	jQuery(".abstract").hide();
	jQuery(".showhide").click(function(event) {
		event.preventDefault();
		jQuery(this).closest('tr').next().find('.abstract').toggle();
	});
	
		
});


jQuery(function(){
	jQuery('.showall').click(function(){
		jQuery('.abstract').toggle();
	});
});
