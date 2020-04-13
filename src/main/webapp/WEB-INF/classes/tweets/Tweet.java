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
    public List<String> tags;
    public List<String> likes;

    public Tweet(String id, String description, String author, String photoLink, ArrayList<String> tags, ArrayList<String> likes) {
        this.id = id;
        this.description = description;
        this.createAt = LocalDateTime.now();
        this.author = author;
        this.photoLink = photoLink;
        this.tags = new ArrayList<>(tags);
        this.likes = new ArrayList<>(likes);
    }

    public Tweet(Map<String, Object> tweet) throws IllegalAccessException {
        super();
        Field[] fields = this.getClass().getDeclaredFields();

        for (Field field : fields) {
            field.set(this, tweet.get(field.getName()));
        }
    }

    public static Boolean isValid(Map<String, Object> rawTweet) {
        Field[] fields;
        try {
            fields = Class.forName("tweets.Tweet").getDeclaredFields();
        } catch (ClassNotFoundException e) {
            return false;
        }

        Set<String> keys = rawTweet.keySet();

        if (fields.length != keys.size()) {
            return false;
        }

        for (Field field : fields) {
            if (!keys.contains(field.getName())) {
                return false;
            }

            try {
                field.getType().cast(rawTweet.get(field.getName()));
            } catch (ClassCastException e) {
                return false;
            }
        }
        return true;
    }

    public Map<String, Object> toMap() {
        Map<String, Object> map = new HashMap<>();
        map.put("id", this.id);
        map.put("description", this.description);
        map.put("createAt", this.createAt);
        map.put("photoLink", this.photoLink);
        map.put("author", this.author);
        map.put("tags", this.tags);
        map.put("likes", this.likes);
        return map;
    }

}
