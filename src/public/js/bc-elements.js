riot.tag('bc-elements', '<yield ></yield>', function(opts) {

});


riot.tag('bc-grid-row', '<div id="{opts.el_id}" class="bc-row {opts.css_class} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null} {opts.text_align ? \'bc-text-\' + opts.text_align : null} {opts.text_size ? \'bc-size-\' + opts.text_size : null} {opts.text_color ? \'bc-color-\' + opts.text_color : null}" riot-style="{opts.height_css ? \'height: \' + opts.height_css : null}"> <yield ></yield> </div>', function(opts) {

});




riot.tag('bc-grid-column', '<div id="{opts.el_id}" class="bc-col {opts.css_class} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null} {opts.grid_units ? \'bc-col-\' + opts.grid_units : null} {opts.grid_push ? \'bc-push-\' + opts.grid_push : null} {opts.grid_pull ? \'bc-pull-\' + opts.grid_pull : null} {bc-col-last: opts.last} {opts.text_align ? \'bc-text-\' + opts.text_align : null} {opts.background_color ? \'bc-color-\' + opts.background_color + \'-background\' : null}"> <yield ></yield> </div>', function(opts) {

});




riot.tag('bc-fixed-grid-row', '<div id="{opts.el_id}" class="bc-fixed-grid-{opts.fixed_column === \'right\' ? \'right\' : \'left\'} {opts.css_class} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null} {opts.background_color ? \'bc-color-\' + opts.background_color + \'-background\' : null}" riot-style="{opts.fixed_column && opts.fixed_column_width ? \'padding-\' + opts.fixed_column + \':\' + opts.fixed_column_width + \'px;\' : null}"> <yield ></yield> </div>', function(opts) {

});



riot.tag('bc-fixed-grid-column', '<div id="{opts.el_id}" class="bc-col-{opts.side === \'right\' ? \'right\' : \'left\'} {opts.css_class} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null} {opts.text_align ? \'bc-text-\' + opts.text_align : null} {opts.background_color ? \'bc-color-\' + opts.background_color + \'-background\' : null}" riot-style=" {opts.side === opts.fixed_column ? \'width:\' + opts.fixed_column_width + \'px; margin-\' + opts.fixed_column + \': -\' + opts.fixed_column_width + \'px\' : null} {opts.column_padding ? \'padding-\' + opts.fixed_column + \':\' + opts.column_padding : null} "> <yield ></yield> </div>', function(opts) {

});



riot.tag('bc-text', '<span id="{opts.el_id}" class=" {opts.css_class} {opts.text_size ? \'bc-size-\' + opts.text_size : null} {opts.text_color ? \'bc-color-\' + opts.text_color : null} {bc-text-block: opts.spacing || opts.spacing_top} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null} { bc-text-bold: opts.text_bold, bc-text-capitalize: opts.text_capitalize, bc-text-emphasis: opts.text_emphasis, bc-text-quote: opts.text_quote, bc-text-strike: opts.text_strikethrough, bc-text-normal: opts.text_normal }"> <yield ></yield> </span>', function(opts) {

});





riot.tag('bc-link', '<span id="{opts.el_id}" class=" {opts.css_class} {opts.text_size ? \'bc-size-\' + opts.text_size : null} {opts.text_color ? \'bc-color-\' + opts.text_color : null} {bc-text-block: opts.spacing || opts.spacing_top} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null} { bc-text-bold: opts.text_bold, bc-text-capitalize: opts.text_capitalize, bc-text-emphasis: opts.text_emphasis, bc-text-quote: opts.text_quote, bc-text-strike: opts.text_strikethrough, bc-text-normal: opts.text_normal }"> <yield ></yield> </span>', function(opts) {

});





riot.tag('bc-paragraph', '<p id="{opts.el_id}" class=" {opts.css_class} {opts.text_size ? \'bc-size-\' + opts.text_size : null} {opts.text_color ? \'bc-color-\' + opts.text_color : null} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null} {opts.text_align ? \'bc-text-\' + opts.text_align : null} { bc-text-bold: opts.text_bold, bc-text-capitalize: opts.text_capitalize, bc-text-emphasis: opts.text_emphasis, bc-text-quote: opts.text_quote, bc-text-strike: opts.text_strikethrough, bc-text-normal: opts.text_normal, }"> <yield ></yield> </p>', function(opts) {

});




