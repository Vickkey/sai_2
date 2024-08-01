/*!
 * jQuery meanMenu v2.0.8
 * @Copyright (C) 2012-2014 Chris Wharton @ author (https://github.com/author/meanMenu)
 *
 */
! function(e) {
    "use strict";
    e.fn.meanmenu = function(n) {
        var a = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        n = e.extend(a, n);
        var t = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function() {
            var e = n.meanMenuTarget,
                a = n.meanMenuContainer,
                r = n.meanMenuClose,
                i = n.meanMenuCloseSize,
                s = n.meanMenuOpen,
                u = n.meanRevealPosition,
                m = n.meanRevealPositionDistance,
                l = n.meanRevealColour,
                o = n.meanScreenWidth,
                c = n.meanNavPush,
                d = n.meanShowChildren,
                v = n.meanExpandableChildren,
                h = n.meanExpand,
                y = n.meanRemoveAttrs,
                j = n.onePage,
                Q = n.meanDisplay,
                f = n.removeElements,
                p = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (p = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var g = "",
                C = function() {
                    if ("center" === u) {
                        var e = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px";
                        g = "left:" + e + ";right:auto;", p ? jQuery(".meanmenu-reveal").animate({
                            left: e
                        }) : jQuery(".meanmenu-reveal").css("left", e)
                    }
                },
                w = !1,
                A = !1;
            "right" === u && (g = "right:" + m + ";left:auto;"), "left" === u && (g = "left:" + m + ";right:auto;"), C();
            var M = "",
                P = function() {
                    jQuery(".mean-bar,.mean-push").remove(), jQuery(a).removeClass("mean-container"), jQuery(e).css("display", Q), w = !1, A = !1, jQuery(f).removeClass("mean-remove")
                },
                E = function() {
                    var n = "background:" + l + ";color:" + l + ";" + g;
                    if (t <= o) {
                        jQuery(f).addClass("mean-remove"), A = !0, jQuery(a).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + n + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                        var u = jQuery(e).html();
                        jQuery(".mean-nav").html(u), y && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                            jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                        }), jQuery(e).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", c), jQuery(e).hide(), jQuery(".meanmenu-reveal").show(), jQuery(".meanmenu-reveal").html(s), M = jQuery(".meanmenu-reveal"), jQuery(".mean-nav ul").hide(), d ? v ? (jQuery(".mean-nav ul ul").each(function() {
                            jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + h + "</a>")
                        }), jQuery(".mean-expand").on("click", function(e) {
                            e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).prev("ul").slideUp(300, function() {}), jQuery(this).parent().removeClass("dropdown-opened")) : (jQuery(this).prev("ul").slideDown(300, function() {}), jQuery(this).parent().addClass("dropdown-opened")), jQuery(this).toggleClass("mean-clicked")
                        })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), M.removeClass("meanclose"), jQuery(M).click(function(e) {
                            e.preventDefault(), !1 === w ? (M.css("text-align", "center"), M.css("text-indent", "0"), M.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), w = !0) : (jQuery(".mean-nav ul:first").slideUp(), w = !1), M.toggleClass("meanclose"), jQuery(M).is(".meanmenu-reveal.meanclose") ? M.html(r) : M.html(s), jQuery(f).addClass("mean-remove")
                        }), j && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                            jQuery(".mean-nav ul:first").slideUp(), w = !1, jQuery(M).toggleClass("meanclose").html(s)
                        })
                    } else P()
                };
            p || jQuery(window).resize(function() {
                t = window.innerWidth || document.documentElement.clientWidth, P(), t <= o ? (E(), C()) : P()
            }), jQuery(window).resize(function() {
                t = window.innerWidth || document.documentElement.clientWidth, p ? (C(), t <= o ? !1 === A && E() : P()) : (P(), t <= o && (E(), C()))
            }), E()
        })
    }
}(jQuery);