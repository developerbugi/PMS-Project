package db.dao;

import db.connection.Connection_DB;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.Statement;

public class updateDAO {
    public String exitMember(String com_id, String emp_tmndate, String resign_reason) {
        String SQL1 = "update employees set emp_tmndate = ?, resign_reason = ? where com_id = ?";


        try{
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

        }catch (Exception e){
            System.out.println(e.getMessage());
            return "퇴사 업데이트 실패";
        }
    }
}
