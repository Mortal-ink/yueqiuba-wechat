function t(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}

var e, r = require("../../98062E97C45B99CFFE604690F70E7A06.js");

getApp();

Page({
    data: (e = {
        keywrod: "",
        searchStatus: !1,
        goodsList: [],
        helpKeyword: [],
        historyKeyword: [],
        categoryFilter: !1,
        currentSortType: "default",
        currentSortOrder: "",
        filterCategory: [],
        defaultKeyword: {},
        hotKeyword: [],
        page: 1,
        size: 20
    }, t(e, "currentSortType", "id"), t(e, "currentSortOrder", "desc"), t(e, "categoryId", 0), 
    e),
    closeSearch: function() {
        wx.navigateBack();
    },
    clearKeyword: function() {
        this.setData({
            keyword: "",
            searchStatus: !1
        });
    },
    onLoad: function() {
        this.getSearchKeyword();
    },
    getSearchKeyword: function() {},
    inputChange: function(t) {
        r.showNoIconToast("搜索功能暂未开放");
    },
    getHelpKeyword: function() {
        var t = this;
        r.request(api.SearchHelper, {
            keyword: t.data.keyword
        }).then(function(e) {
            0 === e.errno && t.setData({
                helpKeyword: e.data
            });
        });
    },
    inputFocus: function() {
        this.setData({
            searchStatus: !1,
            goodsList: []
        }), this.data.keyword && this.getHelpKeyword();
    },
    clearHistory: function() {
        this.setData({
            historyKeyword: []
        }), r.request(api.SearchClearHistory, {}, "POST").then(function(t) {
            console.log("清除成功");
        });
    },
    getGoodsList: function() {
        var t = this;
        r.request(api.GoodsList, {
            keyword: t.data.keyword,
            page: t.data.page,
            size: t.data.size,
            sort: t.data.currentSortType,
            order: t.data.currentSortOrder,
            categoryId: t.data.categoryId
        }).then(function(e) {
            0 === e.errno && t.setData({
                searchStatus: !0,
                categoryFilter: !1,
                goodsList: e.data.goodsList,
                filterCategory: e.data.filterCategory,
                page: e.data.currentPage,
                size: e.data.numsPerPage
            }), t.getSearchKeyword();
        });
    },
    onKeywordTap: function(t) {
        this.getSearchResult(t.target.dataset.keyword);
    },
    getSearchResult: function(t) {
        this.setData({
            keyword: t,
            page: 1,
            categoryId: 0,
            goodsList: []
        }), this.getGoodsList();
    },
    openSortFilter: function(t) {
        switch (t.currentTarget.id) {
          case "categoryFilter":
            this.setData({
                categoryFilter: !this.data.categoryFilter,
                currentSortOrder: "asc"
            });
            break;

          case "priceSort":
            var e = "asc";
            "asc" == this.data.currentSortOrder && (e = "desc"), this.setData({
                currentSortType: "price",
                currentSortOrder: e,
                categoryFilter: !1
            }), this.getGoodsList();
            break;

          default:
            this.setData({
                currentSortType: "default",
                currentSortOrder: "desc",
                categoryFilter: !1
            }), this.getGoodsList();
        }
    },
    selectCategory: function(t) {
        var e = t.target.dataset.categoryIndex, r = this.data.filterCategory, a = null;
        for (var o in r) o == e ? (r[o].selected = !0, a = r[o]) : r[o].selected = !1;
        this.setData({
            filterCategory: r,
            categoryFilter: !1,
            categoryId: a.id,
            page: 1,
            goodsList: []
        }), this.getGoodsList();
    },
    onKeywordConfirm: function(t) {
        this.getSearchResult(t.detail.value);
    }
});