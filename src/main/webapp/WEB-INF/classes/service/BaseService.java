package service;

import tweets.Tweet;

import java.util.List;
import java.util.Map;

public interface BaseService {
    public abstract Tweet add(Map<String, Object> tweetToAdd) throws ClassNotFoundException, IllegalAccessException;
    public abstract List<Map<String, Object>> addAll(List<Map<String, Object>> tweetsToAdd);
    public abstract Map<String, Object> remove(String tweetId);
    public abstract Map<String, Object> get(String tweetId);
    public abstract void clear();
    public abstract List<Tweet> getPage(int current, int step, Map<String, Object> filterConfig);
    public abstract Boolean editTweet(String tweetId, Map<String, Object> changes) throws NoSuchFieldException, ClassNotFoundException;
}
