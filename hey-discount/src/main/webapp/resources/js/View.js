var ads = new Model([

    {
        id: '1',
        title: 'Yandex.Music discount',
        description: 'Do you like listen to music?  Do it legally and pay a little with Yandex.Music! Huge library of every genre that you like!',
        createdAt: new Date('2021-03-06T14:00:00'),
        link: 'https://music.yandex.ru/',
        vendor: 'Yandex',
        photoLink: 'resources/images/yandex.music.png',
        hashTags: ['music', 'entertainment', 'songs', 'yandex'],
        discount: '50%',
        validUntil: new Date('2021-06-29T23:00:00'),
        rating: 3,
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
        title: 'Dodo Pizza',
        description: 'Work harder Eat smarter! Buy some tasty cheap pizza!',
        createdAt: new Date('2021-03-07T23:00:00'),
        link: 'https://dodopizza.by/',
        vendor: 'Dodo Pizza',
        photoLink: 'resources/images/dodo.jpeg',
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
        title: 'Be healthy with Fox Club!',
        description: 'Be healthy with Fox Club!',
        createdAt: new Date('2021-03-07T23:00:00'),
        link: 'https://fox-club.by/',
        vendor: 'Fox Club',
        hashTags: ['sport', 'beauty', 'gym'],
        discount: '20%',
        validUntil: new Date('2021-06-23T23:00:00'),
        rating: 0
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
        title: 'Steam discount',
        description: 'With "PLAYTHISSPRING" you can get a 15% discount on some great games!',
        createdAt: new Date('2021-03-09T23:00:00'),
        link: 'https://store.steampowered.com/',
        vendor: 'Steam',
        photoLink: 'resources/images/steam.png',
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
        title: 'Get some clothes, spring\'s coming!',
        description: 'We have huge discounts up to 50%! More information on our site.',
        createdAt: new Date('2021-03-10T23:00:00'),
        link: 'https://www.bershka.com/',
        vendor: 'Bershka',
        photoLink: 'resources/images/bershka.jpg',
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
        title: 'Скидки в Павлине!',
        description: 'Скидки на все услуги в салоне красоты в центре Минска!',
        createdAt: new Date('2021-03-12T23:00:00'),
        link: 'https://pavlin.relax.by/',
        vendor: 'Павлин',
        hashTags: ['beauty'],
        discount: '30%',
        validUntil: new Date('2021-06-14T23:00:00'),
        rating: 0
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
        discount: '70%',
        validUntil: new Date('2021-06-13T23:00:00'),
        rating: 1
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
        discount: '20%',
        validUntil: new Date('2021-06-10T23:00:00'),
        rating: 3,
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
        discount: '5%',
        validUntil: new Date('2021-06-06T23:00:00'),
        rating: 5,
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
    }
]);

class View {

    _ads;
    _adBlock;
    _username;
    _isUser;
    _isVendor;

    constructor(user, isLogIn, isVendor) {
        this._ads = ads;
        this._adBlock = document.querySelector('.ad-block');
        this._username = user;
        this._isUser = isLogIn;
        this._isVendor = isVendor;
    }

