package servlet;

import com.google.gson.Gson;
import db.dao.updateDAO;
import db.dto.EmployeeData;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

@WebServlet("/api/exit")
public class exitEmployee extends HttpServlet {
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

        String com_id = employeeData.getCom_id();
        String emp_tmndate = employeeData.getEmp_tmndate();
        String resign_reason = employeeData.getResign_reason();

        updateDAO td = new updateDAO();
        String result = td.exitMember(com_id, emp_tmndate, resign_reason);

        // 응답 처리
        if(result.equals("퇴사 업데이트 성공")){
            response.setContentType("text/plain;charset=UTF-8");
            response.getWriter().write("정상적으로 퇴사처리 되었습니다.");
        }else{
            response.setContentType("text/plain;charset=UTF-8");
            response.getWriter().write("퇴사 처리에 실패하였습니다.");
        }
    }
}