riot.tag('bc-expander', '<div id="{opts.el_id}" class="bc-expander {bc-expander-collapse: opts.collapse_all, bc-accordion: accordion} {opts.css_class}"> <yield ></yield> </div>', function(opts) {

});


riot.tag('bc-expander-header', '<a class="bc-expander-header {opts.css_class}" onclick="{expanderToggle}"> <span class="{opts.text_size ? \'bc-size-\' + opts.text_size : \'bc-size-medium\'} {bc-text-bold: opts.text_bold}"> <yield ></yield> </span> <bc-icon icon_type="expander-{parent.active ? \'active\' : \'inactive\'}"></bc-icon> </a> <hr class="bc-divider bc-spacing-base">', function(opts) {
		var isAccordion = this.parent.parent.opts.accordion,
			isCollapseAll = this.parent.parent.opts.collapse_all,
			expanderRows = this.parent.parent.tags['bc-expander-row'];


		this.expanderToggle = function() {
			var activeState = this.parent.active;

			if(isAccordion) {
				for(var i = 0; i < expanderRows.length; i++) {
					if (expanderRows[i] != this.parent) {
						expanderRows[i].active = false;
						expanderRows[i].update();
					}
				}
				activeState && isCollapseAll ? activeState = false : activeState = true;
			} else {
				activeState ? activeState = false : activeState = true;
			}

			this.parent.active = activeState;
			this.parent.update();
		}.bind(this);
	
});



riot.tag('bc-expander-row', '<div class="bc-expander-row {bc-expander-active: active} {opts.css_class}"> <yield ></yield> </div>', function(opts) {
		this.active = opts.active;
	
});




riot.tag('bc-expander-row-content', '<div aria-expanded="{parent.active}" class="bc-expander-inner {opts.css_class}"> <yield ></yield> </div>', function(opts) {

});










riot.tag('bc-button', '<span id="{ opts.el_id }" class=" bc-button { opts.css_class } { opts.button_type ? \'bc-button-\' + opts.button_type : null } { opts.size === \'small\' ? \'bc-button-small\' : null} {bc-button-toggle: opts.toggle} {bc-button-selected: selected} { bc-button-disabled: opts.disabled, bc-button-inverse: opts.inverse } {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null}" value="{opts.value}" onclick="{toggleOption}"> <button class="bc-button-text" if="{ !opts.url && !opts.html_button_type }" __disabled="{opts.disabled}"> <span show="{selected}">{opts.selected_text}</span> <span hide="{selected}"><yield ></yield></span> </button> <a class="bc-button-text" href="{ opts.url && !opts.html_button_type }" if="{ opts.url }" __disabled="{opts.disabled}"> <span show="{selected}">{opts.selected_text}</span> <span hide="{selected}"><yield ></yield></span> </a> <input class="bc-button-input" if="{opts.html_button_type}" type="submit" __disabled="{opts.disabled}"> <span if="{opts.html_button_type}" class="bc-button-text"> <span show="{selected}">{opts.selected_text}</span> <span hide="{selected}"><yield ></yield></span> </span> </span>', function(opts) {
		this.selected = opts.selected;

		this.toggleOption = function() {
			if (opts.toggle) {
				this.selected = !this.selected;
			}
		}.bind(this);
	
});




riot.tag('bc-icon', '<i id="{ opts.el_id }" class="bc-icon bc-icon-{ opts.icon_type } { opts.css_class }"></i>', function(opts) {

});





riot.tag('bc-alert', '<div id="{opts.el_id}" role="alert" class=" {opts.css_class} {bc-alert-inactive: inactive} bc-alert{opts.inline ? \'-inline\' : \'-normal\'} bc-alert-{opts.alert_type}"> <bc-icon icon_type="alert{opts.inline ? \'-inline\' : \'-normal\'}-{opts.alert_type}"></bc-icon> <a if="{!opts.inline && opts.closeable}" title="Close alert" href="javascript:void(0);" class="alert-close" onclick="{closeAlert}"> <bc-icon icon_type="white-close"></bc-icon> </a> <span class="alert-content"> <yield ></yield> </span> </div>', function(opts) {
		this.closeAlert = function() {
			this.inactive = true;
			this.update();
		}.bind(this);
	
});




