package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;

@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        /*System.out.println("Hello world!");

        PersonDao personDao = new PersonDao();

        System.out.println(personDao.getAgeByName("Катя"));
        System.out.println(personDao.getNameOfOldestPerson());
        System.out.println(personDao.getRequests("Катя"));*/

        SpringApplication.run(Main.class, args);
    }
}