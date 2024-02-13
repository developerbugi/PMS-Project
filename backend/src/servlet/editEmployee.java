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

@WebServlet("/api/edit")
public class editEmployee extends HttpServlet {
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
        String name_kor = employeeData.getName_kor();
        String name_eng = employeeData.getName_eng();
        String address = employeeData.getAddress();
        String emp_type = employeeData.getEmp_type();
        String mob_num = employeeData.getMob_num();
        String emp_email = employeeData.getEmp_email();
        String military = employeeData.getMilitary();
        String final_edu = employeeData.getFinal_edu();
        String major = employeeData.getMajor();
        String dep_id = employeeData.getDep_id();
        String rank_id = employeeData.getRank_id();
        String etc = employeeData.getEtc();

        updateDAO td = new updateDAO();
        String result = td.editEmployee(com_id,name_kor,name_eng,address,emp_type,mob_num,
                emp_email, military, final_edu, major, dep_id, rank_id, etc);

        if(result.equals("수정성공")){
            response.setContentType("text/plain;charset=UTF-8");
            response.getWriter().write("사원 정보 수정이 정상적으로 완료되었습니다.");
        }else{
            response.setContentType("text/plain;charset=UTF-8");
            response.getWriter().write("사원 정보 수정에 실패하였습니다.");
        }

    }
}
