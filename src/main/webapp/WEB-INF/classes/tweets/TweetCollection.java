package tweets;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class TweetCollection {
    public static List<Tweet> tweets = new ArrayList<Tweet>(){
        {
            add(new Tweet("1", "A man from Australia has a snake. He feeds it a rat with tongs. " +
                    "This is dangerous for the snake." +
                    "Doctors operate on it and take out the tongs. The snake is getting better.",
                    "username", "photos/user-photo.jpg", new ArrayList<>(), new ArrayList<>()));

            add(new Tweet("2", "Hello students, there is a group on Facebook." +
                    "This group is for all students and teachers of English who use newsinlevels.com." +
                    "You can be in this group too.",
                    "dog_robbi", "photos/dog.jpg", new ArrayList<>(), new ArrayList<>()));

            add(new Tweet("3", "This year, there are the Olympics in Tokyo, Japan." +
                    "The coronavirus is in Japan. Japanese officials say that 100 people are ill." +
                    "They think that it is not a problem for the Olympics.",
                    "japan_fish", "photos/fish.jpg", new ArrayList<>(), new ArrayList<>()));

        }
    };

    public static Tweet add(Map<String, Object> tweetToAdd) throws ClassNotFoundException, IllegalAccessException {
        if(!Tweet.isValid(tweetToAdd)) {
            return null;
        }

        Tweet newTweet = new Tweet(tweetToAdd);

        if (tweets.stream().anyMatch(tweet -> tweet.id.equals(newTweet.id))){
            return null;
        }
        tweets.add(newTweet);

        return newTweet;
    }

    public static List<Map<String, Object>> addAll(List<Map<String, Object>> tweetsToAdd){
        List<Map<String, Object>> addedTweets = new ArrayList<>();

        tweetsToAdd.forEach(tweet -> {
                if(Tweet.isValid(tweet)){
                    try {
                        Tweet addedTweet = TweetCollection.add(tweet);
                        if (addedTweet != null) {
                            addedTweets.add(addedTweet.toMap());
                        }
                    } catch (ClassNotFoundException | IllegalAccessException e) {
                        e.printStackTrace();
                    }
                }
        });
        return addedTweets;
    }

    public static Map<String, Object> remove(String tweetId){
        List<Tweet> elementsToRemove = tweets.stream().filter(tweet -> tweet.id.equals(tweetId)).collect(Collectors.toList());
        tweets.removeAll(elementsToRemove);
        if (elementsToRemove.size() > 0){
            return elementsToRemove.get(0).toMap();
        } else {
            return null;
        }
    }

    public static Map<String, Object> get(String tweetId){
        for(Tweet tweet : tweets){
            if(tweet.id.equals(tweetId))
                return tweet.toMap();
        }
        return null;
    }

    public static void clear(){
        tweets.clear();
    }

}
