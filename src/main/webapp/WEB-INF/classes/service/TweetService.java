package service;

import serializer.TweetSerializer;
import tweets.Tweet;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class TweetService implements BaseService{

    public List<Tweet> tweets = new ArrayList<Tweet>() {
        {
            add(new Tweet("1", "A man from Australia has a snake. He feeds it a rat with tongs. " +
                    "This is dangerous for the snake." +
                    "Doctors operate on it and take out the tongs. The snake is getting better.",
                    "username", "photos/user-photo.jpg", new ArrayList<String>(){{add("#snake");}},
                    new ArrayList<>()));

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

    private List<Tweet> filter(Map<String, Object> filterConfig){
        List<Tweet> filterTweets = new ArrayList<>(tweets);
        filterTweets = filterTweets.stream().
                filter(tweet -> {
                    try {
                        return tweet.match(filterConfig);
                    } catch (NoSuchFieldException | ClassNotFoundException e) {
                        e.printStackTrace();
                    }
                    return false;
                }).
                collect(Collectors.toList());
        return filterTweets;
    }

    public Tweet add(Map<String, Object> tweetToAdd) throws ClassNotFoundException, IllegalAccessException {
        if (!new TweetSerializer(tweetToAdd).isValid()) {
            return null;
        }

        Tweet newTweet = new Tweet(tweetToAdd);

        if (tweets.stream().anyMatch(tweet -> tweet.id.equals(newTweet.id))) {
            return null;
        }
        tweets.add(newTweet);

        return newTweet;
    }

    public List<Map<String, Object>> addAll(List<Map<String, Object>> tweetsToAdd) {
        List<Map<String, Object>> addedTweets = new ArrayList<>();

        tweetsToAdd.forEach(tweet -> {
            if (new TweetSerializer(tweet).isValid()) {
                try {
                    Tweet addedTweet = this.add(tweet);
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

    public Map<String, Object> remove(String tweetId) {
        List<Tweet> elementsToRemove = tweets.stream().filter(tweet -> tweet.id.equals(tweetId)).collect(Collectors.toList());
        tweets.removeAll(elementsToRemove);
        if (elementsToRemove.size() > 0) {
            return elementsToRemove.get(0).toMap();
        } else {
            return null;
        }
    }

    public Map<String, Object> get(String tweetId) {
        for (Tweet tweet : tweets) {
            if (tweet.id.equals(tweetId))
                return tweet.toMap();
        }
        return null;
    }

    public void clear() {
        tweets.clear();
    }

    public List<Tweet> getPage(int current, int step, Map<String, Object> filterConfig){
        List<Tweet> filterTweets;
        if(filterConfig.isEmpty()){
            filterTweets = this.tweets;
        }
        else {
            filterTweets = filter(filterConfig);
        }
        int postCount = 0;
        List<Tweet> tweetsToReturn = filter(filterConfig);
        while(step != postCount && filterTweets.size() < current){
            tweetsToReturn.add(filterTweets.get(current));
            current++;
            postCount++;
        }
        return tweetsToReturn;
    }

    public Boolean editTweet(String tweetId, Map<String, Object> changes) throws NoSuchFieldException, ClassNotFoundException {
        for (Tweet tweet : tweets) {
            if (tweet.id.equals(tweetId)){
                Tweet changedTweet = tweet.change(changes);
                if(new TweetSerializer(changedTweet).isValid()){
                    remove(tweetId);
                    tweets.add(changedTweet);
                    return true;
                }
            }
        }
        return false;
    }

}
