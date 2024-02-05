
import db_connection.dao.updateDAO;


public class Main {
    public static void main(String[] args) {
        updateDAO td = new updateDAO();
        System.out.println(td.exitMember("9876543210","2024-02-05","이직"));
    }
}