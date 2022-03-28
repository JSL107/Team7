package pro.sevenstay.sevenstay.model.dto;

public class AccommodationDTO {
    private String city; // 시 , 도시위치
    private String accommodationName; // 숙소명
    private String address; // 주소
    private String phoneNumber; // 전화번호


    public AccommodationDTO(String city, String accommodationName, String address, String phoneNumber) {
        this.city = city;
        this.accommodationName = accommodationName;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }


    public String getCity() {
        return city;
    }


    public void setCity(String city) {
        this.city = city;
    }


    public String getAccommodationName() {
        return accommodationName;
    }


    public void setAccommodationName(String accommodationName) {
        this.accommodationName = accommodationName;
    }


    public String getAddress() {
        return address;
    }


    public void setAddress(String address) {
        this.address = address;
    }


    public String getPhoneNumber() {
        return phoneNumber;
    }


    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }


    @Override
    public String toString() {
        return "Accommodation [accommodationName=" + accommodationName + ", address=" + address + ", city=" + city
                + ", phoneNumber=" + phoneNumber + "]";
    }

    
}

