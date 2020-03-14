<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Java Web Application</title>
  </head>
  <body>
  <% String name = request.getParameter("name"); %>
  <% if(name==null){ %>
    Java Web Application
  <% }else{ %>
    Name is ${name}
  <%} %>
  </body>
</html>
