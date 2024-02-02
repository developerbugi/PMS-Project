package db_connection;
import java.sql.*;

public class Connection_DB {
    private static Connection conn = null;

    public static Connection GetDB()
    {
        if (conn != null)
        {
            return conn;
        }

        try
        {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/pmt_table", "root", "as10048782");
            return conn;
        } catch (Exception e)
        {
            System.out.println("커넥션 획득 실패");
            System.out.println(e.getMessage());
        }
        return null;
    }
}
