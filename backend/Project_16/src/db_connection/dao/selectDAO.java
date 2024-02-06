package db_connection.dao;
import db_connection.Connection_DB;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class selectDAO {
    String employees_info = "";
    public String SearchEmployees() {
        String SQL1 = "select * from employees";

        try {
            Connection conn = Connection_DB.GetDB();
            PreparedStatement ptstn = conn.prepareStatement(SQL1);
            ResultSet rs = ptstn.executeQuery();

            //데이터 어떤 형식으로 넘길지 상의 후 넘겨주기
            while (rs.next()) {
                employees_info += rs.getString(1) + "," + rs.getString(2) + "," + rs.getString(3)
                        + "," + rs.getString(4) + "," + rs.getString(5) + "," + rs.getString(6)
                        + "," + rs.getString(7) + "," + rs.getString(8) + "," + rs.getString(9)
                        + "," + rs.getString(10) + "," + rs.getString(11) + "," + rs.getString(12)
                        + "," + rs.getString(13) + "," + rs.getString(14) + "," + rs.getString(15)
                        + "," + rs.getString(16) + "," + rs.getString(17) + "," + rs.getString(18);
                employees_info += "/\n";
            }

            ptstn.close();

            return employees_info;

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return "검색실패";
        }
    }

    public String SearchEmployeeBYID(String com_id) {
        String SQL1 = "select * from employees where com_id = ?";

        try {
            Connection conn = Connection_DB.GetDB();
            PreparedStatement ptstn = conn.prepareStatement(SQL1);
            ptstn.setString(1,com_id);
            ResultSet rs = ptstn.executeQuery();

            // 데이터 어떤 형식으로 넘길지 상의 후 넘겨주기
            while (rs.next()) {
                employees_info += rs.getString(1) + "," + rs.getString(2) + "," + rs.getString(3)
                        + "," + rs.getString(4) + "," + rs.getString(5) + "," + rs.getString(6)
                        + "," + rs.getString(7) + "," + rs.getString(8) + "," + rs.getString(9)
                        + "," + rs.getString(10) + "," + rs.getString(11) + "," + rs.getString(12)
                        + "," + rs.getString(13) + "," + rs.getString(14) + "," + rs.getString(15)
                        + "," + rs.getString(16)+ "," + rs.getString(17) + "," + rs.getString(18);
                employees_info += "/\n";
            }

            ptstn.close();

            return employees_info;

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return "검색실패";
        }
    }

    /* 이름으로 사원 조회
    출력 -> 사번, 이름, 부서, 직급
    */
    public String SearchEmployeeBYName(String name_kor) {
        String SQL1 = "select * from employees where name_kor = ?";

        try {
            Connection conn = Connection_DB.GetDB();
            PreparedStatement ptstn = conn.prepareStatement(SQL1);
            ptstn.setString(1, name_kor);
            ResultSet rs = ptstn.executeQuery();

            // 데이터 어떤 형식으로 넘길지 상의 후 넘겨주기
            while (rs.next()) {
                employees_info += rs.getString(1) + "," + rs.getString(2)
                        + "," + rs.getString(17) + "," + rs.getString(18);
                employees_info += "/\n";
            }

            ptstn.close();

            return employees_info;

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return "검색실패";
        }
    }

}
