package servlets;

import org.json.JSONObject;
import tweets.Tweet;
import tweets.TweetCollection;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class TweetServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String id = req.getParameter("id");
        Map<String, Object> tweet = TweetCollection.get(id);

        if (tweet == null) {
            resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
        } else {
            JSONObject jsonObject = new JSONObject(tweet);

            resp.setStatus(HttpServletResponse.SC_OK);
            resp.setContentType("application/json");
            resp.getOutputStream().print(jsonObject.toString());
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        List<JSONObject> responseList = new ArrayList<>();

        for (Tweet tweet : TweetCollection.tweets) {
            responseList.add(new JSONObject(tweet.toMap()));
        }

        resp.setStatus(HttpServletResponse.SC_OK);
        resp.setContentType("application/json");
        resp.getOutputStream().print(responseList.toString());
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        Map<String, Object> removedTweet = TweetCollection.remove(id);

        JSONObject jsonObject = new JSONObject(removedTweet);

        resp.setStatus(HttpServletResponse.SC_OK);
        resp.setContentType("application/json");
        resp.getOutputStream().print(jsonObject.toString());
    }
}
