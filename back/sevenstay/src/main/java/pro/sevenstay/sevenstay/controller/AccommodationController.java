package pro.sevenstay.sevenstay.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pro.sevenstay.sevenstay.model.dto.AccommodationDTO;
import pro.sevenstay.sevenstay.service.AccommodationService;

@CrossOrigin(origins = "*")
@RestController
<<<<<<< HEAD
@RequestMapping("/accommodation") // /accommodation/get
=======
@RequestMapping(path = "/accommodation") // /accommodation/get
>>>>>>> d72b51a38ea4fdb12c0a695baf24b8d2cf843985
public class AccommodationController {
    private final AccommodationService accommodationService;

    public AccommodationController(AccommodationService accommodationService) {
        this.accommodationService = accommodationService;
    }

    @GetMapping("/get")
    public List<AccommodationDTO> findAllAccommo() {
        return accommodationService.findAllAccommo();
    }

    @PostMapping("/post") // POST
    public void insertAccommodation(@RequestBody AccommodationDTO accommodationDTO) {
        accommodationService.insertAccommodation(accommodationDTO);

    }
}
