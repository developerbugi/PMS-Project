package db_connection;
import java.sql.*;

public class Test_DB1 {
    public String enter_Member()
    {
        String SQL = "insert into employess values(?,?,?,?)";


        try {
            Connection conn = Connection_DB.GetDB();
            PreparedStatement ptstm = conn.prepareStatement(SQL);

            ptstm.setInt(1, 1000);
            ptstm.setString(2, "정부길");
            ptstm.setString(3, "IT기획");
            ptstm.setString(4, "사원");

            ptstm.executeUpdate();

            Statement state = conn.createStatement();
            state.close();

            return "성공";


        }catch (Exception e) {
            System.out.println("에러 :" + e.getMessage());
            return "실패";
        }
    }
}
