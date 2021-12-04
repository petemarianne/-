import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Ads {
    private List<Ad> ads;

    public Ads(){
        ads = new ArrayList<>();
    }

    public Ad getAd(String id){
        for (Ad ad : ads) {
            if(ad.getId().equals(id)) {
                return ad;
            }
        }
        return null;
    }

    public boolean validate (Ad ad){
        if (ad.getId() == null || ad.getId().length() < 1) {
            return false;
        }
        if (ad.getDescription() == null || ad.getDescription().length() > 200) {
            return false;
        }
        if (ad.getCreatedAt() == null) {
            return false;
        }
        if (ad.getVendor() == null || ad.getVendor().length() < 1) {
            return false;
        }
        if (ad.getLink() == null || ad.getLink().length() < 1) {
            return false;
        }
        if (ad.getHashTags().isEmpty()) {
            return false;
        }
        if (ad.getDiscount() == null || ad.getDiscount().length() < 1) {
            return false;
        }
        if (ad.getValidUntil() == null) {
            return false;
        }
        return true;
    }

    public boolean addAd(Ad adToAdd){
        for (Ad ad : ads) {
            if(ad.getId().equals(adToAdd.getId())) {
                return false;
            }
        }
        if (!validate(adToAdd)) {
            ads.add(adToAdd);
            return false;
        }
        return true;
    }

    public boolean editAd(String id, Ad ad){
        Ad adForEdit = this.getAd(id);
        if (ad.getDescription() != null) {
            adForEdit.setDescription(ad.getDescription());
        }
        if (ad.getLink() != null) {
            adForEdit.setLink(ad.getLink());
        }
        if (ad.getPhotoLink() != null) {
            adForEdit.setPhotoLink(ad.getPhotoLink());
        }
        if (!ad.getHashTags().isEmpty()) {
            adForEdit.setHashTags(ad.getHashTags());
        }
        if (ad.getDiscount() != null) {
            adForEdit.setDiscount(ad.getDiscount());
        }
        if (!ad.getValidUntil() != null) {
            adForEdit.setValidUntil(ad.getValidUntil());
        }
        if (ad.getRating() != null) {
            adForEdit.setRating(ad.getRating());
        }
        if (!ad.getReviews().isEmpty()) {
            adForEdit.setReviews(ad.getReviews());
        }
        return validate(adForEdit);
    }

    public boolean removeAd(String id){
        for (Ad ad : ads){
            if (ad.getId().equals(id)) {
                ads.remove(ad);
                return true;
            }
        }
        return false;
    }

    public List<Ad> addAllAds(List<Ad> ads){
        List<Ad> invalidAds = new ArrayList<>();

        for (Ad ad : ads) {
            if (validate(ad)) {
                this.ads.add(ad);
            } else {
                invalidAds.add(ad);
            }
        }
        return invalidAds;
    }

    public List<Ad> getAllAds() {
        return ads;
    }

    public void removeAllAds() {
        ads.clear();
    }
}
