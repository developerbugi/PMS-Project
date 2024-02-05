
import db_connection.dao.updateDAO;


public class Main {
    public static void main(String[] args) {
        /* 사원 조회 TDD
        selectDAO td = new selectDAO();
        System.out.println(td.SearchEmployee("검색하고 싶은 사원 사번"));
         */

        /* 사원 추가 TDD
        insertDAO td = new insertDAO();

        System.out.println(td.insertMember("9876543210", "김철수", "Kim Cheol-su",
                "서울시 강서구", "계약직", "2023-03-15",
                "", "010-9876-5432", "",
                "8012345678901", "kimcs@example.com", "면제",
                "고등학교 졸업", "영어", "10일",
                "8일"));
        */

        /* 사원 삭제 TDD
        deleteDAO td = new deleteDAO();
        System.out.println(td.deleteEmployee("삭제하고 싶은 사원 사번"));
        */

        /*
        updateDAO td = new updateDAO();
        System.out.println(td.exitMember("퇴사하는 사원 사번","퇴사일","퇴사사유"));
        */
    }
}