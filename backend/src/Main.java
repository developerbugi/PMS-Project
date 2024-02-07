import db.dao.insertDAO;

public class Main {
    public static void main(String[] args) {
        /* 사원 사번으로 조회 TDD
        selectDAO td = new selectDAO();
        System.out.println(td.SearchEmployeeBYID("검색하고 싶은 사원 사번"));
         */

        /* 사원 이름으로 조회 TDD
        selectDAO td = new selectDAO();
        System.out.println(td.SearchEmployeeBYName("정부길"));
         */

        /*사원 추가 TDD
        insertDAO td = new insertDAO();

        System.out.println(td.insertMember("1234567891", "정부길", "Jung Bu-gil",
                "경기도 파주시", "정규직", "2023-03-15",
                "", "010-9876-5432", "",
                "123456-1234567", "seohan@example.com", "미",
                "대학교 졸업", "영어", "10일",
                "10일", "D002", "R002"));
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