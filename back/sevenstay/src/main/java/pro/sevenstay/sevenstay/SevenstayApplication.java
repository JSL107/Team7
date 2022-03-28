package pro.sevenstay.sevenstay;

// Batch import
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableBatchProcessing // Batch 사용을 위한 어노테이션 추가
@SpringBootApplication
public class SevenstayApplication {

	public static void main(String[] args) {
		SpringApplication.run(SevenstayApplication.class, args);
	}

}
/* 
cmd /C ""C:\Program Fi
les\Java\jdk1.8.0_201\bin\java.exe" -agentlib:jdwp=transport=dt_socket,ser
ver=n,suspend=y,address=localhost:10646 -cp C:\Users\home\AppData\Local\Te
mp\cp_128bvj5lg2nhm82fjm3pnbvt1.jar pro.sevenstay.sevenstay.SevenstayAppli
cation "
*/
