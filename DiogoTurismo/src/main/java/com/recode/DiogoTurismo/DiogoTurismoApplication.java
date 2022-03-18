package com.recode.DiogoTurismo;

import com.recode.DiogoTurismo.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class DiogoTurismoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DiogoTurismoApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer configure() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry reg) {
				reg.addMapping("/*").allowedOrigins("");
			}
		};

	}

	@Autowired
	private ContatoRepository contatoRepository;

	@Override
	public void run(String... args) throws Exception {
	}
}
