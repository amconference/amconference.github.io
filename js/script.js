$(function(){
	var $wrapper = $('.schedule-tabs');
	var $tabs = $('.schedule-tab');

	var $selector = $('<div class="schedule-tab-selector"/>');

	$tabs.each(function(){
		var $tab = $(this);
		var title = $tab.find('h3').text();
		$tab.find('h3').remove();
		var $tabSelector = $('<div/>').text(title);

		$tabSelector.on('click', function(){
			$tabs.hide();
			$tab.show();
			$selector.children().removeClass('clicked');
			$tabSelector.addClass('clicked');
		});
		$selector.append($tabSelector);
	});

	$wrapper.prepend($selector);
	$selector.find('div').first().trigger('click');
});
