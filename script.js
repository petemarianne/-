(function() {

    var adList = [

        {
            id: '1',
            description: 'Do you like listen to music? Do it legally and pay a little with Yandex.Music! Huge library of every genre that you like!',
            createdAt: new Date('2021-03-06T14:00:00'),
            link: 'https://music.yandex.ru/',
            vendor: 'Yandex',
            photoLink: 'file:///UI/images/yandex.music.png',
            hashTags: ['music', 'entertainment', 'songs', 'yandex'],
            discount: '50%',
            validUntil: new Date('2021-06-29T23:00:00'),
            rating: 3,
            reviews : [
                {
                    username: 'qwerty12345',
                    date: new Date('2021-02-19T14:00:00'),
                    reviewText: 'Really good service!'
                },
                {
                    username: 'user24563',
                    date: new Date('2021-02-19T13:00:00'),
                    reviewText: 'Definitely recommend! 5 stars!'
                },
                {
                    username: 'user24536',
                    date: new Date('2021-02-18T14:00:00'),
                    reviewText: 'okay but I like Apple Music much better.'
                },
                {
                    username: 'user24009',
                    date: new Date('2021-02-14T14:00:00'),
                    reviewText: 'i like it'
                },
                {
                    username: 'user111',
                    date: new Date('2021-02-11T14:00:00'),
                    reviewText: 'nice'
                }
            ]
        },
        
        {
            id: '2',
            description: 'Work harder Eat smarter! Buy some tasty cheap pizza!',
            createdAt: new Date('2021-03-07T23:00:00'),
            link: 'https://dodopizza.by/',
            vendor: 'Dodo Pizza',
            photoLink: 'file:///UI/images/dodo.jpeg',
            hashTags: ['food', 'pizza', 'dodo'],
            discount: '15%',
            validUntil: new Date('2021-06-25T23:00:00'),
            rating: 4,
            reviews : [
                {
                    username: 'qwerty12345',
                    date: new Date('2021-02-28T14:00:00'),
                    reviewText: 'fast delivery btw'
                },
                {
                    username: 'user24563',
                    date: new Date('2021-02-23T13:00:00'),
                    reviewText: '5 stars!'
                },
                {
                    username: 'papajonhs',
                    date: new Date('2021-02-18T14:00:00'),
                    reviewText: 'tasty enoght for this price'
                },
                {
                    username: 'user249',
                    date: new Date('2021-02-14T14:00:00'),
                    reviewText: 'I LOVED IT!'
                },
                {
                    username: 'user1101',
                    date: new Date('2021-02-11T14:00:00'),
                    reviewText: 'so yummy'
                }
            ]
        },
        
        {
            id: '3',
            description: 'Be healthy with Fox Club!',
            createdAt: new Date('2021-03-07T23:00:00'),
            link: 'https://fox-club.by/',
            vendor: 'Fox Club',
            hashTags: ['sport', 'beauty', 'gym'],
            discount: '20%',
            validUntil: new Date('2021-06-23T23:00:00'),
        },
        
        {
            id: '4',
            description: 'Use a secret word "PEKAN2021" to get a 10% discount!',
            createdAt: new Date('2021-03-07T23:00:00'),
            link: 'https://www.cinnabon.com/',
            vendor: 'Cinnabon',
            photoLink: 'file:///UI/images/cinnabon.png',
            hashTags: ['food', 'cinnabon', 'dessert'],
            discount: '10%',
            validUntil: new Date('2021-06-21T23:00:00'),
            rating: 5,
            reviews : [
                {
                    username: 'worker12345',
                    date: new Date('2021-02-19T14:00:00'),
                    reviewText: 'so delicious!'
                },
                {
                    username: 'user24563',
                    date: new Date('2021-02-19T13:00:00'),
                    reviewText: 'nothing\'s better'
                },
                {
                    username: 'user24536',
                    date: new Date('2021-02-18T14:00:00'),
                    reviewText: '5 stars!'
                },
                {
                    username: 'user24009',
                    date: new Date('2021-02-14T14:00:00'),
                    reviewText: 'i adore you'
                },
                {
                    username: 'user111',
                    date: new Date('2021-02-11T14:00:00'),
                    reviewText: 'the best dessert!'
                }
            ]
        },
        
        {
            id: '5',
            description: 'With "PLAYTHISSPRING" you can get a 15% discount on some great games!',
            createdAt: new Date('2021-03-09T23:00:00'),
            link: 'https://store.steampowered.com/',
            vendor: 'Steam',
            photoLink: 'file:///UI/images/steam.png',
            hashTags: ['games', 'entertainment', 'play', 'steam'],
            discount: '15%',
            validUntil: new Date('2021-06-20T23:00:00'),
            rating: 3,
            reviews : [
                {
                    username: 'rod2000',
                    date: new Date('2021-02-28T14:00:00'),
                    reviewText: 'not really much cool games with discount.'
                },
                {
                    username: 'gamer2001',
                    date: new Date('2021-02-19T13:00:00'),
                    reviewText: 'okay'
                }
            ]
        },
        
        {
            id: '6',
            description: 'We have huge discounts up to 50%! More information on our site.',
            createdAt: new Date('2021-03-10T23:00:00'),
            link: 'https://www.bershka.com/',
            vendor: 'Bershka',
            photoLink: 'file:///UI/images/bershka.jpg',
            hashTags: ['clothes', 'beauty', 'bershka'],
            discount: '50%',
            validUntil: new Date('2021-06-19T23:00:00'),
            rating: 2,
            reviews : [
                {
                    username: 'pete2001',
                    date: new Date('2021-02-28T14:00:00'),
                    reviewText: 'GREAT FANCY CLOTHES!'
                },
                {
                    username: 'newyorker',
                    date: new Date('2021-02-19T13:00:00'),
                    reviewText: 'not really much discounts.'
                },
                {
                    username: 'alex1998',
                    date: new Date('2021-02-19T13:00:00'),
                    reviewText: 'coulda been better'
                }
            ]
        },
        
        {
            id: '7',
            description: 'Скидки на все услуги в салоне красоты в центре Минска!',
            createdAt: new Date('2021-03-12T23:00:00'),
            link: 'https://pavlin.relax.by/',
            vendor: 'Павлин',
            hashTags: ['beauty'],
            discount: '30%',
            validUntil: new Date('2021-06-14T23:00:00'),
        },
        
        {
            id: '8',
            description: 'Большие скидки на уходовые средва для девушек!',
            createdAt: new Date('2021-03-13T23:00:00'),
            link: 'https://vitex.by/',
            vendor: 'Белита',
            photoLink: 'file:///UI/images/belita.jpg',
            hashTags: ['beauty', 'woman', 'skincare'],
            discount: '70%',
            validUntil: new Date('2021-06-13T23:00:00'),
        },
        
        {
            id: '9',
            description: 'Use code "SPRING2021" to gain 20% discount!',
            createdAt: new Date('2021-03-14T23:00:00'),
            link: 'https://ww.papajohns.com/',
            vendor: 'Papa John\'s',
            photoLink: 'file:///UI/images/papajohns.jpg',
            hashTags: ['food', 'pizza'],
            discount: '20%',
            validUntil: new Date('2021-06-10T23:00:00'),
            rating: 3,
            reviews : [
                {
                    username: 'qwerty12345',
                    date: new Date('2021-02-19T14:00:00'),
                    reviewText: 'so delicious!'
                },
                {
                    username: 'user24563',
                    date: new Date('2021-02-19T13:00:00'),
                    reviewText: 'nothing\'s better'
                },
                {
                    username: 'dodopizza',
                    date: new Date('2021-02-18T14:00:00'),
                    reviewText: 'tasty enoght for this price'
                },
                {
                    username: 'user24009',
                    date: new Date('2021-02-14T14:00:00'),
                    reviewText: 'I LOVED IT!'
                },
                {
                    username: 'user111',
                    date: new Date('2021-02-11T14:00:00'),
                    reviewText: 'so yummy'
                }
            ]
        },
        
        {
            id: '10',
            description: 'Apple devices are the best in the world and everyvody knows it! So buy some with 5% discount!',
            createdAt: new Date('2021-03-15T18:00:00'),
            link: 'https://i-store.by/',
            vendor: 'i-Store',
            photoLink: 'file:///UI/images/i-store.png',
            hashTags: ['apple', 'technic', 'devices'],
            discount: '5%',
            validUntil: new Date('2021-06-06T23:00:00'),
            rating: 5,
            reviews : [
                {
                    username: 'qwerty12345',
                    date: new Date('2021-02-19T14:00:00'),
                    reviewText: 'Really good service!'
                },
                {
                    username: 'user24563',
                    date: new Date('2021-02-19T13:00:00'),
                    reviewText: 'Definitely recommend! 5 stars!'
                },
                {
                    username: 'user24536',
                    date: new Date('2021-02-18T14:00:00'),
                    reviewText: 'Best devices!'
                },
                {
                    username: 'user24009',
                    date: new Date('2021-02-14T14:00:00'),
                    reviewText: 'i like it'
                },
                {
                    username: 'user111',
                    date: new Date('2021-02-11T14:00:00'),
                    reviewText: 'nice'
                }
            ]
        },
        
        {
            id: '11',
            description: 'desctiption',
            createdAt: new Date('2021-03-11T23:00:00'),
            link: 'link',
            vendor: 'vendor',
            hashTags: ['hashtag'],
            discount: '10%',
            validUntil: new Date('2021-07-29T23:00:00'),
        },
        
        {
            id: '12',
            description: 'desctiption',
            createdAt: new Date('2021-03-11T23:00:00'),
            link: 'link',
            vendor: 'vendor',
            hashTags: ['hashtag'],
            discount: '10%',
            validUntil: new Date('2021-12-31T23:00:00'),
        },
        
        {
            id: '12',
            description: 'desctiption',
            createdAt: new Date('2021-03-12T23:00:00'),
            link: 'link',
            vendor: 'vendor',
            hashTags: ['hashtag'],
            discount: '10%',
            validUntil: new Date('2021-03-29T23:00:00'),
        },
        
        {
            id: '14',
            description: 'desctiption',
            createdAt: new Date('2021-03-15T23:00:00'),
            link: 'link',
            vendor: 'vendor',
            hashTags: ['hashtag'],
            discount: '10%',
            validUntil: new Date('2021-08-08T23:00:00'),
        },
        
        {
            id: '15',
            description: 'desctiption',
            createdAt: new Date('2021-03-19T15:00:00'),
            link: 'link',
            vendor: 'vendor',
            hashTags: ['hashtag'],
            discount: '10%',
            validUntil: new Date('2021-07-01T23:00:00'),
        },
        
        {
            id: '16',
            description: 'desctiption',
            createdAt: new Date('2021-03-10T23:35:00'),
            link: 'link',
            vendor: 'vendor',
            hashTags: ['hashtag'],
            discount: '10%',
            validUntil: new Date('2021-05-22T23:00:00'),
        },
        
        {
            id: '17',
            description: 'desctiption',
            createdAt: new Date('2021-03-15T23:00:00'),
            link: 'link',
            vendor: 'vendor',
            hashTags: ['hashtag'],
            discount: '10%',
            validUntil: new Date('2021-06-30T23:00:00'),
        },
        
        {
            id: '18',
            description: 'desctiption',
            createdAt: new Date('2021-02-15T23:00:00'),
            link: 'link',
            vendor: 'vendor',
            hashTags: ['hashtag'],
            discount: '10%',
            validUntil: new Date('2021-05-29T23:00:00'),
        },
        
        {
            id: '19',
            description: 'desctiption',
            createdAt: new Date('2021-01-15T23:00:00'),
            link: 'link',
            vendor: 'vendor',
            hashTags: ['hashtag'],
            discount: '10%',
            validUntil: new Date('2021-04-29T23:00:00'),
        },
        
        {
            id: '20',
            description: 'desctiption',
            createdAt: new Date('2021-02-02T23:00:00'),
            link: 'link',
            vendor: 'vendor',
            hashTags: ['hashtag'],
            discount: '10%',
            validUntil: new Date('2021-03-29T23:00:00'),
        }

    ];

    function getAds(skip = 0, top = 10, filterConfig = undefined) {
        if (typeof skip !== 'number' || typeof top !== 'number') {
            console.log('Incorrect inputting type');
            return;
        }

        if (filterConfig) {
            let returningAds;
            for (var param in filterConfig) {
                if (param === 'hashTags') {
                    for (var i = 0; i < filterConfig.hashTags.length; i++) {
                        returningAds = adList.filter(adItem => adItem.hashTags.includes(filterConfig.hashTags[i]));
                    }
                } else if (param === 'dateFrom') {
                    returningAds = adList.filter(adItem => adItem.createdAt >= filterConfig.dateFrom);
                } else if (param === 'dateTo') {
                    returningAds = adList.filter(adItem => adItem.createdAt < filterConfig.dateTo);
                } else if (param === 'vendor') {
                    returningAds = adList.filter(adItem => adItem.vendor === filterConfig.vendor);
                }
            }

            returningAds.sort(function (first, second) {
                if (first.createdAt < second.createdAt) {
                    return 1;
                } else if (first.createdAt > second.createdAt) {
                    return -1;
                } else {
                    return 0;
                }
            });

            return returningAds.slice(skip, skip + top);
        } else {
            var returningAds = adList.slice(skip, skip + top);

            returningAds.sort(function (first, second) {
                if (first.createdAt < second.createdAt) {
                    return 1;
                } else if (first.createdAt > second.createdAt) {
                    return -1;
                } else {
                    return 0;
                }
            });

            return returningAds;
        }
    }

    function getAd(id) {
        if (typeof id === 'string'){
            return adList.find(adItem => adItem.id === id);
        }
        else {
            console.log('Incorrect type of id. You should use "string"');
        }
    }

    function validateAd(adItem, params = ['id', 'description', 'createdAt','vendor', 'photoLink', 'hashTags', 'link', 'discount', 'validUntil', 'rating', 'reviews']) {
        return params.every(function (param) {
            switch (param) {
                case 'id':
                    if (!adItem.id || typeof adItem.id !== 'string') {
                        return false;
                    }
                    break;
                case 'description':
                    if (!adItem.description || typeof adItem.description !== 'string' || adItem.description.length > 200) {
                        return false;
                    }
                    break;
                case 'createdAt':
                    if (!adItem.createdAt || Object.prototype.toString.call(adItem.createdAt) !== '[object Date]') {
                        return false;
                    }
                    break;
                case  'link':
                    if (!adItem.link || typeof adItem.link !== 'string') {
                        return false;
                    }
                    break;
                case 'vendor':
                    if (!adItem.vendor || typeof adItem.vendor !== 'string' || adItem.vendor.length < 1){
                        return false;
                    }
                    break;
                case 'photoLink':
                    if (adItem.photoLink){
                        if (typeof adItem.photoLink !== 'string'){
                            return false;
                        }
                    }
                    break;
                case 'hashTags':
                    if (!adItem.hashTags || !adItem.hashTags.every(tag => typeof tag === 'string')){
                        return false;
                    }
                    break;
                case 'discount':
                    if (!adItem.discount || typeof adItem.discount !== 'string'){
                        return false;
                    }
                    break;
                case 'validUntil':
                    if (!adItem.validUntil || Object.prototype.toString.call(adItem.validUntil) !== '[object Date]') {
                        return false;
                    }
                    break;
                case 'rating':
                    if (adItem.rating) {
                        if (typeof adItem.rating !== 'number' || (adItem.rating < 0 && adItem.rating > 5)) {
                            return false;
                        }
                    }
                    break;
                case 'reviews':
                    break;
                default:
                    return false;
            }
            return true;
        })
    }

    function addAd(adItem){
        if (validateAd(adItem)){
            adList.push(adItem);
            return true;
        }
        return false;
    }

    function editAd(id, adItem){
        for (var param in adItem){
            if (param === 'id' || param === 'createdAt' || param === 'vendor'){
                console.log('You can\'t change id, vendor or created time');
                return false;
            }
        }
        if(!validateAd(adItem, Object.keys(adItem))){
            return false;
        }

        var editingAd = getAd(id);

        for (var param in adItem){
            editingAd[param] = adItem[param];
        }

        return true;
    }

    function removeAd(id){
        if (typeof id === 'string'){
            var index = adList.findIndex(adItem => adItem.id === id);

            if (index !== -1){
                adList.splice(index, 1);
                return true;
            }

            if (index === -1){
             console.log('Incorrect id!')
            }
        }
        return false;
    }

    //methods tests
    console.log('Top 8 ads:');
    console.log(getAds(0, 8));

    console.log('Top 3 ads, skip 1 ad, vendor is Dodo Pizza:');
    console.log(getAds(1, 3, {vendor: 'Dodo Pizza'}));

    console.log('Top 5 ads, skip 3 ads, dateFrom: 01.03.2020:');
    console.log(getAds(3, 5, {dateFrom: new Date('2020-03-01T00:00:00')}));

    console.log('Top 2 ads, skip 0 ads, hashtag is food:');
    console.log(getAds(0, 2, {hashTags: ['food']}));

    console.log('getAds with incorrect inputting type:');
    console.log(getAds('0', 2));

    console.log('Get ad with id 7:');
    console.log(getAd('7'));

    console.log('Get ad with nonexistent id (23):'); 
    console.log(getAd('22'));

    console.log('Validate ad:');
    console.log(validateAd({id: '2', createdAt: new Date(),  description: 'description', vendor: 'vendor', hashTags: ['hashtag'], discount: '20%', validUntil: new Date(), link: 'link'}));

    console.log('Invalid ad (without vendor):');
    console.log(validateAd({id: '44', createdAt: new Date(),  description: 'description', photoLink: 'photoLink'}));

    console.log('Add valid ad:');
    console.log(addAd({id: '23', createdAt: new Date(),  description: 'description', vendor: 'vendor', hashTags: ['hashtag'], discount: '90%', validUntil: new Date(), link: 'link'}));

    console.log('Add invalid ad:');
    console.log(addAd({createdAt: new Date(), description: 'description', vendor: 'vendor', discount: '90%'}));

    console.log('Edit added ad:');
    console.log(editAd('23', {description: 'edited'}));

    console.log('Edit unchangeable parameters:');
    console.log(editAd('23', {id: '666', description: 'edit'}));

    console.log('Delete edited ad:');
    console.log(removeAd('23'));

}());