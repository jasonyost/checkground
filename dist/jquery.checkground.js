/*
 *  checkground - v1.0.0
 *  Simple jQuery checkbox replacer
 *  https://github.com/jasonyost/checkground#readme
 *
 *  Made by 
 *  Under MIT License
 */
;(function($, window, document, undefined) {

	"use strict";

	// Create the defaults once
	var pluginName = "checkground",
		defaults = {
			debug: false
		};

	// The actual plugin constructor
	function Plugin(element, options) {
		this.element = element;
		this.settings = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	// Avoid Plugin.prototype conflicts
	$.extend(Plugin.prototype, {
		init: function() {
			var checkground = this;
			checkground.initDom(checkground.element, checkground.settings);
			checkground.bindElements(checkground.element, checkground.settings);
			checkground.debugMessage(checkground.settings, "checkground initialized");
		},
		initDom: function(element, settings) {
			var checkground = this;
			$(element).hide();
			$(element).addClass("checkground-original");
			$(element).wrap("<div class=\"checkground-wrapper\"></div>");
			var wrapper = $(element).parent();
			if($(element).attr("checked")){
				wrapper.addClass("checkground-checked");
			}
			checkground.debugMessage(settings, "dom initialized");
		},
		bindElements: function(element, settings){
			var checkground = this;
			var wrapper = $(element).parent();
			wrapper.click(function(){
				$(this).toggleClass("checkground-checked");
				$(element).attr("checked", !$(element).attr("checked"));
				checkground.debugMessage(settings, "checkground changed");
			});
			checkground.debugMessage(settings, "checkground bound on click");

			$(element).change(function(){
				wrapper.toggleClass("checkground-checked");
				checkground.debugMessage(settings, "element changed");
			});
			checkground.debugMessage(settings, "element bound on change");
		},
		debugMessage: function(settings, message) {
			if (this.settings.debug) {
				console.log(message);
			}
		}
	});

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);
