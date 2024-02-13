package db.dao;

import db.connection.Connection_DB;

import java.sql.*;

public class updateDAO {
    public String exitEmployee(String com_id, String emp_tmndate, String resign_reason) {
        String SQL1 = "update employees set emp_tmndate = ?, resign_reason = ? where com_id = ?";


        try {
            Connection conn = Connection_DB.GetDB();
            PreparedStatement ptstn = conn.prepareStatement(SQL1);


            ptstn.setDate(1, Date.valueOf(emp_tmndate));
            ptstn.setString(2, resign_reason);
            ptstn.setString(3, com_id);
            ptstn.executeUpdate();

            Statement state = conn.createStatement();

            state.close();
            ptstn.close();

            return "퇴사 업데이트 성공";

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return "퇴사 업데이트 실패";
        }
    }

    //회원 수정 로직 작성
    public String editEmployee(String com_id, String name_kor, String name_eng,
                               String address, String emp_type, String mob_num,
                               String emp_email, String military, String final_edu,
                               String major, String dep_name, String rank_name, String etc) {

        String SQL1 = "SELECT annual_leave, sick_leave, emp_tmndate, resign_reason, emp_hiredate, rrn FROM employees WHERE com_id = ?";

        String SQL2 = "SELECT dep_id FROM Department WHERE dep_name = ?";

        String SQL3 = "SELECT rank_id FROM Role WHERE rank_name = ?";

        String SQL4 = "UPDATE employees SET name_kor = ?, name_eng = ?, address = ?, emp_type = ?, " +
                "emp_hiredate = ?, emp_tmndate = ?, mob_num = ?, resign_reason = ?, rrn = ?, " +
                "emp_email = ?, military = ?, final_edu = ?, major = ?, annual_leave = ?, " +
                "sick_leave = ?, dep_id = ?, rank_id = ?, etc = ? WHERE com_id = ?";

        try {
            Connection conn = Connection_DB.GetDB();

            PreparedStatement ptstn = conn.prepareStatement(SQL1);
            ptstn.setString(1, com_id);
            ResultSet rs = ptstn.executeQuery();
            rs.next();
            String annual_leave = rs.getString("annual_leave");
            String sick_leave = rs.getString("sick_leave");
            String emp_tmndate = rs.getString("emp_tmndate");
            String resign_reason = rs.getString("resign_reason");
            String emp_hiredate = rs.getString("emp_hiredate");
            String rrn = rs.getString("rrn");

            PreparedStatement ptstn1 = conn.prepareStatement(SQL2);
            ptstn1.setString(1, dep_name);
            ResultSet rs1 = ptstn1.executeQuery();
            rs1.next();
            String dep_id = rs1.getString("dep_id");

            PreparedStatement ptstn2 = conn.prepareStatement(SQL3);
            ptstn2.setString(1, rank_name);
            ResultSet rs2 = ptstn2.executeQuery();
            rs2.next();
            String rank_id = rs2.getString("rank_id");


            PreparedStatement ptstm = conn.prepareStatement(SQL4);
            ptstm.setString(1, name_kor);
            ptstm.setString(2, name_eng);
            ptstm.setString(3, address);
            ptstm.setString(4, emp_type);
            ptstm.setDate(5, Date.valueOf(emp_hiredate));
            if(emp_tmndate != null && !emp_tmndate.isEmpty()) {
                ptstm.setDate(6, Date.valueOf(emp_tmndate));
            } else {
                ptstm.setNull(6, java.sql.Types.DATE);
            }
            ptstm.setString(7, mob_num);
            ptstm.setString(8, resign_reason);
            ptstm.setString(9, rrn);
            ptstm.setString(10, emp_email);
            ptstm.setString(11, military);
            ptstm.setString(12, final_edu);
            ptstm.setString(13, major);
            ptstm.setString(14, annual_leave);
            ptstm.setString(15, sick_leave);
            ptstm.setString(16, dep_id);
            ptstm.setString(17, rank_id);
            ptstm.setString(18, etc);
            ptstm.setString(19, com_id);
            ptstm.executeUpdate();

            Statement state = conn.createStatement();

            state.close();
            ptstn.close();

            return "수정성공";
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return "수정실패";
        }
    }
}