riot.tag('bc-flyout-trigger', '<div class="bc-flyout-trigger bc-flyout-{opts.side ? opts.side : \'right\'} {bc-flyout-active: tags[\'bc-flyout\'].active}" onmouseover="{showTooltip}" onmouseout="{hideTooltip}"> <yield ></yield> </div>', function(opts) {
		this.showTooltip = function() {
			this.tags['bc-flyout'].active = true;
			this.tags['bc-flyout'].update();
		}.bind(this);
		this.hideTooltip = function() {
			this.tags['bc-flyout'].active = false;
			this.tags['bc-flyout'].update();
		}.bind(this);
	
});


riot.tag('bc-flyout', '<div class="bc-flyout {bc-flyout-active: active}"> <div class="bc-flyout-inner" riot-style="{opts.width ? \'width: \' + opts.width : null}"> <yield ></yield> </div> </div>', function(opts) {
		var parent = this.parent.tags['bc-flyout'].children;

		console.log(parent);
	
});





riot.tag('bc-divider', '<hr id="{opts.el_id}" class=" bc-divider {opts.css_class} {bc-divider-thick: opts.thick} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null}">', function(opts) {

});



riot.tag('bc-pipe', '<span if="{opts.letter_space}" class="bc-letter-space bc-space-{opts.letter_space}"></span><span>|</span><span if="{opts.letter_space}" class="bc-letter-space bc-space-{opts.letter_space}"></span>', function(opts) {

});



riot.tag('bc-inline-expander', '<div class="bc-inline-expander"> <div class="bc-inline-expander-content { isOpen ? null : \'bc-hidden\' }"> <yield ></yield> </div> <div class="expander-links { isOpen ? \'bc-hidden\' : null }"> <a href="javascript:void(0);" aria-expanded="false" class="inline-expander-toggle" onclick="{open}"> <span>{ opts.show_text ? opts.show_text : \'more\' }</span> <bc-icon icon_type="inline-expander-open"></bc-icon> </a> </div> <div class="expander-links { isOpen ? null : \'bc-hidden\' }"> <a href="javascript:void(0);" aria-expanded="true" class="inline-expander-toggle" onclick="{close}"> <span>{ opts.hide_text ? opts.hide_text : \'less\' }</span> <bc-icon icon_type="inline-expander-close"></bc-icon> </a> </div> </div>', function(opts) {
		this.isOpen = opts.open;

		this.open = function() {
			this.isOpen = true;
			this.update();
		}.bind(this);
		this.close = function() {
			this.isOpen = false;
			this.update();
		}.bind(this);
	
});









riot.tag('bc-section', '<div id="{opts.el_id}" class=" bc-section {css_class} {bc-section-feature: opts.feature_doc} {opts.spacing ? \'bc-padding-\' + opts.spacing : null} {opts.spacing_top ? \'bc-padding-top-\' + opts.spacing_top : null} {opts.text_align ? \'bc-text-\' + opts.text_align : null}" document-role="{ opts.document_role }" riot-style="{ opts.background_color ? \'background-color: #\' + opts.background_color : null }" > <yield ></yield> </div>', function(opts) {

});





riot.tag('bc-container', '<div class="bc-container"> <yield ></yield> </div>', function(opts) {

});






riot.tag('bc-tab-container', '<div id="{opts.el_id}" class="bc-tab-container {opts.css_class}"> <yield ></yield> </div>', function(opts) {

});

riot.tag('bc-tab-set', '<ul id="{opts.el_id}" class="bc-tab-set {opts.css_class}"> <yield ></yield> </ul>', function(opts) {

});


riot.tag('bc-tab-heading', '<li role="tab" data-bc-tab-name="{opts.name}" aria-controls="{opts.name}" class="bc-tab-heading {active ? \'bc-active\' : \'\'}"> <a href="" onclick="{tabSelect}"> <yield ></yield> </a> </li>', function(opts) {
		this.active = opts.active;

		var tabSets = this.parent.tags['bc-tab-heading'],
			contentSets = this.parent.parent.tags['bc-tab-content'];

		this.tabSelect = function() {
			for (var i = 0; i < tabSets.length; i++) {
				tabSets[i].active = false;
				tabSets[i].update();
			}

			this.active = !this.active;

			for (var i = 0; i < contentSets.length; i++) {
				if (this.opts.name == contentSets[i].opts.name) {
					contentSets[i].active = true;
				} else {
					contentSets[i].active = false;
				}

				contentSets[i].update();
			}
		}.bind(this);
	
});



