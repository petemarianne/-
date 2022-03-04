var ads = [
    {
        id: '1',
        title: 'Yandex.Music discount',
        description: 'Do you like listen to music?  Do it legally and pay a little with Yandex.Music! Huge library of every genre that you like!',
        createdAt: new Date('2021-03-06T14:00:00'),
        link: 'https://music.yandex.ru/',
        vendor: 'Yandex',
        photoLink: 'resources/images/yandex.music.png',
        hashTags: ['music', 'entertainment', 'songs', 'yandex'],
        discount: '50',
        validUntil: new Date('2021-06-29T23:00:00'),
        rating: 12,
        reviews: [
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
        title: 'Dodo Pizza',
        description: 'Work harder Eat smarter! Buy some tasty cheap pizza!',
        createdAt: new Date('2021-03-07T23:00:00'),
        link: 'https://dodopizza.by/',
        vendor: 'Dodo Pizza',
        photoLink: 'resources/images/dodo.jpeg',
        hashTags: ['food', 'pizza', 'dodo'],
        discount: '15',
        validUntil: new Date('2021-06-25T23:00:00'),
        rating: 20,
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
        title: 'Be healthy with Fox Club!',
        description: 'Be healthy with Fox Club!',
        createdAt: new Date('2021-03-07T23:00:00'),
        link: 'https://fox-club.by/',
        vendor: 'Fox Club',
        hashTags: ['sport', 'beauty', 'gym'],
        discount: '20',
        validUntil: new Date('2021-06-23T23:00:00'),
        rating: 0,
        reviews: []
    },
    
    {
        id: '4',
        title: 'Enjoy the best dessert in Cinnabon!',
        description: 'Use a secret word "PEKAN2021" to get a 10% discount!',
        createdAt: new Date('2021-03-07T23:00:00'),
        link: 'https://www.cinnabon.com/',
        vendor: 'Cinnabon',
        photoLink: 'resources//images/cinnabon.png',
        hashTags: ['food', 'cinnabon', 'dessert'],
        discount: '10',
        validUntil: new Date('2021-06-21T23:00:00'),
        rating: 25,
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
        title: 'Steam discount',
        description: 'With "PLAYTHISSPRING" you can get a 15% discount on some great games!',
        createdAt: new Date('2021-03-09T23:00:00'),
        link: 'https://store.steampowered.com/',
        vendor: 'Steam',
        photoLink: 'resources/images/steam.png',
        hashTags: ['games', 'entertainment', 'play', 'steam'],
        discount: '15',
        validUntil: new Date('2021-06-20T23:00:00'),
        rating: 3,
        reviews : [
            {
                username: 'gamer2001',
                date: new Date('2021-02-19T13:00:00'),
                reviewText: 'okay'
            }
        ]
    },
    
    {
        id: '6',
        title: 'Get some clothes, spring\'s coming!',
        description: 'We have huge discounts up to 50%! More information on our site.',
        createdAt: new Date('2021-03-10T23:00:00'),
        link: 'https://www.bershka.com/',
        vendor: 'Bershka',
        photoLink: 'resources/images/bershka.jpg',
        hashTags: ['clothes', 'beauty', 'bershka'],
        discount: '50',
        validUntil: new Date('2021-06-19T23:00:00'),
        rating: 6,
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
        title: 'Скидки в Павлине!',
        description: 'Скидки на все услуги в салоне красоты в центре Минска!',
        createdAt: new Date('2021-03-12T23:00:00'),
        link: 'https://pavlin.relax.by/',
        vendor: 'Павлин',
        hashTags: ['beauty'],
        discount: '30',
        validUntil: new Date('2021-06-14T23:00:00'),
        rating: 0,
        reviews: []
    },
    
    {
        id: '8',
        title: 'Уход вместе с Белита',
        description: 'Большие скидки на уходовые средва для девушек!',
        createdAt: new Date('2021-03-13T23:00:00'),
        link: 'https://vitex.by/',
        vendor: 'Белита',
        photoLink: 'resources/images/belita.jpg',
        hashTags: ['beauty', 'woman', 'skincare'],
        discount: '70',
        validUntil: new Date('2021-06-13T23:00:00'),
        rating: 0,
        reviews: []
    },
    
    {
        id: '9',
        title: 'Eat & Enjoy at Papa John\'s!',
        description: 'Use code "SPRING2021" to gain 20% discount!',
        createdAt: new Date('2021-03-14T23:00:00'),
        link: 'https://ww.papajohns.com/',
        vendor: 'Papa John\'s',
        photoLink: 'resources/images/papajohns.jpg',
        hashTags: ['food', 'pizza'],
        discount: '20',
        validUntil: new Date('2021-06-10T23:00:00'),
        rating: 15,
        reviews: [
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
        title: 'Use the best devices!',
        description: 'Apple devices are the best in the world and everyvody knows it! So buy some with 5% discount!',
        createdAt: new Date('2021-03-15T18:00:00'),
        link: 'https://i-store.by/',
        vendor: 'i-Store',
        photoLink: 'resources/images/i-store.png',
        hashTags: ['apple', 'technic', 'devices'],
        discount: '5',
        validUntil: new Date('2021-06-06T23:00:00'),
        rating: 25,
        reviews: [
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
        title: 'GREEN',
        description: 'Buy high quality products!',
        createdAt: new Date('2021-04-15T18:00:00'),
        link: 'https://www.green-market.by',
        vendor: 'GREEN',
        photoLink: 'resources/images/green.png',
        hashTags: ['food'],
        discount: '15',
        validUntil: new Date('2021-07-06T23:00:00'),
        rating: 15,
        reviews: [
            {
                username: 'qwerty12345',
                date: new Date('2021-04-19T14:00:00'),
                reviewText: 'Really good staff!'
            },
            {
                username: 'user24563',
                date: new Date('2021-04-19T13:00:00'),
                reviewText: 'Definitely recommend! 5 stars!'
            },
            {
                username: 'user24536',
                date: new Date('2021-04-18T14:00:00'),
                reviewText: 'Best food!'
            }
        ]
    },
    
    {
        id: '12',
        title: 'Пообедай здорово в Хинкальне!',
        description: 'Лучшая грузинская кухня в Минске только у нас! А для вас дешево и вкусно!',
        createdAt: new Date('2021-04-30T18:00:00'),
        link: 'https://www.instagram.com/hinkalnyaminsk/',
        vendor: 'Хинкальня',
        photoLink: 'resources/images/hinkalnya.jpeg',
        hashTags: ['food', 'meat'],
        discount: '60',
        validUntil: new Date('2021-10-06T23:00:00'),
        rating: 0,
        reviews: []
    },
    
    {
        id: '13',
        title: 'Delicious Asian food just for you!',
        description: 'So you know what Poke is? Then try it with 10% discount!',
        createdAt: new Date('2021-04-22T20:00:00'),
        link: 'https://wok.by/#poke',
        vendor: 'WOK',
        photoLink: 'resources/images/wok.png',
        hashTags: ['asianfood', 'food', 'poke'],
        discount: '10',
        validUntil: new Date('2021-07-10T23:00:00'),
        rating: 6,
        reviews: [
            {
                username: 'user245',
                date: new Date('2021-04-22T20:30:00'),
                reviewText: 'There was no avocado!'
            },
            {
                username: 'user352',
                date: new Date('2021-02-22T23:00:00'),
                reviewText: 'So yummy! wow!'
            }
        ]
    },
    
    {
        id: '14',
        title: 'Dress eco-friendly and cheap',
        description: 'New fancy eco-collection with special discount for you!',
        createdAt: new Date('2021-04-20T09:56:18'),
        link: 'https://www.hm.com',
        vendor: 'H&M',
        photoLink: 'resources/images/HM.png',
        hashTags: ['clothes', 'fancy', 'eco'],
        discount: '20',
        validUntil: new Date('2021-05-31T22:00:00'),
        rating: 0,
        reviews: []
    },
    
    {
        id: '15',
        title: 'MINISO discount',
        description: 'You can find and buy anything you want here! And now cheaper!',
        createdAt: new Date('2021-03-16T10:00:00'),
        link: 'https://www.miniso.com',
        vendor: 'MINISO',
        photoLink: 'resources/images/miniso.jpg',
        hashTags: ['cute', 'technic', 'toys', 'office'],
        discount: '7',
        validUntil: new Date('2021-06-30T22:00:00'),
        rating: 15,
        reviews: [
            {
                username: 'user425',
                date: new Date('2021-03-19T14:00:00'),
                reviewText: 'Really good products!'
            },
            {
                username: 'user3505',
                date: new Date('2021-03-19T13:00:00'),
                reviewText: 'Definitely recommend! 5 stars!'
            },
            {
                username: 'user20002',
                date: new Date('2021-03-18T14:00:00'),
                reviewText: 'Best devices for home!'
            }
        ]
    },
    
    {
        id: '16',
        title: 'Buy your kids toys!',
        description: 'Today toys are so expensive but in our store you won\'t spend a lot of money!',
        createdAt: new Date('2021-04-05T14:34:00'),
        link: 'https://www.funtastik.by',
        vendor: 'FUNTASTIK',
        photoLink: 'resources/images/funtastik.png',
        hashTags: ['toys', 'kids'],
        discount: '30',
        validUntil: new Date('2021-07-01T22:00:00'),
        rating: 0,
        reviews: []
    },
    
    {
        id: '17',
        title: 'BLACK MONTH AT ALIEXPRESS!',
        description: 'Buy cool things cheap!',
        createdAt: new Date('2021-05-01T00:00:00'),
        link: 'https://aliexpress.ru',
        vendor: 'AliExpress',
        photoLink: 'resources/images/ali.jpg',
        hashTags: ['clothes', 'technic', 'home', 'other', 'online'],
        discount: '15',
        validUntil: new Date('2021-06-01T23:00:00'),
        rating: 6,
        reviews: [
            {
                username: 'user905',
                date: new Date('2021-05-02T14:00:00'),
                reviewText: 'such a bad quality!'
            },
            {
                username: 'user183',
                date: new Date('2021-05-01T13:00:00'),
                reviewText: 'Definitely recommend! 5 stars!'
            }
        ]
    },
    
    {
        id: '18',
        title: 'cheaper vinyl',
        description: 'buy original vinyls with discount 10%',
        createdAt: new Date('2021-04-24T18:00:00'),
        link: 'https://playvinyl.by',
        vendor: 'playvinyl',
        photoLink: 'resources/images/playvinyl.webp',
        hashTags: ['music', 'technic', 'vinyl'],
        discount: '10',
        validUntil: new Date('2021-05-27T23:00:00'),
        rating: 2,
        reviews: [
            {
                username: 'qwerty12345',
                date: new Date('2021-04-25T14:00:00'),
                reviewText: 'too expensive!!!'
            }
        ]
    },
    
    {
        id: '19',
        title: 'Стикеры даром!',
        description: 'Получите стикеры почти даром и наслаждайтесь перепиской!',
        createdAt: new Date('2021-04-15T18:00:00'),
        link: 'https://vk.com',
        vendor: 'VK',
        photoLink: 'resources/images/vk.jpg',
        hashTags: ['vk', 'messenger', 'stickers'],
        discount: '80',
        validUntil: new Date('2021-04-30T23:00:00'),
        rating: 0,
        reviews: []
    },
    
    {
        id: '20',
        title: 'Будь красив и здоров!',
        description: 'Скидки на огромное количество процедур!',
        createdAt: new Date('2021-04-20T18:00:00'),
        link: 'https://www.shine-est.by',
        vendor: 'ШАЙНэст',
        hashTags: ['beauty'],
        discount: '20',
        validUntil: new Date('2021-07-06T23:00:00'),
        rating: 0,
        reviews: []
    },
    
    {
        id: '21',
        title: 'title',
        description: 'description',
        createdAt: new Date('2020-04-20T18:00:00'),
        link: 'https://www.title.com',
        vendor: 'vendor',
        hashTags: ['hashtag'],
        discount: '100',
        validUntil: new Date('2021-07-06T23:00:00'),
        rating: 0,
        reviews: []
    }

];

class App {
    constructor() {
        this.countOfPostsOnFeed = 0;
        this.user = 'guest';
        this.isVendor = false;
        this.view = new View();
        this.model = new Model();
        this.model.restore();
        if (!this.model.size()) {
            this.model.addAll(ads);
        }
        this.filterConfig = {
            vendor: null,
            hashTags: null,
            from: null,
            to: null
        };
        this.adForEdit;
        this.adForReview;
        this.buttonLoadMore = document.getElementById("buttonMore");
        this.buttonLoadMore.addEventListener("click", () => this.loadMoreAds());

        this.buttonFilter = document.querySelector(".filter");
        this.buttonFilter.addEventListener("submit", (event) => {
            event.preventDefault();
            this.filterAds(event);
        });

        document.getElementById("container").addEventListener("click", (event) => {
            this.deleteOneAd(event);
        });

        document.getElementById("container").addEventListener("click", (event) => {
            this.editOneAd(event);
        });

        document.getElementById("container").addEventListener("click", (event) => {
            this.leaveReview(event);
        });

        this.buttonCancelReview = document.querySelector(".closeReview");
        this.buttonCancelReview.addEventListener("click", () => this.cancelReview());

        this.buttonPublishReview = document.getElementById("formLeavingReview");
        this.buttonPublishReview.addEventListener("submit", (event) => {
            event.preventDefault();
            this.publishReview(event);
        });

        this.loadMoreAds();

        this.buttonAddingNewAd = document.querySelector(".add-ad-button");
        this.buttonAddingNewAd.addEventListener("click", () => this.addNewAd());

        this.buttonCancelNewAd = document.querySelector(".closeAddAd");
        this.buttonCancelNewAd.addEventListener("click", () => this.cancelNewAd());

        this.buttonPublishAd = document.getElementById("formNewAd");
        this.buttonPublishAd.addEventListener("submit", (event) => {
            event.preventDefault();
            this.publishAd(event);
        });

        this.buttonEnter = document.querySelector(".header-button");
        this.buttonEnter.addEventListener("click", () => this.signUp());

        this.buttonCancelEnter = document.querySelector(".closeSigningUp");
        this.buttonCancelEnter.addEventListener("click", () => this.cancelSignUp());

        this.buttonAuthorize = document.getElementById("formSigningUp");
        this.buttonAuthorize.addEventListener("submit", (event) => {
            event.preventDefault();
            this.authorize(event);
        });

    }

    loadMoreAds() {
        var departure = 'end';
        var nextAds = this.model.getPage(this.countOfPostsOnFeed, 10, this.filterConfig);
        nextAds.forEach(adItem => this.view.addItem(adItem, departure));
        this.countOfPostsOnFeed += nextAds.length;
        if (this.countOfPostsOnFeed === this.model.size() || nextAds.length < 10) {
            document.getElementById("buttonMore").style.display = "none";
        } else {
            document.getElementById("buttonMore").style.display = "block";
        }
        this.showUsername();
        this.showSignOutButton();
        this.showAddNewAdButton();
    }

    cancelNewAd(){
        this.adForEdit = null;
        document.getElementById("back1").style.display = "none";
        document.getElementById("window1").style.display = "none";
    }

    addNewAd() {
        this.adForEdit = null;
        document.getElementById("back1").style.display = "block";
        document.getElementById("window1").style.display = "block";
        document.getElementById('publishAd').setAttribute('value', 'publish your ad!');
    }

    signOut() {
        this.cancelSignUp();
        this.user = 'guest';
        this.view.user = 'guest';
        this.isVendor = false;
        this.buttonEnter = document.querySelector(".header-button");
        this.buttonEnter.addEventListener("click", () => this.signUp());

        this.buttonCancelEnter = document.querySelector(".closeSigningUp");
        this.buttonCancelEnter.addEventListener("click", () => this.cancelSignUp());

        this.buttonAuthorize = document.getElementById("formSigningUp");
        this.buttonAuthorize.addEventListener("submit", (event) => {
            event.preventDefault();
            this.authorize(event);
        });

        document.getElementById("container").innerHTML = "";
        this.countOfPostsOnFeed = 0;
        this.loadMoreAds();
    }

    signUp() {
        document.getElementById("back2").style.display = "block";
        document.getElementById("window2").style.display = "block";
    }

    cancelSignUp(){
        document.getElementById("back2").style.display = "none";
        document.getElementById("window2").style.display = "none";
    }

    authorize(event) {
        var item = event.target;
        if (item.login.value) {
            this.user = item.login.value;
            this.view.user = item.login.value;
            item.login.value = '';
        }
        if (item.radio1.checked) {
            item.radio1.checked = false;
            item.radio2.checked = false;
            this.isVendor = false;
        }
        if (item.radio2.checked) {
            item.radio2.checked = false;
            item.radio1.checked = false;
            this.isVendor = true;
        }
        if (item.password.value) {
            item.password.value = '';
        }
        this.cancelSignUp();
        this.buttonSigningOut = document.querySelector(".header-button");
        this.buttonSigningOut.addEventListener("click", () => this.signOut());
        document.getElementById("container").innerHTML = "";
        this.countOfPostsOnFeed = 0;
        this.loadMoreAds();
    }

    publishAd(event) {
        var departure = 'begin';
        var ad = {
            id: (this.model.size() + 1).toString(),
            title: '',
            description: '',
            createdAt: new Date(),
            link: '',
            vendor: this.user,
            photoLink: '',
            hashTags: null,
            discount: '',
            validUntil: null,
            rating: 0,
            reviews: []
        };
        var item = event.target;
        if (item.adTitle.value) {
            ad.title = item.adTitle.value;
            item.adTitle.value = '';
        }
        if (item.shortDescription.value) {
            ad.description = item.shortDescription.value;
            item.shortDescription.value = '';
        }
        if (item.link.value) {
            ad.link = item.link.value;
            item.link.value = '';
        }
        if (item.photoLink.value) {
            ad.photoLink = item.photoLink.value;
            item.photoLink.value = '';
        }
        if (item.formHashtags.value) {
            ad.hashTags = item.formHashtags.value.split(' ');
            item.formHashtags.value = '';
        }
        if (item.validityPeriod.valueAsDate) {
            ad.validUntil = item.validityPeriod.valueAsDate;
            item.validityPeriod.valueAsDate = null;
        }
        if (item.discountAmount.value) {
            ad.discount = item.discountAmount.value;
            item.discountAmount.value = '';
        }
        if (this.adForEdit) {
            this.view.edit(this.adForEdit.id, this.model.edit(this.adForEdit.id, ad));
        } else {
            this.view.addItem(this.model.add(ad), departure);
        }
        this.cancelNewAd();
    }

    deleteOneAd(event) {
        var current = event.target;
        while (current && current.className !== "delete-button" && current.id !== "container") {
            current = current.parentNode;
        }
        if (current && current.className === "delete-button") {
            this.model.remove(current.getAttribute('data-ad-id'));
            while (current && current.className !== "ad-block") {
                current = current.parentNode;
            }
            current.remove();
        }
    }

    editOneAd(event) {
        var current = event.target;
        while (current && current.className !== "edit-button" && current.id !== "container") {
            current = current.parentNode;
        }
        if (current && current.className === "edit-button") {
            this.adForEdit = this.model.get(current.getAttribute('data-ad-id'));
            while (current && current.className !== "ad-block") {
                current = current.parentNode;
            }
            var form = document.getElementById("formNewAd");
            form.adTitle.value = this.adForEdit.title;
            form.shortDescription.value = this.adForEdit.description;
            form.link.value = this.adForEdit.link;
            form.photoLink.value = this.adForEdit.photoLink;
            form.formHashtags.value = this.adForEdit.hashTags;
            form.validityPeriod.valueAsDate = this.adForEdit.validUntil;
            form.discountAmount.value = this.adForEdit.discount;
            document.getElementById('publishAd').setAttribute('value', 'edit your ad!');
            document.getElementById("back1").style.display = "block";
            document.getElementById("window1").style.display = "block";
        }
    }

    cancelReview() {
        this.adForReview = null;
        document.getElementById("back3").style.display = "none";
        document.getElementById("window3").style.display = "none";
    }

    leaveReview(event) {
        var current = event.target;
        while (current && current.className !== "leave-review" && current.id !== "container") {
            current = current.parentNode;
        }
        if (current && current.className === "leave-review") {
            this.adForReview = this.model.get(current.getAttribute('data-ad-id'));
            while (current && current.className !== "ad-block") {
                current = current.parentNode;
            }
            var form = document.getElementById("formLeavingReview");
            form.reviewText.value = '';
            form.ratingUser.value = '';
            document.getElementById("back3").style.display = "block";
            document.getElementById("window3").style.display = "block";
        } 
    }

    publishReview(event) {
        var review = {
            username: this.user,
            date: new Date(),
            reviewText: ''
        };
        var item = event.target;
        if (item.reviewText.value) {
            review.reviewText = item.reviewText.value;
        }
        if (item.ratingUser.value) {
            var rating = item.ratingUser.value;
            if (rating < 0) {
                rating = 0;
            } else if (rating > 5) {
                rating = 5;
            }
            this.adForReview.rating = Number(this.adForReview.rating) + Number(rating);
        }
        this.view.edit(this.adForReview.id, this.model.addReview(review, this.adForReview.id));
        this.cancelReview();
    }

    filterAds(event) {
        var item = event.target;
        if (item.filterVendor.value) {
            this.filterConfig.vendor = item.filterVendor.value;
        } else {
            this.filterConfig.vendor = null;
        }
        if (item.filterHashtags.value) {
            this.filterConfig.hashTags = item.filterHashtags.value.split(' ');
        } else {
            this.filterConfig.hashTags = null;
        }
        if (item.from.valueAsDate) {
            this.filterConfig.from = item.from.valueAsDate;
        } else {
            this.filterConfig.from = null;
        }
        if (item.to.valueAsDate) {
            this.filterConfig.to = item.to.valueAsDate;
        } else {
            this.filterConfig.to = null;
        }
        document.getElementById('container').innerHTML = '';
        this.countOfPostsOnFeed = 0;
        this.loadMoreAds();
    }

    showUsername() {
        document.querySelector('.user-name').textContent = 'hey, ' + this.user + '!';
    }

    showSignOutButton() {
        if (this.user == 'guest') {
            document.querySelector('.header-button').textContent = 'sign up';
        } else {
            document.querySelector('.header-button').textContent = 'sign out';
        }
    }

    showAddNewAdButton() {
        if (this.user == 'guest') {
            document.querySelector('.add-ad-button').style.display = 'none';
            document.querySelector('.ad-text').textContent = 'sign up to ad an add or use a discount!';
        } else if (!this.isVendor) {
            document.querySelector('.add-ad-button').style.display = 'none';
            document.querySelector('.ad-text').textContent = 'enjoy all the discount!';
        } else if (this.isVendor) {
            document.querySelector('.add-ad-button').style.display = 'block';
            document.querySelector('.ad-text').textContent = 'for other users to use!';
        }
    }
}

let app = new App();
