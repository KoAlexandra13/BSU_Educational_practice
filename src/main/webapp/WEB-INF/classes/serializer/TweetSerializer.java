package serializer;

import tweets.Tweet;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class TweetSerializer implements Serializer {
    Map<String, Object> map;
    boolean isValidCalled = false;

    public TweetSerializer(Tweet tweet){
        map = new HashMap<>();
        map.put("id", tweet.id);
        map.put("description", tweet.description);
        map.put("createAt", tweet.createAt);
        map.put("photoLink", tweet.photoLink);
        map.put("author", tweet.author);
        map.put("tags", tweet.tags);
        map.put("likes", tweet.likes);
    }

    public TweetSerializer(Map<String, Object> map){
        this.map = map;
    }

    @Override
    public Tweet asObj(){
        Tweet tweet;
        try {
            tweet = new Tweet(this.map);
        } catch (IllegalAccessException e){
            tweet = null;
        }
        return tweet;
    }

    @Override
    public Map<String, Object> asMap() {
        return this.map;
    }

    @Override
    public boolean isValid() {
        isValidCalled = true;
        Field[] fields;
        try {
            fields = Class.forName("tweets.Tweet").getDeclaredFields();
        } catch (ClassNotFoundException e) {
            return false;
        }

        Set<String> keys = this.map.keySet();

        if (fields.length != keys.size()) {
            return false;
        }

        for (Field field : fields) {
            if (!keys.contains(field.getName())) {
                return false;
            }

            try {
                field.getType().cast(this.map.get(field.getName()));
            } catch (ClassCastException e) {
                return false;
            }
        }
        return true;
    }
}
