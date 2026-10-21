
source.enable = function (conf) {
    this.config = conf;
};

source.getHome = function (continuationToken) {
    return new BstationVideoPager([], false, {});
};

source.searchSuggestions = function (query) {
    return query ? [query] : [];
};

source.getSearchCapabilities = function () {
    return {
        types: [Type.Feed.Mixed],
        sorts: [Type.Order.Chronological],
        filters: []
    };
};

source.search = function (
    query, type, order, filters, continuationToken
) {
    // TODO: Hubungkan ke pencarian Bstation Indonesia.
    return new BstationVideoPager([], false, {
        query: query
    });
};

source.isContentDetailsUrl = function (url) {
    return typeof url === "string" &&
        /bilibili\.tv\/(id\/)?video\//i.test(url);
};

source.getContentDetails = function (url) {
    throw new Error(
        "Detail video Bstation belum diimplementasikan: " + url
    );
};

class BstationVideoPager extends VideoPager {
    constructor(results, hasMore, context) {
        super(results, hasMore, context);
    }

    nextPage() {
        return new BstationVideoPager([], false, this.context);
    }
}