riot.tag('bc-tab-content', '<div id="{opts.name}" role="tabpanel" data-bc-name="{opts.name}" aria-hidden="{active ? \'false\' : \'true\'}" class="bc-tab-content {active ? \'bc-active\' : \'\'}" > <yield ></yield> </div>', function(opts) {
		this.active = opts.active;
	
});







riot.tag('bc-review-stars', '<bc-icon each="{type in stars}" css_class="bc-icon-star" icon_type="star-{type}"></bc-icon> <bc-text if="{opts.total_reviews}">({parent.opts.total_reviews})</bc-text>', function(opts) {
		var fullStars = parseInt(opts.full_stars);
		this.stars = [];

		for (i=0; i < fullStars; i++) {
			this.stars.push('full')
		};

		if (opts.half_star) {
			this.stars.push('half')
		};

		for (i=this.stars.length; i < 5; i++) {
			this.stars.push('empty')
		};
	
});





riot.tag('bc-list', '<div id="{opts.el_id}" class="{opts.css_class} {opts.text_size ? \'bc-size-\' + opts.text_size : null} {opts.text_color ? \'bc-color-\' + opts.text_color : null} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null} {opts.list_direction ? \'bc-list-\' + opts.list_direction : null} {opts.list_type ? \'bc-list-\' + opts.list_type : \'bc-list-nostyle\'} { bc-text-bold: opts.text_bold, bc-text-capitalize: opts.text_capitalize, bc-text-emphasis: opts.text_emphasis, bc-text-quote: opts.text_quote, bc-text-strike: opts.text_strikethrough, bc-text-normal: opts.text_normal, }"> <ul if="{opts.list_type != \'ordered\'}"> <yield ></yield> </ul> <ol if="{opts.list_type === \'ordered\'}"> <yield ></yield> </ol> </div>', function(opts) {

});



riot.tag('bc-list-item', '<li id="{opts.el_id}" class=" {opts.css_class} {opts.text_size ? \'bc-size-\' + opts.text_size : null} {opts.text_color ? \'bc-color-\' + opts.text_color : null} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null} { bc-text-bold: opts.text_bold, bc-text-capitalize: opts.text_capitalize, bc-text-emphasis: opts.text_emphasis, bc-text-quote: opts.text_quote, bc-text-strike: opts.text_strikethrough, bc-text-normal: opts.text_normal, }" title="{opts.title}"> <yield ></yield> </li>', function(opts) {

});




riot.tag('bc-breadcrumbs', '<div class="bc-breadcrumb {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null}"> <bc-breadcrumb each="{b in breadcrumbs}"> <a if="{b.url}" href="b.url">{b.name}</a> <span if="{!b.url}">{b.name}</span> <bc-icon if="{b.url}" icon_type="arrow-gray"></bc-icon> </bc-breadcrumb> </div>', function(opts) {

});





riot.tag('bc-histogram', '<div class="bc-histogram"> <div>5 star <bc-meter percentage="{opts.five / totalReviews * 100}"></bc-meter> ({opts.five})</div> <div>4 star <bc-meter percentage="{opts.four / totalReviews * 100}"></bc-meter> ({opts.four})</div> <div>3 star <bc-meter percentage="{opts.three / totalReviews * 100}"></bc-meter> ({opts.three})</div> <div>2 star <bc-meter percentage="{opts.two / totalReviews * 100}"></bc-meter> ({opts.two})</div> <div>1 star <bc-meter percentage="{opts.one / totalReviews * 100}"></bc-meter> ({opts.one})</div> </div>', function(opts) {
		this.totalReviews = parseInt(opts.five) + parseInt(opts.four) + parseInt(opts.three)
							 + parseInt(opts.two) + parseInt(opts.one);
	
});


riot.tag('bc-meter', '<div class="bc-meter"> <div class="bc-meter-bar" riot-style="{opts.percentage ? \'width: \' + opts.percentage + \'%;\' : null}"></div> </div>', function(opts) {

});




