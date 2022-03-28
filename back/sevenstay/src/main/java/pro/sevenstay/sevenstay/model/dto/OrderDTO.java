package pro.sevenstay.sevenstay.model.dto;

public class OrderDTO {
    private String userName;

    private String address;


public OrderDTO(String userName, String address) {
    this.userName = userName;
    this.address = address;
}

public String getUserName() {
    return userName;
}

public void setUserName(String userName) {
    this.userName = userName;
}

public String getAddress() {
    return address;
}

public void setAddress(String address) {
    this.address = address;
}

@Override
public String toString() {
    return "OrderDTO [address=" + address + ", userName=" + userName + "]";
}

}