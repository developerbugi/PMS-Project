package db.dao;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import db.connection.Connection_DB;
import org.json.JSONArray;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class selectDAO {
    public String SearchEmployees() {
        String SQL1 = "SELECT e.com_id, e.name_kor, e.name_eng, e.address, e.emp_type, e.emp_hiredate, " +
                "e.emp_tmndate, e.mob_num, e.resign_reason, e.rrn, e.emp_email, e.military, " +
                "e.final_edu, e.major, e.annual_leave, e.sick_leave, d.dep_name, r.rank_name, e.etc " +
                "FROM employees e " +
                "JOIN department d ON e.dep_id = d.dep_id " +
                "JOIN role r ON e.rank_id = r.rank_id";

        JsonArray jsonArray = new JsonArray();

        try {
            Connection conn = Connection_DB.GetDB();
            PreparedStatement ptstn = conn.prepareStatement(SQL1);
            ResultSet rs = ptstn.executeQuery();

            while (rs.next()) {
                JsonObject jsonObject = new JsonObject();
                jsonObject.addProperty("com_id", rs.getString(1));
                jsonObject.addProperty("name_kor", rs.getString(2));
                jsonObject.addProperty("name_eng", rs.getString(3));
                jsonObject.addProperty("address", rs.getString(4));
                jsonObject.addProperty("emp_type", rs.getString(5));
                jsonObject.addProperty("emp_hiredate", rs.getString(6));
                jsonObject.addProperty("emp_tmndate", rs.getString(7));
                jsonObject.addProperty("mob_num", rs.getString(8));
                jsonObject.addProperty("resign_reason", rs.getString(9));
                jsonObject.addProperty("rrn", rs.getString(10));
                jsonObject.addProperty("emp_email", rs.getString(11));
                jsonObject.addProperty("military", rs.getString(12));
                jsonObject.addProperty("final_edu", rs.getString(13));
                jsonObject.addProperty("major", rs.getString(14));
                jsonObject.addProperty("annual_leave", rs.getString(15));
                jsonObject.addProperty("sick_leave", rs.getString(16));
                jsonObject.addProperty("dep_id", rs.getString(17));
                jsonObject.addProperty("rank_id", rs.getString(18));
                jsonObject.addProperty("etc", rs.getString(19));
                jsonArray.add(jsonObject);
            }

            ptstn.close();

            Gson gson = new GsonBuilder().setPrettyPrinting().create();
            return gson.toJson(jsonArray);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return "검색실패";
        }
    }

    public String SearchEmployeeBYID(String com_id) {
        String SQL1 = "SELECT e.com_id, e.name_kor, e.name_eng, e.address, e.emp_type, e.emp_hiredate, " +
                "e.emp_tmndate, e.mob_num, e.resign_reason, e.rrn, e.emp_email, e.military, " +
                "e.final_edu, e.major, e.annual_leave, e.sick_leave, d.dep_name, r.rank_name, e.etc " +
                "FROM employees e " +
                "JOIN department d ON e.dep_id = d.dep_id " +
                "JOIN role r ON e.rank_id = r.rank_id " +
                "WHERE e.com_id = ?";

        JsonArray jsonArray = new JsonArray();

        try {
            Connection conn = Connection_DB.GetDB();
            PreparedStatement ptstn = conn.prepareStatement(SQL1);
            ptstn.setString(1, com_id);
            ResultSet rs = ptstn.executeQuery();

            while (rs.next()) {
                JsonObject jsonObject = new JsonObject();
                jsonObject.addProperty("com_id", rs.getString(1));
                jsonObject.addProperty("name_kor", rs.getString(2));
                jsonObject.addProperty("name_eng", rs.getString(3));
                jsonObject.addProperty("address", rs.getString(4));
                jsonObject.addProperty("emp_type", rs.getString(5));
                jsonObject.addProperty("emp_hiredate", rs.getString(6));
                jsonObject.addProperty("emp_tmndate", rs.getString(7));
                jsonObject.addProperty("mob_num", rs.getString(8));
                jsonObject.addProperty("resign_reason", rs.getString(9));
                jsonObject.addProperty("rrn", rs.getString(10));
                jsonObject.addProperty("emp_email", rs.getString(11));
                jsonObject.addProperty("military", rs.getString(12));
                jsonObject.addProperty("final_edu", rs.getString(13));
                jsonObject.addProperty("major", rs.getString(14));
                jsonObject.addProperty("annual_leave", rs.getString(15));
                jsonObject.addProperty("sick_leave", rs.getString(16));
                jsonObject.addProperty("dep_id", rs.getString(17));
                jsonObject.addProperty("rank_id", rs.getString(18));
                jsonObject.addProperty("etc", rs.getString(19));
                jsonArray.add(jsonObject);
            }

            ptstn.close();

            Gson gson = new GsonBuilder().setPrettyPrinting().create();
            return gson.toJson(jsonArray);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return "검색실패";
        }
    }

    public String SearchEmployeeBYName(String name_kor) {
        String SQL1 = "SELECT e.com_id, e.name_kor, d.dep_name, r.rank_name " +
                "FROM employees e " +
                "JOIN department d ON e.dep_id = d.dep_id " +
                "JOIN role r ON e.rank_id = r.rank_id " +
                "WHERE e.name_kor LIKE ?";

        JsonArray jsonArray = new JsonArray();

        try {
            Connection conn = Connection_DB.GetDB();
            PreparedStatement ptstn = conn.prepareStatement(SQL1);
            ptstn.setString(1, "%" + name_kor + "%");
            ResultSet rs = ptstn.executeQuery();


            while (rs.next()) {
                JsonObject jsonObject = new JsonObject();
                jsonObject.addProperty("com_id", rs.getString(1));
                jsonObject.addProperty("name_kor", rs.getString(2));
                jsonObject.addProperty("dep_id", rs.getString(3));
                jsonObject.addProperty("rank_id", rs.getString(4));
                jsonArray.add(jsonObject);
            }

            ptstn.close();

            Gson gson = new GsonBuilder().setPrettyPrinting().create();
            return gson.toJson(jsonArray);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return "검색실패";
        }
    }
}


