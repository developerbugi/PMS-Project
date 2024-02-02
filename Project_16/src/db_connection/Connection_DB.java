package db_connection;
import java.sql.*;

public class Connection_DB {
    private static Connection conn = null;

    public static Connection GetDB()
    {

        String url = "DB URL 주소 ";
        String user = "본인 MY SQL 이름";
        String password = "본인 비밀번호";

        if (conn != null)
        {
            return conn;
        }

        try
        {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn =  DriverManager.getConnection(url, user, password);
            return conn;
        } catch (Exception e)
        {
            System.out.println("커넥션 획득 실패");
            System.out.println(e.getMessage());
        }
        return null;
    }
}
