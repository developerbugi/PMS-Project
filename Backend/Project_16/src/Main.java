import db_connection.dao.insertDAO;
import db_connection.dao.selectDAO;



public class Main {
    public static void main(String[] args) {
        insertDAO td2 = new insertDAO();

        String result = td2.insertMember("9876543210", "김철수", "Kim Cheol-su",
                "서울시 강서구", "계약직", "2023-03-15",
                "", "010-9876-5432", "",
                "8012345678901", "kimcs@example.com", "면제",
                "고등학교 졸업", "영어", "10일",
                "8일");

        System.out.println(result);
    }
}