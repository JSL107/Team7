<<<<<<< HEAD
/*package pro.sevenstay.sevenstay.model.dto;
=======
package pro.sevenstay.sevenstay.model.dto;
>>>>>>> b1cd0cce39c74cef5661e148fd6560c1c162a654

import pro.sevenstay.sevenstay.model.entity.Accommodation;

public class OrderDTO {
<<<<<<< HEAD
    private Long id;
    private String location;
    private String checkIn;
    private String checkOut;
    private int guest;
    private Accommodation accommodationName;
    private Accommodation address;
=======
    private String city;
>>>>>>> b1cd0cce39c74cef5661e148fd6560c1c162a654

    private String checkIn;

<<<<<<< HEAD
public OrderDTO(String location, String checkIn, String checkOut, int guest, Accommodation accommodationName) {
    this.location = location;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    this.guest = guest;
    this.accommodationName = accommodationName;
}



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



public Accommodation getAddress() {
    return address;
}



public void setAddress(Accommodation address) {
    this.address = address;
}



@Override
public String toString() {
    return "OrderDTO [accommodationName=" + accommodationName + ", address=" + address + ", checkIn=" + checkIn
            + ", checkOut=" + checkOut + ", guest=" + guest + ", id=" + id + ", location=" + location + "]";
}


}
*/
=======
    private String checkOut;

    private String people;

    private String accommodationName;
    
    private Accommodation accommodation;

    public OrderDTO(String city, String checkIn, String checkOut, String people) {
        this.city = city;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.people = people;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
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

    public String getPeople() {
        return people;
    }

    public void setPeople(String people) {
        this.people = people;
    }

   

    public String getAccommodationName() {
        return accommodationName;
    }

    public void setAccommodationName(String accommodationName) {
        this.accommodationName = accommodationName;
    }

    public Accommodation getAccommodation() {
        return accommodation;
    }

    public void setAccommodation(Accommodation accommodation) {
        this.accommodation = accommodation;
    }

    @Override
    public String toString() {
        return "OrderDTO [checkIn=" + checkIn + ", checkOut=" + checkOut + ", city=" + city + ", people=" + people
                + "]";
    }

    
}
>>>>>>> b1cd0cce39c74cef5661e148fd6560c1c162a654
