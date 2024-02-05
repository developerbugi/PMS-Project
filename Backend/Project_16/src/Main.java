import db_connection.dao.selectDAO;

public class Main {
    public static void main(String[] args) {
        selectDAO td = new selectDAO();
        String result = td.SearchEmployee("0987654321");
        System.out.println(result);
    }
}