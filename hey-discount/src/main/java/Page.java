import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/page")
public class Page extends HttpServlet {
    private static final String STARTING_PAGE_ADDRESS = "/WEB-INF/page.html";
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        request.getRequestDispatcher(STARTING_PAGE_ADDRESS).forward(request, response);
    }
}
