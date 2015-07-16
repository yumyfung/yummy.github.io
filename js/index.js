$(function(){
	var $special = $('.special');
	$special.click(function(){
		var $this = $(this);
		if($this.hasClass('current')){
			$this.find('.subnav').slideUp(600, function(){
				$this.removeClass('current');
			});
		}else {
			$special.removeClass('current').find('.subnav').hide();
			$this.addClass('current').find('.subnav').slideDown(600);
		}
		
	})
})