    getAd(ad) {
        var block = document.importNode(this._adBlock, true);
        block.querySelector('.ad-title').textContent = ad.title;
        var description = block.querySelector('.description')
        if (description) {
            description.textContent = ad.description;
        } //i don't know why but it works only like this
        //template.querySelector('.ad-description').textContent = ad.description;
        block.querySelector('.discount-amount').textContent = ad.discount;
        block.querySelector('.validUntil').textContent = ad.validUntil.getMonth() + '/' + ad.validUntil.getDate() + '/' + ad.validUntil.getFullYear();
        if (ad.photoLink) {
            block.querySelector('.photoLink').setAttribute('src', ad.photoLink);
        } else {
            block.querySelector('.photoLink').setAttribute('src', 'resources/images/no-pic.jpg');
        }
        block.querySelector('.vendor').textContent = ad.vendor;
        var select = document.getElementById('vendorSelect');
        var option = document.createElement('option');
        option.value = ad.vendor;
        option.text = ad.vendor;
        select.add(option, null);
        block.querySelector('.more').setAttribute('href', ad.link);
        block.querySelector('.hashtags').textContent = '#' + ad.hashTags.join(' #'); 
        /*if (ad.rating >= 1 && ad.rating < 2) {
            block.getElementById('1star').className += ' checked'; 
        } else if (ad.rating >= 2 && ad.rating < 3) {
            block.getElementById('1star').className += ' checked'; 
            block.getElementById('2star').className += ' checked'; 
        } else if (ad.rating >= 3 && ad.rating < 4) {
            block.getElementById('1star').className += ' checked'; 
            block.getElementById('2star').className += ' checked'; 
            block.getElementById('3star').className += ' checked'; 
        } else if (ad.rating >= 4 && ad.rating < 5) {
            block.getElementById('1star').className += ' checked'; 
            block.getElementById('2star').className += ' checked'; 
            block.getElementById('3star').className += ' checked'; 
            block.getElementById('4star').className += ' checked'; 
        } else if (ad.rating == 5) {
            block.getElementById('1star').className += ' checked'; 
            block.getElementById('2star').className += ' checked'; 
            block.getElementById('3star').className += ' checked'; 
            block.getElementById('4star').className += ' checked';
            block.getElementById('5star').className += ' checked';
        }*/ //it should work but i don't know why it doesn't :(
        if (!ad.reviews) {
            block.querySelector(".review-1").style.borderColor = 'white';
            block.querySelector(".review-2").style.borderColor = 'white';
            block.querySelector(".review-3").style.borderColor = 'white';
            block.querySelector(".review-3").textContent = 'no reviews yet!';
            block.querySelector(".review-3").style.textAlign = 'center';
            block.querySelector(".review-3").style.fontSize = '100%';
            block.querySelector(".review-3").style.color ='#9fb1fe';
            block.querySelector(".review-4").style.borderColor = 'white';
            block.querySelector(".review-5").style.borderColor = 'white';
        } else {
            if (ad.reviews.length == 1) {
                block.querySelector(".user-review-1").textContent = ad.reviews[0].username;
                block.querySelector(".date-review-1").textContent = ad.reviews[0].date.getMonth() + '/' + ad.reviews[0].date.getDate() + '/' + ad.reviews[0].date.getFullYear();
                block.querySelector(".review-text-1").textContent = ad.reviews[0].reviewText;
                block.querySelector(".review-2").style.borderColor = 'white';
                block.querySelector(".review-3").style.borderColor = 'white';
                block.querySelector(".review-4").style.borderColor = 'white';
                block.querySelector(".review-5").style.borderColor = 'white';
            }

            if (ad.reviews.length == 2) {
                block.querySelector(".user-review-1").textContent = ad.reviews[0].username;
                block.querySelector(".date-review-1").textContent = ad.reviews[0].date.getMonth() + '/' + ad.reviews[0].date.getDate() + '/' + ad.reviews[0].date.getFullYear();
                block.querySelector(".review-text-1").textContent = ad.reviews[0].reviewText;
                block.querySelector(".user-review-2").textContent = ad.reviews[1].username;
                block.querySelector(".date-review-2").textContent = ad.reviews[1].date.getMonth() + '/' + ad.reviews[1].date.getDate() + '/' + ad.reviews[1].date.getFullYear();
                block.querySelector(".review-text-2").textContent = ad.reviews[1].reviewText;
                block.querySelector(".review-3").style.borderColor = 'white';
                block.querySelector(".review-4").style.borderColor = 'white';
                block.querySelector(".review-5").style.borderColor = 'white';
            }

            if (ad.reviews.length == 3) {
                block.querySelector(".user-review-1").textContent = ad.reviews[0].username;
                block.querySelector(".date-review-1").textContent = ad.reviews[0].date.getMonth() + '/' + ad.reviews[0].date.getDate() + '/' + ad.reviews[0].date.getFullYear();
                block.querySelector(".review-text-1").textContent = ad.reviews[0].reviewText;
                block.querySelector(".user-review-2").textContent = ad.reviews[1].username;
                block.querySelector(".date-review-2").textContent = ad.reviews[1].date.getMonth() + '/' + ad.reviews[1].date.getDate() + '/' + ad.reviews[1].date.getFullYear();
                block.querySelector(".review-text-2").textContent = ad.reviews[1].reviewText;
                block.querySelector(".user-review-3").textContent = ad.reviews[2].username;
                block.querySelector(".date-review-3").textContent = ad.reviews[2].date.getMonth() + '/' + ad.reviews[2].date.getDate() + '/' + ad.reviews[2].date.getFullYear();
                block.querySelector(".review-text-3").textContent = ad.reviews[2].reviewText;
                block.querySelector(".review-4").style.borderColor = 'white';
                block.querySelector(".review-5").style.borderColor = 'white';
            }

            if (ad.reviews.length == 4) {
                block.querySelector(".user-review-1").textContent = ad.reviews[0].username;
                block.querySelector(".date-review-1").textContent = ad.reviews[0].date.getMonth() + '/' + ad.reviews[0].date.getDate() + '/' + ad.reviews[0].date.getFullYear();
                block.querySelector(".review-text-1").textContent = ad.reviews[0].reviewText;
                block.querySelector(".user-review-2").textContent = ad.reviews[1].username;
                block.querySelector(".date-review-2").textContent = ad.reviews[1].date.getMonth() + '/' + ad.reviews[1].date.getDate() + '/' + ad.reviews[1].date.getFullYear();
                block.querySelector(".review-text-2").textContent = ad.reviews[1].reviewText;
                block.querySelector(".user-review-3").textContent = ad.reviews[2].username;
                block.querySelector(".date-review-3").textContent = ad.reviews[2].date.getMonth() + '/' + ad.reviews[2].date.getDate() + '/' + ad.reviews[2].date.getFullYear();
                block.querySelector(".review-text-3").textContent = ad.reviews[2].reviewText;
                block.querySelector(".user-review-4").textContent = ad.reviews[3].username;
                block.querySelector(".date-review-4").textContent = ad.reviews[3].date.getMonth() + '/' + ad.reviews[3].date.getDate() + '/' + ad.reviews[3].date.getFullYear();
                block.querySelector(".review-text-4").textContent = ad.reviews[3].reviewText;
                block.querySelector(".review-5").style.borderColor = 'white';
            }

            if (ad.reviews.length == 5) {
                block.querySelector(".user-review-1").textContent = ad.reviews[0].username;
                block.querySelector(".date-review-1").textContent = ad.reviews[0].date.getMonth() + '/' + ad.reviews[0].date.getDate() + '/' + ad.reviews[0].date.getFullYear();
                block.querySelector(".review-text-1").textContent = ad.reviews[0].reviewText;
                block.querySelector(".user-review-2").textContent = ad.reviews[1].username;
                block.querySelector(".date-review-2").textContent = ad.reviews[1].date.getMonth() + '/' + ad.reviews[1].date.getDate() + '/' + ad.reviews[1].date.getFullYear();
                block.querySelector(".review-text-2").textContent = ad.reviews[1].reviewText;
                block.querySelector(".user-review-3").textContent = ad.reviews[2].username;
                block.querySelector(".date-review-3").textContent = ad.reviews[2].date.getMonth() + '/' + ad.reviews[2].date.getDate() + '/' + ad.reviews[2].date.getFullYear();
                block.querySelector(".review-text-3").textContent = ad.reviews[2].reviewText;
                block.querySelector(".user-review-4").textContent = ad.reviews[3].username;
                block.querySelector(".date-review-4").textContent = ad.reviews[3].date.getMonth() + '/' + ad.reviews[3].date.getDate() + '/' + ad.reviews[3].date.getFullYear();
                block.querySelector(".review-text-4").textContent = ad.reviews[3].reviewText;
                block.querySelector(".user-review-5").textContent = ad.reviews[4].username;
                block.querySelector(".date-review-5").textContent = ad.reviews[4].date.getMonth() + '/' + ad.reviews[4].date.getDate() + '/' + ad.reviews[4].date.getFullYear();
                block.querySelector(".review-text-5").textContent = ad.reviews[4].reviewText;
            }

        }
        return block;
    }

