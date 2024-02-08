package servlet;

import com.google.gson.Gson;
import db.dao.selectDAO;
import db.dto.EmployeeData;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;


@WebServlet("/api/employees/ByName")
public class researchEmployeeByName extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        StringBuilder sb = new StringBuilder();
        BufferedReader reader = request.getReader();
        String str;
        while ((str = reader.readLine()) != null) {
            sb.append(str);
        }
        String jsonData = sb.toString();

        // Gson 라이브러리를 이용하여 JSON 문자열을 Java 객체로 변환
        Gson gson = new Gson();
        EmployeeData employeeData = gson.fromJson(jsonData, EmployeeData.class);

        String name_kor = employeeData.getName_kor();

        selectDAO td = new selectDAO();
        String result = td.SearchEmployeeBYName(name_kor);

        if (result.equals("검색실패")){
            response.setContentType("text/plain;charset=UTF-8");
            response.getWriter().write("해당 이름에 맞는 사원이 존재하지 않습니다.");
        }else{
            response.setContentType("application/json;charset=UTF-8");
            PrintWriter out = response.getWriter();
            out.println(result);
        }
    }
}
