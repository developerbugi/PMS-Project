package servlet;

import com.google.gson.Gson;
import db.dao.insertDAO;
import db.dto.EmployeeData;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

@WebServlet("/api/join")
public class createEmployee extends HttpServlet {

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
        String emp_hiredate = employeeData.getEmp_hiredate();
        String mob_num = employeeData.getMob_num();
        String rrn = employeeData.getRrn();
        String emp_email = employeeData.getEmp_email();
        String military = employeeData.getMilitary();
        String final_edu = employeeData.getFinal_edu();
        String major = employeeData.getMajor();
        String dep_id = employeeData.getDep_id();
        String rank_id = employeeData.getRank_id();
        String etc = employeeData.getEtc();



        // 추출한 데이터를 활용하여 원하는 로직 수행
        insertDAO td = new insertDAO();

        String result = td.insertMember(com_id,name_kor,name_eng,
                address,emp_type,emp_hiredate,
                "",mob_num,"",
                rrn,emp_email,military,
                final_edu,major, "12",
                "12",dep_id, rank_id,etc);

        // 응답 처리
        if (result.equals("추가성공")){
            response.setContentType("text/plain;charset=UTF-8");
            response.getWriter().write("사원이 정상적으로 추가되었습니다.");
        }else if (result.equals("사번중복")){
            response.setContentType("text/plain;charset=UTF-8");
            response.getWriter().write("사번 중복으로 인해 등록에 실패하였습니다.");
        }else {
            response.setContentType("text/plain;charset=UTF-8");
            response.getWriter().write("사원 등록에 실패하였습니다.");
        }
    }
}
