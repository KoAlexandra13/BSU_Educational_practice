package servlets;

import org.apache.commons.io.IOUtils;
import org.json.JSONObject;
import service.BaseService;
import service.TweetService;
import tweets.Tweet;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;


public class TweetServlet extends HttpServlet {
    private BaseService service;
    public void init(ServletConfig config) throws ServletException {
        this.service = new TweetService();
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String id = req.getParameter("id");
        Map<String, Object> tweet = this.service.get(id);

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
        String text = IOUtils.toString(req.getInputStream(), StandardCharsets.UTF_8);
        if(text.isEmpty()){
            text = "{}";
        }
        JSONObject jsonObject = new JSONObject(text);
        Map<String, Object> config = jsonObject.toMap();

        List<Tweet> tweets = this.service.getPage(0,10, config);

        for (Tweet tweet : tweets) {
            responseList.add(new JSONObject(tweet.toMap()));
        }

        resp.setStatus(HttpServletResponse.SC_OK);
        resp.setContentType("application/json");
        resp.getOutputStream().print(responseList.toString());
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        Map<String, Object> removedTweet = this.service.remove(id);

        JSONObject jsonObject = new JSONObject(removedTweet);

        resp.setStatus(HttpServletResponse.SC_OK);
        resp.setContentType("application/json");
        resp.getOutputStream().print(jsonObject.toString());
    }
}
