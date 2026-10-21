
const BSTAR_SEARCH =
    "https://api.bilibili.tv/intl/gateway/web/v1/search";

source.enable = function (conf) {
    this.config = conf;
};

source.getHome = function (continuationToken) {
    return new BstarPager([], false, {});
};

source.getSearchCapabilities = function () {
    return {
        types: [Type.Feed.Mixed],
        sorts: [Type.Order.Relevance],
        filters: []
    };
};

source.search = function (
    query,
    type,
    order,
    filters,
    continuationToken
) {
    const videos = [];
    const context = {
        query: query,
        page: 1
    };

    // Belum memetakan hasil API ke PlatformVideo.
    return new BstarPager(videos, false, context);
};

class BstarPager extends VideoPager {
    constructor(results, hasMore, context) {
        super(results, hasMore, context);
    }

    nextPage() {
        return new BstarPager([], false, this.context);
    }
}
