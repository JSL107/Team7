package pro.sevenstay.sevenstay.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pro.sevenstay.sevenstay.model.entity.Accommodation;

<<<<<<< HEAD
public interface AccommodationRepository extends JpaRepository<Accommodation, String>{
    // Accommodation findByAccommodationName(String accommodationName);
    Accommodation findByCity(String city);
=======
public interface AccommodationRepository extends JpaRepository<Accommodation, Long>{
    Accommodation findByAccommodationName(String accommodationName);
>>>>>>> b1cd0cce39c74cef5661e148fd6560c1c162a654
}
