import java.util.ArrayList;
import java.util.Date;
import java.util.List;

class Review {
    private String username;
    private Date date;
    private String reviewText;

    public Review() {
        username = "";
        date = new Date();
        reviewText = "";
    }

    public Review(String username, Date date, String reviewText) {
        this.username = username;
        this.date = date;
        this.reviewText = reviewText;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public String getUsername() {
        return username;
    }

    public Date getDate() {
        return date;
    }

    public String getReviewText() {
        return reviewText;
    }
}

public class Ad {
    private String id;
    private String description;
    private Date createdAt;
    private String link;
    private String vendor;
    private String photoLink;
    private List<String> hashTags;
    private String discount;
    private Date validUntil;
    private Integer rating;
    private List<Review> reviews;

    public Ad() {
        id = "";
        description = "";
        createdAt = new Date();
        link = "";
        vendor = "";
        photoLink = "";
        hashTags = new ArrayList<>();
        discount = "";
        validUntil = new Date();
        rating = 0;
        reviews = new ArrayList<>();
    }

    public Ad(String id, String description, Date createdAt, String link, String vendor, String photoLink, List<String> hashTags,
              String discount, Date validUntil, Integer rating, List<Review> reviews) {
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.link = link;
        this.vendor = vendor;
        this.photoLink = photoLink;
        this.hashTags = new ArrayList<>(hashTags);
        this.discount = discount;
        this.validUntil = validUntil;
        this.rating = rating;
        this.reviews = new ArrayList<>(reviews);
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public void setHashTags(List<String> hashTags) {
        this.hashTags = hashTags;
    }

    public void setDiscount(String discount) {
        this.discount = discount;
    }

    public void setValidUntil(Date validUntil) {
        this.validUntil = validUntil;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public String getLink() {
        return link;
    }

    public String getVendor() {
        return vendor;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public List<String> getHashTags() {
        return hashTags;
    }

    public String getDiscount() {
        return discount;
    }

    public Date getValidUntil() {
        return validUntil;
    }

    public Integer getRating() {
        return rating;
    }

    public List<Review> getReviews() {
        return reviews;
    }

}
