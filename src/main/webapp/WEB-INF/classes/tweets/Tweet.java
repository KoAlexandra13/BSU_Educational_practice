package tweets;

import java.lang.reflect.Field;
import java.time.LocalDateTime;
import java.util.*;

public class Tweet {
    public String id;
    public String description;
    public LocalDateTime createAt;
    public String author;
    public String photoLink;
    public ArrayList<String> tags;
    public List<String> likes;

    public Tweet(String id, String description, String author, String photoLink, ArrayList<String> tags,
                 ArrayList<String> likes) {
        this.id = id;
        this.description = description;
        this.createAt = LocalDateTime.now();
        this.author = author;
        this.photoLink = photoLink;
        this.tags = new ArrayList<>(tags);
        this.likes = new ArrayList<>(likes);
    }

    public Tweet(Tweet tweet){
        this.id = tweet.id;
        this.description = tweet.description;
        this.createAt = tweet.createAt;
        this.author = tweet.author;
        this.photoLink = tweet.photoLink;
        this.tags = new ArrayList<>(tweet.tags);
        this.likes = new ArrayList<>(tweet.likes);
    }

    public Tweet(Map<String, Object> tweet) throws IllegalAccessException {
        super();
        Field[] fields = this.getClass().getDeclaredFields();

        for (Field field : fields) {
            field.set(this, tweet.get(field.getName()));
        }
    }

    public Boolean match(Map<String, Object> filterConfig) throws NoSuchFieldException, ClassNotFoundException {
        Set<String> keys = filterConfig.keySet();
        for (String key : keys) {
            if (getClass().getField(key).getType() == Class.forName("java.lang.String")) {
                if (!filterConfig.get(key).equals(this.author)){
                    return false;
                }
            }
            if (getClass().getField(key).getType() == Class.forName("java.time.LocalDateTime")) {
                if (!filterConfig.get(key).equals(this.createAt)){
                    return false;
                }
            }
            if (getClass().getField(key).getType() == Class.forName("java.util.List")) {
                List elements = (List)filterConfig.get(key);
                if(key.equals("tags")) {
                    if (this.tags.stream().noneMatch(elements::contains)) {
                        return false;
                    }
                }else if(key.equals("likes")){
                    if (this.likes.stream().noneMatch(elements::contains)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    public Tweet change(Map<String, Object> changes) throws NoSuchFieldException, ClassNotFoundException {
        Set<String> keys = changes.keySet();
        Tweet changedTweet = new Tweet(this);
        for (String key : keys) {
            if(!(key.equals("author") || key.equals("id") || key.equals("createAt"))) {
                if (getClass().getField(key).getType() == Class.forName("java.lang.String")) {
                    if (key.equals("description")) {
                        changedTweet.description = changes.get(key).toString();
                    }
                }
                if (getClass().getField(key).getType() == Class.forName("java.lang.String")) {
                    if (key.equals("photoLink")) {
                        changedTweet.photoLink = changes.get(key).toString();
                    }
                }
                if (getClass().getField(key).getType() == Class.forName("java.util.List")) {
                    if (key.equals("tags")) {
                        changedTweet.tags = new ArrayList<>((List)changes.get(key));
                    }
                }
            }
        }
        return changedTweet;
    }

}
