package pro.sevenstay.sevenstay.service;

import pro.sevenstay.sevenstay.model.dto.AccommodationDTO;
import pro.sevenstay.sevenstay.model.dto.OrderDTO;

public interface OrderService {
    void insertOrder(AccommodationDTO accommodationDTO);
}
