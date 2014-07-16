jQuery(document).ready(function($) {
	$("#schedule-day2").hide();

	$("#schedule-tabs div").click(function(event) {
		/* Act on the event */
		var currentlyCheckedTab = $("#schedule-tabs").find('.checked');
		var daysDivs = $("#schedule-days div");
		var currentlyCheckedDay = $("label", this).attr('for');


		// selected.removeClass('checked');
		// selected.addClass('not-checked');

		// unselected.removeClass('not-checked');
		// unselected.addClass('checked');

		if($(this).hasClass('not-checked')) {

			currentlyCheckedTab.removeClass('checked').addClass('not-checked');
			$(this).addClass('checked').removeClass('not-checked');

			daysDivs.hide();
			$("#"+currentlyCheckedDay).show();

		}

	
	});
});