import com.google.gson.Gson;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.stream.Collectors;

@WebServlet("/ads/*")
public class Servlets extends HttpServlet {
    private static Ads ads = new Ads();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        String id = request.getParameter("id");
        response.setContentType("application/json");
        response.getWriter().print((new Gson()).toJson(ads.getAd(id)));
    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        String id = request.getParameter("id");
        response.setContentType("application/json");
        response.getWriter().print((new Gson()).toJson(ads.removeAd(id)));
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("application/json");
        String[] url = request.getRequestURI().split("/");
        if (url.length == 3 && url[2].equals("search")) {
            Gson gson = new Gson();
            response.getWriter().print(ads.getAllAds().stream().map(gson::toJson).collect(Collectors.joining("\n")));
        }
    }

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("application/json");
        String[] url = request.getRequestURI().split("/");
        if(url[2].equals("add")){
            response.getWriter().print((new Gson()).toJson(ads.addAd((new Gson()).fromJson(request.getReader().readLine(), Ad.class))));
        }
        if (url[2].equals("edit")){
            response.getWriter().print((new Gson()).toJson(ads.editAd(request.getParameter("id"), (new Gson()).fromJson(request.getReader().readLine(), Ad.class))));
        }
    }


}