riot.tag('bc-text-input', '<input id="{opts.el_id}" class=" bc-input {opts.css_class} {bc-input-over-image: opts.over_image} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null}" type="{opts.type}" __required="{opts.required}" placeholder="{opts.placeholder}" name="{opts.name}" value="{opts.value}" maxlength="{opts.max_length}">', function(opts) {

});




riot.tag('bc-search', '<div class="bc-search"> <input id="{opts.el_id}" class=" bc-input {opts.css_class} {bc-input-over-image: opts.over_image} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null}" type="search" __required="{opts.required}" placeholder="{opts.placeholder}" name="{opts.name}" value="{opts.value}" maxlength="{opts.max_length}"> <input class="bc-search-submit" type="submit" value="Search"> </div>', function(opts) {

});




riot.tag('bc-text-area', '<textarea id="{opts.el_id}" class=" bc-input {opts.css_class} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null}" __required="{opts.required}" placeholder="{opts.placeholder}" name="{opts.name}" value="{opts.value}" maxlength="{opts.max_length}" rows="{opts.rows}"> </textarea>', function(opts) {

});



riot.tag('bc-letterspace', '<span class="bc-letter-space bc-space-{opts.size}"></span>', function(opts) {

});










riot.tag('bc-box', '<div id="{opts.el_id}" class=" bc-box {css_class} {bc-box-alternate: opts.alternate} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null}" riot-style="{opts.height_css ? \'height: \' + opts.height_css : null} {opts.width_css ? \'height: \' + opts.width_css : null}"> <yield ></yield> </div>', function(opts) {

});




riot.tag('bc-dropdown', '<span class="a-dropdown-container"> <select name="" autocomplete="off" class="a-native-dropdown"> <yield ></yield> </select> <span tabIndex="-1" class="a-button a-button-dropdown"> <span class="a-button-inner"> <span class="a-button-text a-declarative" data-action="a-dropdown-button" aria-haspopup="true" role="button" tabIndex="0"> <span class="a-dropdown-prompt"></span> </span> <i class="a-icon a-icon-dropdown"></i> </span> </span> </span>', function(opts) {


});



riot.tag('bc-checkbox', '<div id="{opts.outer_Id}" class="bc-checkbox {css_class} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null}"> <label> <input id="{opts.input_Id}" type="checkbox" name="{opts.name}" value="{opts.value}" __disabled="{opts.disabled}" __checked="{opts.checked}"> <i class="bc-icon bc-icon-checkbox"></i> <span class="bc-label bc-checkbox-label"> <yield ></yield> </span> </label> </div>', function(opts) {

});




riot.tag('bc-radio-button', '<div id="{opts.outer_Id}" class="bc-radio {css_class} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null}"> <label> <input id="{opts.input_Id}" type="radio" name="{opts.name}" value="{opts.value}" __disabled="{opts.disabled}" __checked="{opts.checked}"> <i class="bc-icon bc-icon-radio"></i> <span class="bc-label bc-radio-label"> <yield ></yield> </span> </label> </div>', function(opts) {

});




riot.tag('bc-toggle-switch', '<div id="{opts.el_id}" class="bc-switch-row {opts.css_class}"> <label class="bc-switch-label"> <input class="bc-switch-input" type="checkbox" __checked="{opts.on}" name="{opts.name}"> <yield ></yield> <div class="bc-switch"> <a class="bc-switch-control"></a> </div> </label> </div>', function(opts) {

});




