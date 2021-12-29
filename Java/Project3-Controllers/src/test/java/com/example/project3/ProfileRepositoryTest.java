package com.example.project3;

import com.example.project3.entities.Privacy;
import com.example.project3.entities.Profile;
import com.example.project3.repositories.PrivacyRepository;
import com.example.project3.repositories.ProfileRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class ProfileRepositoryTest {

    @Autowired
    private ProfileRepository repository2;

    @Autowired
    private PrivacyRepository repository3;



    @Test
    public void savePrivacy(){
        Privacy privacy = Privacy.builder()
                .email(true)
                .dob(false)
                .gender(true)
                .name(true)
                .bio(false)
                .build();
        repository3.save(privacy);
    }

    //Will succeed if the entry is new and fail if username or email are repeats in the database
    @Test
    public void saveProfile() {
        Privacy privacy = new Privacy();
        privacy.setPrivacyid(3L);
        Profile profile = Profile.builder()
                .username("james4")
                .password("password")
                .email("j@gmail.com")
                .name("james lavigne")
                .alias("jml")
                .dob("12/14/1995")
                .gender("male")
                .bio("hello im james")
                .profilepic("/some_image")
                .privacys(privacy)
                .build();
        repository2.save(profile);
    }

    //this test doesn't quite work yet
    @Test
    public void listProfiles() {
        List<Profile> profiles = repository2.findAll();
        long i = profiles.get(0).getId();
        assert equals(i == 1);
    }

}