    showUsername() {
        document.querySelector('.user-name').textContent = 'hey, ' + this._username + '!';
    }

    showLogOutButton() {
        if (!this._isLogIn) {
            document.querySelector('.header-button').textContent = 'sign up';
        }
    }

    showAddNewOfferButton() {
        if (!(this._isLogIn || this._isVendor)) {
            document.querySelector('.add-new-offer-button').textContent = 'sign up';
            document.querySelector('.ad-text').textContent = 'to ad an add or use a discount!';
        } 
        if (this._isLogIn && !this.isVendor) {
            document.querySelector('.add-new-offer-button').style.visibility = 'hidden';
            document.querySelector('.ad-text').textContent = 'enjoy all the discount!';
        }
    }

    showFeedbackButton() {
        if (!this._isLogIn) {
            document.querySelectorAll('.leave-review').forEach(button => button.style.visibility = 'hidden');
        }
    }

    showDeleteButton() {
        if (!(this._isUser || this._isVendor)) {
           document.querySelectorAll('.delete-button').forEach(button => button.style.visibility = 'hidden');
        }
    }

    showEditButton() {
        if (!(this._isUser || this._isVendor)) {
            document.querySelectorAll('.edit-button').forEach(button => button.style.visibility = 'hidden');
        }
    }

    adVendor(ad) {
        var select = document.getElementById('vendorSelect');
        var option = document.createElement('option');
        option.value = ad.vendor;
        option.text = ad.vendor;
        select.add(option, null);
    }

