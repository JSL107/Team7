package pro.sevenstay.sevenstay.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pro.sevenstay.sevenstay.model.dto.AccommodationDTO;
import pro.sevenstay.sevenstay.model.dto.OrderDTO;
import pro.sevenstay.sevenstay.model.entity.Accommodation;
import pro.sevenstay.sevenstay.model.entity.Order;
import pro.sevenstay.sevenstay.model.repository.AccommodationRepository;
import pro.sevenstay.sevenstay.model.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    AccommodationRepository accommodationRepository;

    @Override
    public void insertOrder(AccommodationDTO accommodationDTO) {

        Accommodation accommodation = accommodationRepository.findByAccommodationName(accommodationDTO.getAccommodationName());
        
        accommodation.setAccommodationName("아");
        accommodation.setAddress("만들어져라");

        accommodationRepository.save(accommodation);
        // Order 엔티티 생성
        // Order order = new Order();
        // // order.setUserName(orderDTO.getUserName());
        // // order.setAddress(orderDTO.getAddress());
        
        // 연관관계 설정(맵핑)
    //     order.setAccomodation(accommodation);

    //     // 저장
    //     orderRepository.save(order);
    }
    
}
