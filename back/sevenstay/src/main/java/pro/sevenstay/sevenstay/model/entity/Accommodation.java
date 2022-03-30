package pro.sevenstay.sevenstay.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Accommodation {
    @Id 
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Accommodation_ID")
    private String id;
    private String city;
    // Accommodation_Name
    private String accommodationName;
    @Column(name = "Accommodation_address")
    private String address;
    // Phone_Number
    private String phoneNumber;

    public Accommodation() {
    }

    public Accommodation(String id, String city, String accommodationName, String address, String phoneNumber) {
        this.id = id;
        this.city = city;
        this.accommodationName = accommodationName;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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
        return "Accomodation [accommodationName=" + accommodationName + ", address=" + address + ", city=" + city
                + ", id=" + id + ", phoneNumber=" + phoneNumber + "]";
    }

}
