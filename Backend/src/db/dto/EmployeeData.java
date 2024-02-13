package db.dto;

public class EmployeeData {
    private String com_id;
    private String name_kor;
    private String name_eng;
    private String address;
    private String emp_type;
    private String emp_hiredate;

    private String emp_tmndate;
    private String mob_num;

    private String resign_reason;

    private String rrn;
    private String emp_email;
    private String military;
    private String final_edu;
    private String major;
    private String dep_id;

    private String annual_leave;

    private String sick_leave;
    private String rank_id;
    private String etc;

    public String getCom_id() {
        return com_id;
    }

    public void setCom_id(String com_id) {
        this.com_id = com_id;
    }

    public String getName_kor() {
        return name_kor;
    }

    public String getEmp_tmndate() {
        return emp_tmndate;
    }

    public void setEmp_tmndate(String emp_tmndate) {
        this.emp_tmndate = emp_tmndate;
    }

    public String getResign_reason() {
        return resign_reason;
    }

    public void setResign_reason(String resign_reason) {
        this.resign_reason = resign_reason;
    }

    public String getAnnual_leave() {
        return annual_leave;
    }

    public void setAnnual_leave(String annual_leave) {
        this.annual_leave = annual_leave;
    }

    public String getSick_leave() {
        return sick_leave;
    }

    public void setSick_leave(String sick_leave) {
        this.sick_leave = sick_leave;
    }

    public void setName_kor(String name_kor) {
        this.name_kor = name_kor;
    }

    public String getName_eng() {
        return name_eng;
    }

    public void setName_eng(String name_eng) {
        this.name_eng = name_eng;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEtc() {
        return etc;
    }

    public void setEtc(String etc) {
        this.etc = etc;
    }

    public String getEmp_type() {
        return emp_type;
    }

    public void setEmp_type(String emp_type) {
        this.emp_type = emp_type;
    }

    public String getEmp_hiredate() {
        return emp_hiredate;
    }

    public void setEmp_hiredate(String emp_hiredate) {
        this.emp_hiredate = emp_hiredate;
    }

    public String getMob_num() {
        return mob_num;
    }

    public void setMob_num(String mod_num) {
        this.mob_num = mob_num;
    }

    public String getRrn() {
        return rrn;
    }

    public void setRrn(String rrn) {
        this.rrn = rrn;
    }

    public String getEmp_email() {
        return emp_email;
    }

    public void setEmp_email(String emp_email) {
        this.emp_email = emp_email;
    }

    public String getMilitary() {
        return military;
    }

    public void setMilitary(String military) {
        this.military = military;
    }

    public String getFinal_edu() {
        return final_edu;
    }

    public void setFinal_edu(String final_edu) {
        this.final_edu = final_edu;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getDep_id() {
        return dep_id;
    }

    public void setDep_id(String dep_id) {
        this.dep_id = dep_id;
    }

    public String getRank_id() {
        return rank_id;
    }

    public void setRank_id(String rank_id) {
        this.rank_id = rank_id;
    }
}