riot.tag('bc-asin', '<div class="bc-audio-asin" data-asin="{opts.asin}" data-reftag="{opts.reftag}"> <bc-flyout-trigger if="{opts.flyout}" side="right"> <bc-image source="{parent.opts.source}" id="{parent.opts.el_id}" css_class="{parent.opts.css_class}" title="parent.opts.title" alt_text="{parent.opts.alt_text}" hi_res_source="{parent.opts.hi_res_source}" lazy_loaded="{parent.opts.lazy_loaded}" image_height="{parent.opts.image_height}" image_width="{parent.opts.image_width}"></bc-image> <bc-flyout width="310px"> {parent.parent.opts.flyout_series} <h2>{parent.parent.opts.flyout_title}</h2> <ul class="bc-list-nostyle"> <li>Narrated by {parent.parent.opts.flyout_narrators}</li> <li> {parent.parent.opts.flyout_length}, {parent.parent.opts.flyout_abridged ? \'abridged\' : \'unabridged\'} </li> <li if="{parent.parent.opts.flyout_whispersync}">Whispersync for Voice-ready</li> </ul> <div class="bc-row"> <div class="bc-col bc-col-4">Overall</div> <div class="bc-col bc-col-8 bc-col-last"> <bc-review-stars full_stars="{parent.parent.opts.flyout_overall_full}" half_star="{parent.parent.opts.flyout_overall_half}"></bc-review-stars> </div> </div> <div class="bc-row"> <div class="bc-col bc-col-4">Performance</div> <div class="bc-col bc-col-8 bc-col-last"> <bc-review-stars full_stars="{parent.parent.opts.flyout_performance_full}" half_star="{parent.parent.opts.flyout_performance_half}"></bc-review-stars> </div> </div> <div class="bc-row"> <div class="bc-col bc-col-4">Story</div> <div class="bc-col bc-col-8 bc-col-last"> <bc-review-stars full_stars="{parent.parent.opts.flyout_story_full}" half_star="{parent.parent.opts.flyout_story_half}"></bc-review-stars> </div> </div> <p> {parent.parent.opts.flyout_summary} </p> </bc-flyout> </bc-flyout-trigger> <bc-image if="{!opts.flyout}" source="{opts.source}" id="{opts.el_id}" css_class="{opts.css_class}" title="opts.title" alt_text="{opts.alt_text}" hi_res_source="{opts.hi_res_source}" lazy_loaded="{opts.lazy_loaded}" image_height="{opts.image_height}" image_width="{opts.image_width}"></bc-image> <div if="{opts.audio}" class="bc-player" data-audio="{opts.audio}"> <span class="bc-player-message default">{opts.audio_default_text}</span> <span class="bc-player-message player-play">{opts.audio_playing_text}</span> <span class="bc-player-message player-pause">{opts.audio_pause_text}</span> </div> </div>', function(opts) {

});





riot.tag('bc-table', '<table id="id" class="a-keyvalue a-vertical-stripes a-align-top a-spacing-base a-spacing-top-small a-size-base a-color-link a-span5 cssClass"> <tbody> <yield ></yield> </tbody> </table>', function(opts) {

});

riot.tag('bc-table-column', '<td colspan="col bridge" rowspan="row bridge" id="id" class="a-span4 a-color-tertiary a-size-base a-text-right a-align-center css a-text-bold a-text-caps a-text-italic a-nowrap a-text-quote a-text-strike a-text-normal" style="width:300pxpx;"> <yield ></yield> </td>', function(opts) {

});

riot.tag('bc-table-column-heading', '<th colspan="column bridge" rowspan="row bridge" id="id" class="a-span4 a-color-tertiary a-size-base a-text-right a-align-center cssClass a-nowrap" style="width:col widthpx;"> <yield ></yield> </th>', function(opts) {

});

riot.tag('bc-table-row', '<tr id="id" class="a-spacing-mini a-spacing-top-smalla-histogram-row a-active a-text-center a-align-center cssClass"> <yield ></yield> </tr>', function(opts) {

});



riot.tag('bc-heading', '<h1 if="{ opts.heading_level == 1 }" id="{ opts.el_id }" class=" {opts.css_class} {opts.text_size ? \'bc-size-\' + opts.text_size : null} {opts.text_color ? \'bc-color-\' + opts.text_color : null} {opts.spacing ? \'bc-spacing-\' + opts.spacing : null} {opts.spacing_top ? \'bc-spacing-top-\' + opts.spacing_top : null} {opts.text_align ? \'bc-text-\' + opts.text_align : null} { bc-text-bold: opts.text_bold, bc-text-capitalize: opts.text_capitalize, bc-text-emphasis: opts.text_emphasis, bc-text-quote: opts.text_quote, bc-text-strike: opts.text_strikethrough, bc-text-normal: opts.text_normal, }" > <yield ></yield> </h1>', function(opts) {

});





riot.tag('bc-image', '<img id="{opts.el_id}" class="{opts.css_class} {bc-lazy-loaded: opts.lazy_loaded}" riot-src="{opts.source}" alt="{opts.alt_text}" height="{opts.image_height}" width="{opts.image_width}" title="{opts.title}" data-bc-hires="{opts.hi_res_source}">', function(opts) {

});
