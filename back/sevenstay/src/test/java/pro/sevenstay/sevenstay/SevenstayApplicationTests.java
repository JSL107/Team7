package pro.sevenstay.sevenstay;

import static org.junit.jupiter.api.Assertions.assertTrue;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import pro.sevenstay.sevenstay.model.dto.AccommodationDTO;


@SpringBootTest
class SevenstayApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	public void shouldAnswerWithTrue() {
		assertTrue(true);
	}

		/*
		this.city = city;
        this.accommodationName = accommodationName;
        this.address = address;
        this.phoneNumber = phoneNumber; 
		*/

	@Test
	public void testSave() {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("sevenstay");
		EntityManager em = emf.createEntityManager();
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		
		AccommodationDTO ac1 = new AccommodationDTO("제주시", "sevenstay", "어디든", "000-000-0000");
		em.persist(ac1);

		tx.commit();
	}

	@Test
	public void testTttt() {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("sevenstay");
        EntityManager em = emf.createEntityManager();
        EntityTransaction tx = em.getTransaction();
        tx.begin();

		AccommodationDTO accommo1 = new AccommodationDTO("제주시", "먼호텔", "제주도", "064-796-9999");
		em.persist(accommo1);

		tx.commit();
		
	}
}