    refreshPage() {
        document.querySelectorAll('.ad-block').forEach(ad => ad.remove());
        var moreButton = document.querySelector('.load-more');
        this._ads.getPage().forEach(ad => {moreButton.before(this.getAd(ad));});
        //this.showFeedbackButton();
        this.showDeleteButton();
        this.showEditButton();
        this.showUsername();
        this.showLogOutButton();
        this.showAddNewOfferButton();
    }

    addAd(ad) {
        if(this._ads.add(ad)) {
            var select = document.getElementById('vendorSelect');
            for (var i = select.length - 1; i >= 0; i--) {
                select.remove(i);
            }
            var option = document.createElement('option');
            option.value = 'select-vendor';
            option.text = 'select vendor!';
            select.add(option, null);
            this.refreshPage();
            return true;
        }
        return false;
    }

    removeAd(id) {
        if (this._ads.remove(id)) {
            var select = document.getElementById('vendorSelect');
            for (var i = select.length - 1; i >= 0; i--) {
                select.remove(i);
            }
            var option = document.createElement('option');
            option.value = 'select-vendor';
            option.text = 'select vendor!';
            select.add(option, null);
            this.refreshPage();
            return true;
        }
        return false;
    }

    editAd(id, ad) {
        if (this._ads.edit(id, ad)) {
            var select = document.getElementById('vendorSelect');
            for (var i = select.length - 1; i >= 0; i--) {
                select.remove(i);
            }
            var option = document.createElement('option');
            option.value = 'select-vendor';
            option.text = 'select vendor!';
            select.add(option, null);
            this.refreshPage();
            return true;
        }
        return false;
    }
}

var view;

window.onload = () => {
    var user = 'user';
    if (user.length == 0) {
        view = new View('guest', false, false)
    } else {
        view = new View(user, true, true);
    }
    view.refreshPage();
    view.addAd({
        id: '34',
        title: 'title',
        description: 'description',
        createdAt: new Date('2021-04-17T00:00:00'),
        link: 'link',
        vendor: 'vendor',
        photoLink: 'photoLink',
        hashTags: ['hashtag'],
        discount: '50%',
        validUntil: new Date('2021-04-30T00:00:00')
    });
    view.removeAd('7');
    view.editAd('2',
        {
            title: 'title',
            description: 'description',
            validUntil: new Date('2021-06-23T00:00:00'),
            discount: '100%'
        })
};