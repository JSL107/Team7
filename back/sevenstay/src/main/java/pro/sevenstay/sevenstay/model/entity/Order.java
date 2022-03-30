/*package pro.sevenstay.sevenstay.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="ORDERS")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ORDER_ID")
    private Long id;
    private String location;
    private String checkIn;
    private String checkOut;
    private int guest;

    //@ManyToOne
    @JoinColumn
    private Accommodation accommodationName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(String checkIn) {
        this.checkIn = checkIn;
    }

    public String getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(String checkOut) {
        this.checkOut = checkOut;
    }

    public int getGuest() {
        return guest;
    }

    public void setGuest(int guest) {
        this.guest = guest;
    }

    public Accommodation getAccommodationName() {
        return accommodationName;
    }

    public void setAccommodationName(Accommodation accommodationName) {
        this.accommodationName = accommodationName;
    }

    public void setAccommodation(Accommodation accommodation) {
    }

    

    
    
}
*/