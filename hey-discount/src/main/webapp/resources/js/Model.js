class Model {
    constructor(ads) {
        ads = ads || [];
        this._ads = ads.filter(adItem => this.validate(adItem));
    }

    static dateComparator(a, b) {
        return b.createdAt - a.createdAt;
    }

    getPage(skip = 0, top = 10, filterConfig) {
        var resultAds = this._ads;

        if (filterConfig) {
            if (filterConfig.vendor) {
                resultAds = resultAds.filter(function (adItem) {
                    if (adItem.vendor.includes(filterConfig.vendor))
                        return adItem.vendor;
                });
            }

            if (filterConfig.from) {
                resultAds = resultAds.filter(function (adItem) {
                    return adItem.validUntil >= filterConfig.from;
                });
            }

            if (filterConfig.to) {
                resultAds = resultAds.filter(function (adItem) {
                    return adItem.validUntil <= filterConfig.to;
                });
            }

            if (filterConfig.hashTags) {
                resultAds = resultAds.filter(function (adItem) {
                    if (filterConfig.hashTags.every(hashTag => adItem.hashTags.includes(hashTag)))
                        return adItem.hashTags;
                });
            }
        }

        resultAds.sort(Model.dateComparator);
        return resultAds.slice(skip, skip + top);
    }

    get(id) {
        return this._ads.find(adItem => adItem.id === id) || null;
    }

    reviewValidate(review) {
        if(typeof review.reviewText !== 'string' || typeof review.username !== 'string' || Object.prototype.toString.call(review.date) !== '[object Date]') {
            return false;
        }
        return true;
    }

    validateReview(review) {
        if (review) {
            if (!review.reviewText || review.reviewText.length > 1000 || typeof review.reviewText !== 'string') {
                return false;
            }
        }
        return true;
    }

    addReview(review, id) {
        const date = new Date(review.date);
        const newReview = {
            username: review.username,
            date: date,
            reviewText: review.reviewText
        }
        if (this.validateReview(review)) {
            this.get(id).reviews.push(review);
            this.save();
            return this.get(id);
        }
        return false;
    }

    validate(adItem) {
        if (adItem) {

            if (!adItem.id || (adItem.id && typeof adItem.id !== 'string')) {
                return false;
            }

            if (!adItem.title || ((adItem.title && (typeof adItem.title !== 'string') || (adItem.title.length > 100))))

            if (!adItem.description || (adItem.description && ((typeof adItem.description !== 'string') || (adItem.description.length > 250)))) {
                return false;
            }

            if (!adItem.createdAt || Object.prototype.toString.call(adItem.createdAt) !== '[object Date]') {
                return false;
            }

            if (!adItem.link || typeof adItem.link !== 'string') {
                return false;
            }

            if (adItem.photoLink && typeof adItem.photoLink !== 'string') {
                    return false;
            }

            if (adItem.hashTags && adItem.hashTags.some(hashTag => typeof hashTag !== 'string')) {
                    return false;
            }

            if (!adItem.discount || typeof adItem.discount !== 'string'){
                return false;
            }

            if (!adItem.validUntil || Object.prototype.toString.call(adItem.validUntil) !== '[object Date]') {
                return false;
            }

            if (adItem.rating && (typeof adItem.rating !== 'number' || (adItem.rating < 0 && adItem.rating > 5))) {
                return false;
            }

            if (adItem.reviews && (adItem.reviews.some(review => !this.reviewValidate(review)))) {
                return false;
            }
        }

        return true;
    }

    add(adItem) {
        const createdDate = new Date(adItem.createdAt);
        const validDate = new Date(adItem.validUntil);
        const newAd = {
            description: adItem.description,
            title: adItem.title,
            photoLink: adItem.photoLink,
            hashTags: adItem.hashTags,
            id: (this.size() + 1).toString(),
            vendor: adItem.vendor,
            createdAt: createdDate,
            validUntil: validDate,
            discount: adItem.discount,
            rating: adItem.rating,
            link: adItem.link,
            reviews: adItem.reviews
        }
        if (this.validate(adItem)) {
            this._ads.push(adItem);
            this.save();
            return newAd;
        }
        return false;
    }

    edit(id, adItem) {
        var editingAd = this.get(id);

        if (adItem.description) {
            editingAd.description = adItem.description;
        }
        if (adItem.title) {
            editingAd.title = adItem.title;
        }
        if (adItem.photoLink) {
            editingAd.photoLink = adItem.photoLink;
        }
        if (adItem.hashTags) {
            editingAd.hashTags = adItem.hashTags;
        }
        if(adItem.discount) {
            editingAd.discount = adItem.discount;
        }
        if(adItem.validUntil) {
            editingAd.validUntil = adItem.validUntil;
        }
        if(adItem.link) {
            editingAd.link = adItem.link;
        }
        if (this.validate(editingAd)) {
            this.save();
            return adItem;
        }
        return false;
    }

    remove(id) {
        if (this._ads.findIndex(adItem => adItem.id === id) !== -1) {
            this._ads.splice(this._ads.findIndex(adItem => adItem.id === id), 1);
            this.save();
            return true;
        }
        return false;
    }

    save(){
        localStorage.clear();
        localStorage.setItem('ads', JSON.stringify(this._ads));
    }

    restore(){
        var json = localStorage.getItem('ads');
        if(json) {
            var ads = JSON.parse(json);
            this._ads = ads.map((adItem) => ({
                ...adItem, validUntil: new Date(adItem.validUntil), createdAt: new Date(adItem.createdAt) // i don't know how to refer to date of review
            }));
        }
    }

    addAll(ads) {
        var invalidAds = [];

        ads.forEach(adItem => {
            if (!this.add(adItem)) invalidAds.push(adItem)
        });

        return invalidAds;
    }

    clear() {
        this._ads = [];
    }

    size(){
        return this._ads.length;
    }

}