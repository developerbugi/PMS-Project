package db.dao;

import db.connection.Connection_DB;

import java.sql.*;

public class insertDAO {
    public String insertMember(String com_id, String name_kor, String name_eng,
                               String address,String emp_type, String emp_hiredate,
                               String emp_tmndate, String mob_num, String resign_reason,
                               String rrn, String emp_email, String military,
                               String final_edu, String major, String annual_leave,
                               String sick_leave,String dep_id, String rank_id, String etc) {
        //사번 중복체크 하기 위한 SQL
        String SQL1 = "select * from employees where com_id = ?";

        //사원 추가 SQL
        String SQL2 = "insert into employees values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

        /*
        String year = String.valueOf(java.time.Year.now().getValue()).substring(2);
        String uniqueNumber = UUID.randomUUID().toString().substring(0, 4);
        String new_id = year + uniqueNumber;
        */

        try {
            Connection conn = Connection_DB.GetDB();
            PreparedStatement ptstn = conn.prepareStatement(SQL1);


            ptstn.setString(1, com_id);
            ResultSet rs = ptstn.executeQuery();

            if(rs.next()) {
                ptstn.close();
                return "사번 중복";
            }

            else {
                try {
                    ptstn.close();
                    PreparedStatement ptstm = conn.prepareStatement(SQL2);

                    ptstm.setString(1, com_id);
                    ptstm.setString(2, name_kor);
                    ptstm.setString(3, name_eng);
                    ptstm.setString(4, address);
                    ptstm.setString(5, emp_type);
                    ptstm.setDate(6, Date.valueOf(emp_hiredate));
                    ptstm.setDate(7, null);
                    ptstm.setString(8, mob_num);
                    ptstm.setString(9, null);
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
                    ptstm.close();

                    return "추가성공";
                }catch (Exception e){
                    System.out.println(e.getMessage());
                    return "삽입실패";
                }
            }
        }catch(Exception e) {
            System.out.println(e.getMessage());
            return "검색실패";
        }
    }
}
