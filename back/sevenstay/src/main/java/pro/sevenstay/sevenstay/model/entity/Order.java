// package pro.sevenstay.sevenstay.model.entity;

// import javax.persistence.Column;
// import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
// import javax.persistence.Id;
// import javax.persistence.JoinColumn;
// import javax.persistence.ManyToOne;
// import javax.persistence.Table;

// @Entity
// @Table(name="ORDERS")
// public class Order {
    
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     @Column(name="ORDER_ID")
//     private String userName;

//     private String address;

//     @ManyToOne
//     @JoinColumn(name = "ACCOMMODATION_ID")
//     private Accommodation accomodation;

//     public String getUserName() {
//         return userName;
//     }

//     public void setUserName(String userName) {
//         this.userName = userName;
//     }

//     public String getAddress() {
//         return address;
//     }

//     public void setAddress(String address) {
//         this.address = address;
//     }

//     public Accommodation getAccomodation() {
//         return accomodation;
//     }

//     public void setAccomodation(Accommodation accomodation) {
//         this.accomodation = accomodation;
//     }

    
    
// }
