function sortByDate(reviews) {
    reviews.sort((review1, review2) => review1.date <= review2.date ? 1 : -1);
}

function getReviewText(reviewText) {
    if (reviewText.length > 30) {
        var line = '';
        for (var i = 0; i < 30; i++) {
            line += reviewText[i];
        }
        line += '\.';
        line += '\.';
        line += '\.';
        return line;
    }
    return reviewText;
}

function fillItemData(item, data, user) {
    let placeholders = item.querySelectorAll('[data-target]');
    [].forEach.call(placeholders || [], (phElement) => {
        let key = phElement.getAttribute('data-target');

        if (key === 'validUntil') {
            phElement.textContent = new String(data[key].toLocaleString('en-GB'));
        } else if (key === 'hashTags') {
                phElement.textContent = data.hashTags.map(temp => '#' + temp).join(' ');
        } else if (key === 'photoLink' && data[key]) {
            phElement.setAttribute('src', String(data[key]));
        } else if (key === 'photoLink') {
            phElement.setAttribute('src', 'resources/images/no-pic.jpg');
        } else if (key === 'link') {
            phElement.setAttribute('href', String(data[key]));
        } else if (key === 'rating') {
            if (data.reviews.length == 0) {
                phElement.textContent = new String((0).toFixed(1)) + '/5.0';
            } else {
                phElement.textContent = new String((data[key] / data.reviews.length).toFixed(1)) + '/5.0';
            }
        } else if (key === 'discount') {
            phElement.textContent = new String(data[key]) + '%';
        } else{
            phElement.textContent = String(data[key])
        }

        if (data.reviews.length == 0) {
            item.firstElementChild.querySelector(".review-1").style.borderColor = 'white';
            item.firstElementChild.querySelector(".review-2").style.borderColor = 'white';
            item.firstElementChild.querySelector(".review-3").style.borderColor = 'white';
            item.firstElementChild.querySelector(".review-3").textContent = 'no reviews yet!';
            item.firstElementChild.querySelector(".review-3").style.textAlign = 'center';
            item.firstElementChild.querySelector(".review-3").style.fontSize = '100%';
            item.firstElementChild.querySelector(".review-3").style.color ='#9fb1fe';
            item.firstElementChild.querySelector(".review-4").style.borderColor = 'white';
            item.firstElementChild.querySelector(".review-5").style.borderColor = 'white';
        } else {
            sortByDate(data.reviews);
            if (data.reviews.length == 1) {
                item.firstElementChild.querySelector(".user-review-1").textContent = data.reviews[0].username;
                item.firstElementChild.querySelector(".review-text-1").textContent = getReviewText(data.reviews[0].reviewText);
                item.firstElementChild.querySelector(".review-2").style.borderColor = 'white';
                item.firstElementChild.querySelector(".review-3").style.borderColor = 'white';
                item.firstElementChild.querySelector(".review-4").style.borderColor = 'white';
                item.firstElementChild.querySelector(".review-5").style.borderColor = 'white';
            }

            if (data.reviews.length == 2) {
                item.firstElementChild.querySelector(".user-review-1").textContent = data.reviews[0].username;
                item.firstElementChild.querySelector(".review-text-1").textContent = getReviewText(data.reviews[0].reviewText);
                item.firstElementChild.querySelector(".user-review-2").textContent = data.reviews[1].username;
                item.firstElementChild.querySelector(".review-text-2").textContent = getReviewText(data.reviews[1].reviewText);
                item.firstElementChild.querySelector(".review-3").style.borderColor = 'white';
                item.firstElementChild.querySelector(".review-4").style.borderColor = 'white';
                item.firstElementChild.querySelector(".review-5").style.borderColor = 'white';
            }

            if (data.reviews.length == 3) {
                item.firstElementChild.querySelector(".user-review-1").textContent = data.reviews[0].username;
                item.firstElementChild.querySelector(".review-text-1").textContent = getReviewText(data.reviews[0].reviewText);
                item.firstElementChild.querySelector(".user-review-2").textContent = data.reviews[1].username;
                item.firstElementChild.querySelector(".review-text-2").textContent = getReviewText(data.reviews[1].reviewText);
                item.firstElementChild.querySelector(".user-review-3").textContent = data.reviews[2].username;
                item.firstElementChild.querySelector(".review-text-3").textContent = getReviewText(data.reviews[2].reviewText);
                item.firstElementChild.querySelector(".review-4").style.borderColor = 'white';
                item.firstElementChild.querySelector(".review-5").style.borderColor = 'white';
            }

            if (data.reviews.length == 4) {
                item.firstElementChild.querySelector(".user-review-1").textContent = data.reviews[0].username;
                item.firstElementChild.querySelector(".review-text-1").textContent = getReviewText(data.reviews[0].reviewText);
                item.firstElementChild.querySelector(".user-review-2").textContent = data.reviews[1].username;
                item.firstElementChild.querySelector(".review-text-2").textContent = getReviewText(data.reviews[1].reviewText);
                item.firstElementChild.querySelector(".user-review-3").textContent = data.reviews[2].username;
                item.firstElementChild.querySelector(".review-text-3").textContent = getReviewText(data.reviews[2].reviewText);
                item.firstElementChild.querySelector(".user-review-4").textContent = data.reviews[3].username;
                item.firstElementChild.querySelector(".review-text-4").textContent = getReviewText(data.reviews[3].reviewText);
                item.firstElementChild.querySelector(".review-5").style.borderColor = 'white';
            }

            if (data.reviews.length == 5) {
                item.firstElementChild.querySelector(".user-review-1").textContent = data.reviews[0].username;
                item.firstElementChild.querySelector(".review-text-1").textContent = getReviewText(data.reviews[0].reviewText);
                item.firstElementChild.querySelector(".user-review-2").textContent = data.reviews[1].username;
                item.firstElementChild.querySelector(".review-text-2").textContent = getReviewText(data.reviews[1].reviewText);
                item.firstElementChild.querySelector(".user-review-3").textContent = data.reviews[2].username;
                item.firstElementChild.querySelector(".review-text-3").textContent = getReviewText(data.reviews[2].reviewText);
                item.firstElementChild.querySelector(".user-review-4").textContent = data.reviews[3].username;
                item.firstElementChild.querySelector(".review-text-4").textContent = getReviewText(data.reviews[3].reviewText);
                item.firstElementChild.querySelector(".user-review-5").textContent = data.reviews[4].username;
                item.firstElementChild.querySelector(".review-text-5").textContent = getReviewText(data.reviews[4].reviewText);
            }

        }

        if (key === 'vendor' && String(data[key]) === user) {
            item.firstElementChild.querySelector(".leave-review").style.visibility="hidden";
            item.firstElementChild.querySelector(".edit-button").style.visibility="visible";
            item.firstElementChild.querySelector(".edit-button").setAttribute('data-ad-id', data.id);
            item.firstElementChild.querySelector(".delete-button").style.visibility="visible";
            item.firstElementChild.querySelector(".delete-button").setAttribute('data-ad-id', data.id);
        } else if (key === 'vendor' && String(data[key]) !== user) {
            item.firstElementChild.querySelector(".leave-review").style.visibility="visible";
            item.firstElementChild.querySelector(".leave-review").setAttribute('data-ad-id', data.id);
            item.firstElementChild.querySelector(".edit-button").style.visibility="hidden";
            item.firstElementChild.querySelector(".delete-button").style.visibility="hidden";
        }
        if(user === 'guest'){
            item.firstElementChild.querySelector(".edit-button").style.visibility="hidden";
            item.firstElementChild.querySelector(".leave-review").style.visibility="hidden";
            item.firstElementChild.querySelector(".delete-button").style.visibility="hidden";
        }

    });

    item.firstElementChild.setAttribute('id', data.id);
}

class View {
    user = 'guest';
    template = document.getElementById('template');
    container = document.getElementById('container');

    addItem(data, departure) {
        var newAd = document.importNode(this.template.content, true);
        fillItemData(newAd, data, this.user);
        if(departure === 'begin')
            this.container.prepend(newAd);
        if(departure === 'end')
            this.container.appendChild(newAd);
    }

    edit(id = '', data = {}) {
        var newAd = document.importNode(this.template.content, true);
        fillItemData(newAd, data, this.user);
        document.getElementById(id).replaceWith(newAd);
    }

    addAll(ads = []) {
        ads.forEach((adItem) => this.addItem(adItem))
    }

    delete(id = '') {
        document.getElementById(id).remove();
    }
}