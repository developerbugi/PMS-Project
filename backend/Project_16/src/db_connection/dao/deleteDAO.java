package db_connection.dao;

import db_connection.Connection_DB;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class deleteDAO {
    public String deleteEmployee(String com_id) {
        String SQL1 = "delete from employees where com_id = ?";

        try {
            Connection conn = Connection_DB.GetDB();
            PreparedStatement ptstn = conn.prepareStatement(SQL1);
            ptstn.setString(1, com_id);
            ptstn.executeUpdate();
            ptstn.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return "삭제 오류";
        }
        return "삭제 성공";
    }
}
