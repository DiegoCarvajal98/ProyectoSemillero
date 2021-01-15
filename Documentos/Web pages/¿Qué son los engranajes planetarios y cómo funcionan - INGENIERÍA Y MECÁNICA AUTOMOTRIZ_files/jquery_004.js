(function (e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "modernizr"], e);
    } else {
        e(window.jQuery, window.Modernizr);
    }
})(function (e, t, n) {
    "use strict";
    function r(e) {
        if (!e) {
            return "";
        }
        return e
            .replace(/([A-Z])/g, function (e, t) {
                return "-" + t.toLowerCase();
            })
            .replace(/^ms-/, "-ms-");
    }
    function g(t, n, r) {
        var i, s, o;
        var u = null;
        var a = 0;
        r = r || {};
        var f = function () {
            a = r.leading === false ? 0 : e.now();
            u = null;
            o = t.apply(i, s);
            i = s = null;
        };
        return function () {
            var l = e.now();
            if (!a && r.leading === false) {
                a = l;
            }
            var c = n - (l - a);
            i = this;
            s = arguments;
            if (c <= 0 || c > n) {
                clearTimeout(u);
                u = null;
                a = l;
                o = t.apply(i, s);
                i = s = null;
            } else if (!u && r.trailing !== false) {
                u = setTimeout(f, c);
            }
            return o;
        };
    }
    if (typeof t !== "object") {
        throw new Error("Shuffle.js requires Modernizr.\n" + "http://vestride.github.io/Shuffle/#dependencies");
    }
    var i = t.prefixed("transition");
    var s = t.prefixed("transitionDelay");
    var o = t.prefixed("transitionDuration");
    var u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[i];
    var a = t.prefixed("transform");
    var f = r(a);
    var l = t.csstransforms && t.csstransitions;
    var c = t.csstransforms3d;
    var h = "shuffle";
    var p = "all";
    var d = "groups";
    var v = 1;
    var m = 0.001;
    var y = 0;
    var b = function (t, n) {
        n = n || {};
        e.extend(this, b.options, n, b.settings);
        this.$el = e(t);
        this.$window = e(window);
        this.unique = "shuffle_" + y++;
        this._fire(b.EventType.LOADING);
        this._init();
        setTimeout(
            e.proxy(function () {
                this.initialized = true;
                this._fire(b.EventType.DONE);
            }, this),
            16
        );
    };
    b.EventType = { LOADING: "loading", DONE: "done", SHRINK: "shrink", SHRUNK: "shrunk", FILTER: "filter", FILTERED: "filtered", SORTED: "sorted", LAYOUT: "layout", REMOVED: "removed" };
    b.prototype = {
        _init: function () {
            var t = this,
                n,
                r,
                s = e.proxy(t._onResize, t),
                o = t.throttle ? t.throttle(s, t.throttleTime) : s,
                u = t.initialSort ? t.initialSort : null;
            t._layoutList = [];
            t._shrinkList = [];
            t._setVars();
            t._resetCols();
            t._addClasses();
            t._initItems();
            t.$window.on("resize." + h + "." + t.unique, o);
            n = t.$el.css(["paddingLeft", "paddingRight", "position"]);
            r = t._getOuterWidth(t.$el[0]);
            if (n.position === "static") {
                t.$el[0].style.position = "relative";
            }
            t.offset = { left: parseInt(n.paddingLeft, 10) || 0, top: parseInt(n.paddingTop, 10) || 0 };
            t._setColumns(parseInt(r, 10));
            t.shuffle(t.group, u);
            if (t.supported) {
                setTimeout(function () {
                    t._setTransitions();
                    t.$el[0].style[i] = "height " + t.speed + "ms " + t.easing;
                }, 0);
            }
        },
        _addClasses: function () {
            this.$el.addClass(h);
            this.$items.addClass("shuffle-item filtered");
        },
        _setVars: function () {
            var t = this,
                n = t.columnWidth;
            t.$items = t._getItems();
            if (n === 0 && t.sizer !== null) {
                n = t.sizer;
            }
            if (typeof n === "string") {
                t.$sizer = t.$el.find(n);
            } else if (n && n.nodeType && n.nodeType === 1) {
                t.$sizer = e(n);
            } else if (n && n.jquery) {
                t.$sizer = n;
            }
            if (t.$sizer && t.$sizer.length) {
                t.useSizer = true;
                t.sizer = t.$sizer[0];
            }
        },
        _filter: function (t, r) {
            var i = this,
                s = r !== n,
                o = s ? r : i.$items,
                u = e();
            t = t || i.lastFilter;
            i._fire(b.EventType.FILTER);
            if (e.isFunction(t)) {
                o.each(function () {
                    var n = e(this);
                    if (t.call(n[0], n, i)) {
                        u = u.add(n);
                    }
                });
            } else {
                i.group = t;
                if (t === p) {
                    u = o;
                } else {
                    o.each(function () {
                        var n = e(this),
                            r = n.data(d),
                            s = i.delimeter && !e.isArray(r) ? r.split(i.delimeter) : r;
                        if (e.inArray(t, s) > -1) {
                            u = u.add(n);
                        }
                    });
                }
            }
            i._toggleFilterClasses(o, u);
            o = null;
            r = null;
            return u;
        },
        _toggleFilterClasses: function (t, n) {
            var r = "concealed",
                i = "filtered";
            t.filter(n).each(function () {
                var t = e(this);
                if (t.hasClass(r)) {
                    t.removeClass(r);
                }
                if (!t.hasClass(i)) {
                    t.addClass(i);
                }
            });
            t.not(n).each(function () {
                var t = e(this);
                if (!t.hasClass(r)) {
                    t.addClass(r);
                }
                if (t.hasClass(i)) {
                    t.removeClass(i);
                }
            });
        },
        _initItems: function (e) {
            e = e || this.$items;
            e.css(this.itemCss).data("position", { x: 0, y: 0 });
        },
        _updateItemCount: function () {
            this.visibleItems = this.$items.filter(".filtered").length;
        },
        _setTransition: function (e) {
            e.style[i] = f + " " + this.speed + "ms " + this.easing;
        },
        _setTransitions: function (e) {
            var t = this;
            e = e || t.$items;
            e.each(function () {
                t._setTransition(this);
            });
        },
        _setSequentialDelay: function (t) {
            var n = this;
            if (!n.supported) {
                return;
            }
            e.each(t, function (t, r) {
                r.style[s] = "0ms," + (t + 1) * n.sequentialFadeDelay + "ms";
                e(r).on(u + "." + n.unique, function (t) {
                    var r = t.currentTarget;
                    if (r === t.target) {
                        r.style[s] = "0ms";
                        e(r).off(u + "." + n.unique);
                    }
                });
            });
        },
        _getItems: function () {
            return this.$el.children(this.itemSelector);
        },
        _getPreciseDimension: function (t, n) {
            var r;
            if (window.getComputedStyle) {
                r = window.getComputedStyle(t, null)[n];
            } else {
                r = e(t).css(n);
            }
            return parseFloat(r);
        },
        _getOuterWidth: function (t, n) {
            var r = t.offsetWidth;
            if (n) {
                var i = e(t).css(["marginLeft", "marginRight"]);
                var s = parseFloat(i.marginLeft) || 0;
                var o = parseFloat(i.marginRight) || 0;
                r += s + o;
            }
            return r;
        },
        _getOuterHeight: function (t, n) {
            var r = t.offsetHeight;
            if (n) {
                var i = e(t).css(["marginTop", "marginBottom"]);
                var s = parseFloat(i.marginTop) || 0;
                var o = parseFloat(i.marginBottom) || 0;
                r += s + o;
            }
            return r;
        },
        _getColumnSize: function (t, n) {
            var r;
            if (e.isFunction(this.columnWidth)) {
                r = this.columnWidth(n);
            } else if (this.useSizer) {
                r = this._getPreciseDimension(this.sizer, "width");
            } else if (this.columnWidth) {
                r = this.columnWidth;
            } else if (this.$items.length > 0) {
                r = this._getOuterWidth(this.$items[0], true);
            } else {
                r = n;
            }
            if (r === 0) {
                r = n;
            }
            return r + t;
        },
        _getGutterSize: function (t) {
            var n;
            if (e.isFunction(this.gutterWidth)) {
                n = this.gutterWidth(t);
            } else if (this.useSizer) {
                n = this._getPreciseDimension(this.sizer, "marginLeft");
            } else {
                n = this.gutterWidth;
            }
            return n;
        },
        _setColumns: function (e) {
            var t = e || this._getOuterWidth(this.$el[0]);
            var n = this._getGutterSize(t);
            var r = this._getColumnSize(n, t);
            var i = (t + n) / r;
            if (Math.abs(Math.round(i) - i) < 0.03) {
                i = Math.round(i);
            }
            this.cols = Math.max(Math.floor(i), 1);
            this.containerWidth = t;
            this.colWidth = r;
        },
        _setContainerSize: function () {
            this.$el.css("height", Math.max.apply(Math, this.colYs));
        },
        _fire: function (e, t) {
            this.$el.trigger(e + "." + h, t && t.length ? t : [this]);
        },
        _layout: function (t, n, r) {
            var i = this;
            n = n || i._filterEnd;
            e.each(t, function (t, s) {
                var o = e(s);
                var u = o.data();
                var a = u.position;
                var f = i._getItemPosition(o);
                o.data("position", f);
                if (f.x === a.x && f.y === a.y && u.scale === v) {
                    return;
                }
                var l = { $item: o, x: f.x, y: f.y, scale: v };
                if (r) {
                    l.skipTransition = true;
                    l.opacity = 0;
                } else {
                    l.opacity = 1;
                    l.callback = n;
                }
                i.styleQueue.push(l);
                i._layoutList.push(o[0]);
            });
            i._processStyleQueue();
            i._setContainerSize();
        },
        _resetCols: function () {
            var e = this.cols;
            this.colYs = [];
            while (e--) {
                this.colYs.push(0);
            }
        },
        _reLayout: function () {
            this._resetCols();
            if (this.lastSort) {
                this.sort(this.lastSort, true);
            } else {
                this._layout(this.$items.filter(".filtered").get(), this._filterEnd);
            }
        },
        _getItemPosition: function (e) {
            var t = this;
            var n = t._getOuterWidth(e[0], true);
            var r = n / t.colWidth;
            if (Math.abs(Math.round(r) - r) < 0.03) {
                r = Math.round(r);
            }
            var i = Math.min(Math.ceil(r), t.cols);
            if (i === 1) {
                return t._placeItem(e, t.colYs);
            } else {
                var s = t.cols + 1 - i,
                    o = [],
                    u,
                    a;
                for (a = 0; a < s; a++) {
                    u = t.colYs.slice(a, a + i);
                    o[a] = Math.max.apply(Math, u);
                }
                return t._placeItem(e, o);
            }
        },
        _placeItem: function (e, t) {
            var n = this,
                r = Math.min.apply(Math, t),
                i = 0;
            for (var s = 0, o = t.length; s < o; s++) {
                if (t[s] >= r - n.buffer && t[s] <= r + n.buffer) {
                    i = s;
                    break;
                }
            }
            var u = { x: Math.round(n.colWidth * i + n.offset.left), y: Math.round(r + n.offset.top) };
            var a = r + n._getOuterHeight(e[0], true),
                f = n.cols + 1 - o;
            for (s = 0; s < f; s++) {
                n.colYs[i + s] = a;
            }
            return u;
        },
        _shrink: function (t, n) {
            var r = this,
                i = t || r.$items.filter(".concealed");
            n = n || r._shrinkEnd;
            if (!i.length) {
                return;
            }
            r._fire(b.EventType.SHRINK);
            i.each(function () {
                var t = e(this);
                var i = t.data();
                var s = i.scale === m;
                if (s) {
                    return;
                }
                var o = { $item: t, x: i.position.x, y: i.position.y, scale: m, opacity: 0, callback: n };
                r.styleQueue.push(o);
                r._shrinkList.push(t[0]);
            });
        },
        _onResize: function () {
            if (!this.enabled || this.destroyed) {
                return;
            }
            var e = this._getOuterWidth(this.$el[0]);
            if (e === this.containerWidth) {
                return;
            }
            this.resized();
        },
        _getItemTransformString: function (e, t, n) {
            if (c) {
                return "translate3d(" + e + "px, " + t + "px, 0) scale3d(" + n + ", " + n + ", 1)";
            } else {
                return "translate(" + e + "px, " + t + "px) scale(" + n + ", " + n + ")";
            }
        },
        _getStylesForTransition: function (e) {
            var t = { opacity: e.opacity };
            if (this.supported) {
                if (e.x !== n) {
                    t[a] = this._getItemTransformString(e.x, e.y, e.scale);
                }
            } else {
                t.left = e.x;
                t.top = e.y;
            }
            if (e.opacity === 1) {
                t.visibility = "visible";
            }
            return t;
        },
        _transition: function (e) {
            e.$item.data("scale", e.scale);
            var t = this._getStylesForTransition(e);
            this._startItemAnimation(e.$item, t, e.callback);
        },
        _startItemAnimation: function (t, n, r) {
            var i = n.opacity === 1;
            var s = e.proxy(this._handleItemAnimationEnd, this, r || e.noop, t[0], i);
            if (this.supported) {
                t.css(n);
                if (this.initialized) {
                    t.on(u + ".shuffleitem", s);
                } else {
                    s();
                }
            } else {
                if ("visibility" in n) {
                    t.css("visibility", n.visibility);
                    delete n.visibility;
                }
                t.stop(true).animate(n, this.speed, "swing", s);
            }
        },
        _handleItemAnimationEnd: function (t, n, r, i) {
            if (i) {
                if (i.target === n) {
                    e(n).off(".shuffleitem");
                } else {
                    return;
                }
            }
            if (this._layoutList.length > 0 && e.inArray(n, this._layoutList) > -1) {
                this._fire(b.EventType.LAYOUT);
                t.call(this);
                this._layoutList.length = 0;
            } else if (this._shrinkList.length > 0 && e.inArray(n, this._shrinkList) > -1) {
                t.call(this);
                this._shrinkList.length = 0;
            }
            if (!r) {
                n.style.visibility = "hidden";
            }
        },
        _processStyleQueue: function () {
            var t = this;
            e.each(this.styleQueue, function (e, n) {
                if (n.skipTransition) {
                    t._skipTransition(n.$item[0], function () {
                        n.$item.css(t._getStylesForTransition(n));
                    });
                } else {
                    t._transition(n);
                }
            });
            t.styleQueue.length = 0;
        },
        _shrinkEnd: function () {
            this._fire(b.EventType.SHRUNK);
        },
        _filterEnd: function () {
            this._fire(b.EventType.FILTERED);
        },
        _sortEnd: function () {
            this._fire(b.EventType.SORTED);
        },
        _skipTransition: function (t, n, r) {
            var i = t.style[o];
            t.style[o] = "0ms";
            if (e.isFunction(n)) {
                n();
            } else {
                t.style[n] = r;
            }
            var s = t.offsetWidth;
            s = null;
            t.style[o] = i;
        },
        _addItems: function (e, t, r) {
            var i = this;
            if (!i.supported) {
                t = false;
            }
            e.addClass("shuffle-item");
            i._initItems(e);
            i._setTransitions(e);
            i.$items = i._getItems();
            e.css("opacity", 0);
            var s = i._filter(n, e);
            var o = s.get();
            i._updateItemCount();
            if (t) {
                i._layout(o, null, true);
                if (r) {
                    i._setSequentialDelay(s);
                }
                i._revealAppended(s);
            } else {
                i._layout(o);
            }
        },
        _revealAppended: function (t) {
            var n = this;
            setTimeout(function () {
                t.each(function (t, r) {
                    n._transition({ $item: e(r), opacity: 1, scale: v });
                });
            }, n.revealAppendedDelay);
        },
        shuffle: function (e, t) {
            var n = this;
            if (!n.enabled) {
                return;
            }
            if (!e) {
                e = p;
            }
            n._filter(e);
            n.lastFilter = e;
            n._updateItemCount();
            n._shrink();
            if (t) {
                n.lastSort = t;
            }
            n._reLayout();
        },
        sort: function (e, t) {
            var n = this,
                r = n.$items.filter(".filtered").sorted(e);
            if (!t) {
                n._resetCols();
            }
            n._layout(r, function () {
                if (t) {
                    n._filterEnd();
                }
                n._sortEnd();
            });
            n.lastSort = e;
        },
        resized: function (e) {
            if (this.enabled) {
                if (!e) {
                    this._setColumns();
                }
                this._reLayout();
            }
        },
        layout: function () {
            this.update(true);
        },
        update: function (e) {
            this.resized(e);
        },
        appended: function (e, t, n) {
            t = t === false ? false : true;
            n = n === false ? false : true;
            this._addItems(e, t, n);
        },
        disable: function () {
            this.enabled = false;
        },
        enable: function (e) {
            this.enabled = true;
            if (e !== false) {
                this.update();
            }
        },
        remove: function (e) {
            if (!e.length || !e.jquery) {
                return;
            }
            var t = this;
            t._shrink(e, function () {
                var t = this;
                e.remove();
                setTimeout(function () {
                    t.$items = t._getItems();
                    t.layout();
                    t._updateItemCount();
                    t._fire(b.EventType.REMOVED, [e, t]);
                    e = null;
                }, 0);
            });
            t._processStyleQueue();
            return t;
        },
        destroy: function () {
            var e = this;
            e.$window.off("." + e.unique);
            e.$el.removeClass(h).removeAttr("style").removeData(h);
            e.$items.removeAttr("style").removeClass("concealed filtered shuffle-item");
            e.$window = null;
            e.$items = null;
            e.$el = null;
            e.$sizer = null;
            e.sizer = null;
            e.destroyed = true;
        },
    };
    b.options = {
        group: p,
        speed: 250,
        easing: "ease-out",
        itemSelector: "",
        sizer: null,
        gutterWidth: 0,
        columnWidth: 0,
        delimeter: null,
        buffer: 0,
        initialSort: null,
        throttle: g,
        throttleTime: 300,
        sequentialFadeDelay: 150,
        supported: l,
    };
    b.settings = { $sizer: null, useSizer: false, itemCss: { position: "absolute", top: 0, left: 0 }, offset: { top: 0, left: 0 }, revealAppendedDelay: 300, enabled: true, destroyed: false, initialized: false, styleQueue: [] };
    e.fn.shuffle = function (t) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var r = e(this),
                i = r.data(h);
            if (!i) {
                i = new b(r, t);
                r.data(h, i);
            }
            if (typeof t === "string" && i[t]) {
                i[t].apply(i, n);
            }
        });
    };
    e.fn.sorted = function (t) {
        var r = e.extend({}, e.fn.sorted.defaults, t),
            i = this.get(),
            s = false;
        if (!i.length) {
            return [];
        }
        if (r.randomize) {
            return e.fn.sorted.randomize(i);
        }
        if (r.by !== e.noop && r.by !== null && r.by !== n) {
            i.sort(function (t, i) {
                if (s) {
                    return 0;
                }
                var o = r.by(e(t)),
                    u = r.by(e(i));
                if (o === n && u === n) {
                    s = true;
                    return 0;
                }
                if (o === "sortFirst" || u === "sortLast") {
                    return -1;
                }
                if (o === "sortLast" || u === "sortFirst") {
                    return 1;
                }
                return o < u ? -1 : o > u ? 1 : 0;
            });
        }
        if (s) {
            return this.get();
        }
        if (r.reverse) {
            i.reverse();
        }
        return i;
    };
    e.fn.sorted.defaults = { reverse: false, by: null, randomize: false };
    e.fn.sorted.randomize = function (e) {
        var t = e.length,
            n,
            r;
        if (!t) {
            return e;
        }
        while (--t) {
            r = Math.floor(Math.random() * (t + 1));
            n = e[r];
            e[r] = e[t];
            e[t] = n;
        }
        return e;
    };
    return b;
});