package service;

import tweets.Tweet;

import java.util.List;
import java.util.Map;

public interface BaseService {
   Tweet add(Tweet tweetToAdd) throws ClassNotFoundException, IllegalAccessException;
   Tweet remove(String tweetId);
   Tweet get(String tweetId);
   List<Tweet> getPage(int current, int step, Map<String, Object> filterConfig);
   boolean editTweet(String tweetId, Map<String, Object> changes) throws NoSuchFieldException, ClassNotFoundException;
}
