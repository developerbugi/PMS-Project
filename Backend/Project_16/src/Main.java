import db_connection.dao.deleteDAO;





public class Main {
    public static void main(String[] args) {
        deleteDAO td3 = new deleteDAO();

        System.out.println(td3.deleteEmployee("1234567890"));
    }
}