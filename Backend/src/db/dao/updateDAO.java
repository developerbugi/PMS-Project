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
                               String address, String emp_type, String emp_hiredate,
                               String emp_tmndate, String mob_num, String resign_reason,
                               String rrn, String emp_email, String military,
                               String final_edu, String major, String dep_id, String rank_id, String etc) {

        String SQL1 = "SELECT annual_leave, sick_leave FROM employees WHERE com_id = ?";

        String SQL2 = "UPDATE employees SET name_kor = ?, name_eng = ?, address = ?, emp_type = ?, " +
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

            PreparedStatement ptstm = conn.prepareStatement(SQL2);
            ptstm.setString(1, com_id);
            ptstm.setString(2, name_kor);
            ptstm.setString(3, name_eng);
            ptstm.setString(4, address);
            ptstm.setDate(6, Date.valueOf(emp_hiredate));
            ptstm.setDate(7, Date.valueOf(emp_tmndate));
            ptstm.setString(8, mob_num);
            ptstm.setString(9, resign_reason);
            ptstm.setString(10, rrn);
            ptstm.setString(11, emp_email);
            ptstm.setString(12, military);
            ptstm.setString(13, final_edu);
            ptstm.setString(14, major);
            ptstm.setString(15, annual_leave);
            ptstm.setString(16, sick_leave);
            ptstm.setString(17, dep_id);
            ptstm.setString(18, rank_id);
            ptstm.setString(19, etc);
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
