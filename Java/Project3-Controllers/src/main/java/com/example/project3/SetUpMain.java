package com.example.project3;

import com.example.project3.entities.Privacy;
import com.example.project3.repositories.PrivacyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SetUpMain {

    @Autowired
    private static PrivacyRepository repository;


    public static void main(String[] args) {
        initializer();
        SpringApplication.run(Project3Application.class, args);
    }

    public static void initializer() {

        Privacy privacy = Privacy.builder()
                .email(true)
                .dob(true)
                .gender(true)
                .name(true)
                .bio(true)
                .build();
        for (int a = 0; a < 2; a++) {
            privacy.setEmail(!privacy.getEmail());
            for (int b = 0; b < 2; b++) {
                privacy.setDob(!privacy.getDob());
                for (int c = 0; c < 2; c++) {
                    privacy.setGender(!privacy.getGender());
                    for (int d = 0; d < 2; d++) {
                        privacy.setName(!privacy.getName());
                        for (int e = 0; e < 2; e++) {
                            privacy.setBio(!privacy.getBio());
                            repository.save(privacy);
                            //entityManager.persist(privacy);
                        }
                    }
                }
            }
        }

        //entityManager.flush();
    }

